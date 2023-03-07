import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';

import SkeletonLoader from 'another-react-native-skeleton-loader';

export default function App() {

  React.useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      <Text>TODO:</Text>
      <SkeletonLoader>
        <View>
          
        </View>
      </SkeletonLoader>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
