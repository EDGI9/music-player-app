import { render , screen } from '@testing-library/react';
import ProgressCircle from './ProgressCircle';

describe('ProgressCircle component', () => {
    const testClass = 'test-class';
    const componentClass = 'c-progress-circle';
    const size = 290;
    test('Renders ProgressCircle component', () => {
        render(<ProgressCircle size={size} />);
    });

    test('Check if it has the correct CSS class', () => {
        render(<ProgressCircle size={size}/>)
        expect(screen.getByTestId('progress-circle')).toHaveClass(componentClass)
    });

    test('Can pass CSS class to component', () => {
        render(<ProgressCircle size={size} className={testClass} />)
        expect(screen.getByTestId('progress-circle')).toHaveClass(testClass)
    });

    test('Can pass Size prop to component', () => {
        render(<ProgressCircle size={size} />)
        expect(screen.getByTestId('progress-circle').firstElementChild).toHaveAttribute('height')
        expect(screen.getByTestId('progress-circle').firstElementChild).toHaveAttribute('width')
        expect(Number(screen.getByTestId('progress-circle').firstElementChild.getAttribute('height'))).toEqual(size)
        expect(Number(screen.getByTestId('progress-circle').firstElementChild.getAttribute('width'))).toEqual(size)
    });

});
