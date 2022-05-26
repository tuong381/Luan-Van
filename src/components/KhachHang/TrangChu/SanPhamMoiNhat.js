import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {URL} from '../../../../Ip';

export default class SanPhamMoiNhat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhmuc: [],
      sanpham:[]
    };
  }

  componentDidMount() {
    

      fetch(URL.localhost + '/App_API/Shop/SanPham.php')
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          sanpham: responseJSON,
        });
        //   console.log(responseJSON);
      })
      .catch(e => {
        console.log(e);
      });

  }

  render() {
  // const SanPhamMoiNhat= ({route,navigation}) => {

  //   const [token, settoken] = useState('');
  // // };

  // const [bio, setBio] = useState({});
    
  // const fetchData = async () => {
  //   const response = await fetch(
  //     URL.localhost + '/App_API/Shop/SanPham.php'
  //   );
  //   const data = await response.json();
  //   // console.log(data);
  //   setBio(data);
  // };
  // fetchData();


    return (
      //  <View style={styles.body}>
      

          

          <SafeAreaView style={styles.container}>
            <FlatList
              style={styles.flatlist}
              horizontal
            //  data={bio}
               data={this.state.sanpham}
              keyExtractor={({id_SanPham}, index) => id_SanPham}
              renderItem={({item}) => (
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('ChiTietSP',{
                  idSP:item.id_SanPham,
                  tenSP:item.TenSanPham,
                  tenDM:item.TenDanhMuc,
                  gia:item.Gia,
                  soluong:item.SoLuong_SP,
                  mota:item.MoTaSanPham,
                  anh:item.HinhAnh_SP,
                  sodaban: item.SoLuong_SPDaBan
              })}
                  >
                  <View style={styles.item}>
                    <Image
                      source={{uri: URL.localhost +'/LuanVan/public/upload/sanpham/'+item.HinhAnh_SP}}
                      style={styles.image}
                      resizeMode="cover">
 
                      </Image>
                      <Text style={styles.textPT}>{item.TenSanPham}</Text>
                   
                    </View>
                </TouchableOpacity>
                
              )}
            />
          </SafeAreaView>

        
    );
 }
}

const styles = StyleSheet.create({
  textPT: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },

  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 50,
    fontSize: 22,
  },

  titleDV: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 60,
    fontSize: 20,
  },

  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
    // fontFamily:'PlayfairDisplay-Regular'
  },

  text: {
    fontSize: 16,
    color: 'black',
  },

  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
    borderRadius: 10,
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

  header: {
    flexDirection: 'row',
    // flex:1,
    backgroundColor: 'white',
    height: 60,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    backgroundColor: 'white',
    marginLeft: 100,
    flexDirection: 'row',
  },

  titleHeader: {
    color: '#a50000',
    fontSize: 22,
    fontWeight: 'bold',
  },

  image: {
    //  marginTop:5,
    height: 140,
    width: 140,
    borderRadius:10
 
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

  textPT:{
    color:'#a50000',
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    justifyContent:'center',
    marginTop:10,
    width:130
  },

  titleSP: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

//export default SanPhamMoiNhat;