import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/views/MainScreen";
import StockInScreen from "./src/views/StockScreen";


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Mal Qəbulu" component={StockInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
