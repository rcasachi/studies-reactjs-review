import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech = "Javascript", onDelete }) {
  // this.props.tech

  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">&times;</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Javascript',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;
