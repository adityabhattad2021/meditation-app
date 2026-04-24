import SessionScreen from "@/screens/session-screen";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SessionPage(){
    return (
        <SafeAreaView style={styles.container}>
            <SessionScreen/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
})