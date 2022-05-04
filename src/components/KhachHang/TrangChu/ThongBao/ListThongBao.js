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
    this.xuly= this.xuly.bind(this);
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
        `Bạn đã hủy lịch thành công !`,
      );
       // navigation.navigate('ThongBao');
        this.props.navigation.pop();
     }
       
    
      })
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
                    source={{uri: item.AnhDaiDien}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>{item.TenNV} đã xác nhận {item.TieuDe}</Text>
                    <Text style={styles.text}>{item.created_at}</Text>
                  </View>
                </TouchableOpacity>
              )}

            {item.TrangThai == 4 && (
                <TouchableOpacity style={styles.listItem}>
                  <Image
                    source={{uri: item.AnhDaiDien}}
                    style={styles.coverImage}
                  />

                  <View style={styles.metaInfo}>
                    <Text style={styles.text}>{item.TenNV} đã gửi {item.TieuDe}</Text>
                    <Text style={styles.text}>{item.created_at}</Text>

                    <View style={styles.btnHuy}>
                <Button
                  onPress={() => {
                    this.xuly(item.id_ThongBao);
                  }}
                  title="Xử lí"
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
});
