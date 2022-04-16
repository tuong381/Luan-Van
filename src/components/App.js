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

import ChiTietDV from './KhachHang/TrangChu/ChiTietDV';
import ThongTinNV from './KhachHang/TrangChu/NhanVien/ThongTinNV';

import BaiViet from './KhachHang/KhamPha/BaiViet/BaiViet';
import ChiTietBV from './KhachHang/KhamPha/BaiViet/ChiTietBV';
import TaiKhoan from './KhachHang/TaiKhoan/TaiKhoan';
import ThemThongTin from './KhachHang/TaiKhoan/ThemThongTin';


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

						case 'ChiTietDV': return  <ChiTietDV navigator={navigator} />;
						case 'TrangChu': return  <TrangChu navigator={navigator} />;
						case 'ThongTinNV': return  <ThongTinNV navigator={navigator} />;
						case 'BaiViet': return  <BaiViet navigator={navigator} />;
						case 'ChiTietBV': return  <ChiTietBV navigator={navigator} />;

						case 'TaiKhoan': return  <TaiKhoan navigator={navigator} />;
						case 'ThemThongTin': return  <ThemThongTin navigator={navigator} />;

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

