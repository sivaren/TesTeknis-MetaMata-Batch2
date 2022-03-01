# TesTeknis-MetaMata-Batch2

## Table of Contents
* [General Information](#general-information)
* [Prerequisites](#prerequisites)
* [Run Program](#run-program)
* [Project Status](#project-status)
* [Author](#author)

## General Information
> Website terkait resep makanan dalam hal Tes Teknis Fullstack Developer Intern Meta Mata Batch 2 

## Prerequisites
> **Pastikan branch repository berada di `main`** </br>

**Clone repository ini menggunakan command berikut (git bash)**
```
$ git clone https://github.com/sivaren/TesTeknis-MetaMata-Batch2
```

> **Buat database baru dengan nama `laravel`** </br>

Pada folder `backend` buat file baru `.env` dengan isi sama seperti `.env.example` akan tetapi pada bagian database diganti sebagai berikut
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD={ YOUR PASSWORD }
```

## Run Program
> **To setup this project run** </br>

**Open `cmd` on this folder**

**Set up backend**

Arahkan path ke folder `backend`
```
cd backend
```

Kemudian jalankan command sebagai berikut
```
php artisan migrate
php artisan db:seed
php artisan serve
```

Open [http://127.0.0.1:8000/api/resep](http://127.0.0.1:8000/api/resep) with your browser to see the result.

**Set up frontend**

Arahkan path kembali ke parent, lalu arahkan pada folder `frontend`
```
cd..
cd frontend
```
Kemudian jalankan command sebagai berikut
```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Status
> **Project is: _not complete_**

## Author
<table>
    <tr>
      <td><b>Nama</b></td>
      <td><b>Instagram</b></td>
    </tr>
    <tr>
      <td><a href="https://github.com/sivaren"><b>Rava Naufal Attar</b></a></td>
      <td><a href="https://www.instagram.com/ravaattar/"><b>ravaattar</b></a></td>
    </tr>
</table>
