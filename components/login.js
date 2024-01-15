import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, TextInput, Pressable} from 'react-native';
import React from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function Login(
  {navigation}
) {
  return (
    <View style={styles.container}>
     <Image style={styles.img}
    source={require('../assets/Gien.pict.png')}
    />
    <Text style={styles.title}>Welcome Back !</Text>
    <Text style={styles.paragraph}> Login untuk melanjutkan
    </Text>
    <TextInput
        style={styles.input}
        value={"Email"}
      />
      <TextInput
        style={styles.input}
        value={"Password"}
      />
      <Text style={styles.kelalen}> lupa password?</Text>
      <Pressable style={styles.btnlogin} onPress={() => {navigation.navigate('porto')}}>
      <Text style={styles.tulisanlogin}>LOGIN</Text>
      </Pressable>
      <Text style={styles.atau}>Belum punya akun? <Text style={{color: 'blue'}} onPress={() => {navigation.navigate('register')}}>Register</Text></Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: '#89B5AF'
    },
  img: {
    height: 40,
    width: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 60,
    marginBottom: -5
  },
  title: {
    marginTop: 60,
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'poppins',
  },
  paragraph: {
   color: 'black',
   fontSize: 13,
   textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginTop: 40,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
  },
  kelalen: {
    fontSize: 13,
    textAlign: 'end',
    marginBottom: 30,
  },
  atau: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  btnlogin: {
    height:35,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#555843'
  },
  tulisanlogin: {
    fontWeight: 'bold',
    color: '#fff'
  }
  
});
