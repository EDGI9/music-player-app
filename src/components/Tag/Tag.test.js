import { render , screen } from '@testing-library/react';
import Tag from './Tag';


describe('Tag component', () => {
    const element = <h1>My tag</h1>
    test('Renders Tag component', () => {
        render(<Tag />);
    });

    test('Check if it has the correct CSS class', () => {
        const {asFragment} = render(<Tag />)
        expect(asFragment().firstElementChild).toHaveClass('c-tag')
    });

    test('Renders Tag component content', () => {
        const {asFragment, getByText} = render(<Tag>{element}</Tag>)
        expect(getByText(/My tag/)).toBeInTheDocument()
        expect(asFragment().firstElementChild).toHaveClass('c-tag')
        expect(asFragment().firstElementChild.firstChild).toContainHTML('<h1>My tag</h1>')
    });
});