
// import React, { Component } from 'react';
// import {View, 
//   Text, 
//   FlatList, 
//   StyleSheet,
//   TouchableOpacity, 
//   ImageBackground,
//   Image,
//   Button,
//   TextInput, 
//   Alert,
// } from 'react-native';

// import io from "socket.io-client";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { URL } from '../../../../../Ip';

// var e; 

// export default class Chat extends Component {

//   constructor(props){
//     super(props);
//       e=this;
//       this.socket = io("http://192.168.1.4:3000", {jsonp:false});
//       this.state={
//         maunen:'white',
//         text:"",
//         mamg:[],
//         vd:""
//       }

      
//       this.socket.on("server-sent-color", function(data){
//         e.setState({
//           maunen:data,
//          text:data,
        
         
//       })
//       console.log("data:",data);
      
      
//     })
//   }

//   // clickMe(){
//   //   this.socket.emit("client-sent-color", this.state.text);
//   // }


//   // _sendMessage = () => {
//     clickMe(idNV,idKH, text){
      
   
//     // const mang=this.props.route.params;
//   //console.log(idNV, idKH,text);
  
//     fetch(URL.localhost+"/App_API/Chat/NhanTin.php", {
//       method: 'POST',
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ 
//         "id_NhanVien": idNV,  
//         "id_KhachHang":idKH, 
        
//         "TinNhan":  text,
//         // status: 1
//       })
//     })
//     .then((response) => response.json())
//     .then((json) => {
//    //   console.log(json);
//       // Alert.alert(
//       //   'Thông báo!',
//       //   `Email hoặc mật khẩu chưa đúng! 
//       //   Vui lòng kiểm tra lại`,
//       // ); 
//     })
//     .catch((error) => console.error(error));
//     this.socket.emit("client-sent-color", this.state.text);

// }


//   render() {
//     const {Ten} = this.props.route.params;
//     const {idKH} = this.props.route.params;
//     const {idNV} = this.props.route.params; 

//     const {data}=this.props.route.params;
//     return (
//       // <View style={{flex:1,padding:50, backgroundColor:this.state.maunen}}>
//       //   <Text>socket</Text>

//       //   <TextInput
//       //     style={{height:40, borderColor:'gray', borderWidth:1}}
//       //     onChangeText={(text)=> this.setState({text})}
//       //     value={this.state.text}
//       //   />

//       //   <View style={{marginTop:50}}>
//       //   <Button
//       //   onPress={()=>{this.clickMe()}}
//       //     title='change'
//       //   />
//       //   </View>

//       // </View>

//       <View style={styles.container}>
//         <View style={styles.header}>
//           <TouchableOpacity
//             style={styles.backButton}
//             onPress={() => {
//               this.props.navigation.pop();
//             }}>
//             <Icon name="angle-left" color="#eee" size={30} />
//           </TouchableOpacity>
//           <View style={styles.baoTitle}>
//             <Text style={styles.titleHeader}> {Ten}</Text>
//           </View>
//         </View>

//         <ImageBackground
//           imageStyle={{opacity: 0.4}}
//           source={require('../../../../images/background_chat.jpg')}
//           style={styles.imgBackground}>
//           <FlatList
//             data={data}
//             keyExtractor={({id_Chat}, index) => id_Chat}
//             renderItem={({item}) => (
//               <View >
//             <Text > {item.TinNhan}</Text>
//           </View>
//             )}
//           />
            
//           <View id="mes" style={styles.chatLineView} >
//               {/* <Text style={{color:'red'}}>{this.state.vd}</Text> */}
             
//           </View>

         
//         </ImageBackground>

