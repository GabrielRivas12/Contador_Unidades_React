import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Boton from './Componentes/Boton';

import { useState } from 'react';

export default function App() {

  const [contador, setContador] = useState(0);  // define el estado(Actual = 0)con la variable {contador}, setContador es la funciona para actualizar el estado

  const funcionAumentar = () =>{
    setContador(contador + 1)
  }

  const funcionReiniciar = () => {
    setContador(0)
  }


  return (


    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('./assets/Imagenes/Logo.png')} />
      </View>

      <View style={styles.containerBotones}>

        <View style={styles.containerContador}>
          <Text style={styles.numero}>{contador} </Text>

        </View>



        <Boton
          boton='Clic'
          color='blue'
          colorText='white'
          onpress={funcionAumentar}
        />

        <Boton
          boton='Reiniciar'
          color='green'
          colorText='white'
          onpress={funcionReiniciar}
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
  },
  containerBotones: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-start', // justificar al inicio del view
    backgroundColor: '#0a0a22',
    alignItems: 'center'
  },
  containerContador: {
    backgroundColor: '#0a0a22',
    width: '50%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 5,
    margin: 10

  },

  containerLogo: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#0a0a22',
    justifyContent: 'flex-end' // alinear al final del view

  },
  numero: {
    fontSize: 100,
    color: 'white',
    paddingLeft: 20
  },
  logo: {
    height:80,
    width: "100%",
  },
});
