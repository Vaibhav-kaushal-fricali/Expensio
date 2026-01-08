import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";

const Create = () => {
  const [amount, setAmount] = useState(null);
  const [title, setTitle] = useState("");

  const handleAddexpense = () => {
    try {
      if (!amount && title) {
        Alert.alert("Amount can't be empty");
      }
      if (!title && amount) {
        Alert.alert("Enter title");
      }
      if (!amount || !title) {
        Alert.alert("Details can't be empty");
      }
      console.log("amount", amount);
      console.log("title", title);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <View>
      <ScrollView contentContainerStyle={tailwind`p-6`}>
        {/* Header section */}
        <Text style={tailwind`text-3xl font-bold text-black`}>
          Add a new expense
        </Text>
        <Text style={tailwind`text-base text-gray-500 mt-2 mb-8`}>
          Enter the details of your expense to help you track your spending
        </Text>

        {/* expense form section */}
        <View style={tailwind`mb-5`}>
          <Text style={tailwind`text-lg font-semibold text-gray-600`}>
            Enter Amount
          </Text>
          {/* Text Input for amount */}
          <TextInput
            placeholder="₹0.00"
            style={tailwind`border-2 border-gray-300  p-4 rounded-xl text-lg mt-1`}
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        {/* 2nd text Input */}
        <View style={tailwind`mb-5`}>
          <Text style={tailwind`text-lg font-semibold text-gray-600`}>
            Title
          </Text>
          <TextInput
            placeholder="Where have you spent this amount?"
            style={tailwind`border-2 border-gray-300 p-4 rounded-xl text-lg mt-1`}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        {/* 3rd input for category dropdown/modal */}
        <View style={tailwind`mb-5`}>
          <Text style={tailwind`text-lg font-semibold text-gray-600`}>
            Category
          </Text>
          <Pressable
            style={tailwind`border border-gray-400 p-4 rounded-xl flex-row justify-between items-center`}
          >
            <View style={tailwind`flex-row items-center`}>
              <Text style={tailwind`text-2xl mr-3`}>🍔</Text>
              <Text style={tailwind`text-lg `}>{"Food"}</Text>
            </View>
            <Text style={tailwind`text-xl `}>&gt;</Text>
          </Pressable>
        </View>
        {/* footer section */}

        <Pressable
          style={tailwind`bg-black justify-center items-center mt-8 rounded-lg border-round p-6 ml-8 mr-8`}
          onPress={handleAddexpense}
        >
          <Text style={tailwind`text-2xl text-white font-bold`}>
            Add Expense
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
