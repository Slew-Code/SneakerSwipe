import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, FlatList, Image, Modal, Linking, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import Swiper from 'react-native-deck-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./Home.style";
import { SIZES } from "../../constants/theme";

import useFetch from "../../hook/useFetch";

import mockData from '../../constants/mockData.js';

export default function Home() {

    //Set the state of the search query, initially empty
    const [searchQuery, setSearchQuery] = useState('');

    //Set the default search tab 
    const [activeShoeType, setActiveShoeType] = useState("Popular");
    const shoeTypes = ["Popular", "Rare", "New Release", "Nike", "Adidas", "New Balance"];

    //const [currentIndex, setCurrentIndex] = useState(0);
    const [swiping, setSwiping] = useState(true);

    // ARE BOTH of these needed??
    const [data, setData] = useState([]);
    const [savedShoes, setSavedShoes] = useState([]);

    
    //Mock data for the swiper
    useEffect(() => {
        setData(mockData);
    }, []); 
    

    /*
    useEffect(() => {
        // Mock data with image URLs and text details for testing
        setData(mockData);
    }, []); 

    /*
    const { data, isLoading, error } = useFetch(
        'getSneakers', {
            limit: 10,
        }
    );*/
    
    //console.log(data);
        
    const delaySwipe = () => {
        setTimeout(() => {
            setSwiping(true); // Enable swiping after a delay
        }, 250); // Adjust the delay time (in milliseconds) as needed
    };

    const onSwiped = () => {
        //setCurrentIndex(index + 1);
        setSwiping(false); // Disable swiping after a swipe
        delaySwipe(); // Introduce delay between swipes
    };


    // POTENTIAL ERROR IF A SAVED SHOE CAN NO LONGER BE FOUND IN THE DATABASE
    const onSwipedRight = async (cardIndex) => {
        console.log(cardIndex + " Swiped Right")

        try {
            // Get the current saved shoes or initialize an empty array
            const savedShoesString = await AsyncStorage.getItem('savedShoes');
            const savedShoesArray = savedShoesString ? JSON.parse(savedShoesString) : [];
            //const savedShoesArray = [];

            // Save the ID of the swiped right shoe
            const shoeId = data[cardIndex].id;
            if (!savedShoesArray.includes(shoeId)) {
                savedShoesArray.push(shoeId);
                await AsyncStorage.setItem('savedShoes', JSON.stringify(savedShoesArray));
                setSavedShoes(savedShoesArray);
            }

            //await AsyncStorage.setItem('savedShoes', JSON.stringify(cardIndex));

        } catch (error) {
            console.error('Error saving shoe:', error);
        }

        console.log('Saved Shoes:', await AsyncStorage.getItem('savedShoes'));
    }

    const handleClick = () => {
        console.log("Search clicked: " + searchQuery);
    }

    const handleBuyPress = (link) => {
        Linking.openURL(link)
            .catch((err) => console.error('An error occurred', err));
    };

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardTap = (cardIndex) => {
        setSelectedCard(cardIndex)
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const isLinkAvailable = (link) => link && link !== '';

    const getButtonTextStyle = (linkAvailable) => ({
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: '100%',
        fontSize: linkAvailable ? 12 : 8, // Adjust font size based on link availability
    });

    return (
        <LinearGradient
            style={styles.container}
            colors={['white', '#dbdbdb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        placeholder='What are you looking for?'
                    />

                    <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                        <Ionicons name="search" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={styles.tabsContainer}>
                    <FlatList
                        data={shoeTypes}
                        numColumns={3} // Set the number of columns to 3 for two lines with three items each
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activeShoeType, item)}
                                onPress={() => {
                                    setActiveShoeType(item);
                                    //router.push(`/search/${item}`);
                                    console.log("search tab pressed: " + item);
                                }}
                            >
                                <Text style={styles.tabText(activeShoeType, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                        scrollEnabled={false}
                    //centerContent
                    />
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.cardWrapper}>
                        <Swiper
                            //cards={['0', '1', '2', '3', '4', '5', '6', '7']}
                            cards={data}
                            cardStyle={styles.card}
                            renderCard={(card) => {
                                if (!card) {
                                    //return null; // Return null or a placeholder if sneaker data is not available
                                    return (
                                        <View style={styles.cards}>
                                            <Text style={styles.text}>Loading...</Text>
                                        </View>
                                    );
                                }

                                return (

                                    <View style={styles.cards}>
                                        <Image source={{ uri: card.image }} style={styles.image} />
                                        <Text style={styles.cardTitle}>{card.title}</Text>
                                        <Text style={styles.cardDescription}>Estimated Market Value: {card.estimatedMarketValue}</Text>
                                        <Text style={styles.cardDescription}>Available Here:</Text>
                                        <View style={styles.buttonContainer}>

                                            {Object.entries(card.links).map(([key, link]) => {
                                                let buttonText = '';
                                                let buttonStyle = {};

                                                if (isLinkAvailable(link)) {
                                                    if (key === 'stockX') { buttonText = 'StockX' }
                                                    else if (key === 'goat') { buttonText = 'GOAT' }
                                                    else if (key === 'flightClub') { buttonText = 'Flight Club' }
                                                    else if (key === 'stadiumGoods') { buttonText = 'Stadium Goods' }
                                                } else {
                                                    buttonText = 'Unavailable';
                                                    buttonStyle = { backgroundColor: '#CCCCCC', borderColor: '#CCCCCC' };
                                                }

                                                return (
                                                    <TouchableOpacity
                                                        key={`link-${key}`}
                                                        onPress={() => handleBuyPress(link)}
                                                        style={[styles.buyButton, buttonStyle]}
                                                        disabled={!isLinkAvailable(link)}
                                                    >
                                                        <Text style={getButtonTextStyle(isLinkAvailable(link))}>
                                                            {buttonText}
                                                        </Text>
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </View>
                                    </View>


                                )
                            }}
                            //keyExtractor={(item) => item.job_id}
                            onSwipedLeft={(cardIndex) => { console.log(cardIndex + " Swiped Left") }}
                            onSwipedRight={(cardIndex) => onSwipedRight(cardIndex)}
                            onSwipedAll={() => { console.log('onSwipedAll') }}
                            //onSwiping={} change colour of card based on card coordinates

                            //cardIndex={currentIndex}
                            cardIndex={0}
                            onSwiped={onSwiped}
                            horizontalSwipe={swiping}

                            //onTapCard={(cardIndex) => { console.log(cardIndex + " Pressed") }} // Take to shoe info on tap 
                            onTapCard={(cardIndex) => handleCardTap(cardIndex)}

                            verticalSwipe={false}
                            stackSize={5}
                            //infinite={true}
                            cardVerticalMargin={0}
                            //marginBottom={Dimensions.get('window').height * 0.50}
                            overlayLabels={{
                                left: {
                                    title: 'Nope',
                                    style: {
                                        label: {
                                            backgroundColor: 'red',
                                            borderColor: 'black',
                                            color: 'white',
                                            borderWidth: 1,
                                            marginTop: 30,
                                            marginRight: 10,
                                        },
                                        wrapper: {
                                            //backgroundColor: 'red',
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-start',
                                        }
                                    }
                                },
                                right: {
                                    title: 'Dope',
                                    style: {
                                        label: {
                                            backgroundColor: 'green',
                                            borderColor: 'black',
                                            color: 'white',
                                            borderWidth: 1,
                                            marginTop: 30,
                                            marginLeft: 10,
                                        },
                                        wrapper: {
                                            //backgroundColor: 'green',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                        }
                                    }
                                }
                            }}
                            animateOverlayLabelsOpacity // labels fade in when you begin to swipe
                            overlayOpacityHorizontalThreshold={Dimensions.get('window').width / 10} // the point at which the overlay can appear 
                            // The range from which the opacity goes from 0 to 1 for the overlay
                            inputOverlayLabelsOpacityRangeX={[-Dimensions.get('window').width / 3, 0, 0, 0, Dimensions.get('window').width / 3]}
                        >
                        </Swiper>

                        {/* Modal */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={isModalVisible}
                            onRequestClose={closeModal}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                                        <TouchableOpacity onPress={closeModal}>
                                            <Text>Close Modal</Text>
                                        </TouchableOpacity>

                                        {selectedCard !== null && data[selectedCard] && (
                                            <>
                                                <Text style={styles.modalTitle}>{data[selectedCard].title}</Text>
                                                <View style={styles.modalLogoContainer}>
                                                    <Image
                                                        source={{ uri: data[selectedCard].image }}
                                                        style={styles.modalLogoImage}
                                                        resizeMode='contain'
                                                    />
                                                </View>
                                                <Text style={styles.modalDescription}>{data[selectedCard].story}</Text>
                                                {/* Add more details from the data[selectedCard] as needed */}
                                            </>
                                        )}
                                    </ScrollView>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}