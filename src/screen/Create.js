import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import tailwind from "twrnc";

const Create = () => {
  const [amount, setAmount] = useState(null);
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
          <TextInput
            placeholder="₹0.00"
            style={tailwind`border-2 border-blue-500 p-4 rounded-xl text-lg mt-1`}
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        {/* inside this we will have 3 views => 1st and 2nd for textinput and 3rd for category selection */}

        {/* footer section */}
      </ScrollView>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({});
