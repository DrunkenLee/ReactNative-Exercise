import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, Button } from "react-native-paper";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { studentUrl, updateStudent } from "../../store/actions/actionStudents";
import { useDispatch } from "react-redux";

const EditStudentPage = ({ navigation, route }) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  let { student } = route.params;

  const [studentId, setStudentId] = useState(student?.id);
  const [name, setName] = useState(student?.Name);
  const [dob, setDob] = useState(student?.DoB);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = async () => {
    console.log("Id:", studentId);
    console.log("Name:", name);
    console.log("Date of Birth:", dob);

    try {
      dispatch(updateStudent({ id: studentId, Name: name, DoB: dob }));
      navigation.navigate("Students");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <View style={styles.hstack}>
          <TextInput
            label="Date of Birth"
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={{ width: "60%" }}
          />

          <Button mode="outlined" onPress={() => setShowDatePicker(true)}>
            Pick Date
          </Button>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={(event, selected) => {
                if (selected) {
                  setDob(selected.toISOString().split("T")[0]);
                }
                setShowDatePicker(false);
              }}
            />
          )}
        </View>

        <Button
          mode="contained"
          onPress={() => {
            handleSave();
          }}
        >
          Save
        </Button>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  hstack: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default EditStudentPage;
