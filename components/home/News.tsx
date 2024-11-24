import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
const mockData = [
  {
    id: 1,
    name: "ฟินพัฒนา",
    profileImage: "https://via.placeholder.com/50",
    time: "1 day ago",
    title: "แมวหายค่ะฝากตามหาด้วย!",
    description: "น้องชื่อเหมียวตัวสีน้ำตาล หายแถวบ้าน",
    postImage: "https://via.placeholder.com/300",
    likes: 5,
  },

];

export default function PostList() {
  const [posts, setPosts] = useState(mockData);



  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: item.profileImage }}
              style={styles.profileImage}
            />
            <View style={styles.headerText}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>

          {/* Content Section */}
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <Image
              source={{ uri: item.postImage }}
              style={styles.postImage}
            />
          </View>


        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    flexDirection: "column",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 12,
    color: "#777",
  },
  contentContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentText: {
    fontSize: 14,
    color: "#00B5AD",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeCount: {
    marginLeft: 5,
    fontSize: 14,
  },
});
