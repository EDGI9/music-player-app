import { render , screen } from '@testing-library/react';
import Title from './Title';

describe('Title component', () => {
    const text = 'My title'
    test('Renders Title component', () => {
        render(<Title />);
    });


    test('Renders Title component content', () => {
        const {getByText} = render(<Title text={text} />)
        expect(getByText('My title')).toBeInTheDocument()
    });
});
