import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { style } from './style';
import { useEffect, useState } from 'react'

export default function Screen1() {
    // const [imgSource , setImgSource] = useState(require(''))
    // const updateImgSource = (data:string) =>{
    //     setImgSource(require(data))
    // }


    return (
        <View style={style.container}>
            <View style={style.textTitle}>
                <Text style={{margin:20, fontSize:15}}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
            </View>
            <View style={style.content}>
                <FlatList
                    data={[
                        {
                            key: { id: 1, imgePath: require('../../assets/ca.png'), productName: 'Ca nấu lẩu, nấu mì mini', shopName: 'Devang' }
                        },
                        {
                            key: { id: 5, imgePath: require('../../assets/ga_bo_toi.png'), productName: '1KG KHÔ GÀ BƠ TỎI', shopName: 'LTD Food' }
                        },
                        {
                            key: { id: 2, imgePath: require('../../assets/xa_can_cau.png'), productName: 'Xe cần cẩn đa năng', shopName: 'Thế giới đồ chơi' }
                        },
                        {
                            key: { id: 3, imgePath: require('../../assets/do_choi_dang_mo_hinh.png'), productName: 'Đồ chơi dạng mô hình', shopName: 'Thế giới đồ chơi' }
                        },
                        {
                            key: { id: 4, imgePath: require('../../assets/lanh_dao_gian_don.png'), productName: 'Lãnh đạo đơn giản', shopName: 'Minh Long Book' }
                        },
                        {
                            key: { id: 6, imgePath: require('../../assets/hieu_long_con_tre.png'), productName: 'Hiểu lòng con trẻ', shopName: 'Minh Long Book' }
                        },
                    ]}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={style.productItem}>
                            <Image 
                                source={(item.key.imgePath)} 
                                style={{width: 74, height: 74, flex: 1.5}} />
                            <View style={{flex:4, padding:5}}>
                                <Text style={{fontSize:15}}>
                                    {item.key.productName}
                                </Text>
                                <Text style={{fontSize:15}}>
                                    Shop {item.key.shopName}
                                </Text>
                            </View>
                            <View style={{
                                    flex:2, 
                                }}>
                                <TouchableOpacity 
                                    style={{
                                        flex:1,
                                        marginTop:20,
                                        marginBottom:20,
                                        justifyContent: 'center',
                                        width: 70,
                                        alignItems: 'center',
                                        backgroundColor:'red'
                                    }}>
                                    <Text style={{flex:1, color:'white', fontSize:16, flex:1, alignSelf:'center',alignItems:'center', justifyContent:'center'}}>
                                        Chat
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        </View>
    )
}