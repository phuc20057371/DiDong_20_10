import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Home({ navigation }: {navigation : any}) {
    return (
        <View>
            <Text>Home page</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Screen1')
                }}>
                <Text>
                    Chat
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Screen2')
                }}>
                <Text>
                    Search
                </Text>
            </TouchableOpacity>
            




        </View>
    )
}
export default Home