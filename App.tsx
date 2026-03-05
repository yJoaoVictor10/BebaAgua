import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Beba Água2 💧</Text>
        <Text style={styles.appSubtitle}>HIDRATAÇÃO DIÁRIA</Text>
      </View>

      {/* Seção Principal / Indicador Visual */}
      <View style={styles.content}>
        {/* Círculo */}
        <View style={styles.outerCircle}>
          {/* Nível da água */}
          <View style={styles.waterLevel} />
        </View>
      </View>

      {/* Botões */}
      <Text>Primeiro app da 2TDSPX!!! 2026</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F9FF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0369A1',
  },
  appSubtitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#38BDF8',
    letterSpacing: 2,
    marginTop: 4,
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  waterLevel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#0EA5E9',
    opacity: 0.2,
  }
});
