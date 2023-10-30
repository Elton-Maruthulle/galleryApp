import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerComponent({ onImageSelected }) {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      onImageSelected(result.uri);
    }
  };

  return (
    <View>
      <Button title="Pick an image from the gallery" onPress={pickImage} />
    </View>
  );
}
