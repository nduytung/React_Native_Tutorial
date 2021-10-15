// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/utils/Intro';
import {FlatList, Text} from 'react-native';

test('renders correctly', () => {
  //const tree cho phep chung ta test rieng screen nay ma KHONG BI ANH HUONG boi dom hay bat ky tac dong nao cua jsdom
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('render flatlist', () => {
  const tree = renderer
    .create(
      <FlatList
        data={['Item 1', 'Item 2', 'Item 3']}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text>{item} </Text>}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
