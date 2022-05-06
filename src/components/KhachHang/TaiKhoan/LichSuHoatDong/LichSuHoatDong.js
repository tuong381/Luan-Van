import React, {Component, useState, useEffect} from "react";
import  Icon  from 'react-native-vector-icons/FontAwesome';

import {URL} from '../../../../Ip';

import {View ,
       Text, 
      StyleSheet,
       TouchableOpacity, 
       TextInput,
       Dimensions,
       ScrollView,
       Alert,
       Image,
       FlatList,
       Button
      } from 'react-native';

      import AsyncStorage from '@react-native-async-storage/async-storage';
   

const LichSuHoatDong =({route,navigation})=> {
    const [page, setPage]= useState(DICH_VU);



    const {data} =  route.params;
    // const {dataSP} =  route.params;

    return (
      <View style={{width:'100%', height:'100%'}}>
          <View style={{height:'20%', width:'100%'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
             navigation.pop();
            }}>
            <Icon name="angle-left" color="#eee" size={30} />
          </TouchableOpacity>
          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> Lịch sử hoạt động</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', height:50}}>
          <TouchableOpacity style={{width:'50%', height:'100%', justifyContent:'center',
                alignItems:'center'}} 
                onPress={()=> setPage(DICH_VU)}
                disabled={page===DICH_VU? true : false}
                >
              <Text style={{fontSize:20, color:'#a50000'}}>Dịch vụ</Text>
              {page === DICH_VU? <View style={{position:'absolute', bottom:0, height:3, width:'100%', backgroundColor:'#a50000'}}></View>
              : null}
          </TouchableOpacity>

          <TouchableOpacity style={{width:'50%', height:'100%', justifyContent:'center',
                alignItems:'center',}} 
                onPress={()=> setPage(SAN_PHAM)}
                disabled={page===SAN_PHAM? true : false}
               
                >
                 
              <Text style={{fontSize:20, color:'#a50000'}}>Sản phẩm</Text>
              {/* <Button
                title="san phamr"
              /> */}
              
              {page === SAN_PHAM? <View style={{position:'absolute', bottom:0, height:3, width:'100%', backgroundColor:'#a50000'}}></View>
              : null}
          </TouchableOpacity>
        </View>
      </View>








            <View style={{height:'100%', width:'100%'}} >
              {page == DICH_VU ? 

              // <View>
              //   <Text>dich vu </Text>

              // </View>
              
              <View style={{height:'100%', width:'100%'}}>
        <FlatList
          data={data}
          keyExtractor={({id_HD}, index) => id_HD}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
            >
              {/* <Image
                source={{uri: item.AnhDaiDien}}
                style={styles.coverImage}
              /> */}
              
              <View style={styles.metaInfo}>
                {item.TenVe===null && (
                  <Text style={[styles.text, styles.textTen]} >{item.TenSanPham}</Text>
                )}

              {item.TenVe!==null && (
                  <Text style={[styles.text, styles.textTen]} >{item.TenVe}</Text>
                )}
                
              </View>
  
            </TouchableOpacity>
          )}
        />

      </View>
              
              
              : 
              <View style={{height:'100%', width:'100%'}}>
        {/* <FlatList
          data={dataSP}
          keyExtractor={({id_HD}, index) => id_HD}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
            >
              //  <Image
              //   source={{uri: item.AnhDaiDien}}
              //   style={styles.coverImage}
              // /> 
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.id_HD}</Text>
                         
             
              </View>
  
            </TouchableOpacity>
          )}
        /> */}
       <Text>san pham</Text>

      </View>
      

              }
           
            </View>
      </View>
    );

}
const DICH_VU ='DICH_VU';
const SAN_PHAM='SAN_PHAM';


const MainComponent = ({page, setPage})  => {
    return(
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
            <Text style={styles.titleHeader}> Lịch sử hoạt động</Text>
          </View>
        </View>

        <View style={{flexDirection:'row', height:50}}>
          <TouchableOpacity style={{width:'50%', height:'100%', justifyContent:'center',
                alignItems:'center'}} 
                onPress={()=> setPage(DICH_VU)}
                disabled={page===DICH_VU? true : false}
                >
              <Text style={{fontSize:20, color:'#a50000'}}>Dịch vụ</Text>
              {page === DICH_VU? <View style={{position:'absolute', bottom:0, height:3, width:'100%', backgroundColor:'#a50000'}}></View>
              : null}
          </TouchableOpacity>

          <TouchableOpacity style={{width:'50%', height:'100%', justifyContent:'center',
                alignItems:'center',}} 
                onPress={()=> setPage(SAN_PHAM)}
                disabled={page===SAN_PHAM? true : false}
                >
              <Text style={{fontSize:20, color:'#a50000'}}>Sản phẩm</Text>
              {page === SAN_PHAM? <View style={{position:'absolute', bottom:0, height:3, width:'100%', backgroundColor:'#a50000'}}></View>
              : null}
          </TouchableOpacity>
        </View>
      </View>
    );

}
 

