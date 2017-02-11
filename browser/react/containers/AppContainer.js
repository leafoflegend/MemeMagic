import WelcomeDiv from '../components/WelcomeDiv';
import { connect } from 'react-redux';
import { changeWelcomeText, changeMode } from '../../redux/action-creators';

const mapStateToProps = state => ({
  welcomeText: state.get('welcomeText'),
  isInitialized: state.get('isInitialized'),
  isAFrame: state.get('isAFrame')
});

// Handles the enter key changing the welcomeText.
const mapDispatchToProps = dispatch => ({
  handleSubmit: (evt) => {
    evt.preventDefault();
    dispatch(changeWelcomeText(evt.target.textField.value));
    evt.target.textField.value = '';
    // After 5 seconds, I take you to WebVR.
    console.log('WebVR incoming in 5 seconds.');
    setTimeout(() => {
      dispatch(changeMode());
    }, 5000);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeDiv);
