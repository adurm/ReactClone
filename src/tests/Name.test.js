import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Name from '../components/Name';

test('Test', () => {
    render(<Name/>)
    expect(screen.getByText(/Adam Moussa/i)).toBeInTheDocument()
})