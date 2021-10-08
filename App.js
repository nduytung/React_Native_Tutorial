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
} from 'react-native';

//hàm này sẽ render ra tất cả các nội dung hiển thị
const App = () => {
  //danh sach cac item se duoc render
  const [items, setItems] = useState([
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'},
    {name: 'item 5'},
    {name: 'item 6'},
    {name: 'item 7'},
    {name: 'item 8'},
    {name: 'item 8'},
    {name: 'item 9'},
    {name: 'item 10'},
    {name: 'item 11'},
    {name: 'item 12'},
  ]);

  const DATA = [
    {
      title: 'title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'title 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3'],
    },
    {
      title: 'title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3'],
    },
    {
      title: 'title 5',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3'],
    },
  ];

  //state này quản lý trạng thái refresh hay không
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    //nếu refresh thì set state để hiển thị nút xoay, sau đó thêm item vào và dừng nút xoay lại
    setRefresh(true);

    //thêm vào list cũ đã có bằng setState
    setItems([...items, {name: 'item 14'}]);
    setRefresh(false);
  };

  return (
    //phan nay danh cho SectionList
    <SectionList
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      keyExtractor={(item, index) => index.toString()}
      numColumns={1}
      sections={DATA}
      // Tự động render ra những thành phần trong mảng con của DATA
      renderItem={({item}) => <Text style={styles.text}> {item} </Text>}
      renderSectionHeader={({section}) => (
        <View style={styles.item}>
          <Text style={styles.text}> {section.title} </Text>
        </View>
      )}
    />

    //phan nay danh cho FlatList
    // <FlatList
    //   refreshControl={
    //     <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
    //   }
    //   keyExtractor={(item, index) => index.toString()}
    //   numColumns={1}
    //   data={items}
    //   renderItem={({item}) => (
    //     <View style={styles.item}>
    //       <Text style={styles.text}> {item.name} </Text>
    //     </View>
    //   )}
    // />
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
