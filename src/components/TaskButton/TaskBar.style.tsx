import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        margin: 12,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "#3A3535",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    taskText: {
        color: "white",
        fontSize: 20,
    },

    completedText: {
        textDecorationLine: 'line-through',
        color: "gray",
    }

})

export default styles;