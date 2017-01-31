import io from 'socket.io-client';
import { fetchWelcomeText } from '../redux/action-creators';
import store from '../redux/store';
const socket = io.connect();

const fetchText = () => {
  store.dispatch(fetchWelcomeText());
};

// Redirect a user.
// If you're getting slammed by user redirects that don't make sense to you - take out the callback for 'KickTroll'.
// ITS NOT TO TROLL YOU!
// It's to protect your sockets from having one user blow up the server.
socket.on('KickTroll', () => {
  window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});

// After we have initialized a user, lets get their information again.
socket.on('InitUser', () => {
  fetchText();
});

export default socket;
