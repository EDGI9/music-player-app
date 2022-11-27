import { render , screen } from '@testing-library/react';
import Tag from './Tag';


describe('Tag component', () => {
    const text = "My tag"
    const element = <h1>{text}</h1>
    const componentClass = 'c-tag';
    test('Renders Tag component', () => {
        render(<Tag />);
    });

    test('Check if it has the correct CSS class', () => {
        const {asFragment} = render(<Tag />)
        expect(asFragment().firstElementChild).toHaveClass(componentClass)
    });

    test('Renders Tag component content', () => {
        const {asFragment, getByText} = render(<Tag>{element}</Tag>)
        expect(getByText(text)).toBeInTheDocument()
        expect(asFragment().firstElementChild.firstChild).toContainHTML('<h1>My tag</h1>')
    });
});