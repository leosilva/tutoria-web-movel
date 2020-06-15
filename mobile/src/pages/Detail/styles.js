import {StyleSheet} from "react-native";

export default StyleSheet.create({
    productDetail: {
        margin: 20,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderColor: "#ddd",
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 20
    },

    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 24
    },

    productType: {
        fontSize: 16,
        color: "#999",
        lineHeight: 24,
        marginTop: 5
    },

    productDescription: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5
    },

    actions: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 20,
        marginRight: 20,
        flexDirection: "row"
    },

    editIcon: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#da552f",
        borderRadius: 5,
        padding: 10
    },

    trashIcon: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#da552f",
        borderRadius: 5,
        padding: 10,
        marginLeft: 10
    },

    overlay: {
        height: 110,
        width: '70%',
        justifyContent: 'center'
    },

    overlayActions: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    overlayQuestion: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    overlayButton: {
        height: 50,
        width: 115,
        borderStyle: 'solid',
        borderColor: '#da552f',
        borderRadius: 5,
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    overlayButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#da552f"
    }
});