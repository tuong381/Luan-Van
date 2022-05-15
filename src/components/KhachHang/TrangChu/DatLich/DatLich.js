import { DoNotDisturbOnTotalSilenceSharp } from '@mui/icons-material';
import React, { Component , useState, useEffect} from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet,
        TouchableOpacity, 
        ImageBackground,
        SafeAreaView,
        Image,
        Button
    } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';
import AsyncStorage from '@react-native-async-storage/async-storage';

var URL_DV= URL.localhost+"/App_API/dichvu.php";
var URL_PT=  URL.localhost+"/App_API/nhanvien.php";

// export default class DatLich extends Component {
const DatLich = ({route, navigation}) => {

  const [token, settoken] = useState('');
  const [id_KhachHang, setid_KhachHang] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('token').then(responseJson => {
      settoken(responseJson);
    });

   // lay id
    AsyncStorage.getItem('id_KhachHang').then(responseJSON => {
      setid_KhachHang(responseJSON);
    });
  }, []);



  const [bio, setBio] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      URL_PT,
    );
    const data = await response.json();
    // console.log(data);
    setBio(data);
  };
  fetchData();


  const {ten}=route.params;
  const {id_DV}=route.params;
  const {gia}=route.params;

  //  const {navigation} = this.props;
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
            <Text style={styles.titleHeader}> Đặt lịch - {ten}</Text>
          </View>
        </View>

        <FlatList
          data={bio}
          keyExtractor={({id_NhanVien}, index) => id_NhanVien}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
              
              // onPress={()=>navigation.navigate('ThongTinNV',{
              //   Ten:item.TenNV,
              //   email: item.Email,
              //   sdt:item.SoDienThoai,
              //   anh: item.AnhDaiDien,
              //   gioitinh: item.GioiTinh,
              //   diachi: item.DiaChi,
              //   date: item.NgaySinh,
              //   kinhnghiem: item.KinhNghiem
               
              // })}
              >
              <Image
                source={{uri:item.AnhDaiDien}}
                style={styles.coverImage}
              />
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.TenNV}</Text>
                <Text style={styles.text}>{item.Email}</Text>
                <Text style={styles.text}>Kinh nghiệm: {item.KinhNghiem} năm</Text>
               
                <View style={{marginTop:20, width:100}}>
                <Button style={{color:'red', borderRadius:20}}
                        onPress={()=>navigation.navigate('DangKyDL',{
                          Ten:item.TenNV,
                          email: item.Email,
                          sdt:item.SoDienThoai,
                          anh: item.AnhDaiDien,
                          gioitinh: item.GioiTinh,
                          diachi: item.DiaChi,
                          date: item.NgaySinh,
                          kinhnghiem: item.KinhNghiem,
                          id_NV:item.id_NhanVien,
                          tenve:ten,
                          id_DV:id_DV,
                          id_KH:id_KhachHang,
                          gia:gia

                         
                        })}
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
//}

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
  });


export default DatLich ;