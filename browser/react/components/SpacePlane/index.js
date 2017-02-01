import React from 'react';
import styles from './styles';

export default () => (
  <div style={styles.container}>
    <a-scene>
      <a-assets>
        <img id='skyBox' src='assets/images/skyBox.jpg' />
        <img id='groundPlane' src='assets/images/groundPlane.jpg' />
        <img id='glassTexture' src='assets/images/glassTexture.jpg' />
        <audio id='FireAmbience' src='assets/audio/FireAmbience.wav' />
      </a-assets>
      <a-entity light='type: directional; color: #EEE; intensity: 0.5' position='0 0.1 0' target='#glassOrb' />
      <a-entity id='glassOrb' geometry='primitive: sphere; radius: 0.5' light='type: point; intensity: 0.5; color: #CCC' position='0 1.25 -1' sound='src: #FireAmbience; autoplay: true; volume: 1' material='src: #glassTexture; roughness: 0.5; metalness: 0.5; transparent: true; opacity: 1.0;'>
        <a-animation attribute='position' to='0 4 -1' direction='alternate' dur='3000' repeat='indefinite' />
      </a-entity>
      <a-entity position='0 0 3.8'>
        <a-camera />
      </a-entity>
      <a-sky src='#skyBox' />
      <a-entity geometry='primitive: plane; width: 30; height: 30' material='src: #groundPlane' rotation='-90 0 0' />
    </a-scene>
  </div>
);
