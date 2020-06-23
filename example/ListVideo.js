import React, {useRef, useState} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';

import Player from './Player';

const VIDEO_LIST = [
  '9JZHodNR184',
  'WxPtYJRjLL0',
  'j48PqBP-OA0',
  'zZIinXHA3KE',
  'xzZS9WDzGrU',
  'Jk3JZRSeILU',
  'R-m9y4RuHEQ',
  '9JZHodNR184',
  'WxPtYJRjLL0',
  'j48PqBP-OA0',
  'zZIinXHA3KE',
  'xzZS9WDzGrU',
  'Jk3JZRSeILU',
  'R-m9y4RuHEQ',
];

const Placeholder = () => {
  return (
    <View style={styles.item}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

const ListVideo = () => {
  const [visablePostIndex, setVisablePostIndex] = useState(0);

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems[0]) {
      const index = viewableItems[0].index;
      if (typeof index === 'number') {
        setVisablePostIndex(index);
      }
    } else {
      setVisablePostIndex(-1);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 80});

  return (
    <View style={styles.container}>
      <FlatList
        data={VIDEO_LIST}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({item, index}) =>
          index === visablePostIndex ? (
            <Player videoId={item} />
          ) : (
            <Placeholder />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});

export default ListVideo;
