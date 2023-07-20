import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/views/MainScreen";
import StockInScreen from "./src/views/StockScreen";
import StockAcceptScreen from "./src/views/StockAcceptScreen";
import PersonSelectionScreen from "./src/views/PersonSelectionScreen";


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Mal Qəbulu" component={StockInScreen} />
                <Stack.Screen name="Mal Qəbul" component={StockAcceptScreen} />
                <Stack.Screen name="Person" component={PersonSelectionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
