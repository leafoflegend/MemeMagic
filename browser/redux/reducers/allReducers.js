import welcomeReducer from './welcome-reducer';
import initializationReducer from './initialization-reducer';
import modeReducer from './mode-reducer';

// File to use to explain to superReducer what its reducers are.
export default [
  modeReducer,
  welcomeReducer,
  initializationReducer
];
