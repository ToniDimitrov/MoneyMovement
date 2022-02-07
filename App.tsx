import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { QueryClient, QueryClientProvider } from "react-query";
import { routes } from "./src/routes/routes";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient({});

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
      {routes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
