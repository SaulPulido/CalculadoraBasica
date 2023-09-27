import React from 'react'
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen(){
    
    return (
        <View>
            <Text style={styles.principal}>Bienvenido a la pagina principal de la mejor calculadora básica DEL MUNDO !! :D</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    principal: {
        textAlign: "center",
        justifyContent: "center",
        padding: 30,
        marginTop: 150,
        fontSize: 26,
        backgroundColor: "darkblue",
        color: "white",
    }
})