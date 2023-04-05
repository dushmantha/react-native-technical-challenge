
import React from "react";

import { StyleSheet, Image } from "react-native";

type ImageViewType = {
    url: string;
    resizeMode?: "cover" | "contain" | "stretch" | "center" | undefined;
};

const ImageView = ({ url, resizeMode = undefined }: ImageViewType) => {
    return (
        <Image
            resizeMode={resizeMode}
            onError={() => {
                console.log("Loading onError");
            }}
            style = {styles.container}
            source={{
                uri: url,
            }}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height:50,
        width:50
        
    },
});

export default ImageView;
