import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedTextInput } from "@/components/ThemedInput";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { BackIcon } from "@/components/BackIcon";
import CatBox from "@/assets/images/cat/CatBox";
import { TextLink } from "@/components/TextLink";
import { ThemedInputSecure } from "@/components/ThemedInputSecure";
import { Dimensions } from "@/constants/Diamensions";

interface IFormUser {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

const validate = () => {
    return Yup.object<IFormUser>({
        username: Yup.string().required('กรุณากรอกชื่อผู้ใช้งาน').min(4, 'ชื่อผู้ใช้งานต้องมีอย่างน้อย 4 ตัวอักษร'),
        password: Yup.string().required('กรุณากรอกรหัสผ่าน').min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร'),
        confirmPassword: Yup.string().required('กรุณากรอกรหัสผ่านอีกครั้ง').oneOf([Yup.ref('password'), null as any], 'รหัสผ่านไม่ตรงกัน'),
        email: Yup.string().email('รูปแบบอีเมลไม่ถูกต้อง').required('กรุณากรอกอีเมล'),
    });
};

export default function SignUpPage() {

    const userForm = useFormik<IFormUser>({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
        },
        validationSchema: validate(),
        onSubmit: values => {
            router.push({
                pathname: "/sign-up/personal-information",
                params: { query: JSON.stringify(values) },
            });
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
                        <View style={styles.imageContainer}>
                            <CatBox height={Dimensions.percentageHeight(11.85)} />
                        </View>
                        <View style={styles.formContainer}>
                            <ThemedTextInput
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="ชื่อผู้ใช้"
                                name='username'
                                value={userForm.values.username}
                                onChangeText={userForm.handleChange('username')}
                                helperText={userForm.errors.username}
                                error={!!(userForm.errors.username && userForm.touched.username)}
                                onBlur={userForm.handleBlur('username')}
                            />
                            <ThemedTextInput
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="อีเมล"
                                name='email'
                                value={userForm.values.email}
                                onChangeText={userForm.handleChange('email')}
                                helperText={userForm.errors.email}
                                error={!!(userForm.errors.email && userForm.touched.email)}
                                onBlur={userForm.handleBlur('email')}
                            />
                            <ThemedInputSecure
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="รหัสผ่าน"
                                name='password'
                                value={userForm.values.password}
                                onChangeText={userForm.handleChange('password')}
                                helperText={userForm.errors.password}
                                error={!!(userForm.errors.password && userForm.touched.password)}
                                onBlur={userForm.handleBlur('password')}
                            />
                            <ThemedInputSecure
                                width={Dimensions.percentageWidth(83.85)}
                                placeholder="ยืนยันรหัสผ่าน"
                                name='confirmPassword'
                                value={userForm.values.confirmPassword}
                                onChangeText={userForm.handleChange('confirmPassword')}
                                helperText={userForm.errors.confirmPassword}
                                error={!!(userForm.errors.confirmPassword && userForm.touched.confirmPassword)}
                                onBlur={userForm.handleBlur('confirmPassword')}
                            />
                        </View>
                        <View style={styles.contentButton}>
                            <ThemedButton width={Dimensions.percentageWidth(83.85)} title="ต่อไป" onPress={handleButtonPress} />
                        </View>
                        <View style={styles.footerContainer}>
                            <ThemedText type="body3">มีบัญชีอยู่แล้ว? </ThemedText>
                            <TextLink
                                onPress={() => router.push("/sign-in")}
                                titleType="body3"
                            >
                                คลิก
                            </TextLink>
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
    imageContainer: {
        width: "100%",
    },
    containerText: {
        width: '100%',
    },
    formContainer: {
        alignItems: 'flex-end',
        marginTop: Dimensions.percentageHeight(2.37),
    },
    contentButton: {
        marginTop: Dimensions.percentageHeight(5.92),
    },
    footerContainer: {
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        paddingTop: Dimensions.percentageHeight(10),
    },
    signInLink: {
        color: Colors.light.primary[1],
    },
});




