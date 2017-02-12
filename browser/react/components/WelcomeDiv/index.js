import React, { Component } from 'react';
import styles from './styles';
import SpacePlane from '../SpacePlane';
import WelcomeText from '../WelcomeText';

export default class WelcomeDiv extends Component {
  render () {
    const { welcomeText, handleSubmit, isInitialized, isAFrame } = this.props;

    return (
      <div style={styles.container}>
        {
          isAFrame ? (<SpacePlane isAFrame={ isAFrame } />) : (
            <WelcomeText
              handleSubmit={handleSubmit}
              welcomeText={welcomeText}
              isInitialized={isInitialized}
            />
          )
        }
      </div>
    );
  }
}

WelcomeDiv.defaultProps = {
  handleSubmit: () => {
    console.log('Still fetching dispatch from server...');
  }
};

WelcomeDiv.propTypes = {
  welcomeText: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  isInitialized: React.PropTypes.bool,
  isAFrame: React.PropTypes.bool
};
