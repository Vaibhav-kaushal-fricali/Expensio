import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tailwind from "twrnc";

const EmptyList = ({
  title = "No Expenses yet",
  message = "Add a new expense to view it here..",
}) => {
  return (
    <View style={tailwind`flex-1 justify-center items-center p-8 mt-10`}>
      <Text style={tailwind`text-6xl mb-4`}>📝</Text>
      <Text style={tailwind`text-xl font-bold text-gray-800 mb-2`}>
        {title}
      </Text>
      <Text style={tailwind`text-base text-gray-500 ext-center`}>
        {message}
      </Text>
    </View>
  );
};

export default EmptyList;
