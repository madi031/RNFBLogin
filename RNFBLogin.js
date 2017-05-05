'use strict';

import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

class RNFBLogin extends Component {
	renderLoggedIn() {
		LoginManager.logInWithReadPermissions(['public_profile']).then(
		  function(result) {
		    if (result.isCancelled) {
		      alert('Login cancelled');
		    } else {
		      alert('Login success with permissions: '
		        +result.grantedPermissions.toString());
		    }
		  },
		  function(error) {
		    alert('Login fail with error: ' + error);
		  }
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Button 
					title='Facebook Login'
					onPress={this.renderLoggedIn}
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
