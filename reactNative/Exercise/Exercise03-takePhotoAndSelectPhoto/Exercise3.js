import { StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import {Camera} from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export default function App () {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  if (hasPermission === null || hasGalleryPermission === null) {
    return <View />;
  };
  if (hasPermission === false || hasGalleryPermission === false) {
    return <Text>No access to camera</Text>;
  }
  ;

  const takePicture = async () => {
    if (camera) {
      const data =await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if(!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref=>setCamera(ref)}
          style={styles.fixedRatio}
          ratio={'1:1'}
          type={type}
        ></Camera>
      </View>
      <Button
        onPress={() => {
            if(type === Camera.Constants.Type.back ) {
              setType(Camera.Constants.Type.front);
            } else {
              setType(Camera.Constants.Type.back);
            };
        }}
        title = "Flip"
      ></Button>
      <Button
        onPress={() => takePicture()}
        title = "Take Picture"
      ></Button>
      <Button
        onPress={() => pickImage()}
        title = "Pick Image From Gallery"
      ></Button>
      {image && <Image source={{uri: image}} style={{flex: 1}}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 20,
  },
  button:{
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  }, 
  text: {
    fontSize: 18,
    color: 'white',
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  }
 
 
});
