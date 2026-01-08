import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import tailwind from "twrnc";

const CATEGORIES = [
  {
    name: "Food",
    icon: "🍔",
    color: "#FFB703",
  },
  {
    name: "Groceries",
    icon: "🛒",
    color: "#8ECAE6",
  },
  {
    name: "Transport",
    icon: "🚕",
    color: "#219EBC",
  },
  {
    name: "Entertainment",
    icon: "🎬",
    color: "#FB8500",
  },
  {
    name: "Utilities",
    icon: "💡",
    color: "#06D6A0",
  },
  {
    name: "Socializing",
    icon: "🍻",
    color: "#EF476F",
  },
  {
    name: "ATM Withdrawal",
    icon: "🏧",
    color: "#9B5DE5",
  },
  {
    name: "UPI Transaction",
    icon: "📲",
    color: "#118AB2",
  },
  {
    name: "Rent",
    icon: "🏠",
    color: "#8338EC",
  },
  {
    name: "Hospital",
    icon: "🏥",
    color: "#D62828",
  },
  {
    name: "Shopping",
    icon: "🛍️",
    color: "#F77F00",
  },
  {
    name: "Education",
    icon: "📚",
    color: "#3A86FF",
  },
];

const Category = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={tailwind`flex-1 items-center p-3 m-2 bg-white rounded-xl shadow-sm border border-gray-200`}
      >
        <Text style={tailwind`text-4xl`}>{item.icon}</Text>
        <Text
          style={tailwind`text-center mt-2 text-sm font-medium text-gray-700`}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };
  return (
    <View>
      <View style={tailwind`p-5`}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={tailwind`text-2xl font-bold text-red-500`}>X</Text>
        </Pressable>
        <Text style={tailwind`text-3xl mt-4 font-bold text-black`}>
          Select Category
        </Text>
        <Text style={tailwind`text-base mt-4 mb-4 mt-2 text-gray-500`}>
          Press the icon that best describes what you spent on.
        </Text>
      </View>

      <FlatList
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={tailwind`px-4`}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
