import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraComponent({ onPhotoTaken }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      onPhotoTaken(photo.uri);
    }
  };

  return (
    <View>
      {hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCamera(ref)}
        >
          <Button title="Take a photo" onPress={takePicture} />
        </Camera>
      )}
    </View>
  );
}
