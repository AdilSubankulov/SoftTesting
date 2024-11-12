import { expect, type Locator, type Page } from '@playwright/test';

export class LalafoPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Aвторизация в Lalafo.kg
    // Открываем форму авторизации
    async openFormAuth() {
        await this.page.waitForSelector('.LFParagraph.size-16.guest-menu');
        await this.page.locator('.LFParagraph.size-16.guest-menu').click();
        await this.page.waitForSelector('.main-header__user-menu');
        await this.page.locator('.main-header__user-menu').click();
    }

    // Заполняем поля для авторизации
    async fillFormAuth() {
        await this.page.waitForSelector('.css-1by14i2 .LFInput__wrapper.with-icon .LFInput__input');
        await this.page.locator('.css-1by14i2 .LFInput__wrapper.with-icon .LFInput__input').click();
        await this.page.locator('.css-1by14i2 .LFInput__wrapper.with-icon .LFInput__input').fill('+996220456360');
        await this.page.waitForSelector('.css-1by14i2 .LFInputPassword__input');
        await this.page.locator('.css-1by14i2 .LFInputPassword__input').click();
        await this.page.locator('.css-1by14i2 .LFInputPassword__input').fill('285595');
    }

    // Нажимаем кнопку для подтверждения данных
    async submitFormAuth() {
        await this.page.waitForSelector('.css-bky1po .login-form__controls');
        await this.page.locator('.css-bky1po .login-form__controls').click();
        await this.page.waitForSelector('.css-bky1po .login-form .LFButton');
        await this.page.locator('.css-bky1po .login-form .LFButton').click();
    }

    //Регистрация в Lalafo.kg
    //Открываю форму регистрации

    async openFormRegister(){
        await this.page.waitForSelector('.LFParagraph.size-16.guest-menu');
        await this.page.locator('.LFParagraph.size-16.guest-menu').click();
        await this.page.waitForSelector('.main-header__user-menu');
        await this.page.locator('.main-header__user-menu').click();
        await this.page.locator('ul.user-authorization__tabs li:nth-child(2)').click();
    }

    //Заполняем поля для регистрации
    async fillFormRegister(){
        await this.page.locator('.css-1by14i2 .LFPhoneInput__input').click();
        await this.page.locator('.css-1by14i2 .LFPhoneInput__input').fill('220456360');
        await this.page.locator('.css-1by14i2 .LFInputPassword__input').click();
        await this.page.locator('.css-1by14i2 .LFPhoneInput__input').fill('285595');
        // await this.page.locator('//iframe[title="reCAPTCHA"]').click();
    }

    //Нажимаю кнопку для подтверждении данных
    async submitFormRegister(){
        await this.page.locator('.css-1by14i2 .LFButton.primary-green').click();
    }
}