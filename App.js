import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from 'react-navigation';
import GalleryScreen from './src/screens/gallery/GalleryScreen';
import ItemScreen from './src/screens/gallery/ItemScreen';

const RootStack = createStackNavigator(
  {
    Gallery: GalleryScreen,
    Item: ItemScreen,
  },
  {
    initialRouteName: 'Gallery',
  }
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;