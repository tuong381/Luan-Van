import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { URL } from '../../../../../Ip';

export default class DanhSachSP extends Component {
  render() {
    const {data} = this.props.route.params;
    const {tenDM} = this.props.route.params;
    return (
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
            <Text style={styles.titleHeader}> {tenDM}</Text>
          </View>
        </View>

        <View style={{flex: 70, marginTop: 20}}>
          <FlatList 
          style={styles.flatlist}
           // style={{flex: 1}}
            data={data}
            horizontal={false}
            numColumns={2}
            columnWrapperStyle={{marginTop: 10}}
            keyExtractor={({id_SanPham}, index) => id_SanPham}
            renderItem={({item}) => (
                <TouchableOpacity
                style={styles.productContainer}
                onPress={() => this.props.navigation.navigate('ChiTietSP',{
                    idSP:item.id_SanPham,
                    tenSP:item.TenSanPham,
                    tenDM:item.TenDanhMuc,
                    gia:item.Gia,
                    soluong:item.SoLuong_SP,
                    mota:item.MoTaSanPham,
                    anh:item.HinhAnh_SP,
                    sodaban:item.SoLuong_SPDaBan
                })}
                >
                <Image
                  source={{uri: URL.localhost +'/LuanVan/public/upload/sanpham/'+item.HinhAnh_SP}}
                  style={styles.productImage}
                />
                <Text style={styles.produceName}>
                  {item.TenSanPham}
                </Text>
                <Text style={styles.producePrice}>{item.Gia} vnđ</Text>
              </TouchableOpacity>

            )}
          />
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    flex: 1,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    color: '#D3D3CF',
    fontSize: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  productContainer: {
    width: produtWidth,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  //  backgroundColor:'red'
  },
  productImage: {
    // width: produtWidth,
    // height: productImageHeight,
    width: 150,
    height: 150,
  },
  produceName: {
    marginVertical: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#666666',
    fontWeight: '500',
    //textAlign:'center'
  },
  producePrice: {
    marginBottom: 5,
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90',
  },

  header: {
    flexDirection: 'row',
    // flex:1,
    backgroundColor: '#a50000',
    height: 60,
  },

  backButton: {
    //flex:5,
    justifyContent: 'center',
    backgroundColor: '#a50000',
    marginLeft: 10,
  },

  baoTitle: {
    // flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 200,
    backgroundColor: '#a50000',
    marginLeft: 60,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
  },

  flatlist: {
    //  marginTop: 100,
    paddingLeft: 35,
    paddingRight: 35,
    //   flexDirection: 'row',
  },
});
