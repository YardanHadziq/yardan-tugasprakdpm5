import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button, Text, Card } from "react-native-paper"; // Tambahkan ini
import { CartContext } from "../context/CartContext";

const games = [
  { id: "1", name: "Counter-Strike 2", price: 12 },
  { id: "2", name: "Valorant", price: 0 },
  { id: "3", name: "Left 4 Dead 2", price: 6 },
];

const GameListScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title title={item.name} />
            <Card.Content>
              <Text>${item.price}</Text>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={() => addToCart(item)}>
                Add to Cart
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
      <Button
        mode="contained"
        style={styles.cartButton}
        onPress={() => navigation.navigate("Cart")}
      >
        Go to Cart
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
  cartButton: {
    marginTop: 10,
  },
});

export default GameListScreen;
