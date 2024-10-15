import {test, expect, type Page} from '@playwright/test'

test.describe('Register Organization', ()=> {
    test('Check', async({page}) => {
        //Открываем главную страницу сайта
        await page.goto('');

        //Нажимаю на кнопку Войти и Регистрация
        await page.locator('.LFParagraph.size-16.guest-menu').click();
        await page.locator('.css-q6bjrz .main-header__user-menu').click();
        
        //Авторизация с уже сущ. пользователем
         await page.locator('.css-1by14i2 .LFInput__wrapper.with-icon .LFInput__input').click();
         await page.locator('.css-1by14i2 .LFInput__wrapper.with-icon .LFInput__input').fill('+996771141250');
         await page.locator('.css-1by14i2 .LFInputPassword__input').click();
         await page.locator('.css-1by14i2 .LFInputPassword__input').fill('192851');
         await page.locator('.css-bky1po .login-form__controls').click();
         await page.locator('..css-bky1po .login-form .LFButton').click();
         await page.waitForTimeout(6000)
    })
})