import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedTextInput } from "@/components/ThemedInput";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { BackIcon } from "@/components/BackIcon";
import CatBox from "@/assets/images/cat/CatBox";
import { TextLink } from "@/components/TextLink";
import { ThemedInputSecure } from "@/components/ThemedInputSecure";
import { Dimensions } from "@/constants/Diamensions";
import { ThemedText } from "@/components/ThemedText2";


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
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <ThemedText style={styles.title}>PetCare</ThemedText>
                <ThemedText style={styles.subtitle}>ลงทะเบียน</ThemedText>
            </View>

            <View style={styles.form}>
            <ThemedText style={styles.label}>ชื่อผู้ใช้</ThemedText>
                <TextInput
                    style={styles.input}
                    value={userForm.values.username}
                    onChangeText={userForm.handleChange('username')}
                    onBlur={userForm.handleBlur('username')}
                />
                <TextInput style={styles.label}>อีเมล</TextInput>
                <TextInput
                    style={styles.input}
                    value={userForm.values.email}
                    onChangeText={userForm.handleChange('email')}
                    onBlur={userForm.handleBlur('email')}
                />
                <TextInput style={styles.label}>รหัสผ่าน</TextInput>
                <TextInput
                    style={styles.input}
                    value={userForm.values.password}
                    onChangeText={userForm.handleChange('password')}
                    onBlur={userForm.handleBlur('password')}
                />
                <TextInput style={styles.label}>ยืนยันรหัสผ่าน</TextInput>
                <TextInput
                    style={styles.input}
                    value={userForm.values.confirmPassword}
                    onChangeText={userForm.handleChange('confirmPassword')}
                    onBlur={userForm.handleBlur('confirmPassword')}
                />
            </View>

            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleButtonPress}>
            <ThemedText style={styles.registerButtonText}>ต่อไป</ThemedText>
            </TouchableOpacity>
            <ThemedText style={styles.loginPrompt}>
                คุณมีบัญชีผู้ใช้อยู่แล้ว?{' '}
                <ThemedText
                    onPress={() => router.push("/sign-in")}
                    style={styles.loginLink}
                >
                    คลิก
                </ThemedText>

            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    header: {
        alignItems: "center",
        marginTop: '20%', // เพิ่มค่าให้มากขึ้น
    },
    subtitle: {
        fontSize: 16,
        color: "#666666",
        marginTop: 8,
        textAlign: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#1abc9c",
        paddingVertical: 10, // เพิ่ม padding เพื่อขยายพื้นที่
    },
    containerText: {
        width: '100%',
    },
    form: {
        marginTop: 40,
        paddingHorizontal: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
      },
    loginPrompt: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 14,
        color: '#666666',
    },
    loginLink: {
        color: '#1abc9c',
        fontWeight: 'bold',
    },
    registerButton: {
        backgroundColor: "#1abc9c",
      borderRadius: 28,
      paddingVertical: 12,
      alignItems: "center",
      marginTop: 16,
      width: "70%",
      alignSelf: "center",
    },
    registerButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        color: "#333333",
        marginBottom: 8,
        fontWeight: "bold",
      },
});