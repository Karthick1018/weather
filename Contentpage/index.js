import React, { useEffect } from 'react';
import { SafeAreaView, View, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('Home');
        }, 400);

        return () => clearTimeout(timeout);
    }, [navigation]);

    return (
        <SafeAreaView>
            <View>
                <ImageBackground
                    source={require('../assets/img2.gif')}
                    style={{ height: '100%' }}
                    resizeMode="cover"
                >
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}

export default Main;
