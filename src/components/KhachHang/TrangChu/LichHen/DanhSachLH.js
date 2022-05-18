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

export default class DanhSachLH extends Component {

  



  constructor(props) {
    super(props);
    this.state={
     nhanvien:[],
     refresh:0
      
    }   
    this.huy= this.huy.bind(this);
     
  }

  componentWillUnmount() {
    clearInterval(this.refresh);
  }


  huy(id, idNV, idKH){
  //   console.log(id, idNV,idKH);
    
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
            `Đã gửi yêu cầu hủy lịch thành công !`,
          );
          this.props.navigation.pop();

       }
        
      })

  //     // thong bao
console.log(id,idNV,idKH);
      fetch(URL.localhost+"/App_API/LichHen/ThongBao.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id_LichHen":id,
          "id_NhanVien":idNV,
          "id_KhachHang":idKH,
        })
    })
        .then((response) => response.json())
        // .then((json) => {
          
  
        //  }
          
      //  )
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
            <Text style={styles.titleHeader}> Lịch hẹn của tôi</Text>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={({id_LichHen}, index) => id_LichHen}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.listItem}

              //   onPress={()=>navigation.navigate('ThongTinNV',{
              //     Ten:item.TenNV,
              //     email: item.Email,
              //     sdt:item.SoDienThoai,
              //     anh: item.AnhDaiDien,
              //     gioitinh: item.GioiTinh,
              //     diachi: item.DiaChi,
              //     date: item.NgaySinh,
              //     kinhnghiem: item.KinhNghiem

              //   })}
            >
              <Image
                 source={{uri:item.AnhDaiDien}}
                style={styles.coverImage}
              />
              {/* <Text>{item.id_KhachHang}</Text> */}
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]}>{item.TenNV}</Text>
                <Text style={styles.text}>
                  Số điện thoại: {item.SoDienThoai}
                </Text>
                <Text style={styles.text}>
                  Kinh nghiệm: {item.KinhNghiem} năm
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <View
                    style={{flex: 1, height: 1, backgroundColor: 'black'}}
                  />
                  <View>
                    <Text
                      style={{
                        width: 70,
                        textAlign: 'center',
                        color: '#a50000',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}>
                      Dịch vụ
                    </Text>
                  </View>
                  <View
                    style={{flex: 1, height: 1, backgroundColor: 'black'}}
                  />
                </View> 

                <Text style={styles.text}>Loại vé: {item.TenDichVu} </Text>
                <Text style={styles.text}>Ngày đặt: {item.NgayDK} </Text>
                <Text style={styles.text}>Giờ đặt: {item.GioDK} </Text>
                <Text style={styles.text}>Tổng tiền: {item.TongTien} </Text>

                {item.TrangThaiLichHen == 1 && (
                  <View style={styles.btnHuy}>
                    <View >
                      <Button onPress={()=>navigation.navigate('DoiLichHen',{
                        id:item.id_LichHen,
                        sdt:item.SoDienThoai,
                        kinhnghiem:item.KinhNghiem,
                        tenve:item.TenDichVu,
                        ngay:item.NgayDK,
                        gio:item.GioDK,
                        anh:item.AnhDaiDien,
                        Ten:item.TenNV,
                        gia:item.TongTien,
                        idNV:item.id_NhanVien,
                        id_KhachHang:item.id_KhachHang
                     

                      })}
                          title="dời lịch" color="#26734d" />
                    </View>

                    <View  style={{marginLeft:10}} >
                      <Button  
                          onPress={()=>this.huy(item.id_LichHen, item.id_NhanVien, item.id_KhachHang)} 
                            title="Hủy" color="#a50000" 
                        
                            />
                    </View>
                  </View>
                )}

                {item.TrangThaiLichHen == 2 && (
                  <View style={styles.btnHuy}>
                    <View >
                      <Button title="còn hạn" color="#3366cc" />
                    </View>
                  </View>
                )}

                {item.TrangThaiLichHen == 0 && (
                  <View style={styles.btnHuy}>
                    <View >
                      <Button title="Đang chờ xác nhận" color="#663300" />
                    </View>
                  </View>
                )} 

                {item.TrangThaiLichHen == -1 && (
                  <View style={styles.btnHuy}>
                    <View >
                      <Button title="đã hủy" color="#55552b" />
                    </View>
                  </View>
                )}

              

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