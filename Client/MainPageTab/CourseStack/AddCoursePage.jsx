import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import DropdownMenu from "../../Components/Courses/DropdownMenu";
import AddCourseForm from "../../Components/Courses/AddCourseForm";

const AddCoursePage = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{}}>
      <AddCourseForm navigation={navigation} />
    </View>
  );
};

export default AddCoursePage;
