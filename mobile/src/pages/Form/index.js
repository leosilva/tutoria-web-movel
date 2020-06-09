import React, {useState} from "react";
import { View, TextInput, Text } from "react-native";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";

import Spinner from "react-native-loading-spinner-overlay";

import api from "../../services/api";

export default function Form({navigation}) {
    const [nome, setNome] = useState("");
    const [tipo, setTipo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [spinner, setSpinner] = useState(false);


    function cancelAction() {
        navigation.goBack();
    }

    async function handleSubmit() {
        setSpinner(true);
        let product = {
            nome,
            tipo,
            descricao
        };

        await api.post("/product", product);
        
        setSpinner(false);
        navigation.navigate("Main");
    }

    return (
        <View style={styles.productForm}>
            <Spinner
                visible={spinner}
            />
            <TextInput 
                placeholder="Nome"
                style={styles.productFormInput}
                onChangeText={text => setNome(text)}
            />
            <TextInput 
                placeholder="Tipo"
                style={styles.productFormInput}
                onChangeText={text => setTipo(text)}
            />
            <TextInput 
                placeholder="Descrição"
                style={styles.productFormInput}
                onChangeText={text => setDescricao(text)}
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