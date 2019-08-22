import React from 'react';
import { Image, View } from 'react-native';
import { Text, Content, Container } from 'native-base';
import { fetchStarredWalks } from '../store/starredWalks';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class StarredWalks extends React.Component {
  static navigationOptions = {
    title: 'Starred Walks',
  };

  async componentDidMount() {
    await this.props.fetchStarredWalks(2);
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.starredWalks.length ? (
            this.props.starredWalks.map(walk => {
              return (
                <View
                  key={walk.id}
                  style={{
                    margin: 5,
                    height: 200,
                    borderWidth: 5,
                    borderRadius: 20,
                    borderColor: 'black',
                  }}
                >
                  <View>
                    <View>
                      <Image
                        source={{
                          uri: `${walk.imageUrl}`,
                        }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                      <Text>{walk.name}</Text>
                      <Text>{walk.category} walk</Text>
                      <Text>{walk.description}</Text>
                      <Text>Walked: {walk.favorite_walks.createdAt}</Text>
                    </View>
                  </View>
                  <View />
                </View>
              );
            })
          ) : (
            <Text />
          )}
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchStarredWalks: userId => {
      dispatch(fetchStarredWalks(userId));
    },
  };
};

const mapStateToProps = state => {
  return {
    starredWalks: state.starredWalks,
  };
};

StarredWalks.propTypes = {
  fetchStarredWalks: propTypes.func,
  starredWalks: propTypes.array,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StarredWalks);
