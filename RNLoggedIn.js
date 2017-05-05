'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class RNLoggedIn extends Component {
	render() {
		return (
			<View>
				<Text>Logged In!!</Text>
			</View>
		);
	}
}

module.exports = {
	RNLoggedIn,
};
