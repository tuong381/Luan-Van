
import KhachHang from '../src/components/KhachHang/KhachHang';
import NhanVien from '../src/components/NhanVien/NhanVien';
import Home from '../src/components/Home';
import DangNhap from '../src/components/KhachHang/DangNhap';
import * as React from 'react';
//import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UITab from './UITab';
import DangKy from '../src/components/KhachHang/DangKy';


import ThongTinNV from '../src/components/KhachHang/TrangChu/NhanVien/ThongTinNV';
import BaiViet from '../src/components/KhachHang/KhamPha/BaiViet/BaiViet';
import ChiTietBV from '../src/components/KhachHang/KhamPha/BaiViet/ChiTietBV';
import TaiKhoan from '../src/components/KhachHang/TaiKhoan/TaiKhoan';
import SuaThongTin from '../src/components/KhachHang/TaiKhoan/SuaThongTin';
import HoSo from '../src/components/KhachHang/TaiKhoan/Thongtin/HoSo'
import DoiMatKhau from '../src/components/KhachHang/TaiKhoan/Thongtin/DoiMatKhau';

// nhan vien
import Login from '../src/components/NhanVien/Login';
import NVTab from './NVTab';
import HoSoNV from '../src/components/NhanVien/TaiKhoan/ThongTin/HoSoNV';
import SuaThongTinNV from '../src/components/NhanVien/TaiKhoan/ThongTin/SuaThongTinNV';
import DoiMatKhauNV from '../src/components/NhanVien/TaiKhoan/ThongTin/DoiMatKhauNV';
import LoaiVe from '../src/components/KhachHang/TrangChu/DatLich/LoaiVe';
import DatLich from '../src/components/KhachHang/TrangChu/DatLich/DatLich';
import DangKyDL from '../src/components/KhachHang/TrangChu/DatLich/DangKyDL';
import XacNhanDL from '../src/components/KhachHang/TrangChu/DatLich/XacNhanDL';
import DanhSachNV from '../src/components/KhachHang/TrangChu/NhanVien/DanhSachNV';
import DanhSachLH from '../src/components/KhachHang/TrangChu/LichHen/DanhSachLH';
import DoiLichHen from '../src/components/KhachHang/TrangChu/LichHen/DoiLichHen';
import TimKiemNV from '../src/components/KhachHang/TrangChu/NhanVien/TimKiemNV';
import LichLamViec from '../src/components/NhanVien/TrangChu/LichLamViec/LichLamViec';
import KhachHangCuaToi from '../src/components/NhanVien/TrangChu/KhachHangCuaToi/KhachHangCuaToi';

import TinNhan from '../src/components/KhachHang/TrangChu/TinNhan/TinNhan';
import Chat from '../src/components/KhachHang/TrangChu/TinNhan/Chat';
import ListChat from '../src/components/NhanVien/TrangChu/TinNhan/ListChat';

import ChatNV from '../src/components/NhanVien/Chat/ChatNV';
import ListThongBao from '../src/components/KhachHang/TrangChu/ThongBao/ListThongBao';
import ThongBao from '../src/components/NhanVien/TrangChu/ThongBao/ThongBao';
import ChiTietSP from '../src/components/KhachHang/Shop/SanPham/ChiTietSP';
import DanhSachSP from '../src/components/KhachHang/Shop/SanPham/DanhSachSP';
import SanPhamMoiNhat from '../src/components/KhachHang/TrangChu/SanPhamMoiNhat';
import DoiLichHenNV from '../src/components/NhanVien/TrangChu/LichLamViec/DoiLichHenNV';
import LichSuHoatDong from '../src/components/KhachHang/TaiKhoan/LichSuHoatDong/LichSuHoatDong';
import ChatVD from '../src/components/KhachHang/TrangChu/TinNhan/ChatVD';
import ThongTinKH from '../src/components/NhanVien/TrangChu/KhachHangCuaToi/ThongTinKH';
import TimKiemSP from '../src/components/KhachHang/Shop/SanPham/TimKiemSP';



