import React, { Component } from 'react';
import { View } from 'react-native';
import Item from '../../components/gallery/Item';

class ItemScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.getParam('item', {})
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.item.user.name : '',
    };
  };

  render() {
    return (
      <View>
        <Item
          key={this.state.item.id}
          imgUrl={this.state.item.urls.regular}
        />
      </View>
    );
  }
}

export default ItemScreen;