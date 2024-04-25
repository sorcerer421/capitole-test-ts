import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Podcast from '../src/components/pages/Podcast'

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
  usePodcast: jest.fn(),
  usePodcastById: jest.fn(),
}))

jest.mock('../src/query/podcast', () => ({
  usePodcast: jest.fn().mockReturnValue({
    data: []
  }),
  usePodcastById: jest.fn().mockReturnValue({
    data: []
  }),
}))

describe('Home', () => {
  it('renders header correctly', () => {
    render(<Podcast />)
    const header = screen.getByText('Podcaster')
    expect(header).toBeInTheDocument()
  })

})