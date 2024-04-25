/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
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
}))

jest.mock('../src/query/podcast', () => ({
  usePodcast: jest.fn().mockReturnValue({
    data: []
  }),
  usePodcastById: jest.fn().mockReturnValue({
    data: []
  }),
}))


it("renders homepage unchanged", () => {
  const { container } = render(<Podcast />);
  expect(container).toMatchSnapshot();
});