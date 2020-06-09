import React, {useState} from "react";
import {Text, View} from "react-native";

import Header from "../../components/Header";
import styles from "./styles";
import { Icon, Overlay } from "react-native-elements";

import api from "../../services/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Detail({route, navigation}) {
    const [visible, setVisible] = useState(false);

    function toogleOverlay() {
        setVisible(!visible);
    }

    async function deleteProduct() {
        await api.delete(`/product/${route.params.product.id}`);
        toogleOverlay();
        navigation.navigate("Main");
    }

    return (
        <View>
            <Header navigation={navigation}/>
            <View style={styles.productDetail}>
                <Text style={styles.productName}>{route.params.product.nome}</Text>
                <Text style={styles.productType}>{route.params.product.tipo}</Text>
                <Text style={styles.productDescription}>{route.params.product.descricao}</Text>
            </View>
            <View style={styles.actions}>
                <Icon
                    name="trash-2"
                    color="#da552f"
                    type="feather"
                    size={24}
                    iconStyle={styles.trashIcon}
                    onPress={toogleOverlay}
                />
            </View>
            <Overlay
                isVisible={visible}
                onBackdropPress={toogleOverlay}
                overlayStyle={styles.overlay}>
                <View>
                    <Text style={styles.overlayQuestion}>Deseja apagar este item?</Text>
                    <View style={styles.overlayActions}>
                        <TouchableOpacity style={styles.overlayButton} onPress={toogleOverlay}>
                            <Text style={styles.overlayButtonText}>Não</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.overlayButton} onPress={deleteProduct}>
                            <Text style={styles.overlayButtonText}>Sim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Overlay>
        </View>
    )
}