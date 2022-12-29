import React from 'react';
import {View, StyleSheet} from 'react-native';

import type {SkeletonBackgroundProps} from '../types';

export default function SkeletonBackground({
  backgroundColor,
}: SkeletonBackgroundProps) {
  return <View style={[styles.background, {backgroundColor}]} />;
}

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});
