import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  ScrollView,
  RefreshControl,
} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  //danh sach cac item se duoc render
  const [items, setItems] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
    {key: 7, item: 'item 7'},
    {key: 8, item: 'item 8'},
    {key: 9, item: 'item 8'},
    {key: 10, item: 'item 9'},
    {key: 11, item: 'item 10'},
    {key: 12, item: 'item 11'},
    {key: 13, item: 'item 12'},
  ]);

  //state này quản lý trạng thái refresh hay không
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    //nếu refresh thì set state để hiển thị nút xoay, sau đó thêm item vào và dừng nút xoay lại
    setRefresh(true);

    //thêm vào list cũ đã có bằng setState
    setItems([...items, {key: 14, item: 'item 14'}]);
    setRefresh(false);
  };

  return (
    //chèn file styles.body vào đây
    <ScrollView
      //được gọi mỗi khi ta kéo xuống để refresh trang
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }>
      {items.map(object => {
        return (
          <View style={styles.item} key={object.key}>
            <Text style={styles.text}> {object.item} </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

//ta có thể hiểu "styles" này gần giống như một file css, nó format lại định dạng hiển thị cho chúng ta
//các classname gần tương tự như ở CSS, ta có thể sử dụng extension auto import để nó gợi ý
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderRadius: 10,
    alignItems: 'stretch',
  },

  item: {
    backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    color: 'black',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
