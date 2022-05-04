

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome';


import KhamPha from '../src/components/KhachHang/KhamPha/KhamPha';
import Shop from '../src/components/KhachHang/Shop/Shop';
import TaiKhoan from '../src/components/KhachHang/TaiKhoan/TaiKhoan';
import TrangChu from '../src/components/KhachHang/TrangChu/TrangChu';
import { ColorPropType } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const Tab = createBottomTabNavigator();

// const TaiKhoan= ({route,navigation}) => {

// }


function UITab(props) {

    return (
      
        <Tab.Navigator   
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              
              let ScreenName=route.name
              let iconName = "home"
              if (route.name === 'Trang chủ') {
                iconName="home" 
              } else if (route.name === 'Khám phá') {
                iconName="bandcamp" 
              }else if (route.name === 'Shop') {
                iconName="shopping-bag" 
              }
              
              else if (route.name === 'Thông báo') {
                iconName="bell" 
              }
              else if (route.name === 'Tài khoản') {
                iconName="user" 
              }

              return <Icon 
              name={iconName}
               size={23} 
               color={ focused ? '#b30000': Colors.inactive}/>
             
            },
            tabBarActiveTintColor: '#b30000',
            tabBarInactiveTintColor: Colors.inactive,
            tabBarInactiveBackgroundColor:'white',
            tabBarActiveBackgroundColor:'white',
            headerShown:false
          })}
         
         
        >
          
          <Tab.Screen name={"Trang chủ"} component={TrangChu} />
          <Tab.Screen name={"Khám phá"} component={KhamPha} />
          <Tab.Screen name={"Shop"} component={Shop} />
          {/* <Tab.Screen name={"Thông báo"} component={ThongBao} /> */}

          <Tab.Screen name={"Tài khoản"} component={TaiKhoan} />

         
        </Tab.Navigator>
      );
    } 


export default UITab
  




