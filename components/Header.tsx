import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, ViewStyle } from 'react-native';
import { ThemedText } from './ThemedText2';

interface HeaderProps {
  style?: ViewStyle;
}

const Header: React.FC<HeaderProps> = ({ style }) => {
    return (
        <View style={style}>
            
                <ThemedText style={styles_Header.title}>PetCare</ThemedText>
                <ThemedText style={{}}>Ubonratchatani</ThemedText>
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



