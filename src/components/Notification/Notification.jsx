import PropTypes from "prop-types"
import Notiflix from 'notiflix';
import style from "../Feedback.module.scss"

const Notification = ({ message }) => {
  Notiflix.Report.info('There is no feedback', '', 'Click ');
  return (
  <>
    <p className={ style.noti } >{ message }</p>
  </>

  );
}
export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
}
