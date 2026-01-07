import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tailwind from "twrnc";

const ExpenseItemCard = ({ item }) => {
  //title , item, category , amount and date all in this ITEM prop
  return (
    <View
      style={tailwind`bg-white rounded-2xl p-4 mx-5 mb-3 flex-row justify-between items-center shadow-sm`}
    >
      <View style={tailwind`flex-row items-center`}>
        <View
          style={tailwind`w-12 h-12 rounded-xl bg-gray-100 justify-center items-center mr-4`}
        >
          <Text>{"🍛"}</Text>
        </View>

        <View>
          <Text style={tailwind`text-base font-bold text-gray-800`}>
            {"Food"}
          </Text>
          <View
            style={tailwind`mt-1 px-2 py-1 rounded-lg self-start bg-orange-400 border-round`}
          >
            <Text style={tailwind`text-xs font-bold text-gray-700`}>
              {"Food and Drinks"}
            </Text>
          </View>
        </View>
      </View>
      <View style={tailwind`items-end `}>
        <Text style={tailwind`text-base font-bold text-black`}>{"$129"}</Text>
        <Text style={tailwind`text-xs text-gray-500 mt-1`}>{"07-01-2026"}</Text>
      </View>
    </View>
  );
};

export default ExpenseItemCard;

const styles = StyleSheet.create({});
