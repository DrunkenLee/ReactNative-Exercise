import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import TableComp from "../../Components/Courses/DataTable";

const CoursePage = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: 20 }}>
      <TableComp />
    </View>
  );
};

export default CoursePage;
