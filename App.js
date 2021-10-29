import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
  //bien name dung de lam vi du cho viec thay doi style trong component
  const [name, setName] = useState('Test your style here !');

  const onClickHandler = () => {
    setName('Style Test is Done!');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        {/* moi button trong RN deu phai co title. Day chinh la ten cu button trong RN */}
        <Button title="Update State" onPress={onClickHandler}></Button>
      </View>
    </View>
  );
};

//Ve ban chat, stylesheet gan giong nhu mot file CSS, no se tao style cho tat ca component ma chung ta muon
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'pink',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button: {
    width: 200,
    height: 60,
  },
});

export default App;
