import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}>
        {props.title}
    </Text>
    </TouchableOpacity>
  );
}