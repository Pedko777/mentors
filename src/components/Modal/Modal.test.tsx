import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import '@testing-library/jest-dom';

describe('Modal', () => {
  it('render text inside modal  check onClose', () => {
    const { getByText } = render(
      <Modal isOpen={true}>
        <div>test</div>
      </Modal>
    );
    expect(getByText('test')).toBeInTheDocument();
  });

  it('check onClose', () => {
    const onClose = jest.fn();

    render(
      <Modal onClose={onClose} isOpen={true}>
        <div>test</div>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('close'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('checks  onOpen', () => {
    const onOpen = jest.fn();
    render(
      <Modal onOpen={onOpen} isOpen={true}>
        <div>test</div>
      </Modal>
    );
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('checks overlay click', () => {
    const onClose = jest.fn();

    const { getByTestId } = render(
      <Modal onClose={onClose} isOpen={true} shouldCloseOnOverlayClick={false}>
        <div>test</div>
      </Modal>
    );
    const overlay = getByTestId('overlay');
    expect(overlay).toBeInTheDocument();
    fireEvent.click(overlay);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
