import React from 'react';
import { View, Text } from 'react-native';

import { TRate } from '@/domain/entities/Rate';

import { styles } from './styles';

export const RateItem = React.memo(({ item }: { item: TRate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.content}>
        <View style={styles.infoContent}>
          <Text style={styles.textLabel}>Currency:</Text>
          <Text style={styles.textValue}>
            {item.alphaCode} ({item.code})
          </Text>
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.textLabel}>Conversion Rate:</Text>
          <Text style={styles.textValue}>{item.rate}</Text>
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.textLabel}>Inverse Rate:</Text>
          <Text style={styles.textValue}>{item.inverseRate}</Text>
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.textLabel}>Last Updated:</Text>
          <Text style={styles.textValue}>
            {new Date(item.date).toLocaleString()}
          </Text>
        </View>
      </View>
    </View>
  );
});
