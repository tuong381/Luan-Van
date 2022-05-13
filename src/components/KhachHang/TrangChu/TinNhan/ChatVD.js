

import React, {Component, useState} from 'react';
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
import moment from 'moment';

var e;

class NodeChat extends Component {
  render() {
    return (
      
        <View style={styles.chatLineView}>
          <Text style={styles.itemUserName}>{this.props.sender}</Text>
        <Text style={styles.itemText}>{this.props.chatContent}</Text>
        <Text style={styles.itemText}>{this.props.chatContentm}</Text>
        <Text style={styles.itemTextgio}>{this.props.gio}</Text>
        
        </View>
      
    );
  }
}

export default class Chat extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    //   id: '',
    //   ten: '',
    //   chat: [],
      trangthai:1,
    //   nuberRefresh:0,
      trangthais: [],
      dulieu:[],
      tinnhan:[]

    };
  }




  componentDidMount() {
    this.socket = io(URL.localhost + ':3000');
    this.socket.on('client-sent-data', data => {
      this.setState({
        chatMessages: [...this.state.chatMessages, data],
      });
    });


    this.socket.on('client-sent-trangthai', trangthai => {
      this.setState({
        trangthais: [...this.state.trangthais, trangthai],
      });
   //   console.log(this.state.chatMessages);
     
    });


  //   fetch(URL.localhost+"/App_API/Chat/NoiDungChat.php", {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       "id_KhachHang":idKH, 
  //       "id_NhanVien":idNV     
  //     })
  //   }) 
     
    
  //     .then((response) => response.json())
  //     .then((json) => {
  //    //console.log({data:json});
    
  //    this.setState({
  //     chat:json
  //   });
  // })





  }


  submitChatMessage(id_KhachHang, id_NhanVien) {

    var chatMessages = this.state.chatMessage;
    var trangthai = this.state.trangthai;
   ///////
    // this.socket.emit('client-sent-data', chatMessages);
    // this.setState({chatMessage: ''});

    // this.socket.emit('client-sent-idKH', idKH);
    // this.socket.emit('client-sent-trangthai', trangthai);
    // this.socket.emit('client-sent-idNV', idNV);

    const mess = {
      id_KhachHang: id_KhachHang,
      id_NhanVien:id_NhanVien,
      TrangThai: thí.state.trangthai,
      TinNhan: messages[0].text
    }
    socketRef.current.emit('sendDataClient', mess)


  
  }



  _renderChatLine = (item) =>
  {
      if(item.TrangThai === '1')
      {
          return(
              
                <View style= { { alignItems: 'flex-end', }} >
                    <NodeChat chatContent={item.TinNhan} chatContentm={chatContentm}
                        gio={moment(item.created_at).format('h:mm')}/>
                    
              </View>

              
              
          );
      }
      return(
          <NodeChat sender={item.TenNV} chatContent={item.TinNhan}
              gio={moment(item.created_at).format('h:mm')} />
      );
  };




  render() {
    const {Ten} = this.props.route.params;

    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}> {chatMessage}</Text>
    ));

    const trangthais = this.state.trangthais.map(trangthai=> (
        <Text key={trangthai}> {trangthai}</Text>
      ));

    const {idKH} = this.props.route.params;
    const {idNV} = this.props.route.params;
    const {data1} = this.props.route.params;
    const {anh} = this.props.route.params;

    // setInterval(()=>{ data},2000)

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

          <Image
                source={{uri: URL.localhost +'/LuanVan/public/upload/nhanvien/'+anh}}
                style={styles.coverImage}
              />


            <Text style={styles.titleHeader}> {Ten}</Text>
          </View>
        </View>

        <ImageBackground
          imageStyle={{opacity: 0.4}}
          source={require('../../../../images/background_chat.jpg')}
          style={styles.imgBackground}>
          <FlatList
            data={data1}
             keyExtractor={({id_Chat}, index) => id_Chat}
           // keyExtractor={(item) => item.id_Chat.toString()}
            renderItem={({item}, index) => this._renderChatLine(item)}
          />

            

          {/* <Text>{chatMessages}</Text>
          <Text>{trangthais}</Text> */}

          {/* <View style={styles.chatLineView}>
            <Text style={{color: 'red'}}>
              {' '}
              {chatMessages} {this.state.ten}
            </Text>
            <Text>
              {idKH} {idNV}
            </Text>

            <FlatList
              data={data}
              keyExtractor={({id_NhanVien}, index) => id_NhanVien}
              renderItem={({item}) => (
                <View>
                  <View style={styles.metaInfo}>
                    <Text>{item.TinNhan}</Text>
                  </View>
                </View>
              )}
            />
          </View> */}
        </ImageBackground>

        {/* //// */}
        <View style={{flex: 1 / 10}}>
          <View style={styles.chatTextboxView}>
            <View style={{flex: 8 / 10}}>
              <TextInput
                placeholder=" Nhập tin nhắn"
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
                  this.submitChatMessage(idKH, idNV);
                  

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
    width: 40,
    height: 40,
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
    flexDirection:'row'
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft:10
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
    color: '#a50000',
    padding: 5,
    fontSize: 14,
    
  },
  itemText: {
    color: '#000000',
    padding: 5,
    fontSize: 14,
    marginTop:-10
  },

  itemTextgio: {
    color: '#a6a6a6',
    padding: 5,
    fontSize: 14,
  //  marginLeft:130,
    marginTop:-5
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
