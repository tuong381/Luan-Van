import React, {Component} from 'react';
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

export default class ListThongBao extends Component {

  constructor(props){
    super(props);
    this.huy= this.huy.bind(this);
    this.xuly= this.xuly.bind(this);
    this.xoa= this.xoa.bind(this);
  }

  huy(id, idLH){
    console.log(id, idLH);
    fetch(URL.localhost+"/App_API/ThongBao/Huy.php", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_ThongBao:id,
        id_LichHen: idLH,       
      }) 
    }) 
      .then((response) => response.json())
      .then((json) => {
     //console.log({data:json});
     if(json.kq>0){ 
      Alert.alert(
        'Thông báo!',
        `Bạn đã đồng ý hủy lịch hẹn thành công !`,
      );
       // navigation.navigate('ThongBao');
        this.props.navigation.pop();
     }
       
    
      })
  }

  xuly(id){
    fetch(URL.localhost+"/App_API/ThongBao/XuLy.php", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_ThongBao":id,       
      }) 
    }) 
      .then((response) => response.json())
      .then((json) => {
     //console.log({data:json});
     if(json.kq>0){ 
      Alert.alert(
        'Thông báo!',
        `Bạn đã đồng ý cập nhật lịch hẹn thành công !`,
      );
       // navigation.navigate('ThongBao');
        this.props.navigation.pop();
     }
       
    
      })
  }

  xoa(idTB){
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
          this.props.navigation.pop();
        }
      });
  }

  render() {
    const {data} = this.props.route.params;
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
            <Text style={styles.titleHeader}> Thông báo</Text>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={({id_ThongBao}, index) => id_ThongBao}
          renderItem={({item}) => (
            <View>
              {item.TrangThai == -3 && (
                <TouchableOpacity style={styles.listItem}>
                  <Image
                     source={{uri:item.AnhDaiDien}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>Nhân viên {item.TenNV} đã xác nhận {item.TieuDe} của bạn</Text>
                    <Text style={styles.text1}>{item.created_at}</Text>
                    <TouchableOpacity style={styles.btnIcon}
                      onPress={()=> this.xoa(item.id_ThongBao)}
                    >
                      <Icon name="trash" color="#ff6666" size={30} />
                    </TouchableOpacity>
                  </View>

                  

                </TouchableOpacity>
              )}

            {item.TrangThai == 1 && (
                <TouchableOpacity style={styles.listItem}>
                  <Image
                     source={{uri:item.AnhDaiDien}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    
                    <Text style={styles.text}>Nhân viên {item.TenNV} {item.TieuDe}</Text>
                    <Text style={styles.text}>Ngày cập nhật: {item.NgayDK} </Text>
                    <Text style={styles.text}>Giờ cập nhật: {item.GioDK} </Text>
                    <Text style={styles.text1}>{item.created_at}</Text>

                    <View style={styles.btnHuy}>
                <Button
                  onPress={() => {
                    this.xuly(item.id_ThongBao);
                  }}
                  title="Xử lý"
                  color="#339966"
                />
                <Text>   </Text>
                <View>
                <Button
                  onPress={() => {
                    this.huy(item.id_ThongBao, item.id_LichHen);
                  }}
                  title="Hủy"
                  color="#a50000"
                />
                </View>
              </View>

             
                  </View>
                </TouchableOpacity>
              )}

            {item.TrangThai == 4 && (
                <TouchableOpacity style={styles.listItem}>
                  <Image
                    source={{uri:item.AnhDaiDien}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    {/* <Text>{item.id_LichHen}</Text> */}
                    <Text style={styles.text}>Nhân viên {item.TenNV} đã gửi {item.TieuDe}</Text>
                    <Text style={styles.text1}>{item.created_at}</Text>

                    <View style={styles.btnHuy}>
                <Button
                  onPress={() => {
                    this.huy(item.id_ThongBao, item.id_LichHen);
                  }}
                  title="hủy"
                  color="#a50000"
                />
              </View>

                  </View>

                </TouchableOpacity>
                
              )}
            </View>
          )}
        />
      </View>
    );
  }
}

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
    width:240
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

  text: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
  },

  text1: {
    fontSize: 15,
    color: '#8c8c8c',
    marginTop: 10,
  },

  textTen: {
    fontWeight: 'bold',
    color: '#a50000',
  },

  btnSearch: {
    backgroundColor: '#e6e6e6',
    marginHorizontal: 20,
    borderRadius: 20,
    color: '#cc0000',
    marginTop: 20,
    flexDirection: 'row',
  },

  btnHuy:{
    justifyContent:'center',
    marginLeft:180,
    flexDirection:'row',
    marginTop:5,
    marginBottom:5
   
  },

  btnIcon: {
    justifyContent: 'center',
    marginLeft: 200,
    flexDirection: 'row',

    marginBottom: 5,
  },
});
