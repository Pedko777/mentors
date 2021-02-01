import { useRef, ReactNode, useEffect } from 'react';
import { Close } from '../SVG';
import ReactDOM from 'react-dom';

interface IProps {
  children: ReactNode;
  isOpen?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

const Modal: React.FC<IProps> = ({
  children,
  onClose,
  onOpen,
  isOpen,
  shouldCloseOnOverlayClick,
}): JSX.Element => {
  const el = document.createElement('div');

  const outsideRef = useRef(null);

  const handleOverlayClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (
      e.target === outsideRef.current &&
      !shouldCloseOnOverlayClick &&
      onClose
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add('stop-scrolling');
    }
    return function cleanup() {
      document.body.classList.remove('stop-scrolling');
    };
  }, [isOpen]);

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => void modalRoot.removeChild(el);
  }, [isOpen, el]);

  useEffect(() => {
    isOpen && onOpen && onOpen();
  }, [onOpen, isOpen]);

  return ReactDOM.createPortal(
    isOpen ? (
      <div className="modal">
        <div
          className="modal__overlay"
          ref={outsideRef}
          data-testid="overlay"
          onClick={handleOverlayClose}
        />
        <div className="modal__box" onClick={(e) => e.stopPropagation()}>
          <button
            className="modal__close"
            onClick={onClose}
            data-testid="close"
          >
            <Close />
          </button>
          <div className="modal__content">{children}</div>
        </div>
      </div>
    ) : null,
    el
  );
};

export default Modal;
