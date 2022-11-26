import { render , screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {

    //Test if it renders
    //Test if it contains the correct class
    //Test if we can pass class list
    //Tes if it renders the correct content
    //Test Button click
    const text = 'My Button'
    test('Renders Button component', () => {
        render(<Button />);
    });

    test('Check if it has the correct CSS class', () => {
        const {asFragment} = render(<Button />)
        expect(asFragment().firstElementChild).toHaveClass('c-button')
    });

    test('Renders Button component content', () => {
        const {asFragment} = render(<Button>{text}</Button>)
        //Need fixing
        expect(asFragment().firstElementChild.firstChild).toBe('My Button')
    });
});
