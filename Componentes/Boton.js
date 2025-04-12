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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    container2: {
        alignItems: 'center',
        backgroundColor: '#0a2342',   
        flexDirection: 'row',   
        paddingRight: 20  
    },
    boton: {
        borderRadius: 50,
        borderColor: '#EEF1FD',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        shadowColor: "white",
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
