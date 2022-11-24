import { View, Text, StyleSheet } from "react-native";

export default function GradesContainer() {
    return(
        <View>
        <Text style={styles.YourGradesTitle}>Your Grades: </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    YourGradesTitle: {
        color: "#1A7ED3",
        fontSize: 25,
        marginLeft: 15,
    },
})

