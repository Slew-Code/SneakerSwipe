import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function Saved() {
    const [savedShoes, setSavedShoes] = useState([]);
    const [sneakerData, setSneakerData] = useState([]);
    const isFocused = useIsFocused();

    /*
    useEffect(() => {
        // Fetch data for all the sneaker IDs when savedShoes changes
        if (savedShoes.length > 0) {
            
            // Create an array of promises for each fetch request
            const fetchPromises = savedShoes.map((sneakerId) =>
                useFetch('getSneakersById', { sneakerId })
            );

            // Use Promise.all to execute all fetch requests concurrently
            Promise.all(fetchPromises)
                .then((results) => {
                // 'results' will be an array containing responses for each sneaker ID
                setSneakerData(results.map((result) => result.data));
                })
                .catch((error) => {
                console.error('Error fetching sneaker data:', error);
                });
            }
    }, [savedShoes]);
    */

    useEffect(() => {
        // Mock data with image URLs and text details for testing
        const mockData = [
            {
                id: 1454,
                image: 'https://image.goat.com/375/attachments/product_template_pictures/images/079/484/521/original/508079_00.png.png',
                title: 'Card Title 1',
                description: 'Description for Card 1',
                estimatedMarketValue: 185,
                link: "https://stockx.com/air-jordan-1-retro-high-bloodline"
            },
            {
                id: 3464,
                image: "https://image.goat.com/375/attachments/product_template_pictures/images/033/250/439/original/BZ0028.png.png",
                title: 'adidas Gazelle Blue',
                description: 'Description for Card 3',
                estimatedMarketValue: 80,
                link: "https://stockx.com/adidas-gazelle-blue"

            },

        ];
        setSneakerData(mockData);
    }, []);
    
    useEffect(() => {
        if (isFocused) {
            retrieveSavedShoes();
        }
    }, [isFocused]);

    const retrieveSavedShoes = async () => {
        try {
            const savedShoesString = await AsyncStorage.getItem('savedShoes');
            if (savedShoesString) {
                const savedShoesArray = JSON.parse(savedShoesString);
                setSavedShoes(savedShoesArray);
            }
        } catch (error) {
            console.error('Error retrieving saved shoes:', error);
        }
    };

    const removeAllSavedShoes = async () => {
        try {
            await AsyncStorage.removeItem('savedShoes');
            setSavedShoes([]); // Clear the saved shoes state
            Alert.alert('All saved shoes removed');
        } catch (error) {
            console.error('Error removing saved shoes:', error);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Saved Shoes:</Text>
            {savedShoes.map((shoeId, index) => (
                <Text key={shoeId}>{sneakerData[index].title}</Text>
            ))}

            <TouchableOpacity onPress={removeAllSavedShoes} style={{ marginTop: 20 }}>
                <Text style={{ color: 'red' }}>Remove All Saved Shoes</Text>
            </TouchableOpacity>           
        </View>        
    );
}