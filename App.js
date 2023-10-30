import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import ImagePickerComponent from './ImagePicker';
import CameraComponent from './Camera';
import ImageViewer from './ImageViewer';

export default function App() {
  const [images, setImages] = useState([]);

  const handleImageSelected = (imageUri) => {
    setImages([...images, imageUri]);
  };

  const handlePhotoTaken = (photoUri) => {
    setImages([...images, photoUri]);
  };

  const handleDeleteImage = (imageUri) => {
    const updatedImages = images.filter((uri) => uri !== imageUri);
    setImages(updatedImages);
  };

  return (
    <View>
      <ScrollView horizontal>
        {images.map((imageUri, index) => (
          <ImageViewer key={index} imageUri={imageUri} onDeleteImage={handleDeleteImage} />
        ))}
      </ScrollView>
      <ImagePickerComponent onImageSelected={handleImageSelected} />
      <CameraComponent onPhotoTaken={handlePhotoTaken} />
    </View>
  );
}