const DichVuComponent= ({}) => {
  return(
      <View style={{height:'100%', width:'100%'}}>
        <FlatList
          data={data}
          keyExtractor={({id_HD}, index) => id_HD}
          renderItem={({item}) => (
            <TouchableOpacity  style={styles.listItem}
            >
              {/* <Image
                source={{uri: item.AnhDaiDien}}
                style={styles.coverImage}
              /> */}
              
              <View style={styles.metaInfo}>
                {item.TenVe===null && (
                  <Text style={[styles.text, styles.textTen]} >{item.TenSanPham}</Text>
                )}
                
                
              </View>
  
            </TouchableOpacity>
          )}
        />

      </View>
  );
}


const SanPhamComponent= ({}) => {
    return(
        <View style={{height:'100%', width:'100%'}}>
          <Text>san pham</Text>

        </View>
    );
}

const styles = StyleSheet.create({
 

    container: {
      flex:1
    },

    header:{
      flexDirection:'row',
     // flex:1,
      backgroundColor:'#a50000',
      height:60,
    },

    backButton:{
      //flex:5,
      justifyContent:'center',
      backgroundColor:'#a50000',
      marginLeft:10
    },

    baoTitle:{
     // flex:6,
      justifyContent:'center',
      alignItems:'center',
     // marginRight: 200,
      backgroundColor:'#a50000',
      marginLeft:90
    },

    titleHeader:{
      color:'white',
      fontSize:22,
   
    },

    title: {
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontStyle: 'italic',
      fontWeight: 'bold',
      marginTop:40,
      fontSize: 16,
    },

    button:{
        width:206,
        height:120
    },

    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    coverImage: {
        // width: 120,
        // height: 120,
        // borderRadius: 8
        width: 120,
        height: 120,
        borderRadius: 200 / 2
      },
      metaInfo: {
        marginLeft: 30,
        
      },
    metaInfo: {
      marginLeft: 30,
    },

    text: {
      fontSize: 15,
      color: 'black',
      marginTop: 10,
    },

    textTen:{
      fontWeight: 'bold',
      color:'#a50000'
    },

});

export default LichSuHoatDong;




// import React, {Component, useState, useEffect} from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import {URL} from '../../../../Ip';

// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   Dimensions,
//   ScrollView,
//   Alert,
//   Image,
//   FlatList,
//   Button,
//   TouchableHighlight,
// } from 'react-native';

// export default function LichSuHoatDong() {
//   var [isPress, setIsPress] = React.useState(false);

//   var touchProps = {
//     activeOpacity: 1,
//     underlayColor: 'blue', // <-- "backgroundColor" will be always overwritten by "underlayColor"
//     style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
//     onHideUnderlay: () => setIsPress(false),
//     onShowUnderlay: () => setIsPress(true),
//     onPress: () => console.log('HELLO'), // <-- "onPress" is apparently required
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => {
//             navigation.pop();
//           }}>
//           <Icon name="angle-left" color="#eee" size={30} />
//         </TouchableOpacity>
//         <View style={styles.baoTitle}>
//           <Text style={styles.titleHeader}> Chỉnh sửa trang cá nhân</Text>
//         </View>
//       </View>

//       <View style={{flex: 70}}>
//         <View style={styles.btn}>
//           <TouchableHighlight {...touchProps}>
//             <Text style={styles.txtBtn}>DichVu</Text>
//           </TouchableHighlight>

//           <TouchableHighlight {...touchProps}>
//             <Text style={styles.txtBtn}>SanPham</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   btn: {
//     flexDirection: 'row',
//     height: 70,
//     backgroundColor:'#ff8080'
//   },

//   container: {
//     flex: 1,
//   },

//   header: {
//     flexDirection: 'row',
//     // flex:1,
//     backgroundColor: '#a50000',
//     height: 60,
//   },

//   backButton: {
//     //flex:5,
//     justifyContent: 'center',
//     backgroundColor: '#a50000',
//     marginLeft: 10,
//   },

//   baoTitle: {
//     // flex:6,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // marginRight: 200,
//     backgroundColor: '#a50000',
//     marginLeft: 90,
//   },

//   titleHeader: {
//     color: 'white',
//     fontSize: 22,
//   },

//   title: {
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//     fontStyle: 'italic',
//     fontWeight: 'bold',
//     marginTop: 40,
//     fontSize: 16,
//   },

//   button: {
//     width: 206,
//     height: 120,
//   },

//   listItem: {
//     marginTop: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//   },
//   coverImage: {
//     // width: 120,
//     // height: 120,
//     // borderRadius: 8
//     width: 120,
//     height: 120,
//     borderRadius: 200 / 2,
//   },
//   metaInfo: {
//     marginLeft: 30,
//   },
//   metaInfo: {
//     marginLeft: 30,
//   },

//   text: {
//     fontSize: 15,
//     color: 'black',
//     marginTop: 10,
//   },

//   textTen: {
//     fontWeight: 'bold',
//     color: '#a50000',
//   },

//   btnNormal: {
//     borderColor:'white',
//     borderWidth:1,
//     height: 80,
//     width: 205,
//     justifyContent: 'center',
//   },
//   btnPress: {
//     borderColor:'black',
//     borderWidth:1,
//     height: 80,
//     width: 205,
//     justifyContent: 'center',
//   },

//   txtBtn: {
//     fontSize: 20,
//     textAlign: 'center',
//   },
// });