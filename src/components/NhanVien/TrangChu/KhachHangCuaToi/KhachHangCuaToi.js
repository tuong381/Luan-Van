import React, { Component } from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet,
        TouchableOpacity, 
        ImageBackground,
        Image,
        Button,
        Alert
    } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var URL_PT=  URL.localhost+"/App_API/LichHen.php";

export default class KhachHangCuaToi extends Component {

  



  constructor(props) {
    super(props);
    this.state={
     nhanvien:[],
     refresh:0
      
    }   
    this.huy= this.huy.bind(this);
     
  }


  huy(id){
    
    fetch(URL.localhost+"/App_API/LichHen/HuyLichHen.php", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_LichHen":id,
      })
  })
      .then((response) => response.json())
      .then((json) => {
        if(json.kq>0){ 
          console.log('ok');
          Alert.alert(
            'Thông báo!',
            `Hủy lịch thành công !`,
          );

       }
        
      })
  }

  render() {

    const {
        image, text, flatlist, body,item,title,
    } = styles;

    const {navigation} = this.props;
    const {data}=this.props.route.params;


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
            <Text style={styles.titleHeader}> Khách hàng của tôi</Text>
          </View>
        </View>

        <FlatList
           data={data}
           keyExtractor={({id_LichHen}, index) => id_LichHen}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
              
             
            >
              <Image
                source={{uri: item.HinhAnh}}
                style={styles.coverImage}
              />
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.TenKH}</Text>
                <Text style={styles.text}>Số điện thoại: {item.SoDienThoai}</Text>
                <Text style={styles.text}>Ngày đăng ký: {item.NgayDK} </Text>
                         
             
              </View>
  
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    coverImage: {
        width: 80,
        height: 80,
        borderRadius: 8
        // width: 120,
        // height: 120,
        // borderRadius: 200 / 2
      },
      metaInfo: {
        marginLeft: 30,
        
      },
    metaInfo: {
      marginLeft: 30,
    },
  
    container: {
      flex: 1,
    },
      
    header:{
        flexDirection:'row',
       // flex:1,
       backgroundColor:'#a50000',
        height:60,
      },
       
      baoTitle:{
       // flex:6,
        justifyContent:'center',
        alignItems:'center',
       // marginRight: 200,
        backgroundColor:'#a50000',
        marginLeft:100
      },
    
      titleHeader:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
       
      },

      backButton:{
        //flex:5,
        justifyContent:'center',
        backgroundColor:'#a50000',
        marginLeft:10
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

      item: {
        //  borderWidth:0.5,
        padding: 3,
        borderRadius: 10,
        justifyContent: 'center',
       
      },

      text: {
        fontSize: 15,
        color: '#8c8c8c',
        marginTop: 10,
      },
  
      textTen:{
        fontWeight: 'bold',
        color:'black'
      },

      btnHuy:{
        justifyContent:'center',
        marginLeft:110,
        flexDirection:'row',
        marginTop:10
       
      },
  });