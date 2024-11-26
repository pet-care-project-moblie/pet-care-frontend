import { View, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { Dimensions } from '@/constants/Diamensions'
import { ThemedButton } from '@/components/ThemedButton'
import { Colors } from '@/constants/Colors'
import { ThemedText } from '@/components/ThemedText2'
import { CircularImageDisplay } from '@/components/CircularImageDisplay'
import { useUser } from '../ctx'
import { router } from 'expo-router'
import { MenuSetting } from '@/components/setting/MenuSetting'
import { Header } from '@/components/layout/Header'

export default function ProfilePage() {
  const user = useUser();
  const handleLogout = () => {
    user.removeToken();
  };
  

  return (
    <ThemedView style={styles.container}>
      <Header
        title="หน้าหลัก"
        color={Colors.light.neutral[6]}
        onPressArrowBack={() => router.back()}
      />
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <CircularImageDisplay
            image={user?.data?.profile.images[5]}
            size={120}
          />
          <View style={styles.TextUsername}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ThemedText style={styles.userinfo}>
                {user?.data?.username}
                {"\n"}สถานะ : {user?.data?.role}
                
              </ThemedText>
            </View>
            {/* <TouchableOpacity style={styles.editButton} onPress={() => router.navigate(`/user/edit-user/edit-user`)}>
              <ThemedText style={styles.editButtonText}>แก้ไขโปรไฟล์</ThemedText>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.logoutBotton} onPress={handleLogout}>
              <ThemedText style={styles.loginButtonText}>ออกจากระบบ</ThemedText>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  versionText: {
    width: "100%", // กำหนดความกว้างเต็มของ view
    flexDirection: "row", // จัดการเนื้อหาภายในให้เรียงเป็นแถว
    justifyContent: "flex-end", // จัดการเนื้อหาให้ไปชิดขวา
    paddingRight: Dimensions.percentageWidth(3), // เพิ่มระยะห่างจากขอบขวา
    marginTop: Dimensions.percentageHeight(1.5), // เพิ่มระยะห่างจากด้านบน
    // backgroundColor:"red"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#1abc9c',
    width: Dimensions.width,
    height: Dimensions.height,
  },
  imageContainer: {
    position: "absolute",
    // top: -60, // ให้รูปอยู่เหนือการ์ดขึ้นไป 60px
    top: Dimensions.percentageHeight(-7), // ให้รูปอยู่เหนือการ์ดขึ้นไป 60px
    zIndex: 10,
    alignItems: "center",
    // backgroundColor:"pink"
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.light.neutral[6],
    // paddingTop: Dimensions.percentageHeight(8), // เพิ่มพื้นที่ให้พอดีกับตำแหน่งของรูป
    // marginTop: 50,
    marginTop: Dimensions.percentageHeight(6),
    position: "relative", // ให้การ์ดเป็นพื้นหลังของรูปโปรไฟล์
  },
  menuContainer: {
    paddingTop: Dimensions.percentageHeight(15),
  },
  containerBackButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  TextUsername: {
    // backgroundColor:"pink",
    paddingTop: Dimensions.percentageHeight(1),
  },
  editButton: {
    backgroundColor: "#1abc9c",
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
    width: 170,
    alignSelf: "center",
  },
  editButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
  userinfo: {
    textAlign: 'center'
  },
  loginButtonText: {
    color: '#B70202',
    fontSize: 14,
  },
  logoutBotton: {
    marginTop: '5%',
    alignItems: "center",
  }
});
