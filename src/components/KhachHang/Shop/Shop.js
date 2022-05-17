import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  ScrollView,
  Image, 
  TextInput
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {URL} from '../../../../Ip';



export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danhmuc: [],
      sanpham:[]
    };
    this.danhmuc= this.danhmuc.bind(this);
    
  }

  componentDidMount() {
    fetch(URL.localhost + '/App_API/Shop/danhmucsanpham.php')
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({ 
          danhmuc: responseJSON,
        });
        //   console.log(responseJSON);
      })
      .catch(e => {
        console.log(e);
      });

      fetch(URL.localhost + '/App_API/Shop/SanPham.php')
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({
          sanpham: responseJSON,
        });
         //  console.log(responseJSON);
      })
      .catch(e => {
        console.log(e);
      });

  }

  danhmuc(id, tenDM){
    fetch(URL.localhost + '/App_API/Shop/ShowSanPham.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_DanhMuc":id,       
      }) 
    }) 
      .then((response) => response.json())
      .then((json) => {
    // console.log({data:json});
       this.props.navigation.navigate('DanhSachSP',{
         data:json,
         tenDM:tenDM
       });

      })
  }

  

  render() {
    return (
      //  <View style={styles.body}>
        <ScrollView>
      <View style={{flex: 1}}>
        <View style={{flex: 30, height: 200}}>
          <ImageBackground
            source={require('../../../images/background_shop.jpg')}
            resizeMode="cover"
            style={{flex: 30}}></ImageBackground>
        </View>


        <TouchableOpacity style={styles.btnSearch}
          onPress={()=>{this.props.navigation.navigate('TimKiemSP')}}
        
        >
            <TextInput 
            style={{marginLeft:20}}
                placeholder="Search"
                underlineColorAndroid="transparent"
                placeholderTextColor="#cc0000"
                // onChangeText={keyword => this.setState({keyword})}
                // value={this.state.keyword}
            />
            <Text style={{marginLeft:240, marginTop:15}}
               
            
            >
                <Icon name="search" color="#cc0000" size={15} />
            </Text>
        </TouchableOpacity>



        <View style={{flex:70}}>
          <Text style={styles.title}>Danh mục sản phẩm </Text>

          <SafeAreaView style={styles.container}>
            <FlatList
              style={styles.flatlist}
              horizontal
              data={this.state.danhmuc}
              keyExtractor={({id_DanhMuc}, index) => id_DanhMuc}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={()=> this.danhmuc(item.id_DanhMuc, item.TenDanhMuc)}
                  >
                  <View style={styles.item}>
                    {/* <Image
                      source={{uri: item.HinhAnh}}
                      style={styles.image}
                      resizeMode="cover">
 
                      </Image> */}

                      
                      
                      <Image
                      source={{uri: URL.localhost +'/LuanVan/public/upload/danhmucsanpham/'+item.HinhAnh}}
                      style={styles.image}
                      resizeMode="cover"> 
 
                      </Image>
                      <Text style={styles.textPT}>{item.TenDanhMuc}</Text>
                   
                    </View>
                </TouchableOpacity>
                
              )}
            />
          </SafeAreaView>

          <Text style={styles.titleSP}>Sản phẩm mới nhất</Text>

          <SafeAreaView style={styles.container}>
            <FlatList
              style={styles.flatlist}
              horizontal
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
                    sodaban:item.SoLuong_SPDaBan
                  })}
                  >
                  <View style={styles.item}>
                    <Image
                      source={{uri: URL.localhost +'/LuanVan/public/upload/sanpham/'+item.HinhAnh_SP}}
                      style={styles.image}
                      resizeMode="cover">
 
                      </Image>
                      <Text style={styles.textPT}>{item.TenSanPham}</Text>
                      {/* <Text style={styles.text}>{item.Gia}</Text> */}
                    </View>
                </TouchableOpacity>
                
              )}
            />
          </SafeAreaView>

        </View>
      </View>

    </ScrollView>
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

  btnSearch: {
    backgroundColor: '#e6e6e6',
    marginHorizontal: 20,
    borderRadius: 20,
    color: '#cc0000',
    marginTop: 20,
    flexDirection:'row'
  },

});
