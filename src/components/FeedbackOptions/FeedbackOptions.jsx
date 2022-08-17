import PropTypes from "prop-types"
import style from "../Feedback.module.scss"

const FeedbackOptions = ({ leaveVote, options }) => {
  return (
    <div className={ style.btnDiv }>
      { options.map((option, index) => {
        const label =
          option.split('')[0].toUpperCase() +
          option.split('').slice(1).join('');
        return (
          <button
            className={ style.btn }
            key={ index }
            onClick={ () => leaveVote(option) }
            type="button">
            { label }
          </button>
        );
      }) }
    </div>

  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  leaveVote: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
}
