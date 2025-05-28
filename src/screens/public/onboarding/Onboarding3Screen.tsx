import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding3'>;

export default function Onboarding3Screen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo_variation_black.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../../assets/images/onboard_3.png')}
        style={styles.illustration}
      />
      <View style={styles.contentBox}>
        <Text style={styles.text}>
          Tire dúvidas de obra a qualquer hora com nosso assistente inteligente.
        </Text>
        
        {/* Pagination Dots */}
        <View style={styles.dotsContainer} accessible accessibilityLabel="Progresso do onboarding: etapa 3 de 3">
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.dotActive]} />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.replace('ChooseProfile')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAlt} onPress={() => navigation.replace('Onboarding2')}>
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
    color: '#34495E',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '500',
    width: BUTTON_WIDTH,
    alignSelf: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    gap: 8,
  },
  dot: {
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: '#B0BEC5',
  marginHorizontal: 4,
},
dotActive: {
  backgroundColor: '#34495E', 
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
