import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedTextInput } from "@/components/ThemedInput";
import { axiosInstance } from "@/hooks/useAxios";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { BackIcon } from "@/components/BackIcon";
import { Dimensions } from "@/constants/Diamensions";
import { ThemedDatePicker } from "@/components/ThemedDatePicker";
import { ConfirmChecked } from "@/components/ConfirmChecked";

interface IFormUser {
    username: string;
    password: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    identityCard: string;
}

const validate = () => {
    return Yup.object<IFormUser>({
        phone: Yup.string().required('กรุณากรอกหมายเลขโทรศัพท์').length(10, 'หมายเลขโทรศัพท์ต้องมี 10 ตัวอักษร'),
        firstName: Yup.string().required('กรุณากรอกชื่อจริง'),
        lastName: Yup.string().required('กรุณากรอกนามสกุล'),
        birthDate: Yup.string().required('กรุณากรอกวันเกิด'),
        identityCard: Yup.string().length(13, 'เลขบัตรประชาชนต้องมี 13 ตัวอักษร').required('กรุณากรอกเลขบัตรประชาชน'),
    });
};

export default function PersonalInformationPage() {
    const params = useLocalSearchParams<{ query?: string }>();
    const [checked, setChecked] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (params.query) {
            const formData: IFormUser = JSON.parse(params.query);
            userForm.setValues(formData);
        }
    }, [params.query]);

    const userForm = useFormik<IFormUser>({
        initialValues: {
            username: '',
            password: '',
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            birthDate: '',
            identityCard: '',
        },
        validationSchema: validate(),
        onSubmit: async values => {
            try {
                await axiosInstance.post("/user/register", values);
                router.replace("/sign-up/successfully");
            } catch (e: any) {
                setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
            }
        }
    });

    const handleButtonPress = () => {
        userForm.handleSubmit();
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ThemedView style={styles.container}>
                    <View style={styles.headerTextContainer}>
                        <BackIcon onPress={() => router.replace("/sign-in")} />
                        <ThemedText color={Colors.light.neutral[6]} type="title1">สมัครสมาชิก</ThemedText>
                    </View>
                    <View style={styles.cardContainer}>
                        <View style={styles.containerText}>
                            <ThemedText color={Colors.light.primary[1]} type="title1">ยินดีต้อนรับ</ThemedText>
                            <ThemedText color={Colors.light.neutral[1]} type="caption2">กรอกข้อมูลเพื่อสมัครสมาชิกใหม่!</ThemedText>
                        </View>
                        <View style={styles.formContainer}>
                            <ThemedTextInput
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="ชื่อจริง"
                                name='firstName'
                                value={userForm.values.firstName}
                                onChangeText={userForm.handleChange('firstName')}
                                helperText={userForm.errors.firstName}
                                error={!!(userForm.errors.firstName && userForm.touched.firstName)}
                                onBlur={userForm.handleBlur('firstName')}
                            />
                            <ThemedTextInput
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="นามสกุล"
                                name='lastName'
                                value={userForm.values.lastName}
                                onChangeText={userForm.handleChange('lastName')}
                                helperText={userForm.errors.lastName}
                                error={!!(userForm.errors.lastName && userForm.touched.lastName)}
                                onBlur={userForm.handleBlur('lastName')}
                            />
                            <ThemedTextInput
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="หมายเลขโทรศัพท์"
                                name='phone'
                                keyboardType="phone-pad"
                                value={userForm.values.phone}
                                onChangeText={userForm.handleChange('phone')}
                                helperText={userForm.errors.phone}
                                error={!!(userForm.errors.phone && userForm.touched.phone)}
                                onBlur={userForm.handleBlur('phone')}
                            />
                            <ThemedDatePicker
                                maximumDate={new Date(new Date().getFullYear() - 5, new Date().getMonth(), new Date().getDate())}
                                width={Dimensions.percentageWidth(83.85)}
                                display="spinner"
                                placeholder="วันเกิด (YYYY-MM-DD)"
                                value={userForm.values.birthDate ? new Date(userForm.values.birthDate) : undefined}
                                onChange={(date) => userForm.setFieldValue('birthDate', date?.toISOString().split('T')[0])}
                                helperText={userForm.errors.birthDate}
                                error={!!(userForm.errors.birthDate && userForm.touched.birthDate)}
                            />
                            <ThemedTextInput
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="เลขบัตรประชาชน"
                                name='identityCard'
                                value={userForm.values.identityCard}
                                onChangeText={userForm.handleChange('identityCard')}
                                helperText={userForm.errors.identityCard}
                                error={!!(userForm.errors.identityCard && userForm.touched.identityCard)}
                                onBlur={userForm.handleBlur('identityCard')}
                                keyboardType="number-pad"
                            />
                            <ConfirmChecked
                                checked={checked}
                                setChecked={setChecked}
                                message="เมื่อสร้างบัญชี คุณตกลงตามเงื่อนไขและข้อตกลง (Term and Condtions) ของเรา"
                            />
                        </View>
                        <View style={styles.contentButton}>
                            <View
                                style={{
                                    width: "100%",
                                    alignItems: "flex-start",
                                }}>
                                <ThemedText type="caption1" color={Colors.light.semantic.error}>{error}</ThemedText>
                            </View>
                            <ThemedButton width={Dimensions.percentageWidth(83.85)} title="สมัครสมาชิก" onPress={handleButtonPress} disabled={!checked} color={
                                !checked
                                    ? Colors.light.neutral[4]
                                    : Colors.light.primary[1]
                            } />
                        </View>
                    </View>
                </ThemedView>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.primary[1],
        paddingTop: Dimensions.percentageHeight(8),
        width: Dimensions.width,
        height: Dimensions.height,
    },
    headerTextContainer: {
        width: "100%",
        paddingLeft: Dimensions.percentageWidth(5.13),
        marginBottom: Dimensions.percentageHeight(1.78),
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: Colors.light.neutral[6],
        padding: Dimensions.percentageWidth(5.13),
    },
    containerText: {
        width: '100%',
    },
    imageContainer: {
        width: "100%",
    },
    formContainer: {
        alignItems: 'center',
        marginTop: Dimensions.percentageHeight(2.37),
        width: "100%",
    },
    contentButton: {
        marginTop: Dimensions.percentageHeight(4),
    },
    signInLink: {
        color: Colors.light.primary[1],
    },
    CheckboxAndText: {
        flexDirection: "row",
        gap: 12,
        width: "100%",
    },
});
