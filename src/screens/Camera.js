import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import CustomButton from '../utils/CustomButton';
import RNFS from 'react-native-fs';

const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  //ham nay dung de handle viec chup hinh
  const captureHandle = async () => {
    try {
      const data = await takePicture();
      console.log('captures success: ' + data.uri); //lay ra noi luu anh nay trong may

      //su dung fs de luu nos vao noi khac
      const filePath = data.uri;
      const newFilePath = RNFS.ExternalDirectoryPath + '/myTest.jpg';
      RNFS.moveFile(filePath, newFilePath)
        .then(() => Alert.alert('Moved successfully'))
        .catch(err => console.log(err));
    } catch (err) {
      console.log('try again ' + err);
    }
  };
  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back} //type=back thi camera mac dinh se la camera sau
        style={styles.preview}>
        {/* RNCamera khong co nut chup, nen ta se phai tu lam nut chup */}
        <CustomButton title="Capture" onPressHandler={() => captureHandle()} />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Camera;
