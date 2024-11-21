import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ViewStyle } from 'react-native';

interface HeaderProps {
  style?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
    return (
        <View style={style}>
                <Text style={styles_Header.title}>PetCare</Text>
                <Text style={{}}>Ubonratchatani</Text>
        </View>
    );
};



export default Header;
const styles_Header = StyleSheet.create({
title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#00C6CF',
    },
    
});



