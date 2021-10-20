# CV

![my cv](https://raw.githubusercontent.com/Galangaidil/spa-cv/master/public/Screenshot%202021-10-19%20at%2010-46-39%20Galang%20A%20Profesional%20Web%20Developer.png)

## Tentang SPA-CV

Curriculum vitae (CV) adalah dokumen yang memberikan gambaran mengenai pengalaman sesorang dan kualifikasi lainnya. Sekarang ini, banyak sekali website yang berjenis CV atau yang lebih sering dikenal dengan Website Portfolio. Saya membuat website ini untuk menyelesaikan tugas dari mata kuliah Rekayasa Web program studi informatika Semester 5.

### Build With

Website ini dibuat dengan bantuan beberapa framework seperti:
* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Vite.js](https://vitejs.dev/)
* [JSON Server](https://www.npmjs.com/package/json-server)

## Getting Started

Ini adalah instruksi untuk menjalankan website SPA-CV secara lokal di komputer anda, silahkan ikuti langkah-langkah berikut:

### Prerequisites

Beberapa aplikasi yang dibutuhkan untuk bisa menjalankan website ini.

* Pastikan di komputer anda telah terinstall NodeJS.
  ```sh
  node -v
  # contoh output: v14.18.1

  npm -v
  # contoh output: 6.14.15
  ```
* Pastikan di komputer anda telah terinstall Git.
  ```sh
  git --version
  # contoh output: git version 2.33.1.windows.1
  ```

### Installation

1. **Fork** repositori ini, kemudian masuklah kedalam repository hasil fork.
2. Buka terminal dan Clone repositori ini dengan perintah:
    ```sh
    git clone https://github.com/<USERNAME>/spa-cv.git
    cd spa-cv
    ```
3. Install package yang dibutuhkan website ini dengan menjalankan perintah:
  ```sh
  npm i
  ```
4. Jalankan json-server dengan perintah:
  ```sh
  npx json-server --watch data/db.json
  ```
  Data yang ada didalam file db.json ini sangat dibutuhkan oleh aplikasi agar bisa berjalan dengan baik. Karena aplikasi ini akan melakukan **API request** ke url yang diberikan package json-server untuk bisa menampilkan data.
5. Terakhir, **bukalah terminal baru**, lalu jalankan development server dengan mengetikkan perintah:
  ```sh
  npm run dev
  ```
  Buka browser, ketikkan alamat [http://localhost:3001/](http://localhost:3001/)

## Kontak

- Twitter: [@galangaidilakbr](https://twitter.com/galangaidilakbr)

## Acknowledgments

* [Full-page screenshot of Mobile dan Desktopnya di Figma](https://www.figma.com/file/8sUDsRyTdxDD8MyZPNoBY4/cv?node-id=0%3A1)
