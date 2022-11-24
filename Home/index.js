import { Text, View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
import GradesContainer from "./GradesContainer.js";

export default function Home() {
  return (
    <>
      <View style={styles.averageScoreContainer}>
        <Text style={styles.averageScoreTitle}>Your Average Score Is:</Text>
        <Text style={styles.averageScore}>5.0</Text>
      </View>
      <View style={styles.waveOpacityContainer}>
        <Svg
          style={styles.waveOpacity}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <Path
            style={styles.shapeFill}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></Path>
        </Svg>
      </View>
      <GradesContainer />
    </>
  );
}

const styles = StyleSheet.create({
  averageScoreContainer: {
    backgroundColor: "#1A7ED3",
    height: 270,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  averageScore: {
    marginTop: 10,
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  averageScoreTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  waveOpacityContainer: {
    width: "100%",
    overflow: "hidden",
    lineHeight: 0,
  },
  waveOpacity: {
    position: "relative",
    width: "100%",
    height: 60,
  },
  shapeFill: {
    fill: "#1A7ED3",
  },
});
