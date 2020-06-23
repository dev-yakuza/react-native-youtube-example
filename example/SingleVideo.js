import React from 'react';
import {View, StyleSheet} from 'react-native';

import Player from './Player';

const SingleVideo = () => {
  return (
    <View style={styles.container}>
      <Player videoId="KVZ-P-ZI6W4" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default SingleVideo;
