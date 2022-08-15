import PropTypes from "prop-types"
import style from "./Feedback.module.scss"

const Notification = ({ message }) => {
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
