import {test, expect, type Page} from '@playwright/test'
import { LalafoPage } from '../pages/LalafoPage';

test.describe('Lalafo Organization', ()=> {
    test('Check', async({page}) => {
        const lalafoPage = new LalafoPage(page)
        //Открываем главную страницу сайта
        await page.goto('');

        // Нажимаю на кнопку Войти и Регистрация
        // Открываю форму Регистрации
        await lalafoPage.openFormRegister()
        
        //Регистрация как новый пользователь
        await lalafoPage.fillFormRegister()

        //Нажимаю на кнопку для подтверждении
        await lalafoPage.submitFormRegister()
        await page.waitForTimeout(6000)        
    })
})