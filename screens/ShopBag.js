
import React from 'react';
import { Image, ScrollView, StyleSheet, Text,TouchableOpacity,View,Dimensions,Alert, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../component/Header';
const {height, width} = Dimensions.get('screen');


const ShopBag = ({navigation}) => {

      const state = useSelector ((state)=>state); //Hook from redux => Callback function return state *{FunComponet}
      const dispatch = useDispatch();

      const emptyCart = () => {
      Alert.alert(
          "֍Empty MyBag֍",
          "Are you sure you want to empty your bag 😂",
        [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'),style: 'default' },
            { text: 'OK', onPress: () => {dispatch({type:'EMPTY_CART'})}}
        ]
      ) ;
      }

    const increment = (index) => {
  
      dispatch({type:'INCREMENT',payload:{index:index}});
    }  
    
    const decrement = (index) => {
     {dispatch({type :'DECREMENT',payload : {index:index}})}
    }
  return (  
  <>
  <Header
    leftIcon="hand-point-left"
    rightIcon='trash-alt'
    nameScreen="MyBag"
    onPressLeft={() => navigation.navigate('Home')}
    onPressRight={() => emptyCart()}
   />
    {state.cart.length === 0 ?
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <TouchableOpacity style={styles.OrderBtn} onPress={()=>navigation.navigate('Home')}>
               <Text style={{fontSize:30,fontWeight:'bold',color:'#fff',fontFamily:'cursive',}}>Hmmm .Go To Shoping</Text>
            </TouchableOpacity>
      </View>
    :(
       <View style={{flex:1}}>
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
                      <View style={styles.Viewcounter}>
                        <TouchableOpacity style={styles.BtnCounter} onPress={()=>increment(index)} >
                          <Icon name="plus" size={16} color={'#000'} />
                        </TouchableOpacity>
                         <Text style={{fontSize:25,fontWeight:'bold',fontFamily:'cursive' ,color:'#000'}}>{item.productCount}</Text>
                        <TouchableOpacity style={styles.BtnCounter} onPress={()=>decrement(index)}>
                          <Icon name="minus" size={16} color={'#000'} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })}
            </ScrollView>
            <View style={{backgroundColor:'#ddd',height:50,justifyContent:'center',paddingLeft:10}}>
               <Text style={{fontSize:30,fontWeight:'bold',color:'#000',fontFamily:'cursive',}}>Total :{state.total}$</Text>
            </View>
            <TouchableOpacity style={styles.OrderBtn}>
               <Text style={{fontSize:30,fontWeight:'bold',color:'#fff',fontFamily:'cursive',}}>Order</Text>
            </TouchableOpacity>
       </View>
      )
    }
    </>
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
    width:'49%',
   
  },
  title:{
    fontSize:22,
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
  Viewcounter:{
    justifyContent:'space-between',
    // backgroundColor:'red',
    right:10,
    width:30,
    height:height/3.7,
    alignSelf:'center',
    alignItems:'center',
  },
  BtnCounter:{
    // backgroundColor:'blue',
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    borderColor:'#000',
    borderWidth:1,
  }

});

export default ShopBag;
