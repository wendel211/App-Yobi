import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 24, marginTop: 40 }} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 16, color: '#374151' }}>{'< Voltar'}</Text>
      </TouchableOpacity>
       <Image source={require('../../assets/images/yobi-logo-variant.png')} style={styles.logo} />
      <Text style={styles.title}>Inscreva-se</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu apelido"
        value={nickname}
        onChangeText={setNickname}
        placeholderTextColor="#A0AEC0"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu melhor e-mail"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#A0AEC0"
        keyboardType="email-address"
      />
      <View style={styles.inputPasswordWrapper}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#A0AEC0"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(s => !s)}>
          <Text style={{ fontSize: 16, color: '#374151', marginRight: 10 }}>
            {showPassword ? '🙈' : '👁️'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => { /* Lógica de cadastro */ }}>
        <Text style={styles.buttonText}>Cadastra-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('PreLogin')}>
        <Text style={styles.footerText}>
          Já possui uma conta? <Text style={styles.footerLink}>Faça o login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: 24 },
  logo: { width: 80, height: 80, marginTop: 8, marginBottom: 10, resizeMode: 'contain' },
  title: { fontSize: 28, fontWeight: '700', color: '#374151', marginBottom: 18, marginTop: 8 },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    borderRadius: 7,
    marginBottom: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#374151',
    backgroundColor: '#F9FAFB'
  },
  inputPasswordWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    borderRadius: 7,
    backgroundColor: '#F9FAFB',
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  inputPassword: {
    flex: 1,
    height: 48,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#374151',
  },
  button: {
    width: '100%',
    backgroundColor: '#374151',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 6,
    marginBottom: 18
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  footerText: { fontSize: 15, color: '#6B7280', textAlign: 'center' },
  footerLink: { color: '#1abc9c', fontWeight: 'bold' },
});
