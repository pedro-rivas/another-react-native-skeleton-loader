import type {LayoutRectangle, ColorValue} from 'react-native';

export type Layout = LayoutRectangle | undefined;
export type Directions = 'toLeft' | 'toRight';

export interface SkeletonBackgroundProps {
  /**
   * The skeleton background color, default: lightgray
   */
  backgroundColor?: ColorValue;
}

export interface HighLightAnimationProps extends SkeletonBackgroundProps {
  /**
   * The skeleton high light color, default: white
   */
  highLightColor?: ColorValue;
  /**
   * The animation speed, default: 1000 ms
   */
  speed?: number;
  /**
   * The animation direction, default: to right.
   */
  direction?: Directions;
  /**
   * The children layout
   */
  layout?: Layout;
}

export interface SkeletonLoaderProps extends HighLightAnimationProps {
  /**
   * The children to be render as skeleton
   */
  children: React.ReactElement;
  /**
   * Used to log debug messages
   */
  debug?: boolean;
  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string | undefined;
}
