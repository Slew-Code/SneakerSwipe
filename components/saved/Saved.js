import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import SavedShoeCard from './SavedShoeCard';
import styles from "./Saved.style";
import mockData from '../../constants/mockData.js';

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