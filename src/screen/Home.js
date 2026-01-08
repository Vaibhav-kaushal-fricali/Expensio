import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React from "react";
import tailwind from "twrnc";
import EmptyList from "./components/EmptyList";
import ExpenseItemCard from "./components/ExpenseItemCard";

export const expensesData = [
  {
    id: "1",
    icon: "🍔",
    title: "Burger & Fries",
    category: "Food",
    amount: 250,
    date: "2026-01-05",
    color: "#FFB703",
  },
  {
    id: "2",
    icon: "🛒",
    title: "Grocery Shopping",
    category: "Groceries",
    amount: 1200,
    date: "2026-01-04",
    color: "#8ECAE6",
  },
  {
    id: "3",
    icon: "🚕",
    title: "Cab Ride",
    category: "Transport",
    amount: 180,
    date: "2026-01-03",
    color: "#219EBC",
  },
  {
    id: "4",
    icon: "🎬",
    title: "Movie Night",
    category: "Entertainment",
    amount: 350,
    date: "2026-01-02",
    color: "#FB8500",
  },
  {
    id: "5",
    icon: "📱",
    title: "Mobile Recharge",
    category: "Utilities",
    amount: 499,
    date: "2026-01-01",
    color: "#06D6A0",
  },
  {
    id: "6",
    icon: "📱",
    title: "Mobile Recharge for friend",
    category: "Utilities",
    amount: 499,
    date: "2026-01-01",
    color: "#06D6A0",
  },
];

const Home = ({ navigation }) => {
  return (
    <View>
      <View style={tailwind`px-5 pt-5 pb-3`}>
        <Text style={tailwind`text-4xl font-bold text-black`}>Hello! 👋</Text>
        <Text style={tailwind`text-base text-gray-500 mt-1`}>
          Start tracking your expenses easily
        </Text>
      </View>

      <View
        style={tailwind`bg-black rounded-3xl p-6 my-4 mx-5 items-center shadow-lg`}
      >
        <Text style={tailwind`text-base text-gray-400`}>Spent so far</Text>
        <Text style={tailwind`text-base text-white text-4xl mt-2 font-bold`}>
          $ 400
        </Text>
      </View>

      <FlatList
        data={expensesData}
        // data={[]}
        renderItem={({ item }) => <ExpenseItemCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<EmptyList />}
      />

      {/* <Button onPress={()=> navigation.navigate("Profile")} title="Profile"/> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
