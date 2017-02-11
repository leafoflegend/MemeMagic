import React from 'react';
import styles from './styles';

export default ({ x, y, z, float }) => (
  <a-entity id='glassOrb' geometry='primitive: sphere; radius: 0.5' light='type: point; intensity: 0.5; color: #CCC' position={`${x} ${y} ${z}`} sound='src: #FireAmbience; autoplay: true; volume: 1' material='src: #glassTexture; roughness: 0.5; metalness: 0.5; transparent: true; opacity: 1.0;'>
    <a-animation attribute='position' to={`${x} ${float} ${z}`} direction='alternate' dur='3000' repeat='indefinite' />
  </a-entity>
);
