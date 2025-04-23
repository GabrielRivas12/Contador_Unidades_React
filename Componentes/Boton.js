import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity}  from 'react-native'


function Boton(props) {
  return (
         <View style={styles.container}>
            <View style={styles.container2}>  
             <TouchableOpacity style={[
                 styles.boton, { backgroundColor: props.color}, {width: props.ancho}, {height: props.alto}]}
                 onPress={props.onpress}

           >
                 <Text style={[
                     styles.botonTexto,
                     { color: props.colorText }]}> 
                     {props.boton}</Text>
             </TouchableOpacity>
             </View> 
         </View>
 
     )
}

export default Boton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    container2: {
        alignItems: 'center',
        backgroundColor: '#0a0a22',   
    },
    boton: {
        borderRadius: 10,
        height: 30,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        shadowColor: "white",
        margin: 5,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 6,
    },
    botonTexto: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },

})
