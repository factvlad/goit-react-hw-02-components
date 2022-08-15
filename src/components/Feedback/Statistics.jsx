import PropTypes from "prop-types"
const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (<>
    <ul>
      <li>Good: { good }</li>
      <li>Neutral: { neutral }</li>
      <li>Bad: { bad }</li>
      <li>Total: { total }</li>
      <li>Positive Feedback: { percent }%</li>
    </ul></>)
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}

export default Statistics;
