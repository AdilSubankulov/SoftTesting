import {test, expect, type Page} from '@playwright/test'

test.describe('Register Organization', ()=> {
    test('Check', async({page}) => {
        //Открываем главную страницу сайта
        await page.goto('');

        //Нажимаю на кнопку Войти и Регистрация
        await page.locator('.LFParagraph.size-16.guest-menu').click();
        await page.locator('.css-q6bjrz .main-header__user-menu').click();
        
        //Регистрация с помощью Google account
        await page.locator('//span[class="LFIcon #ffffff size-48  LFIconGoogle icon-social  google size-48 ]').click();

        //Регистрация как новый пользователь
        await page.locator('.css-1by14i2 .LFTab > .large').click();
        await page.locator('.css-1by14i2 .LFPhoneInput__input').click();
        await page.locator('.css-1by14i2 .LFPhoneInput__input').fill('771141250');
        await page.locator('.css-1by14i2 .LFInputPassword__input').click();
        await page.locator('.css-1by14i2 .LFPhoneInput__input').fill('192851');
        await page.locator('//iframe[title="reCAPTCHA"]').click();
        await page.locator('.css-1by14i2 .LFButton.primary-green').click();
        await page.waitForTimeout(6000)        
    })
})