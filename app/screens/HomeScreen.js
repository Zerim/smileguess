/* Import Dependencies */
import { connect } from 'react-redux';

/* Import Provider */
import { mapHomeScreen } from '../providers/providers.js';

/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
} from 'react-native';
import Button from 'react-native-button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
  },
});


/**
 * Home Screen is a React functional component.
 * It provides an entry point for joining a random game.
 * In the future, it will display a list of available games to join.
 * @param {{onJoinGame: function()}} onPress event handler for the Join Game button.
 */
export const HomeScreen = ({ onJoinGame }) => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button style={styles.button} onPress={onJoinGame}> Join Random Game! </Button>
    </View>
  </View>
);

HomeScreen.propTypes = {
  onJoinGame: PropTypes.func.isRequired,
};

/**
 * HomeScreenContainer is a 'container component' which binds the props and
 * actions creators of HomeScreen to the store and dispatcher, respectively.
 * It should be imported in favor of HomeScreen, which is exported only
 * for documentation purposes.
 */
const HomeScreenContainer = connect(
  mapHomeScreen.mapStateToProps,
  mapHomeScreen.mapDispatchToProps
)(HomeScreen);

export default HomeScreenContainer;
