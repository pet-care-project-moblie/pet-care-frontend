import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';
import WebView from 'react-native-webview';

export default function PetCareScreen() {
  const [images, setImages] = useState([]); // เก็บรูปภาพที่ผู้ใช้อัปโหลด
  const [modalVisible, setModalVisible] = useState(false); // State สำหรับ Modal
  const [likes, setLikes] = useState(0); // จำนวนไลค์
  const [liked, setLiked] = useState(false); // สถานะว่าไลค์แล้วหรือยัง
  const [selectedValue, setSelectedValue] = useState(''); // State สำหรับ Dropdown
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [showWebView, setShowWebView] = useState(false); // ใช้ state เพื่อควบคุมการแสดง WebView

  const handleSendComment = () => {

    console.log("Comment sent"); // คุณสามารถแทนที่ด้วยฟังก์ชันบันทึกหรือส่งข้อความ
    setCommentModalVisible(false); // ปิด Modal หลังจากกดส่ง
  };

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets ? result.assets[0].uri : result.uri; // ใช้ result.assets หรือ result.uri
      // setImages((prev) => [...prev, uri]); // เพิ่มรูปภาพใหม่เข้าไปใน state
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets ? result.assets[0].uri : result.uri; // ใช้ result.assets หรือ result.uri
      // setImages((prev) => [...prev, uri]); // เพิ่มรูปภาพใหม่เข้าไปใน state
    }
  };
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('กรุณาให้สิทธิ์การเข้าถึงรูปภาพ');
      }
    };
    requestPermission();
  }, []);

  const handleLike = () => {
    if (liked) {
      console.log("Unliked");
      setLikes(likes - 1);
      setLiked(false);
    } else {
      console.log("Liked");
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  <View style={styles.actions}>
    <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
      <MaterialIcons
        name="thumb-up"
        size={20}
        color={liked ? "#00B5AD" : "#A0A0A0"} // เปลี่ยนสีตามเงื่อนไข
      />
      <Text style={[styles.likeCount, { color: liked ? "#00B5AD" : "#A0A0A0" }]}>
        {likes}
      </Text>
    </TouchableOpacity>
  </View>

  return (
    <View style={styles.container}>
      {showWebView ? (
        <WebView
          source={{ uri: 'http://10.10.12.51:5000/' }}
          style={{ flex: 1 }}
        />
      ) : (
        <View
        style={{flex:1}}
        >
          <Modal transparent={true} visible={modalVisible} animationType="slide">
            <View style={styles.modalContent}>
              <View style={styles.imageUploadSection}>
                {images.map((imageUri, index) => (
                  <Image
                    key={index}
                    source={{ uri: imageUri }}
                    style={styles.uploadedImage}
                  />
                ))}
                <TouchableOpacity style={styles.imageUploadButton} onPress={pickImage}>
                  <MaterialIcons name="add" size={24} color="#A0A0A0" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* Modal */}
          <Modal
            transparent={true}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                {/* Header */}
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>สร้างโพสต์</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <MaterialIcons name="close" size={24} color="#00B5AD" />
                  </TouchableOpacity>
                </View>

                {/* Dropdown Section */}
                <View style={styles.dropdownContainer}>
                  <Text style={styles.dropdownLabel}>เลือกหมวดหมู่:</Text>
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    style={styles.picker}
                  >
                    <Picker.Item label="สุขภาพสัตว์" value="health" />
                    <Picker.Item label="ประกาศพบเห็น" value="found" />
                    <Picker.Item label="ประกาศตามหา" value="lost" />
                    <Picker.Item label="อื่นๆ" value="Other" />
                  </Picker>
                </View>

                {/* TextInput */}
                <TextInput
                  style={styles.modalTextInput}
                  placeholder="คุณกำลังคิดอะไรอยู่ win winny"
                  multiline
                />

                {/* Image Upload Section */}
                <View style={styles.imageUploadSection}>
                  {images.map((imageUri, index) => (
                    <Image
                      key={index}
                      source={{ uri: imageUri }}
                      style={styles.uploadedImage}
                    />
                  ))}
                  <TouchableOpacity style={styles.imageUploadButton} onPress={pickImage}>
                    <MaterialIcons name="add" size={24} color="#A0A0A0" />
                  </TouchableOpacity>
                </View>

                {/* Post Button */}
                <TouchableOpacity style={styles.postButton}>
                  <Text style={styles.postButtonText}>โพสต์</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal
            transparent={true}
            visible={commentModalVisible}
            animationType="slide"
            onRequestClose={() => setCommentModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.commentModalContent}>
                {/* Header */}
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>แสดงความคิดเห็น</Text>
                  <TouchableOpacity onPress={() => setCommentModalVisible(false)}>
                    <MaterialIcons name="close" size={24} color="#00B5AD" />
                  </TouchableOpacity>
                </View>

                {/* User Info */}
                <View style={styles.userInfo}>
                  <Image
                    style={styles.profilePicture}
                    source={{ uri: 'https://via.placeholder.com/40' }}
                  />
                  <Text style={styles.username}>win winny</Text>
                </View>

                {/* Comment Input */}
                <TextInput
                  style={styles.commentInput}
                  placeholder="คุณกำลังคิดอะไรอยู่ win winny"
                  placeholderTextColor="#A0A0A0"
                  multiline
                />

                {/* Submit Button */}
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={handleSendComment} // เพิ่มการทำงานเมื่อกดปุ่ม
                >
                  <MaterialIcons name="send" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <ScrollView>
            {/* Header Section */}
            <View style={styles.header}>
              <TouchableOpacity>
                <MaterialIcons name="menu" size={24} color="#000" />
              </TouchableOpacity>
              <View style={styles.titleContainer}>
                <Text style={styles.headerTitle}>
                  <Text style={styles.pet}>Pet</Text>
                  <Text style={styles.care}>Care</Text>
                </Text>
                <Text style={styles.location}>📍 Ubonratchathani</Text>
              </View>
              <TouchableOpacity style={styles.cameraButton} onPress={() => setShowWebView(true)}>
                <MaterialIcons name="home" size={20} color="#00B5AD" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
                <MaterialIcons name="photo-camera" size={20} color="#00B5AD" />
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchInput}
                placeholder="ค้นหาสิ่งที่คุณต้องการ"
                placeholderTextColor="#A0A0A0"
              />
              <TouchableOpacity>
                <MaterialIcons name="tune" size={20} color="#A0A0A0" />
              </TouchableOpacity>
            </View>

            {/* Single Post */}
            <View style={styles.postContainer}>
              <View style={styles.postHeader}>
                {/* User Profile */}
                <View style={styles.userInfo}>
                  <Image
                    style={styles.profilePicture}
                    source={{
                      uri: 'https://via.placeholder.com/40',
                    }}
                  />
                  <Text style={styles.username}>พั้นรักแมว</Text>
                </View>
                <Text style={styles.postTime}>1 day ago</Text>
              </View>
              <Text style={styles.postTitle}>ขอความช่วยเหลือ</Text>
              <Text style={styles.postContent}>
                แมวหายค่ะฝากตามหาที{"\n"}น้องชื่อเหมียวตัวสีส้มๆ หายแถวบ้าน
              </Text>

              {/* Single Image */}
              <Image
                style={styles.image}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFfxbnn977TdeWaN7wgwY_XbYlKTNP3rUdhw&s',
                }}
              />

              {/* Action Buttons */}
              <View style={styles.actions}>
                <TouchableOpacity onPress={() => setCommentModalVisible(true)}>
                  <Text style={styles.actionText}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
                  <MaterialIcons name="thumb-up" size={20} color="#00B5AD" />
                  <Text style={styles.likeCount}>{likes}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>

          {/* Floating Action Button */}
          <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8F7',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#F0F8F7',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // ทำให้ "สร้างโพสต์" อยู่ตรงกลาง
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00B5AD',
  },
  closeButton: {
    position: 'absolute', // ทำให้ปุ่ม X อยู่ด้านขวา
    right: -100, // ชิดขวา
    top: '50%', // จัดให้อยู่กึ่งกลางแนวตั้ง
    transform: [{ translateY: -15 }], // ขยับขึ้นเพื่อให้อยู่กึ่งกลาง Header
    width: 30, // กำหนดความกว้างวงกลม
    height: 30, // กำหนดความสูงวงกลม
    borderRadius: 15, // ทำให้เป็นวงกลม
    backgroundColor: '#fff', // สีพื้นหลังของวงกลม
    borderWidth: 1, // ความหนาของขอบ
    borderColor: '#00B5AD', // สีของขอบ
    justifyContent: 'center', // จัด X ให้อยู่กึ่งกลางแนวตั้ง
    alignItems: 'center', // จัด X ให้อยู่กึ่งกลางแนวนอน
  },
  dropdownContainer: {
    width: '100%',
    marginBottom: 20,
  },
  dropdownLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  modalTextInput: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  imageUploadSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  imageUploadButton: {
    width: 80,
    height: 80,
    backgroundColor: '#E8F8F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A0A0A0',
  },
  postButton: {
    backgroundColor: '#00B5AD',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0F8F7',
    paddingHorizontal: 20,
    paddingVertical: 35,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  pet: {
    color: '#00B5AD',
  },
  care: {
    color: '#000',
  },
  location: {
    fontSize: 12,
    color: '#7E7E7E',
    marginTop: 2,
  },
  cameraButton: {
    backgroundColor: '#E8F8F6',
    padding: 8,
    borderRadius: 20,
  },
  searchBarContainer: {
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  postContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#333',
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    color: '#0C6157',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 14,
    color: '#A0A0A0', // สีเทาเริ่มต้น
  },

  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00B5AD',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  uploadedImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#A0A0A0',
  },
  commentModalContent: {
    width: '90%',
    backgroundColor: '#F0F8F7',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentInput: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#00B5AD',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userProfile: {
    flexDirection: 'row', // วางรูปโปรไฟล์และ Dropdown ในแนวนอน
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdown: {
    padding: 5,
  },
});





















