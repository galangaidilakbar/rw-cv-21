# CV

**Website ini dibuat untuk menyelesaikan tugas dari mata kuliah Rekayasa Web program studi informatika Semester 5**. 

Curriculum vitae (CV) adalah dokumen yang memberikan gambaran mengenai pengalaman sesorang dan kualifikasi lainnya. Sekarang ini, banyak sekali website yang berjenis CV atau yang lebih sering dikenal dengan Website Portfolio. Saya membuat website ini menggunakan Vue JS sebagai frontend dan Bootstrap untuk menghias halamannya. Website ini 100% responsive, dapat diakses dengan nyaman baik di perangkat mobile ataupun desktop.

![my cv](https://raw.githubusercontent.com/Galangaidil/spa-cv/master/public/Screenshot%202021-10-19%20at%2010-46-39%20Galang%20A%20Profesional%20Web%20Developer.png)

### [Lihat full-page screenshot mobile dan dekstopnya di Figma](https://www.figma.com/file/8sUDsRyTdxDD8MyZPNoBY4/cv?node-id=0%3A1)

## Installasi

Untuk Menjalankan website ini di komputer anda, ikuti langkah-langkah berikut:
- **Fork** repositori ini, kemudian masuklah kedalam repository hasil fork tadi.
- Buka terminal dan Clone repositori ini dengan perintah:
```
git clone https://github.com/<USERNAME>/spa-cv.git
cd spa-cv
```
**Jika di komputer anda tidak terinstall git, coba download zip nya.**
- Pastikan di komputer anda telah terinstall **Node JS!!** dengan menjalankan perintah:
```
node -v
# contoh output: v14.18.1

npm -v
# contoh output: 6.14.15
```
- Install package yang dibutuhkan website ini dengan menjalankan perintah:
```
npm i
```
- Jalankan json-server dengan perintah:
```
npx json-server --watch data/db.json
```
Data yang ada didalam file db.json ini sangat dibutuhkan oleh aplikasi agar bisa berjalan dengan baik. Karena aplikasi ini akan melakukan **API request** ke url yang diberikan package json-server untuk bisa menampilkan data.
- Terakhir, **bukalah terminal baru**, lalu jalankan development server dengan mengetikkan perintah:
```
npm run dev
```
Buka browser, ketikkan alamat [http://localhost:3001/](http://localhost:3001/)



