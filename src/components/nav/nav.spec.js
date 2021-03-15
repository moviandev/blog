import React from 'react';
import { render } from '@testing-library/react';

import Nav from './nav';

jest.mock('../../../__mocks__/gatsby')

// TODO: ajustar o test
describe('Navbar', () => {
  it('should render correctly when called', () => {
    const tree = render(<Nav />);
    expect(tree).toMatchSnapshot();
  });

  it('should render item "Home" in a list when called', () => {
    const tree = render(<Nav />);
    expect(tree.findAllByText("Home")).toBeTruthy();
  });

  it(`should render item "About '[Author]'" in a list when called`, () => {
    const tree = render(<Nav />);
    expect(tree.findAllByText("About '[Author]'")).toBeTruthy();
  });

  it(`should render item "Contact" in ul element when called`, () => {
    const tree = render(<Nav />);
    expect(tree.findAllByText("Contact")).toBeTruthy();
  });

  it(`should have anchor to home page when called`, () => {
    const tree = render(<Nav />);
    expect(tree.getByText('Home').closest('Link').getAttribute('to')).toEqual('/');
  });

  it(`should have anchor to about page when called`, () => {
    const tree = render(<Nav />);
    expect(tree.getByText(`About '[Author]'`).closest('Link').getAttribute('to')).toEqual('/about');
  });

  it(`should have anchor to contacts page when called`, () => {
    const tree = render(<Nav />);
    expect(tree.getByText(`Contact`).closest('a').closest('Link').getAttribute('to')).toEqual('/contact');
  });
});
