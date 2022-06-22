import React from "react";
import { MessageList } from "./MessageList";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { waitFor, fireEvent } from '@testing-library/react'

describe('MessageList', () => {
    it('render component', () => {
        render(<MessageList />);
    });

    it('render component with text', () => {
        render(<MessageList />);
        expect(screen.getByText(/send/)).toBeInTheDocument();
    })

    it('render component with text', async () => {
        const handleClick = jest.fn();
        render(<button onClick={handleClick}>send</button>);


        userEvent.click(screen.getByText(/send/));

        expect(handleClick).toHaveBeenCalledTimes(1);
    })

    it('button async click', async () => {
        render(<MessageList />);

        fireEvent.click(screen.getByText(/send/));

        waitFor(() => expect(screen.getByText('hello there')).toBeInTheDocument());
    })

    it('messageList length gets bigger', async () => {
        render(<MessageList />);

        fireEvent.click(screen.getByText(/send/));

        await waitFor(() => expect(screen.getByLabelText('input').value).toBe(''));
    })
})