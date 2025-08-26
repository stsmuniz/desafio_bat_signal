import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './Styles';

interface TextFieldProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  multiline?: boolean;
  inputType?: 'text' | 'telephone';
}

export function TextField(props: TextFieldProps) {
  return (
    <View style={styles.container}>
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          multiline={props.multiline}
          style={{ height: props.multiline ? 100 : 40 }}
          keyboardType={props.inputType === 'telephone' ? 'phone-pad' : 'default'}
        />
    </View>
  );
}