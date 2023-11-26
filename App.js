import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useState } from "react";

import styles from "./components/Home.style";
//import { COLORS, icons, images, SIZES } from "./constants";

function Home() {
  
  //Set  the state of the search query, initially empty
  const [searchQuery, setSearchQuery] = useState('');


  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <View >
      
      <Text style={styles.header}>Swipe on Sneakers here!</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}> 
          <Ionicons name="search" size={25} />
        </TouchableOpacity>
      
      </View>

    </View>
  );
}

function Saved() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved Sneakers will appear here!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile settings here??</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Sneakers',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          headerTitle: "SneakerSwipe",
        }}  
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
          tabBarBadge: 3, // figure out how to change this to the total number of saved sneakers within here 
          headerTitle: "SneakerSwipe",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerTitle: "SneakerSwipe",
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
