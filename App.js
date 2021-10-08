import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  Modal,
  Alert,
  ToastAndroid,
} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) setSubmitted(!submitted);
    else {
      setShowWarning(true);
    }
  };

  return (
    <View style={styles.body}>
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

      <Pressable
        delayLongPress={2000}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        android_ripple={{color: 'dodgerblue'}}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'white' : 'lime',
          },
          styles.button,
        ]}
        onPress={onPressHandler}>
        <Text style={styles.text}> {submitted ? 'Clear' : 'Submit'} </Text>
      </Pressable>
      {submitted ? (
        <Text style={styles.text}> You are registered as {name} </Text>
      ) : null}
    </View>
  );
};

//ta có thể hiểu "styles" này gần giống như một file css, nó format lại định dạng hiển thị cho chúng ta
//các classname gần tương tự như ở CSS, ta có thể sử dụng extension auto import để nó gợi ý
const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: '#555',
    width: 200,
    fontSize: 15,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 10,
  },

  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
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
});

export default App;
