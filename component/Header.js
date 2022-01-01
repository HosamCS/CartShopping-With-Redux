
import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
const { height, width } = Dimensions.get('screen');

export const Header = (props) => {

  const state = useSelector (state => state.cart); //Hook from redux => Callback function return state

    return (
      <View style={styles.viewHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {/* LeftLebel */}
          <TouchableOpacity
            style={styles.viewlableleft}
            onPress={props.onPressLeft}>
            <Icon name={props.leftIcon} size={22} color={'#000'} />
          </TouchableOpacity>
          <Text style={styles.text}>{props.nameScreen}</Text>
          {/* Right*/}
          <TouchableOpacity
            style={styles.leblelRight}
            onPress={props.onPressRight}>
            <View
              style={{
                width: 50,
                height: 30,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: 8,
                  left:8,
                 
                }}>
                <Text style={{color:'#fff',fontWeight:'800'}}>{state}</Text>
              </View>
              <Icon name={props.rightIcon} size={30} color="#000" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    leblelRight:{
        justifyContent: 'center', marginRight: 15
      },
      viewlableleft:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
      },
      text:{
          fontSize:30,
          fontWeight:'700',
          fontFamily:'cursive',
          color:'#000'
          
      },
      viewHeader:{
        width:'100%', height:"8%",backgroundColor:'#fff',justifyContent:'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 2.22,
        elevation: 10,
      }

    
})

