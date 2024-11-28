import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { BackIcon } from '@/components/BackIcon';
// import { useFormik } from "formik";
import * as Yup from "yup";
import { IPet } from '@/interface/pet';

const validationSchema = Yup.object<IPet>({
  nickname: Yup.string().required("กรุณาระบุชื่อเล่นของสัตว์เลี้ยง"),
  isMale: Yup.string().required("กรุณาระบุเพศของสัตว์เลี้ยง"),
  breed: Yup.string().required("กรุณาระบุสายพันธุ์ของสัตว์เลี้ยง"),
  location: Yup.object().required("กรุณาระบุสถานที่"),
  species: Yup.string().required("กรุณาระบุชนิดของสัตว์เลี้ยง"),
  tags: Yup.array().min(1, "กรุณาเลือกแท็กอย่างน้อย 1 รายการ"),
  birthdayAt: Yup.date().required("กรุณาระบุวันเกิดของสัตว์เลี้ยง"),
  size: Yup.string().required("กรุณาระบุขนาดของสัตว์เลี้ยง"),
  images: Yup.array().of(Yup.string()),
  generalHealth: Yup.array().of(Yup.string()),
  vaccinationHistory: Yup.array().of(Yup.string()),
  theme: Yup.string(),
  notes: Yup.string(),
  isHiddened: Yup.string(),
  isSpayedOrNeutered: Yup.string(),
});

export default function Signpet() {
  // const navigation = useNavigation(); 
  
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    species: '',
    age: '',
    gender: '',
    chronicDisease: '',
    vaccinationHistory: '',
    medication: '',
    additionalInfo: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Back Button and Title in the same row */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <BackIcon color={'#000000'} onPress={() => router.back()} />
          <Text style={styles.title}>ลงทะเบียนสัตว์เลี้ยง</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <TextInput
        style={styles.input}
        placeholder="ชื่อของสัตว์เลี้ยง"
        onChangeText={(text) => handleInputChange('petName', text)}
      />

      <RNPickerSelect
        onValueChange={(value) => handleInputChange('petType', value)}
        placeholder={{ label: 'ประเภทสัตว์เลี้ยง', value: null }}
        items={[
          { label: 'สุนัข', value: 'dog' },
          { label: 'แมว', value: 'cat' },
          { label: 'อื่นๆ', value: 'other' },
        ]}
        style={pickerSelectStyles}
      />

      <TextInput
        style={styles.input}
        placeholder="สายพันธุ์"
        onChangeText={(text) => handleInputChange('species', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="อายุของสัตว์เลี้ยง"
        onChangeText={(text) => handleInputChange('age', text)}
        keyboardType="numeric"
      />

      <RNPickerSelect
        onValueChange={(value) => handleInputChange('gender', value)}
        placeholder={{ label: 'เพศ', value: null }}
        items={[
          { label: 'เพศผู้', value: 'male' },
          { label: 'เพศเมีย', value: 'female' },
        ]}
        style={pickerSelectStyles}
      />

      <TextInput
        style={styles.input}
        placeholder="โรคประจำตัว"
        onChangeText={(text) => handleInputChange('chronicDisease', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="ประวัติการฉีดวัคซีน"
        onChangeText={(text) => handleInputChange('vaccinationHistory', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="ยาที่ต้องใช้"
        onChangeText={(text) => handleInputChange('medication', text)}
      />

      <TextInput
        style={styles.textarea}
        placeholder="รายละเอียดเพิ่มเติมเกี่ยวกับสัตว์เลี้ยง"
        multiline
        numberOfLines={4}
        onChangeText={(text) => handleInputChange('additionalInfo', text)}
      />

      {/* Image Upload Placeholder */}
      <View style={styles.imageUploadContainer}>
        {Array.from({ length: 9 }).map((_, index) => (
          <TouchableOpacity key={index} style={styles.imagePlaceholder}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)/Homepage")}>
        <Text style={styles.buttonText}>ลงทะเบียน</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  backButton: {
    flex: 1,
    marginTop: '1%',
    marginBottom: 20,
    justifyContent: 'center',
  },

  title: {
    flex: 2,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#47C9B4',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    elevation: 1,
    width: '100%',
  },
  textarea: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    height: 120,
    borderWidth: 1,
    borderColor: '#DDD',
    textAlignVertical: 'top',
    marginBottom: 15,
    elevation: 1,
    width: '100%',
  },
  button: {
    backgroundColor: '#47C9B4',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    width: '100%',
    marginBottom: '20%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageUploadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  imagePlaceholder: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    elevation: 1,
  },
  plusText: {
    fontSize: 24,
    color: '#47C9B4',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 15,
    elevation: 1,
    width: '100%',
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 15,
    elevation: 1,
    width: '100%',
  },
});

