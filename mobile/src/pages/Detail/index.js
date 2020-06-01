import React from "react";
import {Text, View} from "react-native";

import Header from "../../components/Header";
import styles from "./styles";

export default function Detail({route, navigation}) {
    return (
        <View>
            <Header navigation={navigation}/>
            <View style={styles.productDetail}>
                <Text style={styles.productName}>{route.params.product.nome}</Text>
                <Text style={styles.productType}>{route.params.product.tipo}</Text>
                <Text style={styles.productDescription}>{route.params.product.descricao}</Text>
            </View>
        </View>
    )
}