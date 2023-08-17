import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoursePage from "./CoursePage";
import AddCoursePage from "./AddCoursePage";
import EditCoursePage from "./EditCoursePage";

const Stack = createNativeStackNavigator();
const CourseStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Course" component={CoursePage} />
      <Stack.Screen name="AddCourse" component={AddCoursePage} />
      <Stack.Screen name="EditCourse" component={EditCoursePage} />
    </Stack.Navigator>
  );
};

export default CourseStackScreen;
