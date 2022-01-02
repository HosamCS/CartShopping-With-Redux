import React, { useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
 
} from 'react-native';
import { Newitems } from './DataGategory';

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = ({props,navigation}) => {
  const [entries, setEntries] = useState([]);
 
  useEffect(() => {
    setEntries(Newitems);
  }, []);

  const renderItem = ({item}, parallaxProps) => {
    return (
      <TouchableOpacity 
        activeOpacity={0.7} 
        style={styles.item}
        onPress={()=> navigation.navigate('Product',{
            title:item.title,
            cost:item.cost,
            image:item.image,
            productCount:item.productCount
        })}
        >
        <ParallaxImage
          source={{uri: item.image}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.2}
          {...parallaxProps}
        />
        <Text style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.cost}>
          {item.cost}$
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth -100}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
 container: {
 
 },
  item: {
    marginTop:15,
    width: screenWidth - 60,
    height: screenWidth - 20,
    
  },
  imageContainer: {
    flex: 1,
     width:screenWidth - 60,
     height: screenWidth - 20,
  },
  image: {
    resizeMode:'contain',
    borderRadius: 12,
    flex:1
  },
  title:{
      alignSelf:'center',
        fontSize:12,
        fontWeight:'bold',
        fontFamily:'times',
  },
  cost:{
    alignSelf:'center',
    fontFamily:'cursive',
      fontSize:15,
      fontWeight:'bold', 
}
});
