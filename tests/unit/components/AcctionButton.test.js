import { screen, render } from '@testing-library/vue'
import ActionButton, { AcctionButton } from '@/components/ActionButton.vue'
import { describe, expect } from 'vitest'

describe('AcctionButton', () => {
  it('render texts', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'primary',
      },
    })

    const button = screen.getByRole('button', {
      name: /click me/i,
    })

    expect(button).toBeInTheDocument()
  })

  it('applies one of the several css classes to button', () => {
    render(ActionButton, {
      props: {
        text: 'Click me',
        type: 'secondary',
      },
    })

    const button = screen.getByRole('button', {
      name: /click me/i,
    })

    expect(button).toHaveClass('secondary')
  })
})
