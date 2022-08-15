import PropTypes from "prop-types"
import style from "./Feedback.module.scss"

const Notification = ({ message, children }) => {
  return (<>
    <p className={ style.noti } >{ message }</p>
    { children }</>

  );
}

Notification.propTypes = {
  children: PropTypes.any,
  message: PropTypes.any
}

export default Notification;
