import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Onboarding1');
    }, 1500);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.brand}>Yobi</Text>
      </View>
      <Text style={styles.subtitle}>Sua obra do início ao fim</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0A3D84', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logo: { 
    width: 110, 
    height: 110, 
    marginBottom: 20, 
    resizeMode: 'contain' 
  },
  brand: {
    fontSize: 44, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 0,
    letterSpacing: 1
  },
  subtitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    position: 'absolute',
    bottom: 48,
    width: '100%'
  },
});
