import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Text, Card } from "react-native-paper"; // Tambahkan ini
import { CartContext } from "../context/CartContext";

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Content>
              <Text>${item.price}</Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="text" onPress={() => removeFromCart(item)}>
                Remove
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
      <Text style={styles.totalText}>
        Total: ${cart.reduce((sum, game) => sum + game.price, 0)}
      </Text>
      <Button mode="contained" style={styles.clearButton} onPress={clearCart}>
        Clear Cart
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginVertical: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  clearButton: {
    marginTop: 10,
  },
});

export default CartScreen;
