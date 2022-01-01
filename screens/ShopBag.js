
import React from 'react';
import { StyleSheet, Text,View,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { Header } from '../component/Header';

const ShopBag = ({navigation}) => {
 const state = useSelector (state => state.cart); //Hook from redux => Callback function return state
  return (
      <>
      <Header leftIcon='hand-point-left'  nameScreen='MyBag' onPressLeft={()=>navigation.navigate('Home')}/>
         <View style={styles.continer}>
         <Icon name='shopping-bag' size={40} color='#000' />
           <Text>ShopBag Is Empty</Text>
           <Text>Counter : {state}</Text>
         </View>
      </>
  
  );
}
  

const styles = StyleSheet.create({

  continer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {color:'#000', fontSize:20},
});

export default ShopBag;
