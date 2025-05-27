import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import YobiLogo from '../../components/YobiLogo';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'PreLogin'>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <YobiLogo style={{ marginBottom: 100 }} />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Entrar</Text>
  
     
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.outlineButton} 
        onPress={() => navigation.navigate('ChooseProfile')}
      >
        <Text style={styles.outlineButtonText}>Cadastra-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  button: {
    width: 280,
    paddingVertical: 14,
    backgroundColor: '#374151',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 32,
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  outlineButton: {
    width: 280,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: '#374151',
    borderRadius: 8,
    alignItems: 'center'
  },
  outlineButtonText: {
    color: '#374151',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
