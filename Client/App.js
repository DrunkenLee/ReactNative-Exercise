import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CourseStackScreen from "./MainPageTab/CourseStack/CourseStackScreen";
import StudentStackScreen from "./MainPageTab/StudentStack/StudentStackScreen";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./store";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
              <Tab.Screen name="StudentStack" component={StudentStackScreen} />
              <Tab.Screen name="CourseStack" component={CourseStackScreen} />
            </Tab.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
