/* Import Components */
import React, {
  View,
  StyleSheet,
  PropTypes,
  Text,
} from 'react-native';
import { BlurView } from 'react-native-blur';

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'red',
    padding: 20,
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  font: {
    color: 'white',
  },
  row1: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

/**
 * Toast is a React functional component designed to provide modal notifications
 * across the application.
 * @param {string} props.message - text body of the message.
 */
class Toast extends React.Component {
  render() {
    const { toastMessage, screenSize } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            width: screenSize.width,
          },
        ]}
      >
        <View style={styles.row1}>
          <Text style={styles.font}> X </Text>
        </View>
        <View style={styles.row2}>
          <Text style={styles.font}> {toastMessage} </Text>
        </View>
      </View>
    );
  }
}
Toast.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Toast;
