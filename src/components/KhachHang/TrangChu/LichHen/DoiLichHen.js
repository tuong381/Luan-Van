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
export default class DoiLichHen extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
      ngay: '',
      mang: [],
      gio:'',

      result:'...'
    
    };

    this.doilich = this.doilich.bind(this);
  }

  handlePicked = date => {
    this.setState({
      isVisible: false,
      // ngay: moment(date).format('DD.MM.YYYY'),
      ngay: moment(date).format('YYYY.MM.DD'),
      
      // .format()
    });

   
  };

  handleClickButton=(time)=>{
    //  console.log(time);
      this.setState({
        gio: time
        
      });
  
  }

  hidePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  showDateTimePicker = () => {
    this.setState({
      isVisible: true,
    }); 
  }; 

  doilich( idLH,idNV, ngaymoi,giomoi,  idKH) {
    console.log(idLH, idNV, ngaymoi,giomoi,  idKH);
    fetch(URL.localhost+"/App_API/LichHen/DoiLich.php", {
      method:"POST",
      headers:{ 
       "Accept": "application/json",
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        "id_LichHen":idLH, 
        "NgayDK":ngaymoi,  
        "GioDK":giomoi,
        "id_NhanVien":idNV
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({result:responseJson.id}) 
      
     console.log(responseJson.id);
     if(responseJson.id ==0){
      Alert.alert(
        'Warning!',
        `Vui lòng chọn lại giờ do nhân viên bận !`,
      );
     }else{
      Alert.alert(
        'Thông báo!',
        `Đã cập nhật lịch hẹn thành công !`,
      );
      this.props.navigation.pop();
      this.props.navigation.pop();
     }

 
    })
    .catch((error) => {
      console.error(error);

    })
 

    // thong bao
    fetch(URL.localhost+"/App_API/LichHen/ThongBaoDoiLich.php", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id_LichHen":idLH, 
        "id_NhanVien":idNV,
        "id_KhachHang":idKH,
      })
  })
      .then((response) => response.json())

  }

  render() {
    const data = [
      {time: '6:00 - 7:30', id_time: '1'},
      {time: '9:00 - 10:30', id_time: '2'},
      {time: '16:00 - 17:30', id_time: '3'},
      {time: '18:00 -19:30', id_time: '4'},
    ];

    const {tenve} = this.props.route.params;
    const {gia} = this.props.route.params;
    const {id} = this.props.route.params;
    const {idNV} = this.props.route.params;

    const {Ten} = this.props.route.params;
    const {anh} = this.props.route.params;
    const {sdt} = this.props.route.params;
    const {kinhnghiem} = this.props.route.params;
    const {ngay} = this.props.route.params;
    const {gio} = this.props.route.params;
    const {id_KhachHang}=this.props.route.params;
    const {id_LichHen}= this.props.route.params;
 

    

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
            <Text style={styles.titleHeader}> Dời lịch hẹn</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', margin: 10}}>
          <Icon name="user" color="#a50000" size={20} />
          <Text style={styles.title}>PT được chọn : </Text>
        </View>

        <View style={styles.listItem}>
          <Image  source={{uri: URL.localhost +'/LuanVan/public/upload/nhanvien/'+anh}} 
                style={styles.image} />
          <View style={styles.metaInfo}>
            <Text style={[styles.textTen]}>{Ten}</Text>
            <Text style={[styles.text]}>Số điện thoại: {sdt} </Text>
            <Text style={[styles.text]}>Kinh nghiệm: {kinhnghiem} năm</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 30, marginLeft: 10}}>
          <Icon name="calendar" color="#a50000" size={20} />
          <Text style={styles.title}>Thời gian đặt lịch : </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.showDateTimePicker}>
            <Text style={styles.textbutton}>Click vào để chọn ngày</Text>
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isVisible}
            onConfirm={this.handlePicked}
            onCancel={this.hidePicker}
            mode={'date'}
            is24Hour={true}
            minimumDate={new Date()}
          />

    
          <Text style={[styles.textve]}>{this.state.ngay}</Text>
         
          
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 30}}>
          <Icon name="hourglass" color="#a50000" size={20} />
          <Text style={styles.title}>Chọn giờ : </Text>  
          <Text style={[styles.textve]}>{this.state.gio}</Text>
        </View>
        <View style={{height: 70}}>
          <FlatList
            style={{marginTop: 15}}
            horizontal
            data={data}
            keyExtractor={({id_time}, index) => id_time}
            renderItem={({item}) => (
                <View style={styles.time}>
                 {/* <Text style={[styles.text, styles.textTen]}>{item.time}</Text> */}
                 <Button  
                    onPress={()=>{this.handleClickButton(item.time)}}
                    style={{color:'black'}}
                    color='#ff8080'
                    title={item.time} 

                 />
                 </View>


            )}
          />
        </View>
        

        <View style={{flexDirection: 'row', margin: 10}}>
          <Icon name="thumbs-up" color="#a50000" size={20} />
          <Text style={styles.title}>Loại dịch vụ được chọn : </Text>
          <Text style={[styles.textve]}>{tenve} / {gia} vnđ</Text>
        </View>

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => { 
            this.doilich(id,idNV,this.state.ngay, this.state.gio,id_KhachHang);
          }}
          
          >
          <Text style={styles.txtLogin}>Dời lịch</Text>
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
    marginLeft: 10,
    //  marginRight:10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  //  backgroundColor: '#fff',
    width: 110,
    height: 45,

  //  marginBottom:20
  },

  btnLogin: {
    width: DEVICE_WIDTH - 40,
    backgroundColor: '#cc0000',
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
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
