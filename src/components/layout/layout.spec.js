import React from 'react';
import { render } from "@testing-library/react"

import Layout from './layout';

const elementToTest = <Layout><p>Test</p></Layout>

describe('Layout', () => {
  it('should render correctly when called', () => {
    const element = render(elementToTest);
    expect(element).toMatchSnapshot();
  });

  it('should have the main element', () => {
    const element = render(elementToTest);
    expect(element.getByText('Test').closest('main')).not.toEqual(null);
  });
});
