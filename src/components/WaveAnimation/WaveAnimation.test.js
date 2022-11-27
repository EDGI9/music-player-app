import { render } from '@testing-library/react';
import WaveAnimation from './WaveAnimation';

describe('Wave component', () => {
    const componentClass = 'c-wave';
    test('Renders Wave component', () => {
        render(<WaveAnimation />);
    });

    test('Check if it has the correct CSS class', () => {
        const {asFragment} = render(<WaveAnimation />)
        expect(asFragment().firstElementChild).toHaveClass(componentClass)
    });
});
