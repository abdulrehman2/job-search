import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { expect } from 'vitest'

describe('MainNav', () => {
  it('display company name', () => {

    // Act
    render(MainNav)

    // Assert
    var companyName = screen.getByText('X Careers');
    expect(companyName).toBeInTheDocument();
  })
})
