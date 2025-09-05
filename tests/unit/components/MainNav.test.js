import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { describe, expect } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  it('display company name', () => {
    // Act
    render(MainNav)

    // Assert
    var companyName = screen.getByText('X Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('display menu items for navigation', () => {
    render(MainNav)

    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((x) => x.textContent)
    expect(navigationMenuTexts).toEqual(['Teams', 'Locations', 'How we Hire', 'Students', 'Jobs'])
  })
})

describe('When user logs in', () => {
  it('displays user profile picture', async () => {
    render(MainNav)

    let profileImage = screen.queryByRole('img', {
      name: /user profile image/i,
    })
    expect(profileImage).not.toBeInTheDocument()

    const loginButton = screen.getByRole('button', {
      name: /sign in/i,
    })

    await userEvent.click(loginButton)

    // difference beteween queryByRole vs getByRole is  the first one will not throw error if element is not found
    profileImage = screen.queryByRole('img', {
      name: /user profile image/i,
    })

    expect(profileImage).toBeInTheDocument()
  })
})
