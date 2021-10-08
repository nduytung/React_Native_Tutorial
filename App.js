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
} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    setSubmitted(!submitted);
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}> Please write your name: </Text>
      <TextInput
        style={styles.input}
        // multiline
        // maxLength={4}
        // keyboardType="decimal-pad"
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />

      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} /> */}

      {/* <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPressHandler}>
        <Text style={styles.text}> {submitted ? 'Clear' : 'Submit'} </Text>
      </TouchableOpacity> */}

      {/* <TouchableHighlight
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPressHandler}>
        <Text style={styles.text}> {submitted ? 'Clear' : 'Submit'} </Text>
      </TouchableHighlight> */}

      {/* 
      <TouchableWithoutFeedback onPress={onPressHandler}>
        <View style={styles.button}>
          <Text style={styles.text}> {submitted ? 'Clear' : 'Submit'} </Text>
        </View>
      </TouchableWithoutFeedback> */}

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
    fontStyle: 'italic',
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
});

export default App;
