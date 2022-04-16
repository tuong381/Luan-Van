
import React from "react";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {View , Text, FlatList, Image, Button,
         StyleSheet, TouchableOpacity} from 'react-native';

import { List, ListItem } from "react-native-elements";
import { color } from "@mui/system";
import ThongTinNV from "./NhanVien/ThongTinNV";
import VD from "./NhanVien/VD";
const ChiTietDV= ({route,navigation}) => {


  //const {navigation} = this.props;
 

  const {
    image, text, flatlist, body,item,title,
} = styles;
     const {tenDV}= route.params;
    // const {id_DichVu}= route.params; style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    const {data}=route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
            <Icon name="angle-left" color="#eee" size={30} />
          </TouchableOpacity>
          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> {tenDV}</Text>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={({id_NhanVien}, index) => id_NhanVien}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
              
              onPress={()=>navigation.navigate('ThongTinNV',{
                Ten:item.TenNV,
                email: item.Email,
                sdt:item.SoDienThoai,
                anh: item.AnhDaiDien,
                gioitinh: item.GioiTinh,
                diachi: item.DiaChi,
                date: item.NgaySinh,
                kinhnghiem: item.KinhNghiem
               
              })}>
              <Image
                source={{uri: item.AnhDaiDien}}
                style={styles.coverImage}
              />
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.TenNV}</Text>
                <Text style={styles.text}>{item.Email}</Text>
                <Text style={styles.text}>Kinh nghiệm: {item.KinhNghiem} năm</Text>
               
                <View style={{marginTop:20, width:100}}>
                <Button style={{color:'red', borderRadius:20}}
                        onPress={()=>goback()}
                        title="Đăng ký"
                       // disabled={true}
                        color="#a50000"
                       
                    />
                </View>
             
              </View>

              

              
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
 
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    coverImage: {
      // width: 120,
      // height: 120,
      // borderRadius: 8
      width: 120,
      height: 120,
      borderRadius: 200 / 2
    },
    metaInfo: {
      marginLeft: 30,
      
    },

    container: {
      flex:1
    },

    header:{
      flexDirection:'row',
     // flex:1,
      backgroundColor:'#a50000',
      height:60,
    },

    backButton:{
      //flex:5,
      justifyContent:'center',
      backgroundColor:'#a50000',
      marginLeft:10
    },

    baoTitle:{
     // flex:6,
      justifyContent:'center',
      alignItems:'center',
     // marginRight: 200,
      backgroundColor:'#a50000',
      marginLeft:115
    },

    titleHeader:{
      color:'white',
      fontSize:22,
   
    },

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
      fontSize: 15,
      color: 'black',
      marginTop: 10,
    },

    textTen:{
      fontWeight: 'bold',
      color:'#a50000'
    },
  
    image: {
      //  marginTop:5,
      height: 140,
      width: 140,
      borderRadius:10
    
   
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
    
  })
  

  export default ChiTietDV;
