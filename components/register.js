import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, TextInput, Pressable} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


export default function Register({navigation}) {
  return (
    <View style={styles.container}>
       <Text style={styles.titlereg}>Hello!</Text>
       <Image style={styles.imggp}
    source={require('../assets/Gien.pict.png')}
    />
    <Text style={styles.paragraphreg}> Register untuk melanjutkan
    </Text>
        <TextInput
        style={styles.inputreg}
        value={"Username"}
      />
    <TextInput
        style={styles.inputreg}
        value={"Email"}
      />
          <TextInput
        style={styles.inputreg}
        value={"Password"}
      />
          <TextInput
        style={styles.inputreg}
        value={"No.Phone"}
      />
      <Pressable style={styles.btnregis} onPress={() => {navigation.navigate('porto')}}>
      <Text style={styles.tulisanlogin}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: '#89B5AF'
    },
 titlereg: {
    marginTop: 30,
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -20
  },
  imggp: {
    height: 20,
    width: 60,
    marginLeft: 200,
    marginBottom: 5
  },
  paragraphreg: {
   color: 'black',
   fontSize: 13,
    marginBottom: 10,
  },
  inputreg: {
    height: 40,
    marginTop: 15,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  btnregis: {
    height:35,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#555843',
    marginTop: 20,
  },
    tulisanlogin: {
    fontWeight: 'bold',
    color: '#fff'
  }
  
});
