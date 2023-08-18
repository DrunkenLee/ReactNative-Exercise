import { View, Text } from "react-native";
import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import TableComp from "../../Components/Courses/DataTable";

const CoursePage = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ marginTop: 20 }}>
      <TableComp navigation={navigation} />
    </View>
  );
};

export default CoursePage;
