import {test, expect, type Page} from '@playwright/test'
import { LalafoPage } from '../pages/LalafoPage';

test.describe('Lalafo Organization', ()=> {
    test('Check', async({page}) => {
        const lalafoPage = new LalafoPage(page)

        //Открываем главную страницу сайта
        await page.goto('');

        // Нажимаю на кнопку Войти и Регистрация
        await lalafoPage.openFormAuth()
        
        //Авторизация с уже сущ. пользователем
        await lalafoPage.fillFormAuth()

        //Нажимаю кнопку для подтверждения 
        await lalafoPage.submitFormAuth()
        await page.waitForTimeout(6000)
    })
})