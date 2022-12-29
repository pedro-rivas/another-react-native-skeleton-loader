import React, {useState, useEffect} from 'react';
import {View, LayoutChangeEvent, StyleSheet} from 'react-native';

import type {SkeletonLoaderProps, Layout} from '../types';
import {log, assertions, memoizedSkeletonLoader} from '../utils';
import {HighLightAnimation, SkeletonBackground} from '.';

import MaskedView from '@react-native-masked-view/masked-view';

const BACKGROUND_COLOR = 'lightgray';
const HIGH_LIGHT_COLOR = 'white';
const ANIMATION_DIRECTION = 'toRight';
const ANIMATION_SPEED = 1000; // 1 sec
const TEST_ID = undefined;

const SkeletonLoader = ({
  children,
  debug = __DEV__,
  backgroundColor = BACKGROUND_COLOR,
  highLightColor = HIGH_LIGHT_COLOR,
  speed = ANIMATION_SPEED,
  direction = ANIMATION_DIRECTION,
  testID = TEST_ID,
}: SkeletonLoaderProps) => {
  const [layout, setLayout] = useState<Layout>(undefined);

  useEffect(() => {
    log('mounted', debug);

    assertions(children, speed, backgroundColor, highLightColor, direction);

    return () => {
      log('unmounted', debug);
    };
  }, []);

  /**
   * Updates the mask layout to take the children dimensions
   */
  const onLayout = ({nativeEvent: {layout}}: LayoutChangeEvent) => {
    const stringifiedLayout = JSON.stringify(layout);
    log(`layout ${stringifiedLayout}`, debug);
    setLayout(layout);
  };

  if (!layout) {
    return (
      <View onLayout={onLayout} style={styles.transparentSkeleton}>
        {children}
      </View>
    );
  }

  return (
    <MaskedView
      testID={testID}
      maskElement={children}
      style={[{width: layout.width, height: layout.height}]}>
      <SkeletonBackground {...{backgroundColor}} />
      <HighLightAnimation
        {...{
          layout,
          highLightColor,
          speed,
          direction,
        }}
      />
    </MaskedView>
  );
};

export default React.memo(SkeletonLoader, memoizedSkeletonLoader);

const styles = StyleSheet.create({
  transparentSkeleton: {
    opacity: 0,
  },
});
