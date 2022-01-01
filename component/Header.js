
import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get('screen');

export const Header = (props) => {
    return (
        <View style={styles.viewHeader}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
           {/* LeftLebel */}
           <TouchableOpacity style={styles.viewlableleft} onPress={props.onPressLeft}>
             <Icon name={props.leftIcon} size={22}color={'#000'} />
            </TouchableOpacity>
             <Text style={styles.text}>{props.nameScreen}</Text>
             {/* Right*/}
          <TouchableOpacity style={styles.lebleleft}  onPress={props.onPressRight}>
            <Icon name={props.rightIcon} size={25} color='#000' />
          </TouchableOpacity>
        </View>

        </View>
    )
}
const styles = StyleSheet.create({
    lebleleft:{
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

