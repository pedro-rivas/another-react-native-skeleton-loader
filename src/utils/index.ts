import {isValidElement} from 'react';
import type {ColorValue} from 'react-native';
import type {Directions} from '../types';

/**
 * Logs debug messages
 */
function log(message: string, debug: boolean) {
  if (debug) {
    console.log(`[SkeletonLoader]: ${message}`);
  }
}

/**
 * Validates the SkeletonLoader props
 */
function assertions(
  children: React.ReactNode,
  speed: number,
  backgroundColor: ColorValue,
  highLightColor: ColorValue,
  direction: Directions,
) {
  if (!children || !isValidElement(children)) {
    throw new Error(
      'You need to pass a valid children, e.g. a <View/> element',
    );
  }

  if (typeof speed !== 'number') {
    throw new Error('You need to pass valid speed number');
  }

  if (
    typeof backgroundColor !== 'string' ||
    typeof highLightColor !== 'string'
  ) {
    throw new Error('You need to pass valid color');
  }

  if (!(direction === 'toLeft' || direction === 'toRight')) {
    throw new Error('You need to pass valid direction, e.g. toLeft | toRight');
  }
}

/**
 * Set the rules to determine if the component should be memorized or not
 * @returns boolean
 */
const memoizedSkeletonLoader = () => true;

export {log, assertions, memoizedSkeletonLoader};
