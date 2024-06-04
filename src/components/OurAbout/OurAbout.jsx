import React, { useState, useEffect } from 'react'
import style from './OurAbout.module.css'
import { AiOutlineWifi, AiOutlineInstagram, AiFillYoutube, AiFillSkype, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai"
import { FcHighBattery } from "react-icons/fc"
import { BsTelegram } from "react-icons/bs"
import { FaFacebookMessenger } from "react-icons/fa"
import { GrPhone, GrTwitter, GrFacebookOption } from "react-icons/gr"
import { MdLocationPin, MdPhoneAndroid, MdAlternateEmail, MdOutgoingMail } from "react-icons/md"
import useLocalStorage from 'use-local-storage'
import NextDown from '../../assets/NextDown.gif'
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useParams } from 'react-router-dom'


export default function OurAbout() {
  const [clockState, setClockState] = useState();
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [messageUser, setMessageUser] = useState('')

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);



  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }


  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });
  const containerStyle = {
    width: "100%",
    height: "100%",
  };
  const { REACT_APP_GoogleApiKey: key } = process.env;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4',
  });

  const [map, setMap] = useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  const onMapClick = (e) => {
    console.log(e?.latLng?.lat(), "lat");
    console.log(e?.latLng?.lng(), "lng");
    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };


  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.head}>
          <div className={style.bir}>
            <div>
              <p>Biz Haqimizda</p>
            </div>
            <div>
              <p>MiniDevuz bu dasturchilar va dasturlashni o'rganmoqchi bo'lganlar uchun online tizim. Bu tizimda kurslar mutloqa tekin bo'lib tizim test shaklida ishlamoqda. Taklif va talablaringizni bizga junatishingiz mumkin.</p>
            </div>
            <div>
              <p>Ko'proq ma'lumot olish uchun</p>
              <p><img src={NextDown} alt="" /></p>
            </div>
          </div>
          <div className={style.ikki}>
            <div className={style.rasm}></div>
          </div>
        </div>
        <div className={style.SectionTwo}>
          <div className={style.SectionInOne}>
            <p>Bizning asosiy maqsadimiz ?</p>

            <p>Biz talabalar va o'quvchilar dasturlashni
              o'rganishga amaliy yordam beramiz. Kurslarimiz mutloqa tekin,
              shu bilan birga dasturlashdan tashqari test topshiringiz va interviyev
              savollariga ham tayyorgarlik ko'rishingiz mumkin. Kurslarimiz tajribali dasturchilar yordamida yozib olingan. </p>
          </div>
          <div className={style.SectionInTwo}>
            <p>Maqsadimiz o'z ishini yaxshi bajaradigan mutaxasis tayyorlash</p>
          </div>
        </div>
        <div className={style.SectionThree}>
          <div className={style.ThreeBox}>
            <div className={style.LocationIcon}><p><MdLocationPin /></p></div>
            <div className={style.LocationText}>
              <p> <span className={style.IconsLocat}><MdLocationPin /></span>   Узбекистан, Ташкент, 100000,
                проспект Мустакиллик, 59 A, бизнес-комплекс "MISSURI", офис 1 </p>
            </div>
          </div>
          <div className={style.ThreeBox}>
            <div className={style.PhoneIcon}>
              <p><MdPhoneAndroid /></p>
            </div>
            <div className={style.PhoneText}>
              <p><span className={style.IconsPhone}><GrPhone /></span><span>Ofis:</span> +998-(99)-777-77-77</p>
              <p><span className={style.IconsPhone}><GrPhone /></span><span>Sotuv Bo'limi:</span> +998-(99)-777-77-77</p>

            </div>
          </div>
          <div className={style.ThreeBox}>
            <div className={style.MailIcons}>
              <p><MdAlternateEmail /></p>
            </div>
            <div className={style.MailText}>
              <p><span className={style.IconsMarketeting}><MdOutgoingMail /></span> minidevuz@gmail.com</p>
              <p><span className={style.IconsMarketeting}><GrTwitter /></span> Twitter</p>
              <p><span className={style.IconsMarketeting}><GrFacebookOption /></span> FaceBook</p>
            </div>
          </div>


        </div>
        <div className={style.SectionFour}>
          <div className={style.Forms}>
              <div >
                <input type="text" name="fname" value={lName} onChange={(e) => setLName(e.target.value)} placeholder='Ismingizni kiriting...' />
              </div>
              <div>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Emailingizni kiriting...' />
              </div>
              <div>
                <textarea value={messageUser} onChange={(e) => setMessageUser(e.target.value)} placeholder="send me message..." ></textarea>
              </div>
              <div>
                <button>Junatish</button>
              </div>
          
          </div>
          <div className={style.Maps}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
              // onLoad={onLoad}
              // onUnmount={onUnmount}
              onClick={onMapClick}
            >
              <Marker position={center} />
              <></>
            </GoogleMap>
            {/* <img style={{ width: '100%', height: '100%' }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL7nsXCL3ZrtNp7oc3wPFzucwSSNIibbq3AA&usqp=CAU'} alt="" /> */}

          </div>


        </div>



      </div>
    </div>
  )
}
