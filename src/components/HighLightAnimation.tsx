import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import type {HighLightAnimationProps} from '../types';

import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Reanimated, {
  useAnimatedStyle,
  withTiming,
  interpolate,
  withRepeat,
  useSharedValue,
} from 'react-native-reanimated';

const LINEAR_GRADIENT_COLORS = ['transparent', 'black', 'transparent'];
const LINEAR_GRADIENT_START = {x: 0, y: 0};
const LINEAR_GRADIENT_END = {x: 1, y: 0};

export default function HighLightAnimation({
  highLightColor,
  speed,
  direction,
  layout,
}: HighLightAnimationProps) {
  const shared = useSharedValue(0);

  useEffect(() => {
    const animationTiming = withTiming(1, {duration: speed});
    shared.value = withRepeat(animationTiming, Infinity);
  }, []);

  /**
   * High light color animation
   */
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          shared.value,
          direction === 'toRight' ? [0, 1] : [1, 0],
          [layout ? -layout?.width : 0, layout ? layout?.width : 1],
        ),
      },
    ],
  }));

  return (
    <Reanimated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
      <MaskedView
        style={StyleSheet.absoluteFill}
        maskElement={
          <LinearGradient
            start={LINEAR_GRADIENT_START}
            end={LINEAR_GRADIENT_END}
            style={StyleSheet.absoluteFill}
            colors={LINEAR_GRADIENT_COLORS}
          />
        }>
        <View
          style={[StyleSheet.absoluteFill, {backgroundColor: highLightColor}]}
        />
      </MaskedView>
    </Reanimated.View>
  );
}
