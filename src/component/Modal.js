import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const Modal = ({ visible, show, Comp }) => {
  const [classes, setClasses] = useState('modal');
  useEffect(() => {
    if (visible) {
      setClasses('modal modal-in');
    } else if (classes !== 'modal') {
      setClasses('modal modal-out');
    }
  }, [visible]);

  return (
    <div className={classes}>
      <Comp show={show} />
    </div>
  );
};
Modal.propTypes = {
  visible: PropTypes.bool,
  show: PropTypes.func,
  Comp: PropTypes.elementType,
};

Modal.defaultProps = {
  visible: false,
  show: () => {},
  Comp: <div />,
};

export default Modal;
