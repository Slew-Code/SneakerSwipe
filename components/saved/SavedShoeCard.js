import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet, ScrollView } from "react-native";

import styles from "./SavedShoeCard.style";
import {checkImageURL} from "../../utils/utility";
import { MaterialCommunityIcons} from '@expo/vector-icons';

const SavedShoeCard = ({ shoe, handleNavigate, onDelete }) => {
  
  // Functions for Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  // Handle click for delete Icon
  const handleClick = () => {
    console.log("clicked");
  }
   
  return (
      <TouchableOpacity style={styles.container} onPress={openModal}>
        <TouchableOpacity style={styles.logoContainer} onPress={openModal}>
          <Image
            source={{
              uri: checkImageURL(shoe.image)
                ? shoe.image
                : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
            }}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.shoeName}>
            {shoe?.title}
          </Text>

          <TouchableOpacity style={styles.deleteBtn} onPress={handleClick}>
            <MaterialCommunityIcons name="delete" size={35} color="red" />
          </TouchableOpacity>
        </View>

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
                
                <Image source={{ uri: shoe?.image }} style={styles.image} />
                <Text>Title: {shoe?.title}</Text>
                <Text>Description: {shoe?.description}</Text> 

                <TouchableOpacity onPress={closeModal}>
                  <Text>Close Modal</Text>
                </TouchableOpacity>
              
              </ScrollView>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
  );
};

export default SavedShoeCard;