import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,ScrollView } from 'react-native';
import  {useState} from 'react';

export default function App() {


  const [arr,setArr]=useState([]);

  const [txt,setTxt]=useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
      <View>
      <TextInput style={styles.txtInput} placeholder="Please enter yout Action" value={txt} onChangeText={(t)=>{setTxt(t)}} />
      </View>
      <View>
      <Button title="Add To List" onPress={()=>{
        // add to list

        setArr([...arr,txt])

      }} />
      </View>
      </View>
      <View>
        <ScrollView>
          {arr.map((o,i)=>{
            <View key={i}>
            <Text >{o}</Text>
            
            </View>
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },topView:{
    backgroundColor:'#ccc',
    height:100
  },txtInput:{
    width:100,
    backgroundColor:'#ff0000',
    borderWidth:1,
    borderColor:'#000'
  }
});
