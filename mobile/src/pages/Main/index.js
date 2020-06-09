import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
import Header from "../../components/Header";

import styles from "./styles";
import api from "../../services/api";

export default function Main({navigation}) {
    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    async function loadProducts(page) {
        await api
        .get("/", {
            params: { page }
        })
        .then(response => {
            setProducts([...products, ...response.data.data]);
            setProductInfo(response.data.pagination);
            setPage(parseInt(response.data.pagination.currentPage, 10));
        });

    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            loadProducts(page);
        });
        return unsubscribe;
    }, [navigation]);

    function loadMore() {
        if (page === productInfo.lastPage) {
            return
        }

        const pageNumber = parseInt(page, 10) + 1;
        loadProducts(pageNumber);
    }

    return (
        <View>
            <Header navigation={navigation} />
            <FlatList 
                contentContainerStyle={{paddingBottom: 130}}
                style={styles.productList}
                data={products}
                showsVerticalScrollIndicator={false}
                keyExtractor={products => String(products.id)}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
                renderItem={({item}) => {
                    return (
                        <View style={styles.product}>
                            <Text style={styles.productName}>{item.nome}</Text>
                            <Text style={styles.productType}>{item.tipo}</Text>
                            <TouchableOpacity style={styles.detailButton} onPress={() => {navigation.navigate("Detail", {product: item})}}>
                                <Text style={styles.detailButtonText}>Acessar</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    );
}