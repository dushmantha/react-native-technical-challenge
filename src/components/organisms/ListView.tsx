

import React, { useCallback } from "react";
import { StyleSheet, FlatList, View, RefreshControl, TouchableOpacity, Text } from "react-native";
import { List } from "../../data/types/List";
import ListRow from "../molecules/ListRow";

type ListViewProps = {
    data: [List]
    refetch: () => {}
    didSelectItem: () => void

};

const ListView = ({ data, refetch, didSelectItem }: ListViewProps) => {

    const renderItem = useCallback(({ item }: { item: List }) => {
        return (
            <TouchableOpacity style={styles.contentWrap} onPress={didSelectItem}>
                <ListRow text={item.name} imageUrl={item.image} />
                <Text>{item.emoji}</Text>
            </TouchableOpacity>
        )
    }, [data]);

    return (
        <View style={styles.container}>
            <FlatList style={styles.container}
                data={data}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                refreshControl={<RefreshControl refreshing={false} onRefresh={refetch} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: "row",
    },
    imageContentWrap: {
        height: 20,
        aspectRatio: 1
    },
    contentWrap: {
        margin: 16,
    },
});

export default ListView;