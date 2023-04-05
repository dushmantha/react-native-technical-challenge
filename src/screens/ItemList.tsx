
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from "react-native"
import { useQuery, NetworkStatus } from '@apollo/client';
import { QUERY_LIST } from "../data/api"
import { useNavigation } from "@react-navigation/native";
import ListView from "../components/organisms/ListView"
import { Loading } from '../components/atoms';

const ItemList = () => {
  const navigation = useNavigation();
  const [pageIndex, setPageIndex] = useState(0)
  React.useEffect(() => {

    navigation.setOptions({
      headerRight: () => (
        <Button onPress={clickedNextButton} title="next" />
      ),
      headerLeft: () => (
        <Button onPress={clickedPreviousButton} title="previous" />
      ),
    });
  }, [navigation]);

  const { loading, error, data, refetch, networkStatus } = useQuery(QUERY_LIST, {
    variables: { page: pageIndex },
    notifyOnNetworkStatusChange: true,
  });

  const clickedNextButton = () => {
    // expected max page count is 10
    if (data.page && pageIndex < data.page) {
      setPageIndex(pageIndex + 1)
    }
  }

  const clickedPreviousButton = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1)
    }
  }
  const didSelectItem = () => {
    //@ts-expect-error
    navigation.navigate('ItemDetails', {
      name: "3123123",
    })
  }

  if (networkStatus === NetworkStatus.refetch) return <Loading text='Refetching'></Loading>;
  if (loading) return <Loading text='Loading'></Loading>;
  if (error) return <View><Text>{error.message}</Text></View>;

  return (
    <View style={style.container}>
      <ListView data={data.countries} refetch={refetch} didSelectItem={didSelectItem} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },

  contentWrap: {
    margin: 16,
  },
  fontStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#000"
  }
})

export default ItemList;