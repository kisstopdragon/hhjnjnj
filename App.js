import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [validCod, setvalidCod] = useState('')
  const [three, setThree] = useState('')
  const credit = () => {
    if (validCod == '') { return <Text style={styles.ccloor}>請輸入Credit Card Number</Text> }
    else if (validCod.length < 16) { return <Text style={styles.ccolor}>需16碼數字</Text> }
    else { return <Text style={styles.fcolor} >請輸入安全碼 ~</Text > }
  }
  const showthree = () => {
    if (three == '') { return <Text style={styles.ccolor}>請輸入安全碼</Text> }
    else if (three.length < 3) { return <Text style={styles.ccolor}>需3碼數字</Text> }
    else { return <Text style={styles.fcolor} >馬上為您扣款！3Q ~</Text > }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Credit Card number is:{validCod}</Text>
      <Text style={styles.title}>安全碼:{three}</Text>
      <Text style={styles.and}>{credit()}</Text>
      <Text style={styles.and}>&</Text>
      <Text style={styles.and}>{showthree()}</Text>
      <TextInput
        style={{ height: 50, width: 300, borderColor: 'white', borderWidth: 15, backgroundColor: 'black', color: 'white', textAlign: 'center' }}
        onChangeText={(text) => setvalidCod(text)}
        value={validCod}
        maxLength={16}
        placeholder='Please enter your Credit Card Number'
        placeholderTextColor='white'
        secureTextEntry={false}
        editable={true}
        autoFocus={true}
        returnKeyType='done'
      />
      <TextInput
        style={{ height: 50, width: 300, borderColor: 'white', borderWidth: 15, backgroundColor: 'black', color: 'white', textAlign: 'center' }}
        onChangeText={(text) => setThree(text)}
        value={three}
        maxLength={3}
        placeholder='安全碼'
        placeholderTextColor='white'
        keyboardType={'numeric'}
        secureTextEntry={true}
        editable={true}
        autoFocus={true}
        returnKeyType='done'
      />
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
  title: {
    fontSize: 20,
    color: 'black',
  },
  ccolor: {
    fontSize: 30,
    color: '#ff00ff',
  },
  fcolor: {
    fontSize: 30,
    color: 'blue',
  },
  and: {
    fontSize: 30,
    color: '#1e90ff',
  },
});
