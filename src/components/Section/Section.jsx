import PropTypes from "prop-types"
import style from "../Feedback.module.scss"

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

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
}
