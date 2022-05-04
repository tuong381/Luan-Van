
// import React from 'react';
// import type {Node} from 'react';

// import {
  
//   Text,
//   View,
// } from 'react-native';



// import App from './src/components/App';

// export default class AppGym extends React.Component {

//   render() {
//     return (
//     //   < App />
//     // // < AppNavigator />;
//     <View >
//        <Text> We have no friends! </Text>
//       </View>
//     )
//   }
// }


//export default App;



// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import MainNavigator from './navigation/Shop';

// import AppRegistry from 'react-native';
// import Aer from './src/components/Aer';



// import Shop from './navigation/Shop';

// export default function AppGym() {
//   //return < MainNavigator />
//   return < Aer />;
 
// }


import 'react-native-gesture-handler';
import   React, {Component} from 'react';
import { Button, View, Text } from 'react-native';
import MainNavigator from './navigation/Shop';

import AppRegistry from 'react-native';
import App from './src/components/App';

//import io from 'react-native-socket.io-client/socket.io';



//import Shop from './navigation/Shop';
//import TrangChu from './src/components/KhachHang/TrangChu/TrangChu';

export default  function AppGym() {
  return < MainNavigator />;
 
  //return < TrangChu />
 
}

