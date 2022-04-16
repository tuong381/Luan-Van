import React, { Component } from 'react'

export default class VD extends Component {

    constructor(props) {
        super(props);
        this.state={
          mang: [],
         data:[],
         nhanvien:[]
          
        }   
        this.pushView = this.pushView.bind(this);
        
      }
      
    pushView(id){
  
        navigation.navigate('ThongTinNV');     
      }

  render() {
    return (
      <div>VD</div>
    )
  }
}
