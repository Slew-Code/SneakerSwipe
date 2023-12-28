import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, FlatList, Image, Modal, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import Swiper from 'react-native-deck-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./Home.style";
import { SIZES } from "../../constants/theme";

import useFetch from "../../hook/useFetch";

export default function Home() {  

    //Set the state of the search query, initially empty
    const [searchQuery, setSearchQuery] = useState('');

    //Set the default search tab 
    const [activeJobType, setActiveJobType] = useState("Full-time");
    const jobTypes = ["Nike", "Adidas", "New Balance"];

    //const [currentIndex, setCurrentIndex] = useState(0);
    const [swiping, setSwiping] = useState(true);

    const [data, setData] = useState([]);
    const [savedShoes, setSavedShoes] = useState([]);
    
    // Mock data for the swiper
    useEffect(() => {
        // Mock data with image URLs and text details for testing
        const mockData = [
            {
                id: 1454,
                image: "https://image.goat.com/375/attachments/product_template_pictures/images/079/484/521/original/508079_00.png.png",
                title: 'Jordan 1 Retro High',
                description: 'Description for Card 1',
                estimatedMarketValue: 185,
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
        setData(mockData);
    }, []);

    /*
    const { data, isLoading, error } = useFetch(
        'getSneakers', {
            limit: 10,
        }
    )

    const { data, isLoading, error } = useFetch("search", {
        query: 'React developer',
        num_pages: 1,
    });
    // /console.log(data);*/

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
        console.log("clicked");
    }

    const handleBuyPress = (link) => {
        // Replace 'https://example.com' with the actual external URL you want to open
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

    return (
        <LinearGradient
            style={styles.container}
            colors={['white', '#dbdbdb']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >       
            <View>
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

                <View style={styles.tabsContainer}>
                    <FlatList
                        data={jobTypes}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activeJobType, item)}
                                onPress={() => {
                                    setActiveJobType(item);
                                    //router.push(`/search/${item}`);
                                    console.log("search tab pressed");
                                }}
                            >
                                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item}
                        contentContainerStyle={{ columnGap: SIZES.small }}
                        horizontal
                        centerContent
                    />
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.cardWrapper}>
                        
                        <Swiper
                            //cards={['0', '1', '2', '3', '4', '5', '6', '7']}
                            cards={data} 
                            renderCard={(card) => {
                                if (!card) {
                                    //return null; // Return null or a placeholder if sneaker data is not available
                                    return (
                                        <View style={styles.card}>
                                            <Text style={styles.text}>Loading...</Text>
                                        </View>
                                    );
                                }
                                
                                return (
                                    <View style={styles.card}>
                                        <Image source={{ uri: card.image }} style={styles.image} />
                                        <Text style={styles.cardTitle}>{card.title}</Text>
                                        <Text style={styles.cardDescription}>Estimated Market Value: {card.estimatedMarketValue}</Text>
                                        <TouchableOpacity onPress={() => handleBuyPress(card.link)} style={styles.buyButton}>
                                            <Text style={styles.buyButtonText}>Buy Now</Text>
                                        </TouchableOpacity>
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
                            marginBottom={Dimensions.get('window').height * 0.50}
                            overlayLabels={{
                                left: {
                                    title: 'Nope',
                                    style: {
                                        label: {
                                            backgroundColor: 'red',
                                            borderColor: 'black',
                                            color: 'white',
                                            borderWidth: 1
                                        },
                                        wrapper: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-end',
                                            justifyContent: 'flex-start',
                                            marginTop: 30,
                                            marginLeft: -40
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
                                            borderWidth: 1
                                        },
                                        wrapper: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            justifyContent: 'flex-start',
                                            marginTop: 30,
                                            marginLeft: 0
                                        }
                                    }
                                }
                            }}
                            animateOverlayLabelsOpacity // labels fade in when you begin to swipe
                            overlayOpacityHorizontalThreshold={Dimensions.get('window').width / 10} // the point at which the overlay can appear 
                            // The range from which the opacity goes from 0 to 1 for the overlay
                            inputOverlayLabelsOpacityRangeX={[-Dimensions.get('window').width / 2, -Dimensions.get('window').width / 10, 0, Dimensions.get('window').width / 10, Dimensions.get('window').width / 2]}
                        >
                        </Swiper>

                        {/* Modal */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={isModalVisible}
                            onRequestClose={closeModal}
                        >
                            <View style={styles1.modalContainer}>
                                <View style={styles1.modalContent}>
                                    <Text>Card Details:</Text>
                                    <Text>{selectedCard}</Text>
                                    {/*<Text>{data[selectedCard].title}</Text>*/}
                                    <TouchableOpacity onPress={closeModal}>
                                        <Text>Close Modal</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles1 = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: "90%",
        height: "50%",
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
});