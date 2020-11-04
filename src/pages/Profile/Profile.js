import React from 'react'
import {Data} from "./DataProfile"
import './Profile.css'
import logo from "../../components/img/contents/1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
const Profile = () => {
    console.log(Data[0].text)
    return (
        <div style={{paddingTop:140}}>
            <div>
                <div className="data-about">
                    <div>
                        <img src={logo}/>
                    </div>                   
                </div>
                <div className="opasity">
                    <h1>ABBETAMA TOUR AND TRAVEL</h1>
                    <div className="icons"> 
                        <FontAwesomeIcon icon={faLocationArrow}/>   Yogyakarta
                    </div>
                </div>

            </div>
            <div className="grid-about">
                <div>
                    <div className="container-about">
                        <h1>About</h1>
                    </div>
                    <div>
                        <p>ABBETAMA tour dan travel adalalah sebuah perusahaan yang berbadan hukum dan bergerak di bidang jasa pariwisata serta event organizer. Base camp kami ada di kota Yogyakarta dan Bali, Indonesia . Perusahaan ini berdiri sejak tahun 2020. Kami melayani jasa paket wisata, reservasi hotel, penjualan tiket pesawat, sewa mobil. Kami juga dapat membuat acara-acara seperti gathering, Launching, meeting dan outbound bagi perusahaan / instansi.</p>
                    </div>
                </div>
                <div>
                    <p>Berawal dari hobi dan pengalaman  dari sumber daya manusia yang kita miliki, kami bisa melayani kegiatan wisata ataupun acara yang bersifat resmi, baik di dalam dan luar kota. Kami melayani pelanggan dengan rasa kebersamaan , bersahabat dan memberikan rasa nyaman sehingga dapat tercipta sebuah perjalanan atau kegiatan menjadi menarik dan menyenangkan.</p>
                    <p>Seiring perkembangan bisnis pariwisata di Indonesia, kami juga ingin memberikan sumbangsih dalam membangun usaha jasa pariwisata sebagai bentuk pelayanan kepada masyarkat yang membutuhkan dan membuka lapangan kerja baru.</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Profile
