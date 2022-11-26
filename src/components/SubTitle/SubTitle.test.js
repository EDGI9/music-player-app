import { render , screen } from '@testing-library/react';
import SubTitle from './SubTitle';


describe('SubTitle component', () => {
    const text = 'My Subtitle'
    test('Renders SubTitle component', () => {
        render(<SubTitle/>);
    });

    test('Renders SubTitle component content', () => {
        const {getByText} = render(<SubTitle text={text}/>)
        expect(getByText('My Subtitle')).toBeInTheDocument()
    });
});
