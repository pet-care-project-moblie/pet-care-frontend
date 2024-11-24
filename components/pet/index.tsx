import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import { useUser } from '@/app/ctx';


export default function PetDetails() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Cockky';
  const gender = searchParams.get('gender') || 'Male';
  const age = searchParams.get('age') || '1 ปี';
  const breed = searchParams.get('breed') || 'ชิวาวา';
  const biography = searchParams.get('biography') || 'เป็นหมาสุดรักของพั้นรักแมว';
  const image = searchParams.get('image') || '/pet-care-frontend/assets/images/dog/DogSleep.tsx';

  return (
    <ThemedView style={styles.container}>
      <ScrollView>

        <Image source={{uri: image}}style={styles.headerImage}/>

        <View style={styles.infoContainer}>
          <Text style={styles.petName}>{name}</Text>
          <Text style={styles.locationSmall}>Ubonratchathani</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>เพศ</Text>
              <Text style={styles.statValue}>{gender}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>อายุ</Text>
              <Text style={styles.statValue}>{age}</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statTitle}>สายพันธุ์</Text>
              <Text style={styles.statValue}>{breed}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>ประวัติ</Text>
          <Text style={styles.bio}>{biography}</Text>
        </View>
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#36B4B4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  highlight: {
    color: '#36B4B4',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#888',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 2,
  },
  petName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  locationSmall: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  headerImage: {
    width: '100%',
    height: 200,
    marginTop: 1,
    resizeMode: 'cover',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  statTitle: {
    fontSize: 14,
    color: '#888',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  bio: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    lineHeight: 20,
  },
});
