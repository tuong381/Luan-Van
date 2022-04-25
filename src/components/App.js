// import React ,{ Component } from 'react';
// import { View, Text, Navigator} from 'react-native';
// import UITab from '../../navigation/UITab';

// import Authentication from'./Authentication/Authentication';
// import KhachHang from './KhachHang/KhachHang';
// import NhanVien from './NhanVien/NhanVien';
// import UITab from '../../navigation/UITab';



// import VD from './VD/VD';
// export default class App extends Component {
// 	render() {
// 		return (
// 			// <Navigator
// 			// 	initiaRoute = {{ name: 'KHACHHANG'}}
// 			// 	renderScene={(route, navigator) => {
// 			// 		switch (route.name) {
// 			// 			case 'NHANVIEN': return <NhanVien />;
// 			// 			case 'KHACHHANG': return  <KhachHang />;
// 			// 			default: return <Authentication />;
// 			// 		}

// 			// 	}}
// 			// />

// 			<Navigator  
// 				initiaRoute={{  name: "KhachHang" }}
// 				renderScene={(route, navigator) => {
// 					switch (route.name) {
// 						case 'NHANVIEN': return <NhanVien  />;
// 						case 'KHACHHANG': return  <KhachHang   />;
// 						case 'UITab': return  <UITab  navigator={navigator} />;

// 						case 'VD': return  <VD navigator={navigator} />;
// 						default: return <Authentication />;
// 					}

// 				}}

// 			/>
			
// 		);
// 	}
// }







import React ,{ Component } from 'react';
import { View, Text, Navigator} from 'react-native';
//import UITab from '../../navigation/UITab';

import Authentication from'./Authentication/Authentication';
import KhachHang from './KhachHang/KhachHang';
import NhanVien from './NhanVien/NhanVien';
import UITab from '../../navigation/UITab';

import TrangChu from './KhachHang/TrangChu/TrangChu';


import ThongTinNV from './KhachHang/TrangChu/NhanVien/ThongTinNV';

import BaiViet from './KhachHang/KhamPha/BaiViet/BaiViet';
import ChiTietBV from './KhachHang/KhamPha/BaiViet/ChiTietBV';
import TaiKhoan from './KhachHang/TaiKhoan/TaiKhoan';
import SuaThongTin from './KhachHang/TaiKhoan/SuaThongTin';

import HoSo from '../components/KhachHang/TaiKhoan/Thongtin/HoSo'
import DoiMatKhau from './KhachHang/TaiKhoan/Thongtin/DoiMatKhau';

import DangKyDL from './KhachHang/TrangChu/DatLich/DangKyDL';



// nhan vien
import Login from '../components/NhanVien/Login';
import NVTab from '../../navigation/NVTab';
import HoSoNV from './NhanVien/TaiKhoan/ThongTin/HoSoNV';
import SuaThongTinNV from './NhanVien/TaiKhoan/ThongTin/SuaThongTinNV';
import DoiMatKhauNV from './NhanVien/TaiKhoan/ThongTin/DoiMatKhauNV';
import LoaiVe from './KhachHang/TrangChu/DatLich/LoaiVe';
import XacNhanDL from './KhachHang/TrangChu/DatLich/XacNhanDL';
import DanhSachNV from './KhachHang/TrangChu/NhanVien/DanhSachNV';
import DanhSachLH from './KhachHang/TrangChu/LichHen/DanhSachLH';
import DoiLichHen from './KhachHang/TrangChu/LichHen/DoiLichHen';

 export default class App extends Component {

	render() {
		return (
			// <Navigator
			// 	initiaRoute = {{ name: 'KHACHHANG'}}
			// 	renderScene={(route, navigator) => {
			// 		switch (route.name) {
			// 			case 'NHANVIEN': return <NhanVien />;
			// 			case 'KHACHHANG': return  <KhachHang />;
			// 			default: return <Authentication />;
			// 		}

			// 	}}
			// />







			<Navigator  
				initiaRoute={{  name: "KhachHang" }}
				renderScene={(route, navigator) => {
					switch (route.name) {
						case 'NHANVIEN': return <NhanVien  />;
						case 'KHACHHANG': return  <KhachHang   />;
						case 'UITab': return  <UITab  navigator={navigator} />;

						
						case 'TrangChu': return  <TrangChu navigator={navigator} />;
						case 'ThongTinNV': return  <ThongTinNV navigator={navigator} />;
						case 'BaiViet': return  <BaiViet navigator={navigator} />;
						case 'ChiTietBV': return  <ChiTietBV navigator={navigator} />;

						case 'TaiKhoan': return  <TaiKhoan navigator={navigator} />;
						case 'SuaThongTin': return  <SuaThongTin navigator={navigator} />;

						case 'HoSo': return  <HoSo navigator={navigator} />;
						case 'DoiMatKhau': return  <DoiMatKhau navigator={navigator} />;

						
						// case 'LoaiDV': return  <LoaiDV navigator={navigator} />;
						case 'LoaiVe': return  <LoaiVe navigator={navigator} />;
						case 'DangKyDL': return  <DangKyDL navigator={navigator} />;
						case 'XacNhanDL': return  <XacNhanDL navigator={navigator} />;

						//
						case 'DanhSachNV': return  <DanhSachNV navigator={navigator} />;
						case 'DanhSachLH': return  <DanhSachLH navigator={navigator} />;
						case 'DoiLichHen': return  <DoiLichHen navigator={navigator} />;

						
						// NHAN VIEN
						case 'Login': return  <Login navigator={navigator} />;
						case 'NVTab': return  <NVTab navigator={navigator} />;

						case 'HoSoNV': return  <HoSoNV navigator={navigator} />;
						case 'SuaThongTinNV': return  <SuaThongTinNV navigator={navigator} />;
						case 'DoiMatKhauNV': return  <DoiMatKhauNV navigator={navigator} />;



						default: return <Authentication />;
					}

				}}

			/>



			// <Navigator  
			// 	initiaRoute={{  name: 'KHAMPHA' }}
			// 	renderScene={(route, navigator) => {
			// 		switch (route.name) {
			// 			case 'TRANGCHU': return <TrangChu navigator={navigator} />;
			// 			case 'KHAMPHA': return  <KhamPha navigator={navigator} />;
			// 			// case 'SHOP': return  <Shop navigator={navigator} />;

			// 			//case 'TAIKHOAN': return  <TaiKhoan navigator={navigator} />;
			// 			default: return <TaiKhoan />;
			// 		}

			// 	}}

			// />
			
		)
	}
}

