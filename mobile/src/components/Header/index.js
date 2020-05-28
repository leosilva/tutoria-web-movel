import React from "react";
import {View, Text, SafeAreaView, StatusBar} from "react-native";

import styles from "./styles";

export default function Header() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.container}>
                <Text style={styles.header}>Header</Text>
            </View>
        </SafeAreaView>
    );
}