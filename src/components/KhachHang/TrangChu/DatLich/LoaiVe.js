import React, { Component } from 'react';
import {View, 
        Text, 
        FlatList, 
        StyleSheet,
        TouchableOpacity, 
        ImageBackground
    } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var URL_DV= URL.localhost+"/App_API/dichvu.php";

export default class LoaiVe extends Component {

    constructor(props) {
        super(props);
        this.state={ 
          mang: [],
          
        }   
        
      }

componentDidMount(){
    fetch(URL_DV)
    .then((response)=>response.json())
    .then((responseJSON)=>{
        console.log(responseJSON);
        this.setState({
        mang:responseJSON
        });

    })
    .catch((e)=>{console.log(e)});
}


  render() {
    const {navigation} = this.props;
    return (
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
            <Text style={styles.titleHeader}> Đặt lịch</Text>
          </View>
        </View>

        <FlatList
          data={this.state.mang}
          keyExtractor={({id_DichVu}, index) => id_DichVu}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <TouchableOpacity
               onPress={()=>{navigation.navigate('DatLich',{
                 ten:item.TenDichVu,
                 id_DV:item.id_DichVu,
                 gia:item.Gia
               })}}
              >
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.text, styles.textTen]}>
                    {item.TenDichVu}
                  </Text>
                  <View style={{marginLeft: 140}}>
                    <Icon name="angle-right" color="red" size={30} />
                  </View>
                </View>

                <Text style={{fontSize: 18, color: '#404040', marginLeft: 20,}}>Giá vé: {item.Gia} vnđ</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
    listItem: {
      marginTop: 10,
      paddingVertical: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      flexDirection: 'row',
    },
    coverImage: {
      borderWidth: 5,
      borderColor: 'white',
      width: 100,
      height: 100,
      borderRadius: 200 / 2,
      marginLeft: 150,
      marginTop: -70,
    },
    metaInfo: {
      marginLeft: 30,
    },
  
    container: {
      flex: 1,
    },
  
    header: {
      flexDirection: 'row',
      height: 200,
    },
  
    backButton: {
      //flex:5,
      justifyContent: 'center',
      // backgroundColor:'#a50000',
      marginLeft: 10,
    },
  
    text: {
      fontSize: 18,
      color: '#404040',
      marginLeft: 20,
    },
  
    textTen: {
      fontWeight: 'bold',
      color: '#a50000',
      fontSize: 22,
      width:180
    },
  
    textSua: {
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
      fontSize: 18,
      flexDirection:'row'
    },
  
    image: {
      //  marginTop:5,
      height: 140,
      width: 140,
      borderRadius: 10,
    },

    header:{
        flexDirection:'row',
       // flex:1,
       backgroundColor:'#a50000',
        height:60,
      },
    
    
    
      baoTitle:{
       // flex:6,
        justifyContent:'center',
        alignItems:'center',
       // marginRight: 200,
        backgroundColor:'#a50000',
        marginLeft:150
      },
    
      titleHeader:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
       
      },

      backButton:{
        //flex:5,
        justifyContent:'center',
        backgroundColor:'#a50000',
        marginLeft:10
      },
  });
