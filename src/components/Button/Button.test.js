import { render , screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    const text = 'My Button';
    const testClass = 'test-class';
    const componentClass = 'c-button';
    test('Renders Button component', () => {
        render(<Button />);
    });

    test('Check if it has the correct CSS class', () => {
        render(<Button />)
        expect(screen.getByTestId('button')).toHaveClass(componentClass)

    });

    test('Renders Button component content', () => {
        render(<Button>{text}</Button>)
        expect(screen.getByTestId('button').firstChild.textContent).toEqual(text)
    });

    test('Can pass CSS class to component', () => {
        render(<Button className={testClass}>{text}</Button>)
        expect(screen.getByTestId('button')).toHaveClass(testClass)
    });

    test('Button click works', () => {
        render(<Button>{text}</Button>)
        fireEvent.click(screen.getByTestId('button'))
    });
});
