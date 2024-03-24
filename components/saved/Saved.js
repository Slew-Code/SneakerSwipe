import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import SavedShoeCard from './SavedShoeCard';
import styles from "./Saved.style";

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
                /*
                id: 1454,
                image: 'https://image.goat.com/375/attachments/product_template_pictures/images/079/484/521/original/508079_00.png.png',
                title: 'Jordan 1 Retro High',
                description: 'Description for Card 1',
                estimatedMarketValue: 185,
                link: "https://stockx.com/air-jordan-1-retro-high-bloodline"
                */
                id: 1454,
                image: 'https://image.goat.com/attachments/product_template_pictures/images/079/487/442/original/560709_00.png.png',
                title: 'Yeezy Slides Resin',
                description: 'Description for Card 1',
                estimatedMarketValue: 99,
                link: "https://stockx.com/air-jordan-1-retro-high-bloodline"

            },
            {
                id: 2456,
                image: 'https://image.goat.com/375/attachments/product_template_pictures/images/081/096/394/original/616017_00.png.png',
                title: 'Nike SB Dunk Low Ben & Jerry\'s Chunky Dunky',
                description: 'Description for Card 2',
                estimatedMarketValue: 1185,
                link: "https://stockx.com/nike-sb-dunk-low-ben-jerrys-chunky-dunky"

            },
            {
                id: 3464,
                image: "https://image.goat.com/375/attachments/product_template_pictures/images/033/250/439/original/BZ0028.png.png",
                title: 'Adidas Gazelle Blue',
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

    // POTENTIAL ERROR IF A SAVED SHOE CAN NO LONGER BE FOUND IN THE DATABASE
    const retrieveSavedShoes = async () => {
        try {  
            const savedShoesString = await AsyncStorage.getItem('savedShoes');
            if (savedShoesString) {
                const savedShoesArray = JSON.parse(savedShoesString);
                setSavedShoes(savedShoesArray);
                console.log('Saved Shoes 2:', await AsyncStorage.getItem('savedShoes'));
            }
        } catch (error) {
            console.error('Error retrieving saved shoes:', error);
        }
    };

    const removeSavedShoe = async (shoeId) => {
        
        try {
            // Get the current saved shoes
            const savedShoesString = await AsyncStorage.getItem('savedShoes');
            let savedShoesArray = savedShoesString ? JSON.parse(savedShoesString) : [];

            // Remove the shoe with the given ID
            savedShoesArray = savedShoesArray.filter((id) => id !== shoeId);

            await AsyncStorage.removeItem('savedShoes');

            // Update AsyncStorage and state
            await AsyncStorage.setItem('savedShoes', JSON.stringify(savedShoesArray));
            setSavedShoes(savedShoesArray);

            Alert.alert('Shoe removed successfully');
        } catch (error) {
            console.error('Error removing saved shoe:', error);
        }
        
        console.log("Delete Shoe Pressed " + shoeId)
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
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Text style={{ textAlign: 'center'}}>Saved Shoes:</Text>
            
            <ScrollView style={styles.cardsContainer} >
                {savedShoes?.map((shoeId) => (
                    <SavedShoeCard  
                        shoe={sneakerData.find(shoe => shoe.id === shoeId)}
                        key={shoeId}
                        handleNavigate={() => console.log("Saved Shoe Pressed")}
                        onDeletePress={() => removeSavedShoe(shoeId)}
                    />
                ))}
            </ScrollView>   
            
            <TouchableOpacity onPress={removeAllSavedShoes} style={{ marginBottom: 20 }}>
                <Text style={{ color: 'red', textAlign: 'center' }}>Remove All Saved Shoes</Text>
            </TouchableOpacity>           
        </View>        
    );
}