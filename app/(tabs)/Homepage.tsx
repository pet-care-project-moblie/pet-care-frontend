import React, { useState } from "react";
import { Dimensions, StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import NewsPaper from "@/assets/images/NewsPaper";
import PostList from "@/components/home/News";
import Paw from "@/assets/images/Paw";
import Plate from "@/assets/images/Plate";
import CatSleepPillow from "@/assets/images/cat/CatSleepPillow";
import PetDetails from "@/components/pet";

const { width, height } = Dimensions.get("window");

export default function HomePage() {
  const router = useRouter();
  const [activeContent, setActiveContent] = useState<"pets" | "news" | null>(null);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Pet</Text>
        <Text style={styles.logoText2}>Care</Text>
      </View>

      {/* Banner */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.banner}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>ดูแลรักษา{"\n"}สัตว์เลี้ยงของคุณ</Text>
            <Text style={styles.subtitle}>อย่าลืมพาน้องสัตว์เลี้ยงของคุณไปฉีดวัคซีน</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ตรวจเช็ครับฉีดวัคซีน</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerImage}>
          <CatSleepPillow height={100}/>
          </View>
        </View>

        {/* Menu Section */}
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>เมนู</Text>
          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuItem} onPress={() => setActiveContent("pets")}>
              <Paw height={40} color={"#FEC055"}/>
              <Text style={styles.menuLabel}>สัตว์เลี้ยง</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => setActiveContent("news")}>
              <NewsPaper height={40} color={"#73D3D3"}/>
              <Text style={styles.menuLabel}>ข่าวสาร</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dynamic Content Section */}
        {activeContent === "pets" && (
          <View style={styles.petSection}>
            <Text style={styles.petTitle}>สัตว์เลี้ยงของฉัน</Text>
                <PetDetails/>
          </View>
        )}
         {activeContent === "news" && (
          <View style={styles.dynamicContent}>
            <PostList />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection:'row',
    padding: 20,
    display:'flex',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    width: '100%',
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1abc9c",
  },
  logoText2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  scrollView: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1abc9c",
    borderRadius: 12,
    padding: 20,
    margin: 16,
    width: width * 0.9,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
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
  },
  buttonText: {
    color: "#1abc9c",
    fontWeight: "bold",
  },
  bannerImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 16,
  },
  menuSection: {
    padding: 16,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
  },
  menuItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  menuItem: {
    alignItems: "center",
  },
  menuLabel: {
    fontSize: 14,
    color: "#34495e",
  },
  petSection: {
    padding: 16,
  },
  petTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#34495e",
    marginBottom: 10,
  },
  petCard: {
    width: 120,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
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
