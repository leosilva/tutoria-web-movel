import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

import styles from "./styles";
import Form from "../Form";

export default function New({navigation}) {
    return (
        <View>
            <Header navigation={navigation}/>
            <View style={styles.productView}>
                <Text style={styles.productViewTitle}>Novo Produto</Text>
                <Form navigation={navigation}/>
            </View>
        </View>
    )
}