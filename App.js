import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect  } from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView} from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';



export default function App() {
  const[countries,setCountries]=useState([]);
  useEffect(()=>{
    let url= "https://restcountries.com/v3.1/all";
    fetch(url)
    .then(res => res.json())
    .then( res => console.log(res))

    let contrie = res ;
    setCountries(
      contrie
    )

   
  },[])

  const Data =()=>[
    {
       Name : "res.name",
    }
    
  ]
  
    

  
  return (
    <ScrollView>
    <View style={styles.container}>
      <FlatList
      data={Data}
      renderItem={this.renderItem}
      keyExtractor={(item, index) => index.toString()}
      />
        

    </View>
    </ScrollView>
  );
}


