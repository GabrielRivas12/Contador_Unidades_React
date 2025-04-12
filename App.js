import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Boton from './Componentes/Boton';
import { AnimatedCircularProgress } from 'react-native-circular-progress'; // instalar dependencias necesarias => expo install react-native-circular-progress
import { useState } from 'react'; 

export default function App() {

  const [contador, setContador] = useState(0);  // define el estado(Actual = 0)con la variable {contador}, setContador es la funciona para actualizar el estado


  return (


    <View style={styles.container}>
      <View style={styles.containerTexto}>
        <Text style={styles.titulo}> ¡Bienvenido al contador de unidades!</Text>

        <AnimatedCircularProgress
          size={240} // define el ancho
          width={20}  // tamaño de la barra
          fill={((contador % 100))} // cuando el contador llega al equivalente a 100 unidades se reinicia la barra y vuelve a cargar
          tintColor="#92E3A9" // tono de la barra
          backgroundColor="#e0e0e0" //tono del fondo
          rotation={-90} // rotacion de la barra hacia abajo
          arcSweepAngle={180} // angulo del arco
          lineCap="round" // bordes redondeados
        >
          {
            () => (
              <Text style={styles.numero}>{contador}</Text> //muestra el valor {contador} justo en el centro del circulo
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
