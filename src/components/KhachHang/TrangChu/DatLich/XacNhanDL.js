import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
  TextInput,
  FlatList,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// import DatePicker from 'react-native-modern-datepicker';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

//  const DangKyDL = ({route, navigation}) => {
export default class XacNhanDL extends Component {
  constructor() {
    super();
    this.state = {

      result:'...'
    
    };

    this.xacnhan = this.xacnhan.bind(this);
  }


  xacnhan(id_KH, id_NV, id_DV, ngay, time,gia, tenve) {
    console.log(id_KH, id_NV, id_DV, ngay, time,gia, tenve);
    fetch(URL.localhost+"/App_API/DatLich.php", {
      method:"POST",
      headers:{
       "Accept": "application/json",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        "id_KhachHang":id_KH,
        "id_NhanVien":id_NV,
        "id_DichVu":id_DV,
        "NgayDK":ngay, 
        "GioDK":time, 
        "TongTien":gia,
        "TenVe":tenve, 
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({result:responseJson.id}) 
      
     console.log(responseJson.id);

     Alert.alert(  
      'Success!',
      `Đặt lịch thành công!`,
    );
    
     this.props.navigation.navigate('LoaiVe');
 
    })
    .catch((error) => {
      console.error(error);

    })

  }

  render() {

    const {tenve} = this.props.route.params;
    const {gia} = this.props.route.params;
    const {id_DV} = this.props.route.params;
    const {id_KH} = this.props.route.params;

    const {id_NV} = this.props.route.params;
    const {gioitinh} = this.props.route.params;
    const {Ten} = this.props.route.params;
    const {anh} = this.props.route.params;
    const {email} = this.props.route.params;
    const {sdt} = this.props.route.params;
    const {diachi} = this.props.route.params;
    const {date} = this.props.route.params;
    const {kinhnghiem} = this.props.route.params;

    const {ngay} = this.props.route.params;
    const {gio} = this.props.route.params;

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
            <Text style={styles.titleHeader}> Đặt lịch - {tenve}</Text>
          </View>
        </View>

       <View style={{flexDirection: 'row', margin: 10}}>
          <Icon name="user" color="#a50000" size={20} />
          <Text style={styles.title}>PT được chọn : </Text>
        </View>

         <View style={styles.listItem}>
          <Image source={{uri:anh}}
                style={styles.image} />
          <View style={styles.metaInfo}>
            <Text style={[styles.textTen]}>{Ten}</Text>
            <Text style={[styles.text]}>Giới tính: {gioitinh}</Text>
            <Text style={[styles.text]}>Ngày sinh: {date}</Text>
            <Text style={[styles.text]}>Số điện thoại: {sdt}</Text>
            <Text style={[styles.text]}>Kinh nghiệm: {kinhnghiem} năm</Text> 
          </View>
        </View>
 
       <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 10}}>
          <Icon name="calendar" color="#a50000" size={20} />
          <Text style={styles.title}>Thời gian đặt lịch : </Text>
          <Text style={[styles.textve]}>{ngay}</Text>
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 20}}>
          <Icon name="hourglass" color="#a50000" size={20} />
          <Text style={styles.title}>Chọn giờ : </Text>  
          <Text style={[styles.textve]}>{gio}</Text>
        </View>
        
        <View style={{flexDirection: 'row', marginLeft: 10, marginTop:20}}>
          <Icon name="thumbs-up" color="#a50000" size={20} />
          <Text style={styles.title}>Loại dịch vụ được chọn : </Text>
          <Text style={[styles.textve]}>{tenve} / {gia} vnđ</Text>
        </View>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => { this.xacnhan(id_KH, id_NV, id_DV, ngay,gio,gia, tenve);
          }}  
          >
          <Text style={styles.txtLogin}>Xác nhận</Text>
        </TouchableOpacity>
        <Text style={{color:'white'}}>{this.state.result}</Text>
      </View>
      
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

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

  listItem: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  image: {
    //  marginTop:5,
    height: 130,
    width: 130,
    borderRadius: 10,
  },

  metaInfo: {
    marginLeft: 30,
  },

  text: {
    fontSize: 15,
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },

  textTen: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    // marginTop: 10,
    marginLeft: 10,
  },

  title: {
    fontSize: 15,
    color: '#a50000',
    fontWeight: 'bold',
    //  marginTop: 5,
    marginLeft: 10,
    fontStyle: 'italic',
    //fontFamily:'PlayfairDisplay-Italic'
  },

  textve: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginTop: 5,
    marginLeft: 25,
  },

  button: {
    width: 175,
    height: 30,
    backgroundColor: '#ff8080',
    justifyContent: 'center',
    marginLeft: 20,
    shadowColor: 'white',
    borderRadius: 50,
  },

  textbutton: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  time: {
    marginTop: 5,
    marginLeft: 25,
    //  marginRight:10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  //  backgroundColor: '#fff',
    width: 70,
    height: 45,

  //  marginBottom:20
  },

  btnLogin: {
    width: DEVICE_WIDTH - 40,
    backgroundColor: '#cc0000',
    padding: 10,
    borderRadius: 20,
    marginTop: 50,
    width: 200,
    marginLeft: 100,
  },
  txtLogin: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// export default DangKyDL;
