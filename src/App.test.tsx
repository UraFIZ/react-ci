import React from 'react';
import { App } from './App';
import { render, screen } from '@testing-library/react';

describe('test <App/>', () => {
    it('should render App', () => {
        render(<App />);
        expect(screen.getByText('App')).toBeInTheDocument();
    });
});
