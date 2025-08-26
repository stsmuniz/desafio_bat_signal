import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './Styles';
import { Button } from '../../components/Button/Index';
import { Form } from '../../components/Form/Index';

export function Home() {

  const [isFormVisible, setFormVisible] = React.useState(false);

  const handleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <View style={styles.container}>
      {!isFormVisible && (
        <>
          <Image
            source={require('../../../assets/bat_logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Button title="Activate bat signal" onPress={handleFormVisibility} />
        </>
      )}

      {isFormVisible && <Form onPressLogo={handleFormVisibility} />}
    </View>
  );
}