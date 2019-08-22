import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'native-base';
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import DiscoverMap from './DiscoverMap';
import ExploreMap from './ExploreMap';
import CreateWalk from './CreateWalk';
import AccountInfo from './AccountInfo';
import PastWalks from './PastWalks';
import StarredWalks from './StarredWalks';
import WalkingMap from './WalkingMap';
import EditAccount from './EditAccount';
import PasswordReset from './PasswordReset';
import DeleteAccount from './DeleteAccount';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Dashboard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../public/sky.png')} style={{ flex: 1 }} />
        <View style={{ position: 'absolute' }}>
          <Text style={{ fontFamily: 'Avenir-Heavy', fontSize: 30 }}>
            Dashboard Component
          </Text>
        </View>
      </View>
    );
  }
}

const DashboardStackNavigator = createStackNavigator(
  {
    Dashboard: Dashboard,
    Discover: DiscoverMap,
    Explore: ExploreMap,
    'Walking Map': WalkingMap,
    'Create Walk': CreateWalk,
    'Past Walks': PastWalks,
    'Starred Walks': StarredWalks,
    'Account Info': AccountInfo,
    EditAccount: EditAccount,
    PasswordReset: PasswordReset,
    DeleteAccount: DeleteAccount,
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          borderBottomWidth: '0',
          backgroundColor: '#FFF',
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: 'Avenir-Heavy',
          fontWeight: 'bold',
        },
        headerRight: (
          <Ionicons
            name="md-menu"
            size={30}
            style={{ paddingRight: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      };
    },
  }
);

const DashboardNavigator = createDrawerNavigator(
  {
    Dashboard: DashboardStackNavigator,
    Discover: DiscoverMap,
    Explore: ExploreMap,
    'Walking Map': WalkingMap,
    'Create Walk': CreateWalk,
    'Past Walks': PastWalks,
    'Starred Walks': StarredWalks,
    'Account Info': AccountInfo,
  },
  {
    initialRouteName: 'Dashboard',
    drawerPosition: 'right',
    contentOptions: {
      labelStyle: { fontFamily: 'Avenir-Heavy' },
    },
  }
);

const DashboardContainer = createAppContainer(DashboardNavigator);

export default DashboardContainer;
