# Together"

Добро пожаловать в репозиторий сайта Together. Этот проект включает в себя фронтенд на Next.js и бэкенд на Django.py с базой данных PostgreSQL.

## Описание

Сайт приложения Together представляет из себя приложение для поиска и помощи тех, кому нужна помощь.

## Технологии

### Фронтенд

- **Next.js** - библиотека для создания пользовательских интерфейсов.

### Бэкенд

- **Django.py** - веб-фреймворк для Python.
- **PostgreSQL** - реляционная база данных для хранения данных.

## Установка

### Предварительные требования

Для запуска проекта вам потребуются:

- Node.js (рекомендуется версия 20.x или выше)
- PostgreSQL (рекомендуется версия 12.x или выше)

### Шаги для установки

1. **Клонирование репозитория:**

   ```sh
   git clone https://github.com/timofey1704/together-www.git
   cd restmark-www
   ```

2. **Установка зависимостей для фронтенда и бэкенда:**
   Я подготовил requrements.txt в директории backend для разворачивания python приложения, с фронтендом команды npm install - npm run build

3. **Настройка базы данных:**

   Создайте базу данных PostgreSQL и выполните миграции:

   ```sh
   createdb restmarkDB
   # Выполните миграции, если они имеются. В проекте откройте директорию backend
   cd backend
   python manage.py makemigrations
   python manage.py migrate
   ```

4. **Настройка переменных окружения:**

   Создайте файл `.env` в корневой директории и добавьте необходимые переменные окружения:
   Добавьте в ALLOWED_HOSTS новый хостнейм, а так же укажите его в NEXT_PUBLIC_API_URL в формате "<hostname>/api/v1/"
   Так же в backend/base/settings.py нужно добавить новых хостнейм в CORS_ALLOWED_ORIGINS

   ```env
    SECRET_KEY =
    DEBUG_MODE = True
    ALLOWED_HOSTS =

    DB_USER=
    DB_HOST=
    DB_NAME=
    DB_PASSWORD=
    DB_PORT=

    API_KEY=

    NEXT_PUBLIC_API_URL = ""
   ```
