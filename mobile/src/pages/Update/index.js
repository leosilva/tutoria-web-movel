import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

import styles from "./styles";
import Form from "../Form";

export default function Update({route, navigation}) {
    return (
        <View>
            <Header navigation={navigation}/>
            <View style={styles.productView}>
                <Text style={styles.productViewTitle}>Atualizar Produto</Text>
                <Form 
                    formRoute="/product"
                    formMethod="put"
                    navigation={navigation}
                    product={route.params.product}/>
            </View>
        </View>
    )
}