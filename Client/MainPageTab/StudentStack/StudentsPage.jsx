import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import TableComp from "../../Components/Students/DataTable";
import SearchBarComp from "../../Components/Students/SearchBarComp";

const StudentsPage = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <SearchBarComp />
      <TableComp />
    </ScrollView>
  );
};

export default StudentsPage;
