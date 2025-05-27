import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';

interface YobiLogoProps {
  style?: ViewStyle; 
}

export default function YobiLogo({ style }: YobiLogoProps) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../assets/images/yobi-logo-variant.png')}
        style={styles.logo}
      />
      <Text style={styles.brand}>Yobi</Text>
      <Text style={styles.subtitle}>Sua obra do início ao fim!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  logo: { width: 100, height: 100, marginBottom: 24, resizeMode: 'contain' },
  brand: { fontSize: 48, fontWeight: '700', color: '#374151', fontFamily: 'sans-serif' },
  subtitle: { fontSize: 16, color: '#1abc9c', fontWeight: '500', marginTop: 8 }
});