//         <View style={{flex: 1 / 10}}>
//           <View style={styles.chatTextboxView}>
//             <View style={{flex: 8 / 10}}>
//               <TextInput
//                 placeholder="Nhập tin nhắn"
//                 onChangeText={text => this.setState({text})}
//                 value={this.state.text}
//                 style={{height: 100, fontSize: 18}}
//               />
//             </View>
//             <View style={{flex: 2 / 10}}>
//               <TouchableOpacity
//                 onPress={() => {
//                   this.clickMe(idNV,idKH, this.state.text)
//                 }}>
//                 <View style={styles.button}>
//                   <Icon name="paper-plane" color="white" size={30} />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   listItem: {
//     marginTop: 10,
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//     flexDirection: 'row',
//   },
//   coverImage: {
//       // width: 120,
//       // height: 120,
//       // borderRadius: 8
//       width: 120,
//       height: 120,
//       borderRadius: 200 / 2
//     },
//     metaInfo: {
//       marginLeft: 30,
      
//     },

//   container: {
//     flex: 1,
//   },
    
//   header:{
//       flexDirection:'row',
//      // flex:1,
//      backgroundColor:'#a50000',
//       height:60,
//     },
     
//     baoTitle:{
//      // flex:6,
//       justifyContent:'center',
//       alignItems:'center',
//      // marginRight: 200,
//       backgroundColor:'#a50000',
//       marginLeft:20
//     },
  
//     titleHeader:{
//       color:'white',
//       fontSize:22,
//       fontWeight:'bold',
     
//     },

//     backButton:{
//       //flex:5,
//       justifyContent:'center',
//       backgroundColor:'#a50000',
//       marginLeft:10
//     },





//     imgBackground: {
//       flex: 9 / 10,
//       backgroundColor: '#f2f2f2',
//       flexDirection: 'column',
//       justifyContent: 'center'
//     },
//     chatTextboxView: {
//       flexDirection: 'row',
//       backgroundColor: '#FFF',
//       width: '100%',
//       height: '100%',
//       justifyContent: 'space-around',
//       alignItems: 'center',
//       marginLeft: 2
//     },
//     touchText: {
//       color: '#0099ff',
//       fontSize: 14
//     },
//     chatLineView: {
//       flex: 1,
//       flexDirection: 'column',
//       width: '50%',
//       alignItems: 'flex-start',
//       padding: 8,
//       backgroundColor: '#ffffff',
//       borderRadius: 8,
//       marginBottom : 10,
//       marginTop : 10,
//       marginLeft : 5,
//       marginRight : 5
//     },
//     itemUserName: {
//       color:"#3399ff",
//       padding:5,
//       fontSize:14
//     },
//     itemText: {
//       color:"#000000",
//       padding:5,
//       fontSize:14
//     },
//     inputIcon:{
//           width:26,
//           height:26,
//           tintColor:'#ffffff',
//           marginRight:5,
//           justifyContent: 'center'
//     },
//     button:{
//     height:46,
//     width: 50,
//     borderRadius:10,
//     marginRight:20,
    
//     backgroundColor:'#a50000',
//     justifyContent:'center',
//     alignItems:'center'
//     },

  
// });











import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
  TextInput,
  Alert,
} from 'react-native';

import io from 'socket.io-client';
import Icon from 'react-native-vector-icons/FontAwesome';
import {URL} from '../../../../../Ip';

var e;

class NodeChat extends Component{
  render(){
      return(
        <View style={styles.chatLineView} >
            <Text style={styles.itemUserName}>{this.props.sender}</Text>
            <Text style={styles.itemText}>{this.props.chatContent}</Text>
        </View>
      );
  }
}

export default class Chat extends Component {
  
  constructor(props){
    super(props);
    this.state={
      chatMessage:"",
      chatMessages:[],
      id:"",
      ids:[]
    }

  }

  componentDidMount(){
    this.socket=io('http://192.168.1.4:3000');
    this.socket.on("client-sent-data", data => {
      this.setState({ 
        chatMessages: [...this.state.chatMessages, data] ,
        id:this.socket.id
       });
  
    })

    this.socket.on("id", id=> {
      this.setState({ ids: [...this.state.ids, id] });
  
    })


  }

