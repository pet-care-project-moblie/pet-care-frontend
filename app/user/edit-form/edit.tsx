import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { ThemedTextInput } from "@/components/ThemedInput";
import { ThemedButton } from "@/components/ThemedButton";
import { Header } from "@/components/layout/Header";
import { ThemedDatePicker } from "@/components/ThemedDatePicker";
import { useFormik } from "formik";
import { axiosInstance } from "@/hooks/useAxios";
import * as Yup from "yup";
import { CircularImageDisplay } from "@/components/CircularImageDisplay";
import { pickImageFromLibrary } from "@/utils/imagePicker";
import { Progress } from "@/components/Progress";
import { RectangleImageDisplay } from "@/components/RectangleImageDisplay";
import { useUser } from "@/app/ctx";
import { IUserEditForm } from "@/interface/user";
import { IProfile } from "@/interface/profile";
import { Dimensions } from "@/constants/Diamensions";

const validationSchema = Yup.object<IUserEditForm>({
  firstname: Yup.string().required("กรุณากรอกชื่อ"),
  lastname: Yup.string().required("กรุณากรอกนามสกุล"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")
    .required("กรุณากรอกเบอร์โทรศัพท์"),
  email: Yup.string()
    .email("กรุณากรอกอีเมลให้ถูกต้อง")
    .required("กรุณากรอกอีเมล"),
  birthdayAt: Yup.string().required("กรุณาใส่วันเกิด"),
  images: Yup.array().of(Yup.string()).min(1).required("กรุณาใส่รูปภาพ"),
});

export default function UsersEditFormPage() {
  const user = useUser()
  const { id } = useLocalSearchParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get<IProfile>(
          `/profile/${id}`
        );
        userForm.setValues({
          ...response.data,
        } as any);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  const userForm = useFormik<IUserEditForm>({
    initialValues: {
      images: [],
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      birthdayAt: new Date(),
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axiosInstance.put(`/profile/${id}`, {
          ...values,
        });
        user.onRefresh();
        router.replace("/(tabs)/profile")
      } catch (error: any) {
        console.log("Error creating pet:", error.response.data);
      }
    },
  });

  const handleImagePress = async () => {
    const selectedImageUri = await pickImageFromLibrary();
    if (selectedImageUri) {
      const updatedImages = [...userForm.values.images];
      updatedImages[0] = selectedImageUri;
      userForm.setFieldValue("images", updatedImages);
    }
  };

  const handleListImagePress = async () => {
    const selectedImageUri = await pickImageFromLibrary();
    if (selectedImageUri) {
      const updatedImages = [...userForm.values.images, selectedImageUri];
      userForm.setFieldValue("images", updatedImages);
    }
  }

  const handleImagePressIndex = (index: number) => {
    const updatedImages = [...userForm.values.images];
    updatedImages[0] = updatedImages[index];
    updatedImages[index] = userForm.values.images[0];
    userForm.setFieldValue("images", updatedImages);
  }

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...userForm.values.images];
    updatedImages.splice(index, 1);
    userForm.setFieldValue("images", updatedImages);
  }

  const handleFormSubmit = () => {
    userForm.handleSubmit();
  };

  if (isLoading) {
    return <Progress />;
  }

  return (
    <ThemedView style={styles.container}>
      <Header
        title="แก้ไขโปรไฟล์"
        color={Colors.light.neutral[6]}
        onPressArrowBack={() => router.back()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.menuContainer}>
          <View style={styles.imageContainer}>
            <CircularImageDisplay
              image={userForm.values.images[0]}
              size={Dimensions.percentageWidth(30)}
              onPress={handleImagePress}
            />
          </View>
          <View style={styles.TextUsername}>
            <ThemedText type="title3" color={Colors.light.primary[1]}>
              {userForm?.values?.firstname}
            </ThemedText>
          </View>
          {userForm.values.images[0] &&
            <View style={styles.ImageRectangle}>
              <ThemedText type="caption1" color={Colors.light.neutral[3]}>
                รูปภาพ
              </ThemedText>
              <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.imageListContainer}
                contentContainerStyle={{ gap: 10 }}
              >
                <RectangleImageDisplay
                  onPress={handleListImagePress}
                  width={Dimensions.percentageWidth(25.64)}
                  height={Dimensions.percentageHeight(14.22)}
                />
                {userForm?.values?.images?.map(
                  (image, index) =>
                    index !== 0 && (
                      <RectangleImageDisplay
                        isRemove={true}
                        onRemove={() => handleRemoveImage(index)}
                        onPress={() => handleImagePressIndex(index)}
                        key={index}
                        image={image}
                        width={Dimensions.percentageWidth(25.64)}
                        height={Dimensions.percentageHeight(14.22)}
                      />
                    )
                )}
              </ScrollView>
            </View>
          }
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="ชื่อ"
              value={userForm.values.firstname}
              onChangeText={userForm.handleChange("firstname")}
            />

            <TextInput
              style={styles.input}
              placeholder="นามสกุล"
              value={userForm.values.lastname}
              onChangeText={userForm.handleChange("lastname")}
            />

            <TextInput
              style={styles.input}
              placeholder="เบอร์"
              value={userForm.values.phone}
              onChangeText={userForm.handleChange("phone")}
            />
            <TextInput
              style={styles.input}
              placeholder="อีเมล"
              value={userForm.values.email}
              onChangeText={userForm.handleChange("email")}
            />
            <TextInput
              style={styles.input}
              editable={false}
              selectTextOnFocus={false}
              placeholder="เลขบัตรประชาชน"
              value={userForm.values?.identityCard}
              onChangeText={userForm.handleChange("identityCard")}
            />
            <ThemedDatePicker
              maximumDate={new Date(new Date().getFullYear() - 5, new Date().getMonth(), new Date().getDate())}
              width={"100%"}
              display="spinner"
              placeholder="วันเกิด (DD-MM-YYYY)"
              value={
                userForm.values.birthdayAt
                  ? new Date(userForm.values.birthdayAt)
                  : undefined
              }
              onChange={(date) =>
                userForm.setFieldValue(
                  "birthdayAt",
                  date?.toISOString().split("T")[0]
                )
              }
              helperText={userForm.errors.birthdayAt as string}
              error={
                !!(userForm.errors.birthdayAt && userForm.touched.birthdayAt)
              }
            />
          </View>
          <View style={styles.contentButton}>
            <ThemedButton width={300} title="แก้ไข" onPress={handleFormSubmit} />
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  TextUsername: {
    // backgroundColor:"pink",
    paddingTop: Dimensions.percentageHeight(1),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1abc9c',
    width: Dimensions.width,
    height: Dimensions.height,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "absolute",
    top: -60,
    zIndex: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  menuContainer: {
    marginTop: Dimensions.percentageHeight(4),
    backgroundColor: Colors.light.neutral[6],
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    // height: 420,
    gap: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    // marginBottom:16
    paddingBottom: 50,
    paddingHorizontal: 10,

  },
  containerBackButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentButton: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageRectangle: {
    flexDirection: "column",
    height: Dimensions.percentageHeight(20),
  },
  imageListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: Dimensions.width - 40,
    gap: 10,
    marginVertical: Dimensions.percentageHeight(1.18),
  },
  scrollContainer: {

    paddingVertical: Dimensions.percentageHeight(3.55),
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    width: '100%'
  },
  form: {
    marginTop: '20%',
    width: '100%'
  },
});
