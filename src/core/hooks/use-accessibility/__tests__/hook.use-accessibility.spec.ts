import { useAccessibility } from '..'
import { renderHook } from '@testing-library/react-hooks'

describe('testing hooks.use-accessibility', () => {
  it('should return true value when the component mounts', () => {
    const { result } = renderHook(() => useAccessibility())

    expect(result.current.isMounted).toBe(true)
    expect(typeof result.current.hasAccess).toBe('boolean')
  })
})
