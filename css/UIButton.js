import React from "react";
import {Text,TouchableOpacity ,Alert, Button} from 'react-native';

function UIButton(props){
    return (
      <TouchableOpacity
        
        style={{
          borderColor: 'black',
          height: 50,
          borderWidth: 1,
          borderRadius: 5,
          marginHorizontal: 90,
          marginVertical:25,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#997a00',
        }}>
        <Text style={{color: 'white'}}>{props.title}</Text>
      </TouchableOpacity>
    );
}

export default UIButton


