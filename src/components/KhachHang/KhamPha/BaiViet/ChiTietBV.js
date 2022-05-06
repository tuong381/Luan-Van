import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { URL } from '../../../../../Ip';

// impo  URL
const ChiTietBV = ({route, navigation}) => {
  const {Ten} = route.params;
  const {anh} = route.params;
  const {noidung} = route.params;

  return (
    <ScrollView>
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
          <Text style={styles.titleHeader}> Tập thể dục</Text>
        </View>
      </View>

      <View style={{height: 250}}>
        <Image
           source={{uri: URL.localhost +'/LuanVan/public/upload/baiviet/'+anh}}
          resizeMode="cover"
          style={styles.image}></Image>
      </View>

      
      <View style={{marginTop:50}}>
      <Text style={styles.textTen}>{Ten}</Text>
        <Text style={styles.text}>{noidung}</Text>  
      </View>
    </View>
    </ScrollView>
  );
};

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
    width: 150,
    height: 150,
    borderRadius: 200 / 2,
    marginLeft: 135,
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
    marginLeft: 110,
  },

  titleHeader: {
    color: 'white',
    fontSize: 22,
  },

  title: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 40,
    fontSize: 16,
  },

  text: {
    fontSize: 18,
    color: '#404040',
    marginLeft: 20,
  },

  textTen: {
    fontWeight: 'bold',
    color: '#a50000',
    textAlign: 'center',
    fontSize: 22,
    marginTop:30
  },

  image: {
    //  marginTop:5,
    height: 300,
    width: 405,
    borderRadius: 10,
  },
});

export default ChiTietBV;
