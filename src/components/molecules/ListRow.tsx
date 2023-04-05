import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LabelText, ImageView } from "../atoms";

type ListRowProps = {
    text?: string;
    imageUrl?: string;

};

const ListRow = ({ text, imageUrl }: ListRowProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageWrap}>
                    <ImageView url={imageUrl ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTnYP9kBursB44eBJfcIFM2BDL-z8kTgf-Gw&usqp=CAU"} resizeMode="center" />
                </View>
                <LabelText text={text} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center"
    },
    imageWrap:{
        margin:8
    },
    imageContentWrap: {
        height: 50,
        aspectRatio: 1
    }
});

export default ListRow;