import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/components/pages/Home'

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
  usePodcast: jest.fn(),
}))

jest.mock('../src/query/podcast', () => ({
  usePodcast: jest.fn().mockReturnValue({
    data: []
  }),
}))

describe('Home', () => {
  it('renders header correctly', () => {
    render(<Home />)
    const header = screen.getByText('Podcaster')
    expect(header).toBeInTheDocument()
  })

})