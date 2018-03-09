import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as locationsService from '../components/services/locations';

export default class ViewsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
        };
    }

    static navigationOptions = { header: null};

    componentDidMount() {
        this.getLocations();
    }

    async getLocations() {
        try {
            const locations = await locationsService.all(41);

            console.log(locations);
            this.setState({
                locations
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        console.log(this.props.navigation);

        return (
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <View rkCardHeader>
                            <Text> Absolutley Fantastic Places to Take Pictures of Yourself</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie3.jpg')} />
                        <View rkCardContent>
                            <Text> Absolutley Fantastic Places to Take Pictures of Yourself</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                </View>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                     <ScrollView >
                        {this.state.locations.map((location, index) => {
                            return (
                                <RkCard key={index} >
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('LocationScreen', { location }) }} >
                                        <View rkCardHeader>
                                            <Text>{location.name}</Text>
                                        </View>
                                        {/* source={{uri:this.props.navigation.state.params.location.image}} */}
                                        <Image rkCardImg />
                                        <View rkCardContent>
                                            <Text>{location.description}</Text>
                                        </View>
                                        <View rkCardFooter>
                                            <Text>Footer</Text>
                                        </View>
                                    </TouchableOpacity>
                                </RkCard>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});
