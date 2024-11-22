import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText2";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedTextInput } from "@/components/ThemedInput";
import { axiosInstance } from "@/hooks/useAxios";
import * as Yup from 'yup';
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
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
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <ThemedText style={styles.title}>PetCare</ThemedText>
                <ThemedText style={styles.subtitle}>กรอกข้อมูลส่วนตัว</ThemedText>
            </View>
            <View style={styles.form}>
                <ThemedText style={styles.label}>ชื่อจริง</ThemedText>
                <TextInput
                    style={styles.input}
                    value={userForm.values.firstName}
                    onChangeText={userForm.handleChange('firstName')}
                    onBlur={userForm.handleBlur('firstName')}
                />
                <ThemedText style={styles.label}>นามสกุล</ThemedText>
                <TextInput
                    style={styles.input}
                    value={userForm.values.lastName}
                    onChangeText={userForm.handleChange('lastName')}
                    onBlur={userForm.handleBlur('lastName')}
                />
                <ThemedText style={styles.label}>หมายเลขโทรศัพท์</ThemedText>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    value={userForm.values.phone}
                    onChangeText={userForm.handleChange('phone')}
                    onBlur={userForm.handleBlur('phone')}
                />
                <ThemedDatePicker
                    maximumDate={new Date(new Date().getFullYear() - 5, new Date().getMonth(), new Date().getDate())}
                    display="spinner"
                    placeholder="วันเกิด (YYYY-MM-DD)"
                    value={userForm.values.birthDate ? new Date(userForm.values.birthDate) : undefined}
                    onChange={(date) => userForm.setFieldValue('birthDate', date?.toISOString().split('T')[0])}
                />
                <ThemedText style={styles.label}>เลขบัตรประชาชน</ThemedText>
                <TextInput
                    style={styles.input}
                    value={userForm.values.identityCard}
                    onChangeText={userForm.handleChange('identityCard')}
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
                    <ThemedText>{error}</ThemedText>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleButtonPress} disabled={!checked}>
                    <ThemedText style={styles.buttonText}>ลงทะเบียน</ThemedText>
                </TouchableOpacity>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        alignItems: "center",
        marginTop: '20%', // เพิ่มค่าให้มากขึ้น
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1abc9c",
        paddingVertical: 10, // เพิ่ม padding เพื่อขยายพื้นที่
    },
    subtitle: {
        fontSize: 16,
        color: "#666666",
        marginTop: 8,
        textAlign: "center",
    },
    form: {
        marginTop: 40,
        paddingHorizontal: 20,
    },

    contentButton: {
        marginTop: Dimensions.percentageHeight(4),
    },
    signInLink: {
        color: Colors.light.primary[1],
    },
    button: {
        backgroundColor: "#1abc9c",
        borderRadius: 28,
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 16,
        width: "70%",
        alignSelf: "center",
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
    },
    label: {
        fontSize: 16,
        color: "#333333",
        marginBottom: 8,
        fontWeight: "bold",
    },

});
