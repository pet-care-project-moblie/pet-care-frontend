import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Dimensions } from '@/constants/Diamensions';
import { useUser } from '../ctx';
import Person from '@/assets/images/Person';

export default function TabLayout() {

  const user = useUser();

  if (user.data === null) {
    return <Redirect href="/sign-in" />;
  }


  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: Dimensions.percentageHeight(6),
          shadowColor: Colors.light.semantic.success,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
          paddingHorizontal: Dimensions.percentageWidth(2),
          paddingVertical: Dimensions.percentageHeight(2.5),
        },
      }}
      backBehavior="history"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
        <Tabs.Screen
          name="service"
          options={{
            title: 'Service',
            tabBarIcon: ({ color }) => <Person height={28} color={color} />,
          }}
        />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Person height={28} color={color} />,
        }}
      />
    </Tabs>
  );
}