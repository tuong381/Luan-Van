import React, { Component } from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity } from 'react-native-gesture-handler';


import App from '../Shop/Shop';
export default class DichVu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      mang: []
        
    }
  }

  componentDidMount(){
    fetch("http://192.168.1.5/App_API/dichvu.php")
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.setState({
        mang:responseJSON

      });
    })
    .catch((e)=>{console.log(e)});
  }



  pushView(id){

    fetch("http://192.168.1.2/App_API/ChiTietDV.php",{
      method:"POST",
      body: JSON.stringify({
        id_NhanVien: id
      })
    })
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.props.navigation.navigate('VD');
    

      
    })
    .catch((e)=>{console.log(e)});
    
  }



  render() {
    const {
      image, text, flatlist, body,item,title,
  } = styles;

  const {navigation} = this.props;
 
    return (
      <View style={styles.body}>
        <Text style={styles.text}>Dịch vụ</Text>
      
        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.flatlist}
            horizontal
            data={this.state.mang}
            keyExtractor={({id_DichVu}, index) => id_DichVu}
            renderItem={({item}) => (
              <View style={styles.item}>


                 <TouchableOpacity  onPress={this.pushView(item.id_NhanVien)} >
                <ImageBackground
                  source={{uri: item.HinhAnh_DV}}
                  style={styles.image}
                  resizeMode="cover">
                  <Text style={styles.title}>{item.TenDichVu}</Text>
                </ImageBackground>
                

                </TouchableOpacity>

              </View>
            )}
          />
        </SafeAreaView>
        
        
        
      </View>

      //   </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop:40,
    fontSize: 16,
  },

  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },

  image: {
    //  marginTop:5,
    height: 120,
    width: 120,
  
 
  },

  flatlist: {
    //  marginTop: 100,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
  },

  container: {
    padding: 8,
  },

  item: {
    //  borderWidth:0.5,
    padding: 3,
    borderRadius: 10,
    justifyContent: 'center',
    // borderColor: 'white',
    // shadowColor: 'white',
   
  },

  body: {
    flex: 70,
    //justifyContent: 'center',
  },
  // title: {
  //   fontWeight: 'bold',
  //   color: 'white',
  //   textAlign: 'center',
  //   fontStyle: 'italic',
  //   fontWeight: 'bold',
  //    marginTop:30,
  //   fontSize: 18,
  // },
})

