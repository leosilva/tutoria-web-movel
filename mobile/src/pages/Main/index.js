import React from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import Header from "../../components/Header";

import styles from "./styles";

export default function Main() {
    return (
        <View>
            <Header />
            <FlatList 
                style={styles.productList}
                data={[1,2,3,4,5,6,7]}
                showsVerticalScrollIndicator={false}
                keyExtractor={incident => String(incident)}
                renderItem={() => {
                    return (
                        <View style={styles.product}>
                            <Text style={styles.productName}>Fanta Laranja</Text>
                            <Text style={styles.productType}>Refrigerante</Text>
                            <TouchableOpacity style={styles.detailButton} onPress={() => {}}>
                                <Text style={styles.detailButtonText}>Acessar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    );
}