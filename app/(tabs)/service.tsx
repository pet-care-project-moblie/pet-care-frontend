import { ServicePage } from '@/components/service/Servicepage';
import { ThemedText } from '@/components/ThemedText2';
import { router } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useUser } from '../ctx';
import { EUserRole } from "@/constants/user";

export default function Service() {
  const user = useUser(); // Call the hook as a function

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.title1}>Pet</ThemedText>
        <ThemedText style={styles.title}>Care</ThemedText>
      </View>
      {user.data?.role.includes(EUserRole.ADMIN) && (
        <View style={[styles.card, styles.card_first]}>
          <View style={styles.cardContent}>
            <Image source={require('../../assets/images/dog_service1.png')} style={styles.image} />
            <View>
              <ThemedText style={styles.cardTitle}>ลงทะเบียนสัตว์เลี้ยง</ThemedText>
              <ThemedText style={styles.cardDescription}>ระบบทะเบียนสัตว์เลี้ยงออนไลน์</ThemedText>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/service/sign-pet")}
              >
                <ThemedText style={styles.buttonText}>ลงทะเบียน</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      <View style={[styles.card, styles.card_second]}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/images/dog_service2.png')} style={styles.image} />
          <View>
            <ThemedText style={styles.cardTitle}>ตามหาสัตว์เลี้ยง</ThemedText>
            <ThemedText style={styles.cardDescription}>รวมไฟล์ประกาศตามหาสัตว์ที่หายไป</ThemedText>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/service/pet-care")}
            >
              <ThemedText style={styles.buttonText}>ดูข้อมูล</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.card_third]}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/images/dog_service3.png')} style={styles.image} />
          <View>
            <ThemedText style={styles.cardTitle}>บริการให้คำปรึกษา</ThemedText>
            <ThemedText style={styles.cardDescription}>ให้คำปรึกษาโดยใช้ AI</ThemedText>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push("/service/advice")}
            >
              <ThemedText style={styles.buttonText}>ดูข้อมูล</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1abc9c',
  },
  card: {
    margin: 10,
    borderRadius: 12,
    width: '90%',
    height: 165,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card_first: {
    backgroundColor: '#54C1FA',
  },
  card_second: {
    backgroundColor: '#7383BE',
  },
  card_third: {
    backgroundColor: '#91DCE1',
  },
  image: {
    width: 135,
    height: 135,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDescription: {
    fontSize: 12,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    width: 109,
    height: 19,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#606060',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
});
