
import React from 'react';
import { ScrollView, StyleSheet, Text,View,ImageBackground, TouchableOpacity} from 'react-native';
import { items } from '../DataGategory';
import MyCarousel from '../SectionCarousel';
import { Header } from '../component/Header';

 const CardCatagory = (props) => {
     return (
       <View style={{ marginHorizontal:10,marginTop:25,borderRadius:15,backgroundColor:'red'}}>
         <ImageBackground source={{uri: props.image}} resizeMode='cover' style={styles.image} imageStyle={{ borderRadius:12}}> 
                <Text style={styles.text}>{props.name}</Text>
         </ImageBackground>
       </View>  
     )
 } 
 

const Home = ({navigation}) => {
  return (
   <>
   <Header leftIcon='list-ul' rightIcon="shopping-bag"  nameScreen='HOME' onPressRight={()=>navigation.navigate('ShopBag')}/>
     <ScrollView>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}> 
           {items.map(items =>(
            <TouchableOpacity 
              onPress={() => navigation.navigate('Product')}
            >
              <CardCatagory image={items.image} name={items.name} />
            </TouchableOpacity>   
          ))}
         </ScrollView>
         <TouchableOpacity style={styles.newarrivel}>
             <Text style={{fontSize:20,fontWeight:'bold' ,textAlign:'center',fontFamily:'fantasy'}}>* New Arrivel *</Text>
              <MyCarousel navigation={navigation} />
         </TouchableOpacity>
      </ScrollView>   
  
  </>
   
  );
};

const styles = StyleSheet.create({
 image:{
   width:160 ,height:100,
 },
 text:{
    textAlign: "center", 
    paddingTop:35,
    color: '#fff',fontWeight:'bold',fontSize:20,flex:1,backgroundColor:'rgba(0,0,0,0.5)',borderRadius:15,
    fontFamily:'fantasy',
 },
 newarrivel:{
    marginTop:20,
 }
});

export default Home;
