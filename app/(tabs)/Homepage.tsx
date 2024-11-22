import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import PostList from "@/components/Homepage/News";
import { useRouter } from "expo-router";

const mockPetData = [
  { id: 1, name: "BO", image: "https://via.placeholder.com/150", gender: "Male", age: "2", breed: "Corgi", biography: "Loves playing fetch." },
  { id: 2, name: "BOOM", image: "https://via.placeholder.com/150", gender: "Female", age: "3", breed: "Siamese", biography: "Enjoys lounging in the sun." },
  { id: 3, name: "JIDLID", image: "https://via.placeholder.com/150", gender: "Male", age: "1", breed: "Bulldog", biography: "Very friendly and loves people." },
  { id: 4, name: "BO", image: "https://via.placeholder.com/150", gender: "Male", age: "2", breed: "Corgi", biography: "Loves playing fetch." },
  { id: 5, name: "BOOM", image: "https://via.placeholder.com/150", gender: "Female", age: "3", breed: "Siamese", biography: "Enjoys lounging in the sun." },
  { id: 6, name: "JIDLID", image: "https://via.placeholder.com/150", gender: "Male", age: "1", breed: "Bulldog", biography: "Very friendly and loves people." },
];

export default function HomePage() {
  const router = useRouter();
  const [activeContent, setActiveContent] = useState<"pets" | "news" | null>(null);

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Pet</Text>
        <Text style={styles.logoText2}>Care</Text>
      </View>

      {/* Banner */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.banner}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>ดูแลรักษา{"\n"}สัตว์เลี้ยงของคุณ</Text>
              <Text style={styles.subtitle}>
                อย่าลืมพาน้องสัตว์เลี้ยงของคุณไปฉีดวัคซีน
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ตรวจเช็ครับฉีดวัคซีน</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../assets/images/icon.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>เมนู</Text>
          <View style={styles.menuItems}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => setActiveContent("pets")}
            >
              <Image
                source={require("../../assets/images/icon.png")}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>สัตว์เลี้ยง</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => setActiveContent("news")}
            >
              <Image
                source={require("../../assets/images/icon.png")}
                style={styles.menuIcon}
              />
              <Text style={styles.menuLabel}>ข่าวสาร</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dynamic Content Section */}
        {activeContent === "pets" && (
          <View style={styles.petSection}>
            <Text style={styles.petTitle}>สัตว์เลี้ยงของฉัน</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {mockPetData.map((pet) => (
                <TouchableOpacity
                  key={pet.id}
                  style={styles.petCard}
                  onPress={() =>
                    router.push({
                      pathname: "/(tabs)/Mypet", /*มันไม่ไฟล์ Mypet ฝากพี่ link ให้ด้วย */
                      params: {
                        name: pet.name,
                        image: pet.image,
                        gender: pet.gender,
                        age: pet.age,
                        breed: pet.breed,
                        biography: pet.biography,
                      },
                    })
                  }
                >
                  <Image source={{ uri: pet.image }} style={styles.petImage} />
                  <Text style={styles.petName}>{pet.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        {activeContent === "news" && (
          <View style={styles.dynamicContent}>
            <PostList /> {/* แสดงคอนเทนต์จากไฟล์ News */}
          </View>
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9f8",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1abc9c",
    marginLeft: 16,
  },
  logoText2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  scrollView: {
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  banner: {
    width: "100%",
    backgroundColor: "#a6f2e4",
    borderRadius: 12,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 14,
    color: "#ffffff",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#1abc9c",
    fontWeight: "bold",
    fontSize: 14,
  },
  image: {
    width: 150,
    height: 150,
  },
  menuSection: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 10,
  },
  menuItems: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  menuItem: {
    alignItems: "center",
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  menuLabel: {
    fontSize: 14,
    color: "#34495e",
  },
  petSection: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  petTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 10,
  },
  horizontalScroll: {
    paddingHorizontal: 16,
  },
  petCard: {
    width: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginRight: 10,
  },
  petImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 8,
  },
  petName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  dynamicContent: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginVertical: 10,
  },
});
