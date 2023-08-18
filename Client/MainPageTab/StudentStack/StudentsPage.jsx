import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import TableComp from "../../Components/Students/DataTable";

const StudentsPage = ({ navigation }) => {
  return (
    <ScrollView style={{ marginTop: 20 }}>
      <TableComp navigation={navigation} />
    </ScrollView>
  );
};

export default StudentsPage;
