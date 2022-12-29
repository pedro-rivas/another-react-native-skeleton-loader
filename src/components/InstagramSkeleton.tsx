import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

export default function InstragramSkeleton() {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.mainGrap, {width}]}>
      <View style={styles.header}>
        <View style={styles.infoGrap}>
          <View style={styles.avatar} />
          <View style={styles.name} />
        </View>
        <View>
          <View style={styles.bullet} />
          <View style={styles.bullet} />
          <View style={styles.bullet} />
        </View>
      </View>
      <View style={[styles.photo, {width}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainGrap: {
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: 'red',
  },
  infoGrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 5,
    aspectRatio: 1,
    borderRadius: 5,
    marginBottom: 2,
    backgroundColor: 'red',
  },
  name: {
    height: 10,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 4,
  },
  photo: {
    aspectRatio: 1,
    backgroundColor: 'red',
  },
});
