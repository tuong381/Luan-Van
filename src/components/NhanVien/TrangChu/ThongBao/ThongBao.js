import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var URL_PT = URL.localhost + '/App_API/LichHen.php';

const ThongBao= ({route,navigation}) => {
  const {data}=route.params;

  const [thongbao, setthongbao] = useState(data);

  const huy=(id, idLH) => {
    console.log(id, idLH);
    fetch(URL.localhost + '/App_API/NhanVien/ThongBao/HuyLich.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_ThongBao: id,
        id_LichHen: idLH,
      }),
    })
      .then(response => response.json())
      .then(json => {
        //console.log({data:json});
        if (json.kq > 0) {
          Alert.alert('Thông báo!', `Bạn đã hủy lịch thành công !`);
          // navigation.navigate('ThongBao');
      navigation.pop();
          //this.props.navigation.pop();
        }
      });
  }

  const xoa=(idTB) =>{
  

    fetch(URL.localhost + '/App_API/NhanVien/ThongBao/XoaThongBao.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_ThongBao": idTB 
      }),
    })
      .then(response => response.json())
      .then(json => {
        //console.log({data:json});
        if (json.kq > 0) {
          Alert.alert('Thông báo!', `Bạn đã xóa thông báo thành công !`);
          // navigation.navigate('ThongBao');
          navigation.pop();
        }
      });
    
   


  }
  // render() {
    
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
            <Text style={styles.titleHeader}> Thông báo</Text>
          </View>
        </View>

        <FlatList
          data={thongbao}
          keyExtractor={({id_ThongBao}, index) => id_ThongBao}
          renderItem={({item}) => (
            <View>
              {item.TrangThai == 3 && (
                <View style={styles.listItem}>
                  <Image
                    source={{uri: item.HinhAnh}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>
                      Khách hàng {item.TenKH} gửi {item.TieuDe}
                    </Text>
                    <Text style={styles.text1}>{item.created_at}</Text>

                    <View style={styles.btnHuy}>
                      <Button
                        onPress={() => {
                          huy(item.id_ThongBao, item.id_LichHen);
                        }}
                        title="Hủy"
                        color="#a50000"
                      />
                    </View>
                  </View>
                </View>
              )}

              {item.TrangThai == -4 && (
                <View style={styles.listItem}>
                  <Image
                    source={{uri: item.HinhAnh}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>
                      {item.TenKH} đã chấp nhận {item.TieuDe} của bạn
                    </Text>
                    <Text style={styles.text1}>{item.created_at}</Text>
                    <TouchableOpacity style={styles.btnIcon}
                      onPress={()=> xoa(item.id_ThongBao)}
                    >
                      <Icon name="trash" color="#ff6666" size={30} />
                    </TouchableOpacity>

                    {/* <View style={styles.btnHuy}>
                      <Text style={{color:'black', fontSize:16}}>Đã xử lý</Text>
                    </View> */}
                  </View>
                </View>
              )}

              {item.TrangThai == -1 && (
                <View style={styles.listItem}>
                  <Image
                    source={{uri: item.HinhAnh}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>
                      {item.TenKH} đã đồng ý yêu cầu {item.TieuDe} của bạn
                    </Text>
                    <Text style={styles.text1}>{item.created_at}</Text>
                    <TouchableOpacity style={styles.btnIcon}
                      onPress={()=> xoa(item.id_ThongBao)}
                    >
                      <Icon name="trash" color="#ff6666" size={30} />
                    </TouchableOpacity>

                    {/* <View style={styles.btnHuy}>
                      <Text style={{color:'black', fontSize:16}}>Đã xử lý</Text>
                    </View> */}
                  </View>
                </View>
              )}

              {item.TrangThai == 2 && (
                <View style={styles.listItem}>
                  <Image
                    source={{uri: item.HinhAnh}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>
                      Khách hàng {item.TenKH} {item.TieuDe}
                    </Text>
                    <Text style={styles.text1}>{item.created_at}</Text>

                    <TouchableOpacity style={styles.btnIcon}
                      onPress={()=> xoa(item.id_ThongBao)}
                    >
                      <Icon name="trash" color="#ff6666" size={30} />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          )}
        />
      </View>
    );
  }
// }

const styles = StyleSheet.create({
  listItem: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  coverImage: {
    // width: 120,
    // height: 120,
    // borderRadius: 8
    width: 80,
    height: 80,
    borderRadius: 200 / 2,
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

  header: {
    flexDirection: 'row',
    // flex:1,
    backgroundColor: '#a50000',
    height: 60,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    backgroundColor: '#a50000',
    marginLeft: 100,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  backButton: {
    //flex:5,
    justifyContent: 'center',
    backgroundColor: '#a50000',
    marginLeft: 10,
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

  item: {
    //  borderWidth:0.5,
    padding: 3,
    borderRadius: 10,
    justifyContent: 'center',
  },
  
  text1: {
    fontSize: 15,
    color: '#8c8c8c',
    marginTop: 10,
  },


  text: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    width: 270,
  },

  textTen: {
    fontWeight: 'bold',
    color: '#a50000',
  },

  btnHuy: {
    justifyContent: 'center',
    marginLeft: 200,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },

  btnIcon: {
    justifyContent: 'center',
    marginLeft: 200,
    flexDirection: 'row',

    marginBottom: 5,
  },
});

export default ThongBao;