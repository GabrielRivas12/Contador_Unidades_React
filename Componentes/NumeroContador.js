import { Text, View , StyleSheet} from 'react-native'

function Contador({contador}) {
    return (
      <View>
          <Text style={styles.numero}>{contador} </Text>
      </View>
    )
  }

  export default Contador;

const styles = StyleSheet.create({
  containerBotones: {
    flex: 3,
    width: '100%',
    justifyContent: 'flex-start', // justificar al inicio del view
    backgroundColor: '#0a0a22',
    alignItems: 'center'
  },
  numero: {
    fontSize: 100,
    color: 'white',
    paddingLeft: 20
  },

});