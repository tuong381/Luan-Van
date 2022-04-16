import React, { Component } from 'react'
import {View, Text, ImageBackground, StyleSheet, FlatList, Image, Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/FontAwesome';
 class NhanVien extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      mang: []
        
    }
  }

  componentDidMount(){
    fetch("http://192.168.1.3/App_API/nhanvien.php")
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.setState({
        mang:responseJSON

      });
    })
    .catch((e)=>{console.log(e)});
  }


  render() {
    const {
      image, text, flatlist, body,item,title,
  } = styles;

    return (
      <View style={styles.body}>
        <Text style={styles.text}>Đội ngũ PT</Text>

        <SafeAreaView style={styles.container}>
          <FlatList
            style={styles.flatlist}
            horizontal
            data={this.state.mang}
            keyExtractor={({id_NhanVien}, index) => id_NhanVien}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Image
                  source={{uri: item.AnhDaiDien}}
                  style={styles.image}
                  resizeMode="cover"></Image>
                <Text style={styles.title}>{item.TenNV}</Text> 
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        color:'black',
        textAlign:'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
      //  marginTop:55,
        fontSize:12
      },

    text:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        marginTop:10
      },

  image:{
  //  marginTop:5,
    height:120,
    width:120,
    borderRadius:10,
   // borderWidth:0.8

  },

  flatlist:{
  //  marginTop: 100,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection:'row', 
    
  },

  container:{
    padding:8,
  },

  item:{
    borderWidth:0.5,
    padding:3,
    borderRadius:15,
   // justifyContent:'center',
    borderColor:'white',
     shadowColor: 'red',
    // shadowOffset: {
    //     width: 0,
    //     height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,

    // elevation: 9,
  },

  body:{
    
    flex:70, 
    //justifyContent: 'center',
  }
})


export default NhanVien;
