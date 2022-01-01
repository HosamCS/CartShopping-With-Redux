
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './screens/Home';
import Product from './screens/Product';
import ShopBag from './screens/ShopBag';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
         <Stack.Screen name='Product' component={Product} options={{headerShown: false}} />
         <Stack.Screen name='ShopBag' component={ShopBag} options={{headerShown: false}} />
       </Stack.Navigator>
     </NavigationContainer>
    </Provider>
   
  );
}

export default App;
