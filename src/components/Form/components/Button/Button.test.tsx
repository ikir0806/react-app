import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
    it('render component', () => {
        render(<Button />);
    });

    // it('render with snapshot', () => {
    //   const { asFragment } = render(<Button label="test" />);

    //   expect(asFragment()).toMatchSnapshot();
    // });

    //   it('render component with text', () => {
    //     render(<Button label="test" />);
    //     expect(screen.getByText(/test/)).toBeInTheDocument();
    //   });

    //   it('render multiply components', () => {
    //     render(
    //       <>
    //         <Button label="test" />
    //         <Button label="send" />
    //       </>
    //     );

    //     expect(screen.queryAllByRole('button').length).toBe(2);
    //   });

    //   it('button is disabled', () => {
    //     render(<Button label="test" disabled />);

    //     expect(screen.getByText('test')).toBeDisabled();
    //   });

    //   // it('button have style color red', () => {
    //   //   render(<Button label="test" />);

    //   //   expect(screen.getByText('test')).toHaveStyle({ color: 'red' });
    //   // });

    //   it('button click with userEvent', async () => {
    //     const mockHandler = jest.fn();

    //     render(<Button label="test" click={mockHandler} />);

    //     await userEvent.click(screen.getByText('test'));

    //     expect(mockHandler).toHaveBeenCalledTimes(1);
    //   });

    //   it('button async click', async () => {
    //     const mockHandler = jest.fn();

    //     render(<Button label="test" click={() => setTimeout(mockHandler, 1500)} />);

    //     await userEvent.click(screen.getByText('test'));

    //     await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
    //       timeout: 1600,
    //     });

    //     // await screen.findByText('Clicked twice', { timeout: 1000 });
    //   });

    //   it('test exapmle', async () => {
    //     const onChange = jest.fn();
    //     render(<input type="checkbox" onChange={onChange} />);

    //     const checkbox = screen.getByRole('checkbox');
    //     await userEvent.dblClick(checkbox);
    //     expect(onChange).toHaveBeenCalledTimes(2);
    //     expect(checkbox).not.toBeChecked();
    //   });

    //   // it('Bot`s response', async () => {
    //   //   render(<Form />);
    //   //   fireEvent.input(screen.getByPlaceholderText('Введите текст...'), {
    //   //     target: { value: 'TestMessage' },
    //   //   });
    //   //   fireEvent.click(screen.getByTestId('submitbutton'));

    //   //   //Вариант 1
    //   //   expect(await screen.findByText('Chatbot')).toBeInTheDocument();

    //   //   //Вариант 2
    //   //   await waitFor(() =>
    //   //     expect(screen.getByText('Chatbot')).toBeInTheDocument()
    //   //   );
    //   // });
});