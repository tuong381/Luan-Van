

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/FontAwesome';

import { ColorPropType } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Chat from '../src/components/NhanVien/Chat/Chat';
import TaiKhoan from '../src/components/NhanVien/TaiKhoan/TaiKhoan';
import TrangChu from '../src/components/NhanVien/TrangChu/TrangChu';
const Tab = createBottomTabNavigator();

// const TaiKhoan= ({route,navigation}) => {

// }


function NVTab(props) {

    return (
      
        <Tab.Navigator   
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              
              let ScreenName=route.name
              let iconName = "home"
              if (route.name === 'Trang chủ') {
                iconName="home" 
              } else if (route.name === 'Chat') {
                iconName="comment" 
            //   }else if (route.name === 'Shop') {
            //     iconName="shopping-bag" 
              }else if (route.name === 'Tài khoản') {
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
          <Tab.Screen name={"Chat"} component={Chat} />
          {/* <Tab.Screen name={"Shop"} component={Shop} /> */}
          <Tab.Screen name={"Tài khoản"} component={TaiKhoan} />

         
        </Tab.Navigator>
      );
    } 


export default NVTab;
  




