import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from "expo-font";


//stacks = routes
const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'trasparent'
  }
}


export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
       
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


