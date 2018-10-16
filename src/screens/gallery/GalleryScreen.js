import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/galleryActions';
import Item from '../../components/gallery/Item';

class GalleryScreen extends Component {
  static navigationOptions = {
    title: 'TestApp',
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props;

    return (
      <View>
        <ScrollView>
          {items.map(item => (
            <TouchableHighlight
              key={item.id}
              onPress={() => this.props.navigation.navigate('Item', {
                item
              })}
            >
              <Item
                key={item.id}
                imgUrl={item.urls.regular}
                author={item.user.name}
                description={item.description}
              />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  items: state.gallery.items
});

export default connect(mapStateToProps, { getItems })(GalleryScreen);