import React from 'react'
import {View ,Button , Text, ImageBackground,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { UIButton } from '../../css';

export default class Home extends React.Component {
	render() {
		const {navigation} = this.props;
		return (
      <ImageBackground
        source={require('../images/background_gym.jpg')}
        // resizeMode="cover"
        style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('Khách hàng')}>
          <Text style={styles.text}>Khách hàng</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NhanVien')}>
          <Text style={styles.text}>Nhân viên</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
	}
}

const styles = StyleSheet.create({
  text:{
    fontSize:18, 
    color:'white',
    fontWeight:'bold'
  },

  button1:{
    marginTop:30,
    borderColor: 'white',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 90,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc0000',
  },

  button:{
    borderColor: 'white',
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      marginHorizontal: 90,
      marginVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#cc0000',
  }
})



