import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


const Service = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
            <Text style={{
                color: '#36B4B4',
            }}>
                Pet
            </Text>
            Care</Text>
        <Text style={styles.location}>Ubonratchathani</Text>
      </View>
      <View style={[styles.card, styles.card_first]}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/images/dog_service1.png')} style={styles.image} />
          <View>
            <Text style={styles.cardTitle}>ลงทะเบียนสัตว์เลี้ยง</Text>
            <Text style={styles.cardDescription}>ระบบทะเบียนสัตว์เลี้ยงออนไลน์</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ลงทะเบียน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.card_second]}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/images/dog_service2.png')} style={styles.image} />
          <View>
            <Text style={styles.cardTitle}>ตามหาสัตว์เลี้ยง</Text>
            <Text style={styles.cardDescription}>รวมไฟล์ประกาศตามหาสัตว์ที่หายไป</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ดูข้อมูล</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.card_third]}>
        <View style={styles.cardContent}>
          <Image source={require('../../assets/images/dog_service3.png')} style={styles.image} />
          <View>
            <Text style={styles.cardTitle}>บริการให้คำปรึกษา</Text>
            <Text style={styles.cardDescription}>ให้คำปรึกษาโดยใช้ AI</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ดูข้อมูล</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginTop: '10%',
    width: '100%',
    marginLeft: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  location: {
    fontSize: 14,
    color: '#7f8c8d',
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

export default Service;