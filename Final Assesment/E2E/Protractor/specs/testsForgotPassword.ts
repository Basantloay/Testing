import { browser, protractor, element } from 'protractor'
import { pageForgotPassword } from '../pages/pageForgotPassword'
import { pageLogin } from '../pages/pageLogin'

const newForgotPassword = new pageForgotPassword()
const newlogin = new pageLogin()

describe('Testing forgot password', function () {
  beforeAll(function () {
    browser.get('http://localhost:4200/account.mayestro/forget-password')
  })

  it('send btn disabled untinl', async function () {
    expect(await newForgotPassword.sendBtn.isEnabled()).toBe(false)
    newForgotPassword.emailOrUsername.sendKeys('a')
    expect(await newForgotPassword.sendBtn.isEnabled()).toBe(true)
  })

  it('no username', async function () {
    browser.refresh()
    newForgotPassword.emailOrUsername.click()
    newForgotPassword.emailOrUsername.sendKeys(protractor.Key.TAB).then(async function () {
      browser.sleep(1500)
      expect(await newForgotPassword.errorEmail.getText()).toContain('Please enter your email.')
    })
  })

  it('invalid email', async function () {
    newForgotPassword.emailOrUsername.sendKeys('ahmedd')
    newForgotPassword.sendBtn.click().then(async function () {
      expect(await newForgotPassword.errorDoesNotExist.getText()).toContain('The email address you entered is not linked to a Spotify account. You can either try another email address, or log in through Facebook - if your account is connected. match.')
    })
  })

  it('invalid email error disappears and have another error', async function () {
    browser.refresh()
    newForgotPassword.emailOrUsername.sendKeys('ahmedd')
    newForgotPassword.sendBtn.click().then(async function () {
      expect(await newForgotPassword.errorDoesNotExist.getText()).toContain('The email address you entered is not linked to a Spotify account. You can either try another email address, or log in through Facebook - if your account is connected. match.')
    })
    newForgotPassword.emailOrUsername.sendKeys(protractor.Key.CONTROL, 'a')
    newForgotPassword.emailOrUsername.sendKeys(protractor.Key.DELETE)
    newForgotPassword.emailOrUsername.sendKeys(protractor.Key.TAB).then(async function () {
      expect(await newForgotPassword.errorEmail2.getText()).toContain('Please enter your email.')
      expect(await newForgotPassword.errorDoesNotExist.isDisplayed()).toBe(false)
    })
  })

  it('open spotify support', function () {
    browser.refresh()
    browser.ignoreSynchronization = true

    newForgotPassword.spotifySupport.click()

    const windowHandles = browser.getAllWindowHandles()
    let parentHandle, childHandle

    windowHandles.then(function (handles) {
      parentHandle = handles[0]
      childHandle = handles[1]

      browser.switchTo().window(childHandle).then(function () {
        browser.close()
      })

      browser.switchTo().window(parentHandle)
    })
  })

  it('valid till reset', async function () {
    browser.refresh()
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
        expect(await newForgotPassword.resetSendBtn.isEnabled()).toBe(false)
      })
    })
  })

  it('no new password', async function () {
    browser.navigate().to('http://localhost:4200/account.mayestro/forget-password')
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
      })
    })
    newForgotPassword.newPassword.click()
    newForgotPassword.confirmNewPassword.click()
    expect(await newForgotPassword.errorNewPassword.getText()).toContain('Enter a password to continue.')
  })

  it('password too short', async function () {
    browser.navigate().to('http://localhost:4200/account.mayestro/forget-password')
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
      })
    })
    newForgotPassword.newPassword.sendKeys('123')
    newForgotPassword.newPassword.sendKeys(protractor.Key.TAB)
    expect(await newForgotPassword.errorPasswordTooShort.getText()).toContain('Your password is too short.')
  })

  it('confirm paassword too short', async function () {
    browser.navigate().to('http://localhost:4200/account.mayestro/forget-password')
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
      })
    })
    newForgotPassword.confirmNewPassword.sendKeys('123')
    newForgotPassword.newPassword.click()
    expect(await newForgotPassword.errorConfirmPasswordTooShort.getText()).toContain('Your password is too short.')
  })

  it('no confirm new password', async function () {
    browser.navigate().to('http://localhost:4200/account.mayestro/forget-password')
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
      })
    })
    newForgotPassword.confirmNewPassword.click()
    newForgotPassword.newPassword.click()
    expect(await newForgotPassword.errorConfirmNewPassword.getText()).toContain('Enter a password to continue.')
  })

  it('password does not match.', async function () {
    browser.navigate().to('http://localhost:4200/account.mayestro/forget-password')
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
      })
    })
    newForgotPassword.newPassword.sendKeys('12345678')
    newForgotPassword.confirmNewPassword.sendKeys('123456789')
    newForgotPassword.confirmNewPassword.sendKeys(protractor.Key.TAB)
    expect(await newForgotPassword.errorDoesNotMatch.getText()).toContain("password doesn't match.")
  })

  it('valid password change', async function () {
    browser.navigate().to('http://localhost:4200/account.mayestro/login')
    newlogin.forgotPassword.click()
    browser.sleep(2000)
    browser.refresh()
    newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com')
    newForgotPassword.sendBtn.click().then(async function () {
      newForgotPassword.resetUsingMockServer.click().then(async function () {
        browser.sleep(2000)
        expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/account.mayestro/reset-password/')
      })
    })
    const newPassword = 123456789
    newForgotPassword.newPassword.sendKeys(newPassword)
    newForgotPassword.confirmNewPassword.sendKeys(newPassword)
    expect(await newForgotPassword.resetSendBtn.isEnabled()).toBe(true)
    newForgotPassword.resetSendBtn.click()

    // check token
    // or in my case check if i can login

    browser.navigate().back()
    browser.navigate().back()
    newlogin.emailInput.sendKeys('ahmed@gmail.com')
    newlogin.passwordInput.sendKeys(newPassword)
    newlogin.loginBtn.click()
    browser.sleep(4000)
    expect(await browser.getCurrentUrl()).toContain('http://localhost:4200/open.mayestro/overview')
  })
})
