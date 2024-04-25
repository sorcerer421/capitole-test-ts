/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
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


it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});