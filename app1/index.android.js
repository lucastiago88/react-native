import React from 'react';
import {Text, Button, AppRegistry, View} from'react-native';


const gerarNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

const App = () =>{
  return (
    <View>
      <Text>Gerador Números Randômicos</Text>
     <Button
        onPress={gerarNumeroAleatorio}
        title="Gerar Número Randômico"
      />
    </View>
    );
};


AppRegistry.registerComponent('app1', ()=> App);