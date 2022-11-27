import { render , fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    const text = 'My Button';
    const testClass = 'test-class';
    const componentClass = 'c-button';
    test('Renders Button component', () => {
        render(<Button />);
    });

    test('Check if it has the correct CSS class', () => {
        const {asFragment} = render(<Button />)
        expect(asFragment().firstElementChild).toHaveClass(componentClass)
    });

    test('Renders Button component content', () => {
        const {asFragment} = render(<Button>{text}</Button>)
        expect(asFragment().firstElementChild.firstChild.textContent).toEqual(text)
    });

    test('Can pass CSS class to component', () => {
        const {asFragment} = render(<Button className={testClass}>{text}</Button>)
        expect(asFragment().firstElementChild).toHaveClass(testClass)
    });

    test('Button click works', () => {
        const {asFragment} = render(<Button>{text}</Button>)
        fireEvent.click(asFragment().firstElementChild)
    });
});
