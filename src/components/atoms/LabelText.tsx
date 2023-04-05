
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type LabelTextProps = {
    text?: string;
};

const LabelText = ({ text }: LabelTextProps) => {
    return (
        <View style={styles.container}>
            {text && <Text style={styles.fontStyle}>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fontStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000"
    }
});

export default LabelText;