# Laravel-React SPA
This is my fork of the zaichaopan/laravel-react-spa repo

Boilerplate for your SPA made with Laravel and React.

## Features

- Laravel 8, React, React Router
- React Hook, React Context for state management
- Authentication with JWT
- Login, register, reset password
- Flexible, Protected Routing
- Tailwind CSS
- ESlint

## Installation

- Clone the repo
- Install all Composer & NPM dependencies.

```bash
composer install && npm install
```

- Copy .env.example to .env (add your db credentials)
- Generate app key

```bash
php artisan key:generate
```

- Run database migration

```bash
php artisan migrate:fresh
```

- Generate JWT secret

```bash
php artisan jwt:secret
```

- Compiling Assets

```bash
npm run dev
```

- Boot up a server

```bash
php artisan serve
```
