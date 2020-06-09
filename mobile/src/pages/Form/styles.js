import {StyleSheet} from "react-native";

export default StyleSheet.create({
    productForm: {
        backgroundColor: "#fff",
        borderStyle: 'solid',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'column'
    },

    productFormInput: {
        marginBottom: 20,
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 16
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    button: {
        width: 140,
        height: 50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#da552f",
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: 'bold'
    }
});