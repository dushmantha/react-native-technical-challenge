import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { client } from './src/graphql';
import { AppThemeProvider } from './src/theme/theme';
import { AppRoutes } from './src/navigation/Navigation';
import { ItemList, ItemDetails } from "./src/screens"
import { Button } from 'react-native';


const App = () => {
  const AppStack = createNativeStackNavigator<AppRoutes>();
  return (
    <ApolloProvider client={client}>
      <AppThemeProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppStack.Navigator>
              <AppStack.Screen name="ItemList" component={ItemList} options={{
                headerTitle: "ItemList",
                headerLeft: () => (
                  <Button
                    title="Previous"
                  />
                ),
                headerRight: () => (
                  <Button
                    title="Next"
                  />
                ),
              }} />
              <AppStack.Group screenOptions={{ presentation: "modal" }}>
                <AppStack.Screen name="ItemDetails" component={ItemDetails} />
              </AppStack.Group>
            </AppStack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </AppThemeProvider>
    </ApolloProvider>
  );
}

export default App;