import React from 'react';
import styles from './styles';

export default ({ target }) => (
  <a-entity light='type: directional; color: #EEE; intensity: 0.5' position='0 0.1 0' target={target} />
);
