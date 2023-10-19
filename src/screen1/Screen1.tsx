import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { style } from './style';

export default function Screen1(){

    return (
        <View style= {style.container}>
            <View style={style.textTitle}>
                <Text>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
            </View>
            <View style={style.content}>
                {/* <FlatList
                    data={[
                        {key: { id: 1, imgePath: '', }
                        
                    }]}
                    renderItem={({item})=><Text>
 //                       {item.key.id}
                    </Text>}
                /> */}
            </View>
        </View>
    )
}