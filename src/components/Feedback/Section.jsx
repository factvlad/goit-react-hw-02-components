import PropTypes from "prop-types"
import style from "./Feedback.module.scss"

const Section = ({ title, children }) => {

  return (
    <>
      <section>
        <h2 className={ style.title }>{ title }</h2>
        { children }
      </section>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string
}

export default Section;
