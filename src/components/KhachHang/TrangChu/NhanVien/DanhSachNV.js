import React, { Component } from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet,
        TouchableOpacity, 
        ImageBackground,
        Image,
        Button,
        TextInput
    } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var URL_PT=  URL.localhost+"/App_API/nhanvien.php";

export default class DanhSachNV extends Component {

    constructor(props) {
        super(props);
        this.state={
         nhanvien:[],
        }   
        
      }

    componentDidMount(){
    
        fetch(URL_PT)
        .then((response)=>response.json())
        .then((responseJSON)=>{
          this.setState({
           nhanvien:responseJSON
    
          });
        })
        .catch((e)=>{console.log(e)});
    
      }

  render() {

    const {
        image, text, flatlist, body,item,title,
    } = styles;

    const {navigation} = this.props;
    const {idKH}=this.props.route.params;

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
            <Text style={styles.titleHeader}> Đội ngũ PT</Text>
          </View>
        </View>
           
        <TouchableOpacity style={styles.btnSearch}
          onPress={()=>{navigation.navigate('TimKiemNV')}}
        
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
            
        <FlatList
          data={this.state.nhanvien}
          keyExtractor={({id_NhanVien}, index) => id_NhanVien}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
              
              onPress={()=>navigation.navigate('ThongTinNV',{
                idNV:item.id_NhanVien,
                Ten:item.TenNV,
                email: item.Email,
                sdt:item.SoDienThoai,
                anh: item.AnhDaiDien,
                gioitinh: item.GioiTinh,
                diachi: item.DiaChi,
                date: item.NgaySinh,
                kinhnghiem: item.KinhNghiem,
                idKH:idKH
               
              })}
            >
              <Image
                source={{uri:item.AnhDaiDien}}
                style={styles.coverImage}
              />
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.TenNV}</Text>
                <Text style={styles.text}>{item.Email}</Text>
                <Text style={styles.text}>Kinh nghiệm: {item.KinhNghiem} năm</Text>
                         
             
              </View>
  
            </TouchableOpacity>
          )}
        />

      </View> 
    )
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
        color: 'black',
        marginTop: 10,
      },
  
      textTen:{
        fontWeight: 'bold',
        color:'#a50000'
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