import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView, StatusBar} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./styles";

export default function Header({navigation}) {
    const [backIcon, setBackIcon] = useState();
    const [newIcon, setNewIcon] = useState();

    function goBack() {
        navigation.goBack();
    }

    function newProduct() {
        navigation.navigate("New");
    }

    useEffect(() => {
        if (navigation?.canGoBack()) {
            setBackIcon(<Icon 
                name="arrow-left"
                type="feather"
                color="#fff"
                size={24}
                containerStyle={styles.backIconContainer}
                onPress={goBack}
            />);
        }

        if (!navigation?.canGoBack()) {
            setNewIcon(<Icon 
                name="plus"
                type="feather"
                color="#fff"
                size={24}
                containerStyle={styles.newIconContainer}
                onPress={newProduct}
            />);
        }
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content"/>
            {backIcon}
            <View style={styles.container}>
                <Text style={styles.header}>Header</Text>
            </View>
            {newIcon}
        </SafeAreaView>
    );
}