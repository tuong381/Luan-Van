import React, { Component } from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet,
        TouchableOpacity, 
        ImageBackground,
        Image,
        Button
    } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var URL_PT=  URL.localhost+"/App_API/nhanvien.php";

export default class TimKiemNV extends Component {

    constructor(props) {
        super(props);
        this.state={
         nhanvien:[],
         keyword:''
          
        }   
        this.search = this.search.bind(this);
        
      }
 
    search(search){
        console.log(search);
        fetch(URL.localhost+"/App_API/TimKiemNV.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "keyword":search
             
            })
        })
        
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    nhanvien:json
             
                   });
                   console.log(json);
              
            }) 
    }
 
  render() {
      var {keyword}=this.state;

    const {
        image, text, flatlist, body,item,title,
    } = styles;

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
             <Icon name="angle-left" color="#cc0000" size={30} />
          </TouchableOpacity>

          <View style={styles.btnSearch}>
          <TextInput
            style={{marginLeft: 20}}
            placeholder="Tìm nhân viên"
            underlineColorAndroid="transparent"
          //  placeholderTextColor="#cc0000"
            onChangeText={keyword => this.setState({keyword})}
            value={this.state.keyword}
          />
          
        </View>
        <TouchableOpacity
            style={{ marginTop: 25,}}
            onPress={() => this.search(keyword)}>
            <Text style={{color:'#cc0000'}}>Tìm kiếm</Text>
          </TouchableOpacity>

        </View>
        
        <FlatList
          data={this.state.nhanvien}
          keyExtractor={({id_NhanVien}, index) => id_NhanVien}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate('ThongTinNV', {
                  Ten: item.TenNV,
                  email: item.Email,
                  sdt: item.SoDienThoai,
                  anh: item.AnhDaiDien,
                  gioitinh: item.GioiTinh,
                  diachi: item.DiaChi,
                  date: item.NgaySinh,
                  kinhnghiem: item.KinhNghiem,
                })
              }>
              <Image
                source={{uri: item.AnhDaiDien}}
                style={styles.coverImage}
              />

              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]}>{item.TenNV}</Text>
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
    width: 60,
    height: 60,
    borderRadius: 5,
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
    //backgroundColor: '#a50000',
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
    flexDirection:'row',
    width:270
  },

  backButton:{
    //flex:5,
    justifyContent:'center',
    marginLeft:10
  },
});