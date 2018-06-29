/* eslint-env jest */
import TestRenderer from 'react-test-renderer'
import MyComponent from '../../src/react-testing'

describe('sample test renderer', () => {
  test('should return a span instead a button if prop message is not defined', () => {
    const testRenderer = TestRenderer.create(<MyComponent />)
    const testInstance = testRenderer.root
    const element = testInstance.findByType('span')
    expect(element).toBeTruthy()
    expect(element.type).toBe('span')
  })

  test('should return a span instead a button if prop message is not defined', () => {
    const testRenderer = TestRenderer.create(<MyComponent message='its fine' />)
    const testInstance = testRenderer.root
    const element = testInstance.findByType('button')
    expect(element).toBeTruthy()
    expect(element.type).toBe('button')
    expect(element.children).toEqual(['its fine'])
  })
})
