import PropTypes from "prop-types"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (

    <>
      <p>Good: { good }</p>
      <p>Neutral: { neutral }</p>
      <p>Bad: { bad }</p>
      <p>Total: { total }</p>
      <p>Positive Feedback: { positivePercentage }%</p>
    </>

  )
}

export default Statistics;


Statistics.propTypes = {
  bad: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number
}
