import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo_variation_black.png')} style={styles.logo} />
      <Text style={styles.title}>Olá, Bem-vindo(a) de volta!</Text>
      <Text style={styles.subtitle}>Faça login para continuar usando o app</Text>

      {/* E-mail */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#A0AEC0"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Senha + esqueceu */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Senha</Text>
        <View style={styles.inputPasswordWrapper}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#A0AEC0"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(v => !v)}>
            <Text style={{ fontSize: 16, color: '#34495E', marginRight: 10 }}>
              {showPassword ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.forgotPasswordButton}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

    
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>Ou entrar com:</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../../../assets/images/google.png')} style={styles.iconImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../../../assets/images/facebook.png')} style={styles.iconImg} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <Image source={require('../../../assets/images/apple.png')} style={styles.iconImg} />
          </TouchableOpacity>
        
        </View>
        

      <TouchableOpacity
        style={styles.footerContainer}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.footerText}>
          Novo por aqui? <Text style={styles.footerLink}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    justifyContent: 'flex-start',
  },
  logo: {
    width: 62,
    height: 62,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#21242C',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#8C8C8C',
    textAlign: 'center',
    marginBottom: 26,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 14,
  },
  inputLabel: {
    color: '#21242C',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    marginLeft: 2,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: '#CBD5E1',
    borderWidth: 1.2,
    borderRadius: 7,
    marginBottom: 0,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#34495E',
    backgroundColor: '#fff',
  },
  inputPasswordWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#CBD5E1',
    borderWidth: 1.2,
    borderRadius: 7,
    backgroundColor: '#fff',
    marginBottom: 0,
    paddingHorizontal: 0,
  },
  inputPassword: {
    flex: 1,
    height: 48,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#34495E',
  },
  forgotPasswordButton: {
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 6,
    marginBottom: 2,
  },
  forgotPasswordText: {
    color: '#34495E',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    backgroundColor: '#21242C',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 18,
    marginBottom: 10,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  footerContainer: {
    marginTop: 300,
    marginBottom: 30,
  },
  footerText: {
    color: '#21242C',
    fontSize: 15,
    textAlign: 'center',
  },
  footerLink: {
    color: '#34495E',
    fontWeight: 'bold',
  },

  socialContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 24,
  },
  socialText: {
    fontSize: 15,
    color: '#21242C',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialIcon: {
    marginHorizontal: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 90,
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    padding: 6,
  },
  iconImg: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
});
