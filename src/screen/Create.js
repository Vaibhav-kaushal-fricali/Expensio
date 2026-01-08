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
// route passes data from 1 screen to another
const Create = ({ navigation, route }) => {
  const [amount, setAmount] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({});

  React.useEffect(() => {
    if (route.params?.category) {
      console.log("params", route.params?.category);
      setCategory(route.params?.category);
    }
  }, [route.params?.category]);

  const handleAddexpense = () => {
    try {
      if (!category && title && amount) {
        Alert.alert("Please select one category");
      }
      if (!amount && title && category) {
        Alert.alert("Amount can't be empty");
      }
      if (!title && amount && category) {
        Alert.alert("Enter title");
      }
      if (!amount && !title && !category) {
        Alert.alert("Details can't be empty");
      }
      console.log("cat", category.name);
      console.log(amount);
      console.log(title);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCategoryInput = () => {
    navigation.navigate("Category");
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
            onPress={handleCategoryInput}
          >
            <View style={tailwind`flex-row items-center`}>
              <Text style={tailwind`text-2xl mr-3`}>{category.icon}</Text>
              <Text style={tailwind`text-lg `}>
                {category.name || "Select desired category"}
              </Text>
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
