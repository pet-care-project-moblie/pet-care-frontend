import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { Dimensions } from '@/constants/Diamensions'
import { ThemedButton } from '@/components/ThemedButton'
import { Colors } from '@/constants/Colors'

export default function ProfilePage () {
  return (
    <View>
<ThemedView style={styles.container}>
  <View style={styles.headerContainer}>
    <ThemedButton title="abc" color={Colors.light.primary[4]} />
      <Text>sadsds</Text>
    
 
  </View>
</ThemedView>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
  flex:1 ,
  width: Dimensions.percentageWidth(100),
  height: Dimensions.percentageHeight(50)
},
headerContainer:{

}

})
