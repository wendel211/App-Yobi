import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 24, marginTop: 40 }} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 16, color: '#34495E' }}>{'< Voltar'}</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/images/yobi-logo-variant.png')} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu apelido"
        value={nickname}
        onChangeText={setNickname}
        placeholderTextColor="#A0AEC0"
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
          <Text style={{ fontSize: 16, color: '#34495E', marginRight: 10 }}>
            {showPassword ? '🙈' : '👁️'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: 24 },
  logo: { width: 80, height: 80, marginTop: 8, marginBottom: 10, resizeMode: 'contain' },
  title: { fontSize: 28, fontWeight: '700', color: '#34495E', marginBottom: 18, marginTop: 8 },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    borderRadius: 7,
    marginBottom: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#34495E',
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
    color: '#34495E',
  },
  button: {
    width: '100%',
    backgroundColor: '#34495E',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 6,
    marginBottom: 14,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  forgotText: {
    fontSize: 16,
    color: '#34495E',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 18,
  }
});
