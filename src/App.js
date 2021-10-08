import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';
import CustomButton from './CustomButton';
import Header from './Header';
//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  //kiểm tra điều kiện và render
  const onPressHandler = () => {
    if (name.length > 3) setSubmitted(!submitted);
    else {
      setShowWarning(true);
    }
  };

  return (
    <ImageBackground
      style={styles.body}
      //cách thứ nhất để chèn ảnh vào RN: URI
      source={{
        uri: 'https://apsachieveonline.org/wp-content/uploads/2020/02/1580739685_937_34-Hinh-nen-iOS-co-dien-danh-cho-iPhone-Ban.jpg',
      }}>
      <Header />
      <Modal
        visible={showWarning}
        transparent
        animationType={'fade'}
        onRequestClose={() => setShowWarning(false)}>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}> WARNING! </Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <Pressable
              style={styles.warning_button}
              android_ripple={{color: 'white'}}
              onPress={() => setShowWarning(false)}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}> Please write your name: </Text>
      <TextInput
        style={styles.input}
        // multiline
        // maxLength={4}
        // keyboardType="decimal-pad"
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />

      <CustomButton
        onPressHandler={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
        style={{margin: 40}}
      />
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}> You are registered as {name} </Text>
          <Image
            source={require('../assets/done.png')}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
      ) : (
        <Image
          source={require('../assets/error.jpg')}
          style={styles.image}
          resizeMode="stretch"
        />
      )}
    </ImageBackground>
  );
};

//ta có thể hiểu "styles" này gần giống như một file css, nó format lại định dạng hiển thị cho chúng ta
//các classname gần tương tự như ở CSS, ta có thể sử dụng extension auto import để nó gợi ý
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },

  item: {
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
  },

  input: {
    borderRadius: 5,
    borderColor: 'white',
    width: 200,
    fontSize: 15,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
  },

  centered_view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    border: 1,
    borderColor: 'black',
    borderRadius: 20,
    overflow: 'hidden',
    //overflow:hidden để ta không cần set border cho 2 component header và nút ok kia như video
  },
  warning_title: {
    backgroundColor: 'yellow',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning_body: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  warning_button: {
    backgroundColor: 'cyan',
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
