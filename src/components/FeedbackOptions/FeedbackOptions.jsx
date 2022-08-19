import PropTypes from "prop-types"
import style from "../Feedback.module.scss"

const FeedbackOptions = ({ leaveVote, options }) => {

  return (
    <ul className={ style.btnDiv }>
      { options.map((option, index) => (
        <li key={ index }>
          <button
            className={ style.btn }
            onClick={ () => leaveVote(option) }
            type="button">
            { option.split('')[0].toUpperCase() +
              option.split('').slice(1).join('') }
          </button>
        </li>
      )) }
    </ul>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveVote: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
}
