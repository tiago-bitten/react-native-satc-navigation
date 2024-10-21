import { View, Text, Button } from 'react-native';

const DetailScreen = ({ nagivation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation..goBack()} 
            />
        </View>
    );
}