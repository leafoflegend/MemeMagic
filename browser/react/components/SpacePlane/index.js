import React from 'react';
import styles from './styles';

export default () => (
  <div style={styles.container}>
    <a-scene>
      <a-assets>
        <img id='skyBox' src='assets/images/skyBox.jpg' />
        <img id='groundPlane' src='assets/images/groundPlane.jpg' />
      </a-assets>
      <a-sphere light='type: point; intensity: 0.5; color: #CCC' position='0 1.25 -1' radius='0.5' color='#EF2D5E'>
        <a-animation attribute='position' to='0 2 -1' direction='alternate' dur='3000' repeat='indefinite' />
      </a-sphere>
      <a-entity position='0 0 3.8'>
        <a-camera />
      </a-entity>
      <a-sky src='#skyBox' />
      <a-entity geometry='primitive: plane; width: 30; height: 30' material='src: #groundPlane' rotation='-90 0 0' />
    </a-scene>
  </div>
);
