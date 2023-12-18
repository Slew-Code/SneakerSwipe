import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function Saved() {
    const [savedShoes, setSavedShoes] = useState([]);
    const isFocused = useIsFocused();

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

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Saved Shoes:</Text>
            {savedShoes.map((shoeId, index) => (
                <Text key={index}>{shoeId}</Text>
            ))}

        </View>        
    );
}

/*
    <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size='large' color={COLORS.primary} />
                ) : error ? (
                    <Text>Something went wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            
                            <PopularJobCard
                                item={item}
                                selectedJob={selectedJob}
                                handleCardPress={handleCardPress}
                            />
                        )}   
                        keyExtractor={(item) => item.job_id}
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        horizontal
                    />
                )}
            </View>
*/