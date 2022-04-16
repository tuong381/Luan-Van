
import React from "react";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {View , Text, FlatList, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';


const VD= ({route,navigation}) => {

  
    // const {TenNV}= route.params;
    // const {id_DichVu}= route.params; style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    const {data}=route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}
              onPress={() => {navigation.pop()}}>
           
            <Icon name="angle-left" color="#eee" size={30} />


          </TouchableOpacity>
          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> Danh sach nhan vien</Text>
          </View>
          </View>
        {/* <Text>Ma sv = {TenNV}</Text>
        <Text>ten sv = {id_DichVu}</Text> */}
        {/* <Text>{data}</Text> */}
        <FlatList
           
            horizontal
            data={data}
            keyExtractor={({id_NhanVien}, index) => id_NhanVien}

            renderItem={({item}) => (
            
              <View >
                <Text style={{color:'red'}}>{item.TenNV}</Text>
                <ImageBackground
                  source={{uri: item.AnhDaiDien}}
                  style={styles.image}
                  resizeMode="cover">
                  
                </ImageBackground>
              </View>

            )}
      
          />
       
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1
    },

    header:{
      flexDirection:'row',
     // flex:1,
      backgroundColor:'#09c',
      height:60,
    },

    backButton:{
      flex:5,
      justifyContent:'center',
      backgroundColor:'#09c',
    },

    baoTitle:{
      flex:16,
      justifyContent:'center',
      alignItems:'center',
      marginRight: 200,
      backgroundColor:'#09c',
    },

    titleHeader:{
      color:'white',
      
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
  

  export default VD;
