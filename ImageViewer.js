import React from 'react';
import { View, Image, Button } from 'react-native';

export default function ImageViewer({ imageUri, onDeleteImage }) {
  return (
    <View>
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <Button title="Delete" onPress={() => onDeleteImage(imageUri)} />
    </View>
  );
}
