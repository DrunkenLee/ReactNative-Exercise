import * as React from "react";
import { Button, DataTable } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../store/actions/actionCourses";
const editIcon = <Icon name="edit" size={20} color="#900" />;
const addIcon = <Icon name="plus" size={12} color="#000000" />;

const TableComp = ({ navigation }) => {
  const courses = useSelector((state) => state.courses.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCourses());
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("AddCourse");
        }}
      >
        Add Course {addIcon}
      </Button>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Course Name</DataTable.Title>
          <DataTable.Title numeric style={styles.studentsColumn}>
            Count
          </DataTable.Title>
          <DataTable.Title numeric>Actions</DataTable.Title>
        </DataTable.Header>

        {courses.map((item, index) => (
          <DataTable.Row key={index}>
            <DataTable.Cell>{item?.CourseName}</DataTable.Cell>
            <DataTable.Cell numeric style={styles.studentsColumn}>
              {item.Students?.length}
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <View style={styles.hstack}>
                <Button
                  onPress={() => {
                    navigation.navigate("EditCourse", {
                      course: item,
                    });
                  }}
                >
                  {editIcon}
                </Button>
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  hstack: {},
  studentsColumn: {
    flex: 0.5,
  },
});

export default TableComp;
