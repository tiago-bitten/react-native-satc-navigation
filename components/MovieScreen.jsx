import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export const MovieScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch("https://reactnative.dev/movies.json");
            const json = await response.json();
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {isLoading ? <Text>Loading...</Text> : (
                data.map((movie, index) => (
                    <Text key={index}>{movie.title}</Text>
                ))
            )}
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}