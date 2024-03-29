import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { postStudent } from "../../store/actions/actionStudents";

const AddStudentPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate] = useState(new Date());

  const handleSave = async () => {
    console.log("Name:", name);
    console.log("Date of Birth:", dob);

    try {
      dispatch(postStudent({ Name: name, DoB: dob }));
      navigation.navigate("Students");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={[styles.container]}>
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
  );
};

const styles = StyleSheet.create({
  container: {
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

export default AddStudentPage;
