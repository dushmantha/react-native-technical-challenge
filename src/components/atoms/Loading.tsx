

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Spinner } from "native-base";

type LoadingProps = {
    text?: string;
};

const Loading = ({ text }: LoadingProps) => {
    return (
        <View style={styles.container}>
            <Spinner color="#000" />
            {text && <Text>{text}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
});

export default Loading;
