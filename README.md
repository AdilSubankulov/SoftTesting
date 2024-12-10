# Lalafo Регистрация и Авторизация с Playwright

Этот проект посвящен автоматизации тестирования процесса авторизации на платформе [Lalafo](https://lalafo.kg) с использованием библиотеки Playwright.

## Описание проекта

Основная цель — проверить корректность работы функционала регистрации и авторизации:  
- Создание с корректными учетными данными 
- Вход с корректными учетными данными.   

Тесты написаны с использованием Playwright, поддерживающего различные браузеры и режимы.

## Установка и настройка

1. **Установка зависимостей и браузеров Playwright:**
   npm install
   npx playwright install

2. **Инициализация проекта:**
   npm init playwright@latest

3. **Клонирование репозитория:**  
   cd <Новая папка>
   git clone https://github.com/AdilSubankulov/SoftTesting.git
    
5. **Запуск автотестов:**  
   npx playwright test auth.spec.ts --headers

## API Postman collection

1.**Установка Newman:**
   - npm install -g newman
   - npm install -g newman-reporter-htmlextra

2.  **Добавление Newman в проект:**
   - npm install newman newman-reporter-htmlextra --save-dev
   - "scripts": {"test:newman": "newman run postman/API-Testing-submit-an-Order.json -r htmlextra --reporter-htmlextra-export ./postman-report.html"}

3.  **Запуск тестов и просмотр HTML-отчета:**
   - npm run test:newman
   - Открываю файл postman-report.html в браузере

## API Autotest Playwright

1.**Create folder and autotest file:**
   - /playwrightLalafo/ mkdir api-tests
   - /playwrightLalafo/ cd api-tests
   - /api-tests/ api.spec.js

2.**Setting playwright.config.js:**
   - изменяем путь запуска теста на ./api-tests
   - также меняем baseURL на 'https://simple-books-api.glitch.me'

3.**Writing api autotest:**
4.**Runing api autotest:**
   - npx playwright test api-tests/api.spec.js
