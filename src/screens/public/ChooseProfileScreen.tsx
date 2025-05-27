import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'ChooseProfile'>;

export default function ChooseProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/yobi-logo-variant.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Seja bem-vindo(a)!</Text>
      <Text style={styles.subtitle}>
        Para uma experiência perfeita para você, por gentileza nos diga qual o seu perfil:
      </Text>
      <View style={styles.optionsRow}>
        {/* Cliente */}
        <TouchableOpacity
          style={[styles.optionCard, { marginRight: 18 }]}
          onPress={() => navigation.navigate('Register')}
        >
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          <Text style={styles.optionTitle}>Sou cliente</Text>
          <Text style={styles.optionDesc}>
            e gostaria de desfrutar das diversas funcionalidades da Yobi!
          </Text>
        </TouchableOpacity>
        {/* Profissional */}
        <TouchableOpacity
          style={styles.optionCard}
          onPress={() => navigation.navigate('RegisterProfessional')}
        >
          <View style={[styles.iconCircle, { borderWidth: 2 }]}>
            <Text style={styles.iconText}>👷</Text>
          </View>
          <Text style={styles.optionTitle}>Sou profissional</Text>
          <Text style={styles.optionDesc}>
            e gostaria de anunciar meus serviços na plataforma Yobi!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const CARD_WIDTH = 140;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  logo: {
    width: 88,
    height: 88,
    resizeMode: 'contain',
    marginBottom: 24,
    marginTop: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#34495E',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#1abc9c',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 34,
    marginHorizontal: 10,
    lineHeight: 19,
  },
  optionsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
  optionCard: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 10,
    elevation: 3,
    borderColor: '#CBD5E1',
    borderWidth: 1.5,
    minHeight: 170,
    maxWidth: CARD_WIDTH,
    shadowColor: '#34495E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  iconCircle: {
    width: 46,
    height: 46,
    borderRadius: 11,
    backgroundColor: '#E4EBF3',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderColor: '#34495E',
  },
  iconText: {
    fontSize: 28,
  },
  optionTitle: {
    fontSize: 15,
    color: '#34495E',
    fontWeight: '700',
    marginBottom: 4,
    marginTop: 0,
    textAlign: 'center',
  },
  optionDesc: {
    fontSize: 12,
    color: '#34495E',
    textAlign: 'center',
    fontWeight: '400',
    marginTop: 2,
    lineHeight: 16,
  },
});

