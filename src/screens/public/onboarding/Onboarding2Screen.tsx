import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding1'>;

export default function Onboarding1Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo_variation_black.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../../assets/images/onboard_2.png')}
        style={styles.illustration}
      />
      <View style={styles.contentBox}>
        <Text style={styles.text}>
          Encontre pedreiros, eletricistas e outros profissionais confiáveis para sua obra.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Onboarding3')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAlt} onPress={() => navigation.replace('Onboarding1')}>
          <Text style={styles.buttonTextAlt}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BUTTON_WIDTH = 336;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#EAEEF5', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 24,
  },
  logo: { 
    width: 70, 
    height: 70, 
    marginBottom: 12, 
    resizeMode: 'contain' 
  },
  illustration: { 
    width: 296, 
    height: 296, 
    marginVertical: 24, 
    resizeMode: 'contain' 
  },
  contentBox: {
    width: BUTTON_WIDTH,
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: { 
    color: '#21242C',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '500',
    width: BUTTON_WIDTH,
    alignSelf: 'center',
  },
  button: { 
    backgroundColor: '#34495E', 
    borderRadius: 10, 
    paddingHorizontal: 40, 
    paddingVertical: 16, 
    marginBottom: 10, 
    width: BUTTON_WIDTH,
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  }, 
  buttonAlt: { 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    borderWidth: 2, 
    borderColor: '#34495E', 
    paddingHorizontal: 40, 
    paddingVertical: 16, 
    marginBottom: 10, 
    width: BUTTON_WIDTH, 
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
  },
  buttonTextAlt: { 
    color: '#34495E', 
    fontWeight: 'bold', 
    fontSize: 16,
  },
});
