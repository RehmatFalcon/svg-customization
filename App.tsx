import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Icon from './assets/Icon SVG.svg';
import {AppIcon} from "./AppIcon";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
            <AppIcon>
                <Icon width={200} height={200} fill={"white"} fillSecondary={"green"} fillText={"green"}/>
            </AppIcon>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: "red",
        height: "250px",
        width: "250px"
    },
    text: {
        color: "black"
    }
});
