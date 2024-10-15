import {test, expect, type Page} from '@playwright/test'

test.describe('Register Organization', ()=> {
    test('Check', async({page}) => {
        //Открываем главную страницу сайта
        await page.goto('');

        //Нажимаю на кнопку Войти и Регистрация
        await page.locator('.LFParagraph.size-16.guest-menu').click();
        await page.locator('.css-q6bjrz .main-header__user-menu').click();

        //Переход в окно Регистраций
        await page.locator('.css-1by14i2 .user-authorization__tabs').click();
        // await page.locator('').click();
        // await page.locator('').click();
        // await page.locator('').click();
        await page.waitForTimeout(8000)
        
})
})