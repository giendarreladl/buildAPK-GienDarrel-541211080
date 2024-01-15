import { Text, SafeAreaView, StyleSheet, View, Image, Button, Alert, ScrollView,FlatList, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fotografi',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Videografi',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Programmer',
  },
];
// type ItemProps = {title: string};

const Item = ({title}) => {
  return(
  <View style={styles.item}>
    <Text style={styles.hobi}>{title}</Text>
  </View>
  )
};

export default function Portofolio({navigation}) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
<ScrollView style={styles.container}>
 <Image style={styles.img}
  source={require('../assets/darel.jpeg')}
  />
<Text style={styles.title}>Gien Darrel Adli</Text>
<Text style={styles.paragraph}> Hello, my name is Gien Darrel Adli, usually called Darrel, I come from the city of Purwokerto and this is my portofolio</Text>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            Email : gianadli79@gmail.com
            WhatsApp  : 081215927701
            Instagram : darreladli_
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Contact</Text>
      </Pressable>
<Text style={styles.txthobi}>Hobby</Text>
<Text style={styles.txthbi}>Fotografi</Text>
<Text style={styles.txthbi}>Otomotif</Text>
<Text style={styles.txthbi}>Programmer</Text>x
    <Text style={styles.project}>Recent Project</Text>
    <View style={styles.wadahproject}>
<Image style={styles.hcm}
  source={require('../assets/hcm.png')}
  />
  <Text style={styles.hcmtxt}>HCM Telkom Akses</Text>
  </View>
  <View style={styles.wadahproject}>
<Image style={styles.compro}
  source={require('../assets/com.png')}
  />
  <Text style={styles.comprotxt}>Braincodesolution.com</Text>
  </View>
   <View style={styles.wadahproject}>
<Image style={styles.erp}
  source={require('../assets/erp.png')}
  />
  <Text style={styles.erptxt}>Erp Finance</Text>
  </View>
  <View style={styles.wadahprojectgp}>
<Image style={styles.gien}
  source={require('../assets/gp.png')}
  />
  <Text style={styles.gptxt}>Gien.Picture</Text>
  </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 24,
  backgroundColor: '#89B5AF'
    },
    
 title: {
    marginTop: 16,
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'poppins',
    },
    
  paragraph: {
   color: 'black',
   fontSize: 10,
   textAlign: 'center',
   marginBottom: 20,
   fontFamily: 'poppins',
  },

   centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 8,
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#000',
  },
  buttonClose: {
    backgroundColor: '#555843',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    padding: 10,
  },
   img: {
    height: 120,
    width: 120,
    borderRadius: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 20,
  },
   item: {
    borderRadius: 10,
    height: 20,
    backgroundColor: '#89D5BF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  hobi: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    marginTop: -15,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  txthobi: {
    color: '#000',
    fontSize: 18,
    marginTop: 15,
    marginLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  txthbi: {
    height : 40,
   marginBottom: 20,
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'center',
   backgroundColor: '#555843',
   borderRadius : 5,
   marginTop : 10,
   color: 'white',
   paddingTop: 5
 },
  project: {
    color: '#000',
    fontSize: 20,
    marginTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
   hcm: {
    height: 160,
    width: 205,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
   hcmtxt: {
     textAlign: 'center',
     fontWeight: 'bold',
     marginTop: 5,
  },
  wadahproject: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    height: 200,
    width: 240,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  wadahprojectgp: {
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    height: 185,
    width: 240,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  erp: {
    height: 135,
    width: 205,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
   erptxt: {
     textAlign: 'center',
     fontWeight: 'bold',
     marginTop: 20,
  },
  compro: {
    height: 165,
    width: 195,
    marginTop: 9,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  comprotxt: {
     textAlign: 'center',
     fontWeight: 'bold',
     marginTop: 2,
  },
   gien: {
   height: 110,
    width: 200,
    marginTop: 10,
    borderRadius: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  gptxt: {
     textAlign: 'center',
     fontWeight: 'bold',
     marginTop: 25,
  },
  btnlike: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btndislike: {
    width: 100,
    color : "red",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  txtlikedislike: {
    marginLeft : "auto",
    marginRight : "auto",
    fontFamily: 'poppins'
  }
});
