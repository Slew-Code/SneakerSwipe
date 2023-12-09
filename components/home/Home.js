import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";


import Swiper from 'react-native-deck-swiper'

import styles from "./Home.style";
import { SIZES } from "../../constants/theme";

import useFetch from "../../hook/useFetch";

export default function Home() {  

    //Set the state of the search query, initially empty
    const [searchQuery, setSearchQuery] = useState('');

    //Set the default search tab 
    const [activeJobType, setActiveJobType] = useState("Full-time");
    const jobTypes = ["Nike", "Adidas", "New Balance"];

    /*
    const { data, isLoading, error } = useFetch(
        'getSneakers', {
            limit: 10,
        }
    )*/

    const { data, isLoading, error } = useFetch("search", {
        query: 'React developer',
        num_pages: 1,
    });
 
    console.log(data);

    const handleClick = () => {
        console.log("clicked");
    }

    return (
        <View>
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
                        cards={['0', '1', '2', '3', '4', '5', '6', '7']}
                        //cards={data}
                        renderCard={(card) => {
                            return (
                                <View style={styles.card}>
                                    <Text style={styles.text}>{card}</Text>
                                </View>
                            )
                        }}
                        onSwipedLeft={(cardIndex) => { console.log(cardIndex + " Swiped Left") }}
                        onSwipedRight={(cardIndex) => { console.log(cardIndex + " Swiped Right") }}
                        onSwipedAll={() => { console.log('onSwipedAll') }}
                        // onSwiping={} change colour of card based on card coordinates
                        onTapCard={(cardIndex) => { console.log(cardIndex + " Pressed") }} // Take to shoe info on tap 
                        verticalSwipe={false}
                        cardIndex={0}
                        stackSize={3}
                        cardVerticalMargin={0}
                        marginBottom={Dimensions.get('window').height * 0.50}
                        overlayLabels={{
                            left: {
                                title: 'NOPE',
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
                                title: 'LIKE',
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
                        animateOverlayLabelsOpacity
                    >
                    </Swiper>
                </View>
            </View>
        </View>
    );
}