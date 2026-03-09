import { render, fireEvent } from '@testing-library/react'
import { MobileOverlay } from '../../src/components/MobileOverlay'

test('renders keyboard icon, title, description and share button', () => {
  const { getByText } = render(<MobileOverlay />)
  expect(getByText(/⌨/)).toBeInTheDocument()
  expect(getByText(/desktop/i)).toBeInTheDocument()
  expect(getByText(/share/i)).toBeInTheDocument()
})

test('calls navigator.share when available', async () => {
  const shareMock = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'share', { value: shareMock, configurable: true })

  const { getByRole } = render(<MobileOverlay />)
  fireEvent.click(getByRole('button'))

  expect(shareMock).toHaveBeenCalledWith(
    expect.objectContaining({ url: expect.any(String) })
  )
})

test('copies to clipboard when navigator.share is unavailable', async () => {
  Object.defineProperty(navigator, 'share', { value: undefined, configurable: true })
  const writeTextMock = vi.fn().mockResolvedValue(undefined)
  Object.defineProperty(navigator, 'clipboard', {
    value: { writeText: writeTextMock },
    configurable: true,
  })

  const { getByRole } = render(<MobileOverlay />)
  fireEvent.click(getByRole('button'))

  expect(writeTextMock).toHaveBeenCalledWith(window.location.href)
})
