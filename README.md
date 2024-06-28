# Веб-приложение для регистрации заявок

Приложение регистрации заявок аварий в г. Ростов-на-Дону. Данные хранятся на json-сервере. 

### Стек технологий
- TypeScript
- React
- Менеджер состояний Effector
- json-server


### Чтобы развернуть локально:
1. Склонируйте репозиторий `git clone https://github.com/solituude/registration-of-applications.git`
2. Установите зависимости: `npm i`
3. Запустите приложение: `npm start`
4. Запустите json-server из папки `src/shared/api` с командой: 
   `json-server --watch db.json --port 8000`

Клиентская часть запустится на [http://localhost:3000](http://localhost:3000).
JSON-сервер будет отвечать с [http://localhost:8000](http://localhost:8000).

### Эндпоинт

- `/allApplications` – получение всех заявок

Пагинация и поиск реализован через единственный эндпоинт с параметрами благодаря пакету `json-server`


