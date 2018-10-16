import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

const Item = ({
  imgUrl,
  author,
  description
}) => {
  return (
    <View>
      <Image
        style={{ height: 250 }}
        source={{ uri: imgUrl }}
      />
      <Text>
        {author}
      </Text>
      <Text>
        {description}
      </Text>
    </View >
  )
};

Item.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
};

Item.defaultProps = {
  imgUrl: 'imgUrl'
};

export default Item;