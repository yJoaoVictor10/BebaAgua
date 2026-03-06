import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const DAILY_GOAL:number = 8; // Total diário de copos

export default function App() {

  const[cups, setCups] = useState<number>(0);

  const percentage:number = (cups/DAILY_GOAL) * 100;

  const removeCup = ()=>{
    if(cups > 0){
      setCups(cups - 1);
    }
  }
=======
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

const DAILY_GOAL: number = 8; // Total diário de copos

export default function App() {

  const [cups, setCups] = useState<number>(0);
  const percentage: number = (cups / DAILY_GOAL) * 100;

  const removeCup = () => {
    setCups(Math.max(0, cups - 1));
  };
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Beba Água 💧</Text>
        <Text style={styles.appSubtitle}>HIDRATAÇÃO DIÁRIA</Text>
      </View>

      {/* Seção Principal / Indicador Visual */}
      <View style={styles.content}>

<<<<<<< HEAD
        <View style={styles.outerCircleWrapper}></View>

       
        {/* Círculo */}
        <View style={styles.outerCircle}>
          {/* Nível da água */}
          <View style={[styles.waterLevel, {height: `${percentage}%`}]} />

          {/* Quantidade de copos tomados */}
          <Text style={styles.numberText}>{cups}</Text>
          <Text style={styles.labelText}>COPOS</Text>
        </View>

        {/* Feedback */}
        <View style={styles.feedbackContainer}>
            <Text style={[styles.statusText, cups >= DAILY_GOAL && {color: '#059669'} ]}>{cups >= DAILY_GOAL ? "Parabéns! Meta batida!" : `Faltam ${DAILY_GOAL - cups} copos para a meta.`}</Text>
        {/* Barra de Progresso */}
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBar, {width: `${percentage}%`}]}>
          </View>
        </View>
        </View>


      </View>



      {/* Botões / Rodapé */}
      <View style={styles.footer}>
        {/* Botão Principal */}
        <TouchableOpacity style={styles.mainButton} onPress={()=> setCups(cups + 1)}>
          <Text style={styles.mainButtonText}>BEBER 1 COPO (200 ML)</Text>
        </TouchableOpacity>
        {/* Botões de ajuste */}
        <View style={styles.adjustmentArea}>
          <TouchableOpacity style={styles.adjustButton} onPress={removeCup} >
              <Text style={styles.adjustButtonText}>Remover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.adjustButton} onPress={()=> setCups(0)}>
            <Text style={styles.adjustButtonText}>Reeiniciar</Text>
=======
        {/* Wrapper para permitir sombra em iOS e Android */}
        <View style={styles.outerCircleWrapper}>
          {/* Círculo */}
          <View style={styles.outerCircle}>
            {/* Nível da água */}
            <View style={[
              styles.waterLevel,
              { height: `${percentage}%`}
              ]} />

            {/* Quantidade de copos tomados */}
            <Text style={styles.numberText}>{cups}</Text>
            <Text style={styles.labelText}>COPOS</Text>
          </View>
        </View>

         {/* Feedback */}
         <View style={styles.feedbackContainer}>
          <Text style={[
            styles.statusText,
            cups >= DAILY_GOAL && { color: '#059669' }
          ]}>{
            cups >= DAILY_GOAL 
            ? "Parabéns! Meta batida! 🎉" 
            : `Faltam ${DAILY_GOAL - cups} copos para a meta.`
          }</Text>

          {/* Barra de progresso */}
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBar, {width: `${percentage}%`}]} />
          </View>

         </View>

      </View>

      {/* Botões / Rodapé */}
      <View style={styles.footer}>

        {/* Botão Principal */}
        <TouchableOpacity style={styles.mainButton} onPress={() => setCups(cups + 1)}>
          <Text style={styles.mainButtonText}>BEBER 1 COPO (200ML)</Text>
        </TouchableOpacity>

        {/* Botões de Ajuste */}
        <View style={styles.adjustmentArea}>
          <TouchableOpacity style={styles.adjustButton} onPress={removeCup}>
            <Text style={styles.adjustButtonText}>Remover</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.adjustButton} onPress={() => setCups(0)}>
            <Text style={styles.adjustButtonText}>Reiniciar</Text>
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
          </TouchableOpacity>
        </View>

      </View>
<<<<<<< HEAD
=======
      
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
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
<<<<<<< HEAD

  outerCircleWrapper: {
=======
  outerCircleWrapper: {
    elevation: 10,
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
<<<<<<< HEAD
    elevation: 10,
    backgroundColor: "#FFF",
    borderRadius: 110,
  },

=======
    backgroundColor: "#FFF",
    borderRadius: 110,
  },
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 8,
    borderColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
<<<<<<< HEAD
    backgroundColor: "#FFF"

=======
    backgroundColor: '#FFF',
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  },
  waterLevel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#0EA5E9',
    opacity: 0.2,
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  numberText: {
    fontSize: 72,
    fontWeight: '900',
    color: '#0284C7',
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  labelText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#7DD3FC',
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    marginTop: 15,
<<<<<<< HEAD
  },

  progressBar:{
    height: '100%',
    width: '70%',
    backgroundColor: '#0284C7',
    borderRadius: 6,
  },

=======
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0284C7',
    borderRadius: 6,
  },
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  feedbackContainer: {
    marginTop: 40,
    alignItems: 'center',
    width: '80%',
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  statusText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#475569',
    textAlign: 'center',
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  footer: {
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  mainButton: {
    backgroundColor: '#0284C7',
    paddingVertical: 22,
    borderRadius: 20,
    alignItems: 'center',
<<<<<<< HEAD
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5, // elevation para sombra (Android)
  },

=======
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  mainButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
  },
<<<<<<< HEAD

=======
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
  adjustmentArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
<<<<<<< HEAD

  adjustButton: {
    padding: 10,
  },

  adjustButtonText: {
    color: '#94A3BB',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }
=======
  adjustButton: {
    padding: 10,
  },
  adjustButtonText: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
>>>>>>> 5fee35ecef71198ed1483f88965df8ccb578b7c8
});
