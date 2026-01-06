import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Create from "../screen/Create";
import Insights from "../screen/Insights";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screen/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Insights" component={Insights} />
    </Tab.Navigator>
  );
}
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={MyTabs} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