  // clickMe() {
  //   // this.socket.emit('client-sent-data', this.state.text);
  //   this.socket.emit('client-sent-data', "Hello");
  // }

  submitChatMessage(){
    this.socket.emit('client-sent-data', this.state.chatMessage);
    this.setState({chatMessage: ""})

    this.socket.emit('id', this.state.id);
    this.setState({id: ""})
  }

  render() {
    const {Ten} = this.props.route.params;


    const chatMessages = this.state.chatMessages.map(chatMessage => (
    <Text key={chatMessage}> {idKH}{chatMessage}</Text>
    ));


    const ids = this.state.ids.map(id => (
      <Text key={id}>{id}</Text>
      ));

    
    const {idKH} = this.props.route.params;
    const {idNV} = this.props.route.params;

    // const {data} = this.props.route.params;
    return (
      // <View style={{flex: 1, padding: 50, backgroundColor: this.state.maunen}}>
      //   <Text>socket</Text>

      //   <TextInput
      //     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      //     autoCorrect={false}
      //     onChangeText={chatMessage => this.setState({chatMessage})}
      //     onSubmitEditing={() => this.submitChatMessage()}
      //     value={this.state.chatMessage}
          
      //   />
 
      //   {/* <View style={{marginTop: 50}}>
      //     <Button
      //       onPress={() => {
      //         this.clickMe();
      //       }}
      //       title="change"
      //     />
      //   </View> */}
      //   {chatMessages}
      // </View>




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
            <Text style={styles.titleHeader}> {Ten}</Text>
          </View>
        </View>

        <ImageBackground
          imageStyle={{opacity: 0.4}}
          source={require('../../../../images/background_chat.jpg')}
          style={styles.imgBackground}>


          <View  style={styles.chatLineView} >
              <Text style={{color:'red'}}> {chatMessages}</Text>
              
          </View>

        </ImageBackground>

        <View style={{flex: 1 / 10}}>
          <View style={styles.chatTextboxView}>
            <View style={{flex: 8 / 10}}>
              <TextInput
              autoCorrect={false}
              onChangeText={chatMessage => this.setState({chatMessage})}
           //   onSubmitEditing={() => this.submitChatMessage()}
              value={this.state.chatMessage}
                style={{height: 100, fontSize: 18}}
              />
            </View>
            <View style={{flex: 2 / 10}}>
              <TouchableOpacity
                onPress={() => {
                  this.submitChatMessage()
                }}>
                <View style={styles.button}>
                  <Icon name="paper-plane" color="white" size={30} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    // width: 120,
    // height: 120,
    // borderRadius: 8
    width: 120,
    height: 120,
    borderRadius: 200 / 2,
  },
  metaInfo: {
    marginLeft: 30,
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    // flex:1,
    backgroundColor: '#a50000',
    height: 60,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    backgroundColor: '#a50000',
    marginLeft: 20,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  backButton: {
    //flex:5,
    justifyContent: 'center',
    backgroundColor: '#a50000',
    marginLeft: 10,
  },

  imgBackground: {
    flex: 9 / 10,
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chatTextboxView: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 2,
  },
  touchText: {
    color: '#0099ff',
    fontSize: 14,
  },
  chatLineView: {
    flex: 1,
    flexDirection: 'column',
    width: '50%',
    alignItems: 'flex-start',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  itemUserName: {
    color: '#3399ff',
    padding: 5,
    fontSize: 14,
  },
  itemText: {
    color: '#000000',
    padding: 5,
    fontSize: 14,
  },
  inputIcon: {
    width: 26,
    height: 26,
    tintColor: '#ffffff',
    marginRight: 5,
    justifyContent: 'center',
  },
  button: {
    height: 46,
    width: 50,
    borderRadius: 10,
    marginRight: 20,

    backgroundColor: '#a50000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


