import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentsPage from "./StudentsPage";
import AddStudentPage from "./AddStudentPage";
import EditStudentPage from "./EditStudentPage";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const StudentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Students" component={StudentsPage} />
      <Stack.Screen name="AddStudent" component={AddStudentPage} />
      <Stack.Screen name="EditStudent" component={EditStudentPage} />
    </Stack.Navigator>
  );
};

export default StudentStack;
