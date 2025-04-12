import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Boton from './Componentes/Boton';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { useState } from 'react';

export default function App() {

  const [contador, setContador] = useState(0);


  return (


    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.titulo}> ¡Bienvenido al contador de unidades!</Text>

        <AnimatedCircularProgress
          size={240}
          width={20}
          fill={((contador % 100) / 10) * 10}
          tintColor="#92E3A9"
          backgroundColor="#e0e0e0"
          rotation={-90}
          arcSweepAngle={180}
          lineCap="round"
        >
          {
            () => (
              <Text style={styles.numero}>{contador}</Text>
            )
          }
        </AnimatedCircularProgress>

      </View>

      <View style={styles.containerBotones}>
        <Boton
          boton='-'
          color='#EEF1FD'
          colorText='black'
          onpress={() => {
            if (contador > 0) setContador(contador - 1)
          }}
          ancho='60'
          alto="60"
        />

        <Boton
          boton='↻'
          color='#E04D62'
          colorText='black'
          onpress={() => setContador(0)}
          ancho='90'
          alto="90"
        />

        <Boton
          boton='+'
          color='#EEF1FD'
          colorText='black'
          onpress={() => setContador(contador + 1)}
          ancho='60'
          alto="60"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBotones: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: '#0a2342',
    paddingBottom: 300,
    paddingLeft: 17
  },

  containerTexto: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 200,
    backgroundColor: '#0a2342',

  },
  numero: {
    fontSize: 100,
    color: 'white'
  },
  titulo: {
    fontSize: 20,
    paddingBottom: 40,
    color: 'white'
  },
});
