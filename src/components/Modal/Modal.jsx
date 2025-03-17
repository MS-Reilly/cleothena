import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button/Button';

/**
 * A reusable modal component.
 *
 * @component
 * @example
 * const handleClose = () => console.log('Modal closed');
 * return (
 *   <Modal isOpen onClose={handleClose} title="Example Modal">
 *     <p>This is a modal content.</p>
 *   </Modal>
 * );
 */
const Modal = ({ isOpen, onClose, title, children, size }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal modal--${size}`} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <Button onClick={onClose} size={size}>X</Button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  /** Determines if the modal is open. */
  isOpen: PropTypes.bool.isRequired,
  /** Function to close the modal. */
  onClose: PropTypes.func.isRequired,
  /** Title displayed at the top of the modal. */
  title: PropTypes.string,
  /** Content inside the modal. */
  children: PropTypes.node.isRequired,
  /** Sets the size of the modal. */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Modal.defaultProps = {
  title: '',
  size: 'md',
};

export default Modal;
