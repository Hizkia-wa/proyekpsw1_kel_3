import React from 'react';
import Section from './Section';
import './Peluang.css';

import pengertianImg from '../images/pengertian.jpg';
import percobaanImg from '../images/percobaan.jpg';
import ruangSampelImg from '../images/ruangSampel.jpg';
import titikSampelImg from '../images/titikSampel.jpg';
import permutasiImg from '../images/permutasi.jpg';

function Peluang() {
    return (
        <div className="peluang-container">
            <Section
            title="Pengertian Peluang"
            backgroundImage={pengertianImg}
            content={
                <>
                <p>
                    Peluang adalah kemungkinan terjadinya siuatu kejadian. Moisalnya, 
                    kelas 12 IPA 1 memiliki 40 siswa. Dari Jumlah tersebut, akan 
                    dipilih 10 0rang sebagai panitia penerimaan siswa baru. Dan
                    ternyata, kamu terpilih 10 orang itu. Jadi,
                    kejadian terpilihnya kamu disebut sebagai peluang.
                </p> 
                </>
            }
            />
            <Section
            title="Percobaan Peluang"
            backgroundImage={percobaanImg}
            content={
                <p>
                    Artinya, ialah kegiatan atau tindakan yang tujuannya untuk memperoleh
                    hasil tertentu. Misalnya nih, pelemparan uang koin ataupun dadu.
                </p>
            }
            />
            <Section
            title="Ruang Sampel Peluang"
            backgroundImage={ruangSampelImg}
            content={
                <>
                <p>
                    Nah, hasil dari percobaan di atas disebutnya ruang sampel. Jadi,
                    bisa dibilang runag sampel adalah himpunan semua hasil yang
                    mungkin dari suatu percobaan. Ruang sampel itu simbolnya{' '}
                    <strong>S</strong> ya.
                </p>
                </>
            }
            />
            <Section
            title="Titik Sampel"
            backkgroundImage={titikSampelImg}
            content={
                <>
                <p>
                    Setiap anggota dari ruang sampel dinamakan titik sampel. Dari
                    percobaan di atas, titik sampelnya adalah sisi angka dan gambar.
                    </p>
                    </>
            }
            />
            <Section
            title="Pemutasi dan Kombinasi"
            backgroundImage={permutasiImg}
            content={
                <>
                <p>
                    <strong>Permutasi:</strong> Memperhatikan urutan. Rumus:
                    <br />
                    <strong>P(n, r)= n! / (n - r)!</strong>
                </p>
                <p>
                    <strong>Kombinasi:</strong> Tidak memperhatikan urutan. Rumus:
                    <br />
                    <strong>C(n, r) = n! / [r! x (n - r)!]</strong>
                </p>
                </>
            }
            />
        </div>
    );
}

export default Peluang;

