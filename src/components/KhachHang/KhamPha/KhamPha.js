
import React, { Component } from 'react'
import {View , Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { URL } from '../../../../Ip';

var URL_DanhMuc= URL.localhost+"/App_API/danhmucbaiviet.php";
var URL_BaiViet= URL.localhost+"/App_API/baiviet.php";
export default class KhamPha extends Component {

  constructor(props) {
    super(props);
    this.state={
      mang: [],
      
    }   
    this.pushView = this.pushView.bind(this);
    
  }

  componentDidMount(){
    fetch(URL_DanhMuc)
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.setState({
        mang:responseJSON
      });
    })
    .catch((e)=>{console.log(e)});

  }

  pushView(id, name){

    fetch(URL_BaiViet,{
      method:"POST",
      headers:{
        "Accept": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
        id_DanhMuc:id
       
       })
      
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
   // console.log({mang:responseJson});
    this.props.navigation.navigate('BaiViet',{
      tenDM:name,
      data:responseJson
    })
    
    })
    .done() 
    
  }

  render() {
    const {navigation}= this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.pop();
            }}>
            <Icon name="angle-left" color="#eee" size={30} />
          </TouchableOpacity> */}
          <View style={styles.baoTitle}>
            <Text style={styles.titleHeader}> Bài Tập Thể Dục</Text>
          </View>
        </View>

        <FlatList
          data={this.state.mang}
          keyExtractor={({id_DanhMuc}, index) => id_DanhMuc}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <TouchableOpacity 
              onPress={()=>{this.pushView(item.id_DanhMuc, item.TenDanhMuc)}}>
              
              
              <View style={styles.metaInfo}>
                <Text style={[styles.text, styles.textTen]} >{item.TenDanhMuc}</Text>
               <View style={{marginLeft:230}}>
               <Icon name="angle-right" color="#808080" size={30} />
               </View>
               
                 
              </View>
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
    flexDirection: 'row'
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
   // marginLeft: 30,
    flexDirection:'row',
    
    
  },

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
    marginLeft:115
  },

  titleHeader:{
    color:'white',
    fontSize:22,
    textAlign:'center'
 
  },


  textTen:{
    
    color:'black',

    
  },

  text: {
    fontSize: 18,
   color:'#404040',
   marginLeft:20,
   width:100
  },

  

  item: {
    //  borderWidth:0.5,
    padding: 3,
    borderRadius: 10,
    justifyContent: 'center',
    // borderColor: 'white',
    // shadowColor: 'white',
   
  },

  
})
