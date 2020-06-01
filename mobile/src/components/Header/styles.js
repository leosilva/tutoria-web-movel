import {StyleSheet} from "react-native";

export default StyleSheet.create({
    safeArea: {
        flex: 0,
        backgroundColor: '#da552f',
        width: '100%'
    },

    container: {
        height: 60,
        backgroundColor: '#da552f',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    backIconContainer: {
        height: 60,
        paddingLeft: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: -60,
        zIndex: 1,
        position: 'relative'
    }
});