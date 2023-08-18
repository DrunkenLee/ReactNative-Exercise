import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import EditCourseForm from "../../Components/Courses/EditCourseForm";

const EditCoursePage = ({ navigation, route }) => {
  const { course } = route.params;
  console.log(course);
  const insets = useSafeAreaInsets();
  return (
    <View style={{}}>
      <EditCourseForm navigation={navigation} course={course} />
    </View>
  );
};

export default EditCoursePage;
