import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import {URL} from '../../../../Ip';

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
  ImageBackground,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const SuaThongTin = ({route, navigation}) => {
  const [isVisible, setisVisible] = useState(false);

  const {image, text, flatlist, body, item, title} = styles;
  const {ten} = route.params;
  const {email} = route.params;
  const {sdt} = route.params;
  const {diachi} = route.params;
  const {chieucao} = route.params;
  const {cannang} = route.params;
  const {gioitinh} = route.params;
  const {id} = route.params;
  const {anh} = route.params;
  const {ngay} = route.params;

  const [TenKH, setTenKH] = useState(ten);
  const [Email, setEmail] = useState(email);
  const [SoDienThoai, setSoDienThoai] = useState(sdt);
  const [ChieuCao, setChieuCao] = useState(chieucao);
  const [CanNang, setCanNang] = useState(cannang);
  const [GioiTinh, setGioiTinh] = useState(gioitinh);
  const [DiaChi, setDiaChi] = useState(diachi);

  const [result, setResult] = useState('0');

  const [HinhAnh, setHinhAnh] = useState(anh);
  const [NgaySinh, setNgaySinh] = useState(ngay);

  const show = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);

      setHinhAnh(image.path);
    });
  };

  const capnhat = id => {
    console.log(id);
    // values.roleId = 4;
    //  let req = JSON.stringify({id_KhachHang:id});
    fetch(URL.localhost + '/App_API/SuaThongTin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_KhachHang: id,
        TenKH: TenKH,
        SoDienThoai: SoDienThoai,
        DiaChi: DiaChi,
        Email: Email,
        ChieuCao: ChieuCao,
        GioiTinh: GioiTinh,
        CanNang: CanNang,
        HinhAnh: HinhAnh,
        NgaySinh: NgaySinh,
      }),
    })
      .then(response => response.json())
      .then(json => {
        //  console.log(json);
        // console.log({result:json.kq});
        if (json.kq > 0) {
          console.log('ding');
          // navigation.navigate('HoSo');
          Alert.alert('Thông báo', `Cập nhật thông tin thành công`);
          navigation.pop();
       //   navigation.pop();
        }
      });
  };

  const handlePicked = date => {
    setisVisible(false, setNgaySinh(moment(date).format('YYYY.MM.DD')));
  };

  const hidePicker = () => {
    setisVisible(false);
  };

  const showDateTimePicker = () => {
    setisVisible({
      isVisible: true,
    });
  };

  return (
    <ScrollView>
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
            <Text style={styles.titleHeader}> Chỉnh sửa trang cá nhân</Text>
          </View>
        </View>

        <View style={{flex: 70, marginTop: 20}}>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Ảnh đại diện</Text>
            <TouchableOpacity
              onPress={() => show()}
              style={{flexDirection: 'row'}}>
              <Image source={{uri: HinhAnh}} style={styles.coverImage} />
              <View style={styles.icon}>
                <Icon name="camera" color="#666666" size={20} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Họ tên</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={TenKH => setTenKH(TenKH)}
              value={TenKH}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={Email => setEmail(Email)}
              value={Email}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Số điện thoại</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={SoDienThoai => setSoDienThoai(SoDienThoai)}
              value={SoDienThoai}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Địa chỉ</Text>
            <TextInput
              style={styles.txtInput}
              underlineColorAndroid="transparent"
              onChangeText={DiaChi => setDiaChi(DiaChi)}
              value={DiaChi}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Ngày sinh</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={showDateTimePicker}>
              <Text style={styles.textbutton}>Chọn ngày</Text>
            </TouchableOpacity>
            <DateTimePicker
              isVisible={isVisible}
              onConfirm={handlePicked}
              onCancel={hidePicker}
              mode={'date'}
              is24Hour={true}
             // minimumDate={new Date()}
            />

            <Text style={{marginTop: 16, color: 'black', marginLeft: 20}}>
              {NgaySinh}
            </Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Giới tính</Text>
            <TextInput
              style={styles.txtInput1}
              underlineColorAndroid="transparent"
              onChangeText={GioiTinh => setGioiTinh(GioiTinh)}
              value={GioiTinh}
            />
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Chiều cao</Text>
            <TextInput
              style={styles.txtInput1}
              underlineColorAndroid="transparent"
              onChangeText={ChieuCao => setChieuCao(ChieuCao)}
              value={ChieuCao}
            />
            <Text style={{marginTop: 20, color: 'black'}}>m</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.text}>Cân nặng</Text>
            <TextInput
              style={styles.txtInput1}
              underlineColorAndroid="transparent"
              onChangeText={CanNang => setCanNang(CanNang)}
              value={CanNang}
            />
            <Text style={{marginTop: 20, color: 'black'}}>Kg</Text>
          </View>

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              capnhat(id);
            }}>
            <Text style={styles.txtLogin}>Cập nhật</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

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
    marginLeft: 60,
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

  txtInput: {
    backgroundColor: '#e6e6e6',
    width: 250,
    // width: DEVICE_WIDTH - 50,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    color: '#cc0000',
    marginTop: 10,
  },

  txtInput1: {
    backgroundColor: '#e6e6e6',
    width: 100,
    // width: DEVICE_WIDTH - 50,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    color: '#cc0000',
    marginTop: 10,
  },

  btnLogin: {
    width: DEVICE_WIDTH - 40,
    backgroundColor: '#cc0000',
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    width: 200,
    marginLeft: 100,
    marginBottom: 100,
  },
  txtLogin: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'black',
    width: 100,
    marginLeft: 20,
  },

  coverImage: {
    borderWidth: 2,
    borderColor: 'white',
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
    marginLeft: 20,
    //  marginTop:10,
  },

  icon: {
    marginTop: 70,
    marginLeft: -20,
  },

  button: {
    width: 100,
    height: 30,
    backgroundColor: '#ff8080',
    justifyContent: 'center',
    marginLeft: 20,
    shadowColor: 'white',
    borderRadius: 50,
    marginTop: 10,
  },

  textbutton: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SuaThongTin;
