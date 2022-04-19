
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


import ChiTietDV from '../src/components/KhachHang/TrangChu/ChiTietDV';
import ThongTinNV from '../src/components/KhachHang/TrangChu/NhanVien/ThongTinNV';
import BaiViet from '../src/components/KhachHang/KhamPha/BaiViet/BaiViet';
import ChiTietBV from '../src/components/KhachHang/KhamPha/BaiViet/ChiTietBV';
import TaiKhoan from '../src/components/KhachHang/TaiKhoan/TaiKhoan';
import SuaThongTin from '../src/components/KhachHang/TaiKhoan/SuaThongTin';
import HoSo from '../src/components/KhachHang/TaiKhoan/Thongtin/HoSo'
import DoiMatKhau from '../src/components/KhachHang/TaiKhoan/Thongtin/DoiMatKhau';


const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}} >
     
      <Stack.Screen  name="Home" component={Home}  options={{ headerMode: 'none' }}/>
      <Stack.Screen name="NhanVien" component={NhanVien} />
      <Stack.Screen name={"Khách hàng"}component={DangNhap}  />
      <Stack.Screen name="UITab" component={UITab} options={{ headerMode: 'none' }} />   

      <Stack.Screen name="DangKy" component={DangKy}  /> 
      <Stack.Screen name="DangNhap" component={DangNhap}  />  

      <Stack.Screen name={"ChiTietDV"} component={ChiTietDV}  /> 
      <Stack.Screen name={"ThongTinNV"} component={ThongTinNV}  /> 
      <Stack.Screen name={"BaiViet"} component={BaiViet}  /> 
      <Stack.Screen name={"ChiTietBV"} component={ChiTietBV}  /> 
      <Stack.Screen name={"TaiKhoan"} component={TaiKhoan}  />
      <Stack.Screen name={"SuaThongTin"} component={SuaThongTin}  />

      <Stack.Screen name={"HoSo"} component={HoSo}  />
      <Stack.Screen name={"DoiMatKhau"} component={DoiMatKhau}  />

     
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