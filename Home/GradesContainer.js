import { View, Text, StyleSheet } from "react-native";
import { user } from "./mockData";

export default function GradesContainer() {
    return(
        <View style={styles.AllGradesWrapper}>
        <Text style={styles.YourGradesTitle}>Your Grades: </Text>
        <View style={styles.SubjectWrapper}>
        {
            user.classes.map((subject, index) => {
                return (
                    <View key={index} style={styles.Subject}>
                        <Text style={styles.SubjectTitle}>{subject.title}</Text>
                        <Text style={styles.SubjectAverage}>{subject.averageScore}</Text>
                    </View>
                )
            })
            
        }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    AllGradesWrapper: {
        flex: 1
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
        justifyContent: "space-between"
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
        marginEnd: 10,
        fontSize: 15,
        fontWeight: "bold",
    }
})

