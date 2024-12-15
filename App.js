import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper"; // Tambahkan ini
import { CartProvider } from "./context/CartContext";
import GameListScreen from "./screens/GameListScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="GameList">
            <Stack.Screen
              name="GameList"
              component={GameListScreen}
              options={{ title: "Game Store" }}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{ title: "Your Cart" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </CartProvider>
  );
};

export default App;
