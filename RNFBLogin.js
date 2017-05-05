'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

class RNFBLogin extends Component {
	render() {
		return (
			<View style={styles.container}>
				<LoginButton
					onLoginFinished={
						(error, result) => {
							if (error) {
								alert('Something went wrong!!');
							} else if (result.isCancelled) {
								alert('Login was Cancelled!!');
							} else {
								alert('Login Success!!');
							}
						}
					}
					onLogoutFinished={
						() => alert('Sad, you left!!')
					}
				/>
			</View>	
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'center',
	},
});

module.exports = {
	RNFBLogin,
};
