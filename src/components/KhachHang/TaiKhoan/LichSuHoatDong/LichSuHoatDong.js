import React, {Component, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
  Image,
  FlatList,
  Button,
} from 'react-native';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {URL} from '../../../../../Ip';

const LichSuHoatDong = ({route, navigation}) => {
  const [page, setPage] = useState(DICH_VU);

  const {data} = route.params;
  // const {dataSP} =  route.params;

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{height: '20%', width: '100%'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
            <Icon name="angle-left" color="#eee" size={30} />
          </TouchableOpacity>
          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> Lịch sử hoạt động</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', height: 50}}>
          <TouchableOpacity
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setPage(DICH_VU)}
            disabled={page === DICH_VU ? true : false}>
            <Text style={{fontSize: 20, color: '#a50000'}}>Dịch vụ</Text>
            {page === DICH_VU ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 3,
                  width: '100%',
                  backgroundColor: '#a50000',
                }}></View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setPage(SAN_PHAM)}
            disabled={page === SAN_PHAM ? true : false}>
            <Text style={{fontSize: 20, color: '#a50000'}}>Sản phẩm</Text>
            {/* <Button
                title="san phamr"
              /> */}

            {page === SAN_PHAM ? (
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  height: 3,
                  width: '100%',
                  backgroundColor: '#a50000',
                }}></View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{height: '100%', width: '100%'}}>
        {page == DICH_VU ? (
          <View style={{height: '100%', width: '100%'}}>
            <FlatList
              data={data}
              keyExtractor={({id_HD}, index) => id_HD}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.listItem}>
                  <Image 
                    source={{
                      uri: item.AnhDaiDien,
                    }}
                    style={styles.coverImage}
                  />
                  {/* <Text>{item.id_KhachHang}</Text> */}
                  <View style={styles.metaInfo}>
                    <Text style={[styles.text, styles.textTen]}>
                      {item.TenNV}
                    </Text>
                    <Text style={styles.text}>
                      Số điện thoại: {item.SoDienThoai}
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

                    <Text style={styles.text}>Loại vé: {item.TenVe} </Text>
                    <Text style={styles.text}>Ngày đặt: {item.NgayDK} </Text>
                    <Text style={styles.text}>Giờ đặt: {item.GioDK} </Text>
                    <Text style={styles.text}>
                      Tổng tiền: {item.TongHoaDon}{' '}
                    </Text>

                    {item.TrangThaiHoaDon ==0 ?
                         <Text style={styles.text}>Trạng thái hóa đơn:chưa thanh toán</Text>  
                      
                      :
                      <Text style={styles.text}>Trạng thái hóa đơn: Đã thanh toán</Text> 
                  } 

                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          <SanPhamComponent />
        )}
      </View>
    </View>
  );
};
const DICH_VU = 'DICH_VU';
const SAN_PHAM = 'SAN_PHAM';

const MainComponent = ({page, setPage}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            this.props.navigation.pop();
          }}>
          <Icon name="angle-left" color="#eee" size={30} />
        </TouchableOpacity>
        <View style={styles.baoTitle}>
          <Text style={styles.titleHeader}> Lịch sử hoạt động</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', height: 50}}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setPage(DICH_VU)}
          disabled={page === DICH_VU ? true : false}>
          <Text style={{fontSize: 20, color: '#a50000'}}>Dịch vụ</Text>
          {page === DICH_VU ? (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 3,
                width: '100%',
                backgroundColor: '#a50000',
              }}></View>
          ) : null}
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '50%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setPage(SAN_PHAM)}
          disabled={page === SAN_PHAM ? true : false}>
          <Text style={{fontSize: 20, color: '#a50000'}}>Sản phẩm</Text>
          {page === SAN_PHAM ? (
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 3,
                width: '100%',
                backgroundColor: '#a50000',
              }}></View>
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DichVuComponent = ({}) => {
  return (
    <View style={{height: '100%', width: '100%'}}>
      <FlatList
        data={data}
        keyExtractor={({id_HD}, index) => id_HD}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.listItem}>
            {/* <Image
                source={{uri: item.AnhDaiDien}}
                style={styles.coverImage}
              /> */}

            <View style={styles.metaInfo}>
              {item.TenVe === null && (
                <Text style={[styles.text, styles.textTen]}>
                  {item.TenSanPham}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const SanPhamComponent = ({}) => {
  const [id_KhachHang, setid_KhachHang] = useState('');
  const [bio, setBio] = useState({});
  useEffect(() => {
    // lay id
    AsyncStorage.getItem('id_KhachHang').then(responseJSON => {
      setid_KhachHang(responseJSON);
    });
  }, []);

  const fetchData = async id_KhachHang => {
    const response = await fetch(URL.localhost + '/App_API/LichSuHD_SP.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_KhachHang: id_KhachHang,
      }),
    });
    const data = await response.json();

    setBio(data);
  };

  fetchData(id_KhachHang);

  return (
    // <ScrollView>
    <View style={{height: '100%', width: '100%'}} >
    
      <FlatList
              data={bio}
              keyExtractor={({id_HD}, index) => id_HD}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.listItem}>
                  <Image
                    source={{
                      uri:
                        URL.localhost +
                        '/LuanVan/public/upload/sanpham/' +
                        item.HinhAnh_SP,
                    }}
                    style={styles.coverImage1}
                  />
                  {/* <Text>{item.id_KhachHang}</Text> */}
                  <View style={styles.metaInfo}>
                    <Text style={[styles.text, styles.textTen]}>
                      {item.TenSanPham}
                    </Text>
                    <Text style={styles.text}>
                      Giá: {item.TongHoaDon}
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
                      <View
                        style={{flex: 1, height: 1, backgroundColor: 'black'}}
                      />
                    </View>

                    

                    <Text style={styles.text}>Ngày đặt: {(moment(item.Ngay).format('YYYY.MM.DD'))} </Text>
                    <Text style={styles.text}>
                      Tổng tiền: {item.TongHoaDon}{' '}
                    </Text>
                    {item.TrangThaiHoaDon ==0 ?
                         <Text style={styles.text}>Trạng thái hóa đơn:chưa thanh toán</Text>  
                      : item.TrangThaiHoaDon ==1 ?
                      <Text style={styles.text}>Trạng thái hóa đơn: Đã xác nhận</Text> 
                      :
                      <Text style={styles.text}>Trạng thái hóa đơn: Đã thanh toán</Text> 
                  } 
                    
                  </View>
                </TouchableOpacity>
              )}
            />
          
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    // flex:1,
    backgroundColor: '#a50000',
    height: 60,
  },

  backButton: {
    //flex:5,
    justifyContent: 'center',
    backgroundColor: '#a50000',
    marginLeft: 10,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    backgroundColor: '#a50000',
    marginLeft: 90,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
  },

  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 16,
  },

  button: {
    width: 206,
    height: 120,
  },

  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff', 
    flexDirection: 'row',
   // width: 270,
  },
  coverImage: {
    // width: 120,
    // height: 120,
    // borderRadius: 8
    width: 120,
    height: 120,
    borderRadius: 200 / 2,
  },

  coverImage1: {
    width: 120,
    height: 120,
   // borderRadius: 200 / 2,
  },

  metaInfo: {
    marginLeft: 30,
    width: 270,
  },
  // metaInfo: {
  //   marginLeft: 30,
  // },

  text: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    width: 245,
  },

  textTen: {
    fontWeight: 'bold',
    color: '#a50000',
  },
});

export default LichSuHoatDong;
