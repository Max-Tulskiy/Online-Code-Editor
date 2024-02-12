# Online code editor
## Описание:
#### Онлайн редактор кода c поддержкой 35 языков программирования и возможностью запуска кода с помощью *[Judge0](https://ce.judge0.com/)*

![sample](https://github.com/Max-Tulskiy/onlineIDE/assets/90907669/95b374d6-6bef-4526-8d00-d4a67cb37982)


## Стек:
+ Client
  + HTML
  + CSS
  + React JS
+ Server
    + Python FastAPI
 
## Запустить локально
  1. Запуск клиента
  + Создайте файл .env.development со следующим содержимым:
  ```Js 
    REACT_APP_SERVER_URL=http://localhost:8000/
  ```
  +
    ```JS
    npm install && npm start
    ```
    
  2. Запуск сервера
  + Создайте файл .env со следующим содержимым:
  ```Python
  CLIENT_URL="http://localhost:3000"
  TOKEN_URL="http://localhost:2358/submissions"
  ```
  + Установка зависимостей
    ```Python
    pip install -r requirements.txt
    ```
  + Запуск приложения
    ```Python
    uvicorn main:app --reload
    ``` 
  3. Установка и запуск judge0:
   + Загрузка и распаковка архива
  ```bash
wget https://github.com/judge0/judge0/releases/download/v1.13.0/judge0-v1.13.0.zip
 unzip judge0-v1.13.0.zip
 ```
  + Запуск всех служб
  ```bash
  cd judge0-v1.13.0
docker-compose up -d db redis
sleep 10s
docker-compose up -d
sleep 5s
  ```
  Подробнее узнать про api Judge0 можно [тут](https://ce.judge0.com/). 

  
