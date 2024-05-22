import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';


it('renders expected characters with their houses', () => {
    render(<App/>);

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("listitem", {name: "Jon Snow"})).toBeInTheDocument();
});
