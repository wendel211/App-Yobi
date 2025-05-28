import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image source={require('../../../assets/images/logo_variation_black.png')} style={styles.logo} />
      <Text style={styles.title}>Cadastre-se</Text>

      {/* Nome */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#A0AEC0"
        />
      </View>
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
      {/* Senha */}
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
      </View>
      {/* Confirmar senha */}
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Confirme sua senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite novamente sua senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#A0AEC0"
          secureTextEntry={true}
        />
      </View>

      {/* Aceite dos termos */}
      <TouchableOpacity
        style={styles.termsRow}
        onPress={() => setAcceptTerms(!acceptTerms)}
        activeOpacity={0.8}
      >
        <View style={[styles.checkbox, acceptTerms && styles.checkboxChecked]}>
          {acceptTerms && <View style={styles.checkboxDot} />}
        </View>
        <Text style={styles.termsText}>
          Li e concordo com os <Text style={styles.termsLink}>termos de uso</Text> e <Text style={styles.termsLink}>política de privacidade</Text>
        </Text>
      </TouchableOpacity>

      {/* Botão cadastrar */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Rodapé: login social + já possui conta */}
      <View style={styles.footerArea}>
        <Text style={styles.socialText}>Ou cadastre-se com:</Text>
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
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.footerText}>
            Já possui uma conta? <Text style={styles.footerLink}>Faça o login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 24,
    flexGrow: 1,
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
    marginBottom: 12,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 13,
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
  termsRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 16,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#34495E',
    borderColor: '#34495E',
  },
  checkboxDot: {
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  termsText: {
    color: '#21242C',
    fontSize: 13,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  termsLink: {
    color: '#34495E',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    backgroundColor: '#21242C',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
    marginTop: 6,
    marginBottom: 20,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },

  footerArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 6,
  },
  socialText: {
    fontSize: 15,
    color: '#21242C',
    marginBottom: 8,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F6F8FB',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    padding: 6,
  },
  iconImg: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  footerContainer: {
    marginTop: 4,
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
});
