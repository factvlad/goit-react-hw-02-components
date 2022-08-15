import PropTypes from "prop-types"
import Notiflix from 'notiflix';
import style from "./Feedback.module.scss"

const Notification = ({ message }) => {
  Notiflix.Report.info('There is no feedback', '', 'Click ');
  return (<>
    <p className={ style.noti } >{ message }</p>
  </>

  );
}

Notification.propTypes = {
  children: PropTypes.any,
  message: PropTypes.string
}

export default Notification;
