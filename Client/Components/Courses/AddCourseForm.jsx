import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button as ButtonRN,
} from "react-native";
import { Button, Menu } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { postCourses } from "../../store/actions/actionCourses";

const AddCourseForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("");
  const students = useSelector((state) => state.students.data);
  const [studentName, setStudentName] = useState("");

  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedId, setSelectedId] = useState([]);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOptionSelect = async (option) => {
    setSelectedOption((prev) => [...prev, option]);
    setSelectedId((prev) => [...prev, option.id]);
    console.log(selectedOption);
    closeMenu();
  };

  const handleCourseSubmit = () => {
    console.log("Course Name:", courseName);
    console.log("Students:", selectedId);
    dispatch(
      postCourses({
        CourseName: courseName,
        Students: selectedId,
      })
    );
    navigation.navigate("Course");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Course Name"
        value={courseName}
        onChangeText={setCourseName}
      />
      {selectedOption.map((item, index) => {
        return (
          <TextInput
            key={index}
            style={styles.disabled}
            value={item.Name}
            editable={false}
            onChangeText={setStudentName}
          />
        );
      })}

      <View style={styles.dropdownButton}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Select Students</Button>}
        >
          {students.map((student, i) => (
            <Menu.Item
              key={student.id}
              onPress={() => handleOptionSelect(student)}
              title={student.Name}
            />
          ))}
        </Menu>
      </View>
      <ButtonRN title="Submit Course" onPress={handleCourseSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
  },
  studentsList: {
    marginTop: 10,
  },
  studentItem: {
    marginBottom: 5,
  },
  disabled: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#c5c5c5",
  },
  dropdownButton: {
    alignSelf: "flex-start",
    marginBottom: 15,
    borderStyle: "solid",
    borderColor: "#919191",
    borderWidth: 1,
  },
});

export default AddCourseForm;
