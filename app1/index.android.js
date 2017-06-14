import React from 'react';
import {Text, Button, AppRegistry, View, StyleSheet} from'react-native';


const gerarNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

const App = () =>{
  return (
    <View style={styles.container}>
      <Text>Gerador Números Randômicos</Text>
     <Button
        onPress={gerarNumeroAleatorio}
        title="Gerar Número Randômico"
      />
    </View>
    );
};

const styles = StyleSheet.create({

   container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }

});


AppRegistry.registerComponent('app1', ()=> App);