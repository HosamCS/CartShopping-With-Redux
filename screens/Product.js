
import React,{useState} from 'react';
import { Dimensions, ScrollView, Image, StyleSheet, Text,View, TouchableOpacity, ImageBackground,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { items } from '../DataGategory';

const {width , height} = Dimensions.get('screen');

const ImageProduct =(props) => (
    <View style={styles.imageback}>
    
      <ImageBackground
        source={{uri: props.image}}
        resizeMode='cover'
        style={{
          width: width,  
          height: height/1.5,
        }}
      >
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:15,marginTop:25}}>
              <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                  <Ionicons name="return-up-back-outline" size={25} color="#000" />
             </TouchableOpacity>
            <Ionicons name="share-social-outline" size={25} color="#000" />
          </View>
      </ImageBackground>
      
    </View>
  );

  const Info = props => {
    const [liked, setLiked] = useState(false);

    return(
        <>
        <TouchableOpacity  onPress={()=>setLiked(!liked)}
          style={{
            bottom: 70,
            marginLeft: 15,
            borderRadius: 25,
            backgroundColor: '#fff',
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name={liked ? 'heart' : 'heart-outline' } size={30} color={liked ? 'red' : '#000'} />
        </TouchableOpacity>
        <View style={{padding: 15}}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.cost}>{props.cost} $</Text>
        </View>
      </>
      )
  }


const Product = ({navigation,route}) => {
 const  {title , cost , image ,} = route.params;

     const dispatch = useDispatch();  //

    const AddToBag = (props) => {
      const action = {type:'ADD TO CART',payload :{title,cost,image ,}};
      dispatch(action);
     
    }
  return (
    <View style={{flex:1}}> 
        <ImageProduct image={image} navigation={navigation} />
        <Info title={title} cost={cost}  />

        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
            <TouchableOpacity style={styles.btnBag} onPress={AddToBag}>
                <Text style={styles.btnTitleBag}>ADD TO BAG</Text>
                <Ionicons name="cart-outline" size={25} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnPay}>
                <Ionicons name="logo-apple" size={25} color="#000" />
                <Text style={styles.btnTitlePAY}>PAY</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
 imageback :{
  
 },
 title:{
    fontSize:25,
    fontWeight:'bold',
    fontFamily:'cursive',
    color:'#000'
 },
 cost:{
    fontFamily:'cursive',
    fontSize:18,
    fontWeight:'bold', 
 },
 btnBag:{
    backgroundColor:'#212121',
    width:width/2.1,
    height:80,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
 },
 btnPay:{
    backgroundColor:'#fff',
    width:width/2.1,
    height:80,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#000'
 },
    btnTitleBag:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    btnTitlePAY:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000'
    }
 
 
});

export default Product;
