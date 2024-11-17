import React from 'react';
import Section from './Section';
import './Peluang.css';


function Peluang() {
    return (
        <div className="peluang-container">
            <Section
                title="Pengertian Peluang"
                content={
                    <>
                    <p>
                        Peluang adalah kemungkinan terjadinya suatu kejadian. Misalnya,
                        kelas 12 IPA 1 memiliki 40 siswa. Dari jumlah tersebut, akan
                        dipilih 10 orang sebagai panitia penerimaaan siswa baru. Dan
                        ternyata kamu menjadi salah satu di antataa 10 orang itu. Jadi,
                        kejadian terpilihnya kamu disebut sebagai peluang.
                    </p>
                    <p>
                        Dalam teori peluang, terdapat 4 hal yang penting untuk kamu ingat:
                        percobaan, ruang sampel, titik sampel, dan kejadian.
                    </p>
                    </>
                }
                />
                <Section
                title="Percobaan Peluang"
                content={
                    <p>
                        maksudnya ialah kegiatan atau tindakan yang ujuannya untuk memperoleh 
                        hasil tertentu. Misalnya nih, pelemparan uang koin ataupun dadu.
                    </p>
                }
                />
                <Section
                title="Ruang Sampel Peluang"
                content={
                    <>
                    <p>
                        Nah, hasil dari percobaan diatas disebutnya ruang sampel. jadi, 
                        bisa dibilang ruang sampel adalah himpunan semua hasil yang
                        mungkin dari suatu percobaan. Ruang sampel itu simbolnya{' '}
                        <strong>S</strong> ya.
                    </p>
                    <p>
                        Contoh: Misalnya kita melakukan percobaan 1 uang koin.
                        Kemungkinan yang muncul adalah angka atau gambar.
                        <br />
                        <strong>S = {'{Sisi angka, Sisi gambar}'}</strong>
                    </p>
                    </>
                }
               />
               <Section
               title="Titik Sampel"
               content={
                <>
                <p>
                    Setiap anggota dari ruang sampel dinamakan titik sampel. Dari
                    percobaan di atas, titik sampelnya adalah sisi angka dan gambar.
                    Biasanya ditanya jumlah titik sampel.
                </p>
                <p>
                    <strong>n(S) = 2</strong>
                </p>
                <p>
                    Contoh lain: kita akan menentukan titik sampel dari percobaan
                    pelemparan dua uang koin sekaligus:
                    <br />
                    <strong>{'{AA, AG, GA, GG}'}</strong>
                </p>
                </>
               }
               />
               <Section
               title="Tabel Titik Sampel"
               content={
                <table className="sample-table">
                    <thead>
                        <tr>
                            <th>Koin 1</th>
                            <th>Koin 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Angka</td>
                            <td>Angka</td>
                        </tr>
                        <tr>
                            <td>Angka</td>
                            <td>Gambar</td>
                        </tr>
                        <tr>
                            <td>Gambar</td>
                            <td>Angka</td>
                        </tr>
                        <tr>
                            <td>Gambar</td>
                            <td>Gambar</td>
                        </tr>
                    </tbody>
                </table>
               }
               />
               <Section
               title="Permutasi dan Kombinasi"
               content={
                <>
                <p>
                    <strong>Permutasi:</strong> Memperhatikan urutan. Rumus:
                    <br />
                    <strong>P(n, r) = n! / (n - r)!</strong>
                </p>
                <p>
                    <strong>Kombinasi:</strong> Tidak memperhatikan urutan. Rumus:
                    <br />
                    <strong>C(n, r) = n! / [r! × (n - r )!]</strong>
                </p>
                </>
               }
               />
        </div>
    );
}

export default Peluang;