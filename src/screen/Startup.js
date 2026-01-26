import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

//Startup screen that is to be shown before entering the app
const handleStart = () => {
    Navigation.navigate()
} 
const Startup = () => {
  return (
    <View style={tailwind`flex-1 bg-green-200 rounded-3xl`}>
        <View style={tailwind`border-2 border-gray-300 p-4 rounded-xl text-lg mt-1 bg-orange-400`}>
            <Text style={tailwind`text-2xl font-medium mt-4 p-4 justify-center alignItems-center`}>Start your journey of saving some money, tracking some money.</Text>
            <Text style={tailwind`text-base`}>Whats your idea of having fun?</Text>
        </View>
        <View>
            <Pressable onPress={handleStart}>
                <Text>Let's get started</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default Startup

const styles = StyleSheet.create({});