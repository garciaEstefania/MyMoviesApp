import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, TextInput, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import styles from "../assets/styles/style";
import colors from '../common/colors';

const API_KEY = '64d2ce72205af2e25fc56ed089e82a82';

export default class SearchScreen extends Component {

    state = {
        fetchedMovies: [],
    }

    componentDidMount() {
        const { navigation, route } = this.props;
        const { searchText } = route?.params;

        const fetchResultMovies = async () => {
            const response = await fetch(`
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}&page=1&include_adult=false`, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            });

            const responseData = await response.json();

            this.setState({ fetchedMovies: responseData.results });
        }

        fetchResultMovies();
    }

    render() {
        const { navigation, route } = this.props;
        const { searchText } = route?.params;

        console.log('fetchedMovies', this.state.fetchedMovies);

        return (
            <View style={{ paddingTop: StatusBar.currentHeight, flex: 1, backgroundColor: colors.primary, width: '100%', height: '100%' }}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, }}>
                    <Text style={{ color: '#fff' }} onPress={() => navigation.goBack()}>Back</Text>
                    <Text style={{ color: '#fff' }}>{searchText}</Text>
                    <Text></Text>

                </View>
                <View style={{ paddingVertical: 20, flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.fetchedMovies}
                            // horizontal
                            numColumns={2}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={{ paddingHorizontal: 10 }}
                            renderItem={({ item }) => {
                                return (<View style={{ marginBottom: 10, marginHorizontal: 5, height: 250, flex: 1, backgroundColor: '#fff', borderRadius: 10, overflow: 'hidden' }}>
                                    <View style={{ height: 100, width: '100%' }}>
                                        <Image source={{ uri: `https://image.tmdb.org/t/p/original${item.poster_path}` }} style={{ width: '100%', height: '100%' }} />
                                    </View>
                                    <View style={{ padding: 10 }}>
                                        <Text numberOfLines={2} style={{ fontWeight: 'bold' }}>{item.original_title}</Text>
                                        <Text style={{ color: '#0008' }}>{item.release_date}</Text>
                                        <Text numberOfLines={3} style={{ marginTop: 5 }}>{item.overview}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ bottom: 0.8 }}>★</Text>
                                            <Text> {item.vote_average}</Text>
                                        </View>
                                    </View>
                                </View>)
                            }}
                        />
                    </View>
                </View>
            </View >
        )
    }
}