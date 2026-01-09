import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import tailwind from "twrnc";
import { CATEGORIES } from "../Constant";



const Category = ({ navigation }) => {
  const handleSelectedCategory = (category) => {
    console.log("cat sel", category);

    navigation.popTo("BottomTabs", {
      screen: "Create",
      params: { category },
    });
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onPress={() => handleSelectedCategory(item)}
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