const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
     
      <Stack.Screen  name="Home" component={Home}  options={{ headerMode: 'none' }}/>
      <Stack.Screen name="NhanVien" component={Login} />
      <Stack.Screen name={"Khách hàng"}component={DangNhap}  />
      <Stack.Screen name="UITab" component={UITab} options={{ headerMode: 'none' }} />   

      <Stack.Screen name="DangKy" component={DangKy}  /> 
      <Stack.Screen name="DangNhap" component={DangNhap}  />  

     
      <Stack.Screen name={"ThongTinNV"} component={ThongTinNV}  /> 
      <Stack.Screen name={"BaiViet"} component={BaiViet}  /> 
      <Stack.Screen name={"ChiTietBV"} component={ChiTietBV}  /> 
      <Stack.Screen name={"TaiKhoan"} component={TaiKhoan}  />
      <Stack.Screen name={"SuaThongTin"} component={SuaThongTin}  />

      <Stack.Screen name={"HoSo"} component={HoSo}  />
      <Stack.Screen name={"DoiMatKhau"} component={DoiMatKhau}  />

      <Stack.Screen name={"LoaiVe"} component={LoaiVe}  />
      <Stack.Screen name={"DatLich"} component={DatLich}  />
      <Stack.Screen name={"DangKyDL"} component={DangKyDL}  />
      <Stack.Screen name={"XacNhanDL"} component={XacNhanDL}  />

    {/* // */}
      <Stack.Screen name={"DanhSachNV"} component={DanhSachNV}  />
      <Stack.Screen name={"DanhSachLH"} component={DanhSachLH}  />
      <Stack.Screen name={"DoiLichHen"} component={DoiLichHen}  />

      <Stack.Screen name={"TimKiemNV"} component={TimKiemNV}  />

      <Stack.Screen name={"TinNhan"} component={TinNhan}  />
      <Stack.Screen name={"Chat"} component={Chat}  />

      <Stack.Screen name={"ListThongBao"} component={ListThongBao}  />

    {/* shop */}
    <Stack.Screen name={"ChiTietSP"} component={ChiTietSP}  />
    <Stack.Screen name={"DanhSachSP"} component={DanhSachSP}  />
    <Stack.Screen name={"SanPhamMoiNhat"} component={SanPhamMoiNhat}  />

    {/* tai khoan */}
    <Stack.Screen name={"LichSuHoatDong"} component={LichSuHoatDong}  />
    
    <Stack.Screen name={"ChatVD"} component={ChatVD}  />
    <Stack.Screen name={"TimKiemSP"} component={TimKiemSP}  />






      {/*     NHAN VIEN    */}
      <Stack.Screen name={"Login"} component={Login}  />
      <Stack.Screen name={"NVTab"} component={NVTab} options={{ headerMode: 'none' }}  />

      <Stack.Screen name={"HoSoNV"} component={HoSoNV}  />
      <Stack.Screen name={"SuaThongTinNV"} component={SuaThongTinNV}  />
      <Stack.Screen name={"DoiMatKhauNV"} component={DoiMatKhauNV}  />
     
      <Stack.Screen name={"LichLamViec"} component={LichLamViec}  />

      <Stack.Screen name={"KhachHangCuaToi"} component={KhachHangCuaToi}  />

      <Stack.Screen name={"ListChat"} component={ListChat}  />

      <Stack.Screen name={"ChatNV"} component={ChatNV}  />

      <Stack.Screen name={"ThongBao"} component={ThongBao}  />

      <Stack.Screen name={"DoiLichHenNV"} component={DoiLichHenNV}  />

      <Stack.Screen name={"ThongTinKH"} component={ThongTinKH}  />


      {/* screenOptions={{headerShown:false}} */} 

    </Stack.Navigator>

  );
}

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<StackNavigator></StackNavigator>

		</NavigationContainer>
	);
};
export default MainNavigator;






// import React from 'react';

// import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
// import { UIButton } from '../css';
// import KhachHang from '../src/components/KhachHang/KhachHang';
//  function Shop(props){
  
//     return (
      // <View style={{flex: 100}}>
      //   <ImageBackground
      //     source={require('../src/images/background_gym.jpg')}
      //     resizeMode="cover"
      //     style={{flex: 100}}></ImageBackground>

      //   <View style={{flex: 70, backgroundColor: 'white'}}>
      //    <UIButton
      //        style={{margin:25}} title='khach hang'>
      //       onPress={() => {
      //          this.props.navigation.navigate('KhachHang')
      //       }}
      //     </UIButton>
      //    <UIButton title='nhan vien'></UIButton>
      //   </View>
      // </View>
//     );
//  }


//  export default Shop;