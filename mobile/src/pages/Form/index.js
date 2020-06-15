import React, {useState, useEffect} from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

import Spinner from "react-native-loading-spinner-overlay";

import api from "../../services/api";

export default function Form({formRoute, formMethod, product, navigation}) {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [spinner, setSpinner] = useState(false);

    function cancelAction() {
        navigation.goBack();
    }

    async function handleSubmit() {
        setSpinner(true);
        let newProduct = {
            nome,
            tipo,
            descricao
        };

        if (formMethod === "post") {
            await api.post(formRoute, newProduct)
        } else if (formMethod === "put") {
            await api.put(`${formRoute}/${product.id}`, newProduct)
        }
        
        setSpinner(false);
        navigation.navigate("Main");
    }

    useEffect(() => {
        if (product) {
            setNome(product.nome)
            setTipo(product.tipo)
            setDescricao(product.descricao)
        }
    }, []);

    return (
        <View style={styles.productForm}>
            <Spinner
                visible={spinner}
            />
            <TextInput 
                placeholder="Nome"
                style={styles.productFormInput}
                onChangeText={text => setNome(text)}
                defaultValue={nome || ""}
            />
            <TextInput 
                placeholder="Tipo"
                style={styles.productFormInput}
                onChangeText={text => setTipo(text)}
                defaultValue={tipo || ""}
            />
            <TextInput 
                placeholder="Descrição"
                style={styles.productFormInput}
                onChangeText={text => setDescricao(text)}
                defaultValue={descricao || ""}
            />
            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={cancelAction}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}