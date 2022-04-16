
import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      mang: []
        
    }
  }

  componentDidMount(){
    fetch("http://192.168.1.7/App_API/danhmucsanpham.php")
    .then((response)=>response.json())
    .then((responseJSON)=>{
      this.setState({
        mang:responseJSON

      });
    })
    .catch((e)=>{console.log(e)});
  }


  render() {
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
       
          <FlatList
            data={this.state.mang}
            keyExtractor={({ id_DanhMuc }, index) => id_DanhMuc}
            renderItem={({ item }) => (
              <View>
                <Text>{item.id_DanhMuc}</Text>
                {/* <Image

                source={item.HinhAnh} style={{width:100, height:100}}

                /> */}
                <Text>{item.TenDanhMuc}</Text>
                <Image
                source={item.HinhAnh}
                style={{width:50, height:50}}
              />
              <Image
                source={{uri: item.HinhAnh}}
                style={{width:50, height:50}}
              />
                
               
              </View>
            )}

            
          />
        
      </View>
    );
  }
};



