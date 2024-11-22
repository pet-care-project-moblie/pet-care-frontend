import * as SecureStore from "expo-secure-store";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { router } from "expo-router";
import { axiosInstance } from "@/hooks/useAxios";
import { useUser } from "./ctx";
import { ThemedText } from "@/components/ThemedText2";
import { ThemedView } from "@/components/ThemedView";
import Svg, { Path } from "react-native-svg";

interface IFormUser {
  username: string;
  password: string;
}

const validate = Yup.object<IFormUser>({
  username: Yup.string()
    .required("กรุณากรอกชื่อผู้ใช้งาน")
    .min(4, "ชื่อผู้ใช้งานต้องมีอย่างน้อย 4 ตัวอักษร"),
  password: Yup.string()
    .required("กรุณากรอกรหัสผ่าน")
    .min(8, "รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"),
});

export default function SignInPage() {
  const user = useUser();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<IFormUser>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        const response = await axiosInstance.post("/auth/login", values);
        user.saveToken(response.data.access_token);
        router.replace("/(tabs)");
      } catch (error: any) {
        console.error("Login failed:", error.response?.data || error.message);
        alert("Login failed. Please try again.");
      }
    },
  });

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>

        <ThemedText style={styles.title}>PetCare</ThemedText>
        <ThemedText style={styles.subtitle}>ระบบจัดการและดูแลสัตว์เลี้ยง</ThemedText>
      </View>
      <View style={styles.form}>
        <ThemedText style={styles.label}>ชื่อผู้ใช้</ThemedText>
        <TextInput
          style={styles.input}
          value={values.username}
          onChangeText={handleChange("username")}
          onBlur={handleBlur("username")}
        />
        {touched.username && errors.username && (
          <ThemedText style={styles.errorText}>{errors.username}</ThemedText>
        )}

        <ThemedText style={styles.label}>รหัสผ่าน</ThemedText>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <ThemedText style={styles.showPasswordText}>
              {passwordVisible ? "Hide" : "Show"}
            </ThemedText>
          </TouchableOpacity>
        </View>
        {touched.password && errors.password && (
          <ThemedText style={styles.errorText}>{errors.password}</ThemedText>
        )}

        <TouchableOpacity style={styles.loginButton} onPress={() => handleSubmit()}>
          <ThemedText style={styles.loginButtonText}>เข้าสู่ระบบ</ThemedText>
        </TouchableOpacity>
      </View>

      <ThemedText style={styles.registerPrompt}>
        คุณยังไม่มีบัญชีผู้ใช้?{' '}
        <TouchableOpacity 
        onPress={() => router.push("/sign-up")}>
          <ThemedText style={styles.registerLink}>คลิกที่นี่ </ThemedText>
        </TouchableOpacity>
        <ThemedText> เพื่อสมัครสมาชิก</ThemedText>
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
    marginTop: '20%',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1abc9c",
    paddingVertical: 10,
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
  label: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 8,
    fontWeight: "bold",
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 8,
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  passwordInput: {
    paddingRight: 70,
  },
  showPasswordButton: {
    position: "absolute",
    right: 16,
    top: "50%",
    alignItems: "center",
    transform: [{ translateY: -12 }],
  },
  showPasswordText: {
    color: "#1abc9c",
    fontSize: 14,
    fontWeight: "bold",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#1abc9c",
    fontSize: 14,
    marginVertical: 8,
  },
  loginButton: {
    backgroundColor: "#1abc9c",
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
    width: "70%",
    alignSelf: "center",
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerPrompt: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 14,
    color: "#666666",
  },
  registerLink: {
    color: "#1abc9c",
    fontWeight: "bold",
  },
});
