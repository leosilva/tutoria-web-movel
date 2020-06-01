import React, {useState, useEffect} from "react";
import {View, Text, SafeAreaView, StatusBar} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./styles";

export default function Header({navigation}) {
    const [icon, setIcon] = useState();

    function goBack() {
        navigation.goBack();
    }

    useEffect(() => {
        if (navigation?.canGoBack()) {
            setIcon(<Icon 
                name="arrow-left"
                type="feather"
                color="#fff"
                size={24}
                containerStyle={styles.backIconContainer}
                onPress={goBack}
            />);
        }
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content"/>
            {icon}
            <View style={styles.container}>
                <Text style={styles.header}>Header</Text>
            </View>
        </SafeAreaView>
    );
}