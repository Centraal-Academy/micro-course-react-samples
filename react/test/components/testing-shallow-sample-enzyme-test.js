/* eslint-env jest */
/* global Enzyme */

import MyComponent from '../../src/react-testing'
const { shallow } = Enzyme

describe('sample test with enzyme', () => {
  test('should have text content Something is missing when prop message dont exist', () => {
    const element = shallow(<MyComponent />)
    expect(element.text()).toEqual('Something is missing')
  })

  test('should have the same text in content and prop message', () => {
    const element = shallow(<MyComponent message='its fine' />)
    expect(element.text()).toEqual('its fine')
  })
})
