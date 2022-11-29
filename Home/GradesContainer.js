import { View, Text, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { user } from "./mockData";

export default function GradesContainer() {
  return (
    <View style={styles.AllGradesWrapper}>
      <Text style={styles.YourGradesTitle}>Your Grades: </Text>
      <View style={styles.SubjectWrapper}>
        {user.classes.map((subject, index) => {
          return (
            <View key={index} style={styles.Subject}>
              <Text style={styles.SubjectTitle}>{subject.title}</Text>
              <View style={styles.SubjectRight}>
                <Text style={styles.SubjectAverage}>
                  {subject.averageScore}
                </Text>
                <Svg
                  style={styles.RightIcon}
                >
                  <Path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </Svg>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AllGradesWrapper: {
    flex: 1,
  },
  YourGradesTitle: {
    color: "#1A7ED3",
    fontSize: 25,
    marginLeft: 15,
  },
  Subject: {
    padding: 10,
    width: "90%",
    backgroundColor: "#1A7ED3",
    marginTop: 20,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  SubjectWrapper: {
    flex: 1,
    alignItems: "center",
  },
  SubjectTitle: {
    color: "white",
    fontSize: 20,
  },
  SubjectAverage: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginEnd: 10,
  },
  RightIcon: {
    width: 15,
    height: 15,
    fill: "white",
    viewBox:"0 0 16 16",
  },
  SubjectRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
});
