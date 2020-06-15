import ErrorPopup from './ErrorPopup';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

function createComponent(newProps = {}): ShallowWrapper {
  const props = {
    error: null,
    onClose: (): void => undefined
  };

  const updatedProps = { ...props, ...newProps };

  return shallow(
    <ErrorPopup {...updatedProps}/>
  );
}

describe('ErrorPopup', () => {
  let component: ShallowWrapper;

  describe('when there is no error', () => {
    beforeAll(() => {
      component = createComponent();
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('does not have "visible" class', () => {
      expect(component.find('.popup')).not.toHaveClassName('visible');
    });
  });

  describe('when there is error', () => {
    const onCloseMock = jest.fn();
    
    beforeAll(() => {
      component = createComponent({
        error: { message: 'errorMessage' },
        onClose: onCloseMock
      });
    });

    it('renders correctly', () => {
      expect(component).toMatchSnapshot();
    });

    it('adds "visible" class', () => {
      expect(component.find('.popup')).toHaveClassName('visible');
    });

    it('shows error message', () => {
      expect(component.find('.popup p')).toHaveText('errorMessage');
    });

    describe('and then clicking on close button', () => {
      beforeAll(() => {
        component.find('.close').simulate('click');
      });

      it('removes "visible" class', () => {
        expect(component.find('.popup')).not.toHaveClassName('visible');
      });
  

      it('calls onClick handler', () => {
        expect(onCloseMock).toHaveBeenCalled();
      });
    });
  });
});
