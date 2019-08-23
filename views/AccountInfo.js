import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class AccountInfo extends React.Component {
  static navigationOptions = {
    title: 'Account Info',
  };

  render() {
    return (
      <>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                marginBottom: 20,
                marginTop: 40,
              }}
            >
              Your account details:{' '}
            </Text>
          </View>
          <View>
            <View>
              {this.props.user.firstName ? (
                <>
                  <Text style={{ fontWeight: '700', marginBottom: 2 }}>
                    First Name: {this.props.user.firstName}
                  </Text>
                  <Text style={{ fontWeight: '700' }}>
                    Email: {this.props.user.email}
                  </Text>
                  <Button
                    rounded
                    primary
                    style={{ marginTop: 15, justifyContent: 'center' }}
                    onPress={() =>
                      this.props.navigation.navigate('EditAccount')
                    }
                  >
                    <Text>Edit Info</Text>
                  </Button>
                  <Button
                    rounded
                    primary
                    style={{ marginTop: 15, justifyContent: 'center' }}
                    onPress={() =>
                      this.props.navigation.navigate('PasswordReset')
                    }
                  >
                    <Text>Request password reset</Text>
                  </Button>
                </>
              ) : (
                <Text>Loading...</Text>
              )}
            </View>
            <Button
              rounded
              danger
              style={{ marginTop: 300, justifyContent: 'center' }}
              onPress={() => this.props.navigation.navigate('DeleteAccount')}
            >
              <Text style={{ alignSelf: 'center' }}>Delete account</Text>
            </Button>
          </View>
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mergeProps = (state, dispatch, ownProps) => {
  return {
    ...ownProps,
    ...state,
    ...dispatch,
  };
};

AccountInfo.propTypes = {
  fetchLoggedInUser: propTypes.func,
  loggedInUser: propTypes.object,
};

export default connect(
  mapStateToProps,
  mergeProps
)(AccountInfo);
