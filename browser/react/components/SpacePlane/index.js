import React from 'react';
import styles from './styles';
import TheOrb from '../AFrame-Components/TheOrb';
import TheGround from '../AFrame-Components/TheGround';
import TheLight from '../AFrame-Components/TheLight';

export default ({ isAFrame }) => (
  /*
    You'll notice that I only use a-entity. This seems to be the solution
    to many of the race conditions that appear in react/redux playing
    with A-Frame.

    A-Scene: All A-Frame scenes are rendered in a scene. Consider this the 'view'
    A-Assets: A way to preload data before a scene begins.
    A-Entity: Can create all visual elements in a scene.
    A-Animation: Can control animated effects on entities.
    A-Camera: Your view portal as the user.
    A-Sky: A Picture to wrap the entire scene in.
  */
  <div style={styles.container}>
    <a-scene>
      {/* This is pre-loading all the assets for this scene, thats comprised of three textures and an audio file. */}
      <a-assets>
        <img id='skyBox' src='assets/images/skyBox.jpg' />
        <img id='groundPlane' src='assets/images/groundPlane.jpg' />
        <img id='glassTexture' src='assets/images/glassTexture.jpg' />
        <audio id='FireAmbience' src='assets/audio/FireAmbience.wav' />
      </a-assets>

      {/* These are my custom reactified pieces of the room. */}
      <TheLight target='#glassOrb' />
      <TheOrb x='0' y='1.25' z='-1' float='4' />
      <TheGround />

      {/* Below is the player camera instance, and the sky bubble. */}
      <a-entity position='0 0 3.8'>
        <a-camera />
      </a-entity>
      <a-sky src='#skyBox' />
    </a-scene>
  </div>
);
