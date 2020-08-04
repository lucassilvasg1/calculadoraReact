/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Image,
  Picker, StatusBar, Text,
  TextInput, View, Button, Alert
} from 'react-native';

const App = () => {

  const [operador1, setOperador1] = useState(null);
  const [operador2, setOperador2] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [selectedValue, setSelectedValue] = useState("0");


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: '#CECE' }}>
        <View style={{ flex: 1, alignSelf: "center", justifyContent: "flex-start", bottom: 90, position: "relative" }}>
          <Image source={require('./money_icon_2.png')} resizeMode="center" width={10} height={10} />
          <Text defaultValue={resultado}></Text>
        </View>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Operador 1!"
            onChangeText={text => setOperador1(text)}
            defaultValue={operador1}
            keyboardType="numeric"
          />

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="SOMAR" value="0" />
            <Picker.Item label="SUBTRAIR" value="1" />
            <Picker.Item label="MULTIPLICAR" value="2" />
            <Picker.Item label="DIVIDIR" value="3" />
          </Picker>

          <TextInput
            style={{ height: 40 }}
            placeholder="Operador 2!"
            onChangeText={text => setOperador2(text)}
            defaultValue={operador2}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Button title="Calcular" onPress={() => {
            if (selectedValue == 0) {
              let a = Number(operador1) + Number(operador2);
              setResultado(a);
              Alert.alert('Resultado: ' + resultado, null, null, null);
            }
            else if (selectedValue == 1) {
              let a = Number(operador1) - Number(operador2);
              setResultado(a);
              Alert.alert('Resultado: ' + resultado, null, null, null);
            }
            else if (selectedValue == 2) {
              let a = Number(operador1) * Number(operador2);
              setResultado(a);
              Alert.alert('Resultado: ' + resultado, null, null, null);
            }
            else if (selectedValue == 3) {
              let a = Number(operador1) / Number(operador2);
              setResultado(a);
              Alert.alert('Resultado: ' + resultado, null, null, null);
            }

          }} />
        </View>
      </View>
    </>
  );
};

export default App;
