import React, { useEffect, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Linking } from "react-native";
import CountryFlag from "react-native-country-flag";
import { Card, Text } from "react-native-elements";
import WebView from 'react-native-webview';

const Home = () => {
    const [cities] = useState(["dharapuram", "pakistan", "chennai", "london", "australia", "china", "england"]);
    const [weatherData, setWeatherData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [webViewUrl, setWebViewUrl] = useState(null);

    const api = {
        key: "5aa3f959dccd9ed0cde889cb7dfb4a97",
        base: "https://api.openweathermap.org/data/2.5/",
    };

    const handlePress = (city) => {
        const searchQuery = city.toLowerCase();
        const url = `https://weather.com`;
        setWebViewUrl(url);
    };
    const handleGoBack = () => {
        setWebViewUrl(null);
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await Promise.all(
                cities.map(city =>
                    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
                        .then(response => response.json())
                )
            );
            setWeatherData(data);
        };
        fetchWeatherData();
    }, [cities]);

    useEffect(() => {
        if (searchQuery) {
            const searchCityWeather = async () => {
                const response = await fetch(`${api.base}weather?q=${searchQuery}&units=metric&APPID=${api.key}`);
                const data = await response.json();
                setWeatherData([data]);
            };
            searchCityWeather();
        }
    }, [searchQuery]);

    return (
        <SafeAreaView>
            <ImageBackground
                source={require('../assets/movingcloud.gif')}
                style={{ height: '100%' }}>
                <View>
                    <Card
                        containerStyle={styles.card}>
                        <ImageBackground
                            source={require('../assets/img2.gif')}
                            style={{ height: '100%' }}>
                            <Text
                                style={styles.headingtext}>
                                Today's Weather
                            </Text>
                        </ImageBackground>
                    </Card>
                </View>
                <View
                    style={{ alignItems: 'center' }}>
                    <TextInput
                        placeholder="Enter city/town..."
                        onChangeText={(text) => setSearchQuery(text)}
                        style={styles.getCity}
                    />
                </View>
                <ScrollView
                    horizontal showsHorizontalScrollIndicator={false}>
                    <View
                        style={{ flexDirection: 'row', marginTop: '5%' }}>
                        {weatherData.map((weather, index) => (
                            <TouchableOpacity key={index} onPress={() => handlePress(weather.name)}>
                                <Card
                                    key={index}
                                    containerStyle={{ width: 200, height: 200, borderRadius: 10 ,backgroundColor:'#d7ded9'}}>
                                    <View>
                                        <Text
                                            style={styles.citytext}>
                                            {weather.name }
                                        </Text>
                                        <Text
                                            style={styles.citytext}>
                                            {weather.main && weather.main.temp}
                                        </Text>
                                        <Text
                                            style={styles.citytext}>
                                            {weather.weather && weather.weather[0].main}
                                        </Text>
                                        <Text
                                            style={styles.citytext}>
                                            {weather.weather && `(${weather.weather[0].description})`}
                                        </Text>
                                    </View>
                                    {weather?.sys?.country &&
                                        <View
                                            style={{ flexDirection: 'row' }}>
                                            <CountryFlag
                                                isoCode={weather?.sys?.country}
                                                size={50}
                                                style={{ marginLeft: '50%', marginTop: '15%' }} />
                                        </View>}
                                </Card>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View
                    style={{ marginBottom:80, marginLeft: 158 }}
                    >
                    <TouchableOpacity
                        onPress={() => handlePress('Today')}>
                        <Text
                            style={{color:'white', fontSize: 15, fontStyle: 'italic' }}>
                            Click here to go more weather details
                        </Text>
                    </TouchableOpacity>
                </View>
                {webViewUrl && (
                    <View
                        style={{ height: '100%' }}>
                        <TouchableOpacity
                            onPress={handleGoBack}>
                            <Text
                                style={{ color: 'blue', fontSize: 20, fontStyle: 'italic' }}>
                                Go Back
                            </Text>
                        </TouchableOpacity>
                        <WebView
                            source={{ uri: webViewUrl }}
                        />
                    </View>
                )}   
            </ImageBackground>
        </SafeAreaView>
    );
};
export default Home;

const styles = StyleSheet.create({
    card: {
        height: 90,
        width: '90%',
        borderRadius: 10,
        top: '20%',
    },
    headingtext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
        color: '#f5f2eb'
    },
    citytext: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    getCity: {
        padding: 15,
        borderWidth: 1,
        marginBottom: '2%',
        marginTop: '30%',
        borderRadius: 5,
        textAlign: 'center',
        backgroundColor: '#cfcdca',
        width: '60%'
    },
});
