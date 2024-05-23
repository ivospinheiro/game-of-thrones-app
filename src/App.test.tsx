import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { GAME_OF_THRONES_CHARACTERS } from './data/Characters';


it('renders expected characters with their houses', () => {
    render(<App/>);

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByRole("listitem", {name: "Jon Snow"})).toBeInTheDocument();
});
