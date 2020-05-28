import {StyleSheet} from "react-native";

export default StyleSheet.create({
    productList: {
        padding: 20,
        height: '100%'
    },

    product: {
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: '#ddd',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 20,
        marginBottom: 20
    },

    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24,
    },

    productType: {
        fontSize: 16,
        color: '#999',
        lineHeight: 24,
        marginTop: 5
    },

    detailButton: {
        height: 42,
        borderRadius: 5,
        borderColor: '#da552f',
        borderWidth: 2,
        borderStyle: 'solid',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    detailButtonText: {
        color: '#da552f',
        fontWeight: 'bold',
        fontSize: 16
    }
});