
import React from 'react';
import { Image, ScrollView, StyleSheet, Text,TouchableOpacity,View,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../component/Header';

const {height, width} = Dimensions.get('screen');
const ShopBag = ({navigation}) => {
 const state = useSelector ((state)=>state); //Hook from redux => Callback function return state
 const dispatch = useDispatch();

 const ClearCart = () => {
  const action = {type:'REMOVE_CART'};
  dispatch(action);
 }

  return (
    <View style={{flex:1}}>
      <Header
        leftIcon="hand-point-left"
        nameScreen="MyBag"
        onPressLeft={() => navigation.navigate('Home')}
      />
            <ScrollView showsVerticalScrollIndicator={false}>
                {state.cart.map((item,index)=>{
                  return(
                    <View key={index} style={styles.item}>
                      <View style={styles.ViewImage}>
                       <Image source={{uri:item.image}} style={styles.image}  />
                      </View>
                     
                      <View style={styles.info}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.cost}>{item.cost}$</Text>
                      </View>
                    </View>
                  )
                })}
            </ScrollView>
            <View style={{backgroundColor:'#ddd',height:50,justifyContent:'center',paddingLeft:10}}>
               <Text style={{fontSize:30,fontWeight:'bold',color:'#000',fontFamily:'cursive',}}>Total :{state.total}</Text>
            </View>
            <TouchableOpacity style={styles.OrderBtn}>
               <Text style={{fontSize:30,fontWeight:'bold',color:'#fff',fontFamily:'cursive',}}>Order</Text>
            </TouchableOpacity>
    </View>
  );
}
  
const styles = StyleSheet.create({


  text: {color:'#000', fontSize:20},

  item: {
    flexDirection: 'row',
    backgroundColor:'#fff',
    width:'96%',
    height:height/3.2,
    marginLeft:'2%',
    marginTop:10,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.20,
    shadowRadius: 2.22,
    elevation:5,
  },
  ViewImage:{
     width:'40%',
     flex:1,
  },
  image:{
   width :width/2.5,
   height:height/3.2,
   borderRadius:15,
  },
  info:{
    justifyContent:'center',
    width:'56%',
    marginLeft:5,
  },
  title:{
    fontSize:25,
    fontWeight:'bold',
    fontFamily:'cursive',
  },
  cost:{
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'cursive',
  },
  OrderBtn:{
    backgroundColor:'#212121',
    width:width-10,
    height:80,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
 },
});

export default ShopBag;
