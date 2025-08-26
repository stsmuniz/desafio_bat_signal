import React from 'react';
import { Alert, Image, TouchableOpacity, View } from 'react-native';

import { styles } from './Styles';
import { Button } from '../Button/Index';
import { TextField } from '../TextField/Index';

interface FormProps {
    onPressLogo: () => void;
}

export function Form(props: FormProps) {
    const [formData, setFormData] = React.useState({
        name: '',
        telephone: '',
        location: '',
        emergency: ''
    });

  return (
    <>
        <View style={styles.header}>
            <TouchableOpacity onPress={props.onPressLogo}>
                <Image
                source={require('../../../assets/bat_logo.png')}
                style={styles.image}
                resizeMode="contain"
            />
            </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <TextField
                placeholder="Name"
                value={formData.name}
                onChangeText={text => setFormData({ ...formData, name: text })} />
            <TextField
                placeholder="Telephone"
                inputType='telephone'
                value={formData.telephone}
                onChangeText={text => setFormData({ ...formData, telephone: text })} />
            <TextField
                placeholder="Current Location"
                value={formData.location}
                onChangeText={text => setFormData({ ...formData, location: text })} />
            <TextField
                placeholder="Describe your emergency"
                value={formData.emergency}
                onChangeText={text => setFormData({ ...formData, emergency: text })}
                multiline />
            <Button
                title="Submit"
                onPress={() => Alert.alert('Help is on the way', 'Bat signal sent')}
            />
        </View>
    </>
  );
}