import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import App from './App';

describe('App, addrobot and modal test', () => {
  test('Renders the screen', () => {
    render(<Provider store={store}><App /></Provider>)

    const linkElement = screen.getByText(/Análise/i);
    expect(linkElement).toBeInTheDocument()
  });

  test('Modal openning test', () => {
    render(<Provider store={store}><App /></Provider>)

    fireEvent.click(screen.getByTestId(/openmodal/i))

    const text = screen.getByTestId(/openedmodal/i)

    expect(text).toBeInTheDocument()

  })

  test('Modal closing test', () => {
    render(<Provider store={store}><App /></Provider>)

    fireEvent.click(screen.getByTestId(/openmodal/i))

    const text = screen.getByTestId(/openedmodal/i)

    fireEvent.click(screen.getByTestId(/closemodal/i))

    expect(text).not.toBeInTheDocument()

  })
})