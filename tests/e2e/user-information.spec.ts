import { test, expect, type Page } from '@playwright/test'

async function verifyPersonalInformation(page: Page) {
  const personalInfoGroup = page.getByRole('group', {
    name: 'Personal Information',
  })
  await expect(personalInfoGroup).toBeVisible()
  await expect(
    personalInfoGroup.getByText('Basic identification details')
  ).toBeVisible()

  await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveValue(
    'John'
  )
  await expect(
    page.getByRole('textbox', { name: 'Middle Name (Optional)' })
  ).toHaveValue('Michael')
  await expect(page.getByRole('textbox', { name: 'Last Name' })).toHaveValue(
    'Doe'
  )
  await expect(page.getByRole('textbox', { name: 'Birthdate' })).toHaveValue(
    '1990-01-15'
  )
  await expect(
    page.getByRole('textbox', { name: 'National ID (Optional)' })
  ).toHaveValue('123456789')
  await expect(page.getByRole('combobox', { name: 'Gender' })).toHaveValue(
    'male'
  )
  await expect(
    page.getByRole('combobox', { name: 'Marital Status (Optional)' })
  ).toHaveValue('single')
  await expect(
    page.getByRole('textbox', { name: 'Occupation (Optional)' })
  ).toHaveValue('')
}

async function verifyContact(page: Page) {
  const contactGroup = page.getByRole('group', { name: 'Contact' })
  await expect(contactGroup).toBeVisible()
  await expect(contactGroup.getByText('Contact information')).toBeVisible()

  await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue(
    'john.doe@example.com'
  )
  await expect(page.getByRole('textbox', { name: 'Phone' })).toHaveValue(
    '+1 555 123 4567'
  )
}

async function verifyAddress(page: Page) {
  const addressGroup = page.getByRole('group', { name: 'Address' })
  await expect(addressGroup).toBeVisible()
  await expect(addressGroup.getByText('Residence address')).toBeVisible()

  await expect(
    page.getByRole('textbox', { name: 'Address Line 1' })
  ).toHaveValue('123 Main St')
  await expect(
    page.getByRole('textbox', { name: 'Address Line 2 (Optional)' })
  ).toHaveValue('Apt 4B')
  await expect(
    page.getByRole('textbox', { name: 'State/Province' })
  ).toHaveValue('IL')
  await expect(page.getByRole('combobox', { name: 'Country' })).toHaveValue(
    'US'
  )
}

async function verifyUserInformationForm(page: Page) {
  await verifyPersonalInformation(page)
  await verifyContact(page)
  await verifyAddress(page)
}

test.describe('User Information Page', { tag: ['@e2e'] }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('')

    const title = page.getByText('Welcome to Luna React!')
    await expect(title).toBeVisible()
  })

  test('client component', async ({ page }) => {
    const link = page.getByRole('link', {
      name: 'User Information A comprehensive form displaying basic user information including personal details, contact information, and address. Client component shadcn/ui Explore example →',
      exact: true,
    })

    await expect(link).toBeVisible()
    await link.click()

    await expect(page).toHaveURL('/client/detail')
    await expect(page).toHaveTitle('Client - Detail form - Luna React')

    await verifyUserInformationForm(page)
  })

  test('server component', async ({ page }) => {
    const link = page.getByRole('link', {
      name: 'User Information A comprehensive form displaying basic user information including personal details, contact information, and address. Server component shadcn/ui Explore example →',
      exact: true,
    })

    await expect(link).toBeVisible()
    await link.click()

    await expect(page).toHaveURL('/server/detail')
    await expect(page).toHaveTitle('Server - Detail form - Luna React')

    await verifyUserInformationForm(page)
  })
})
