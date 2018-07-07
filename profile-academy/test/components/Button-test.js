/* eslint-env jest */
/* global Enzyme */

import Button from '../../src/components/Button'
const { shallow } = Enzyme

describe('sample test with enzyme', () => {
  test('should have text content Something is missing when prop message dont exist', () => {
    const element = shallow(<Button>Click me!</Button>)
    expect(element).toMatchSnapshot()
    expect(element.text()).toEqual('Click me!')
  })
})
