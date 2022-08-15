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
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  percent: PropTypes.number,
  total: PropTypes.number
}

export default Statistics;
