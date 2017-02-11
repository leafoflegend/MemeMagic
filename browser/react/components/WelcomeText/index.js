import React from 'react';
import styles from './styles';
import BasicSingleLineInput from '../BasicSingleLineInput';
import InitialLoading from '../InitialLoading';

export default ({
    handleSubmit,
    isInitialized,
    welcomeText
  }) => (
    <div style={styles.test}>
      {
        isInitialized ? (
          <div>
            <h1> { welcomeText } </h1>
            <BasicSingleLineInput handleSubmit={handleSubmit} />
          </div>) : (
            <InitialLoading />
        )
      }
    </div>
);
