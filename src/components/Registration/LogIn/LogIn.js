import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from "./Signin.module.css"
import { LeftOutlined, GlobalOutlined } from '@ant-design/icons';
import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { useMutation, useQuery } from 'react-query';
import { Checkbox } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogIn() {

  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const url = 'https://reqres.in/api/register'

  const dataMutate = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    }).then(res => res.json())
  })

  const onSubmit = () => {
    if (email?.length && password?.length) {
      dataMutate.mutate(
        {},
        {
          onSuccess: (res) => {
            if (res?.token) {
              toast.success('Muaffaqiyatli kirdingiz', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              localStorage.setItem("minidevToken", res?.token)
              navigate('/profile/menejerpage')
              setEmail('')

            } else {
              setError("Email yoki parolda xatolik");
              toast.error('Email yoki parolda xatolik', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });

            }
          },
          onError: (err) => {
            console.log(err, "error");
            toast.error('Serverda xatolik', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        }
      )
    } else {
      setError("Bush maydon junatish mumkin emas");
      toast.error('Iltimos Malumotlarni kiriting', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    }
  }


  const Checked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={styles.Container}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className={styles.Wrapper}>
        <div className={styles.MdSize}>Sign In</div>
        <div className={styles.InputsEM}>
          <input type="text" name="email" value={email} onChange={
            ({ target: { value } }) => {
              setError();
              setEmail(value);
            }
          } placeholder="Email" />
        </div>
        <div className={styles.InputsPS}>
          <input type="password" name="password" value={password} onChange={
            ({ target: { value } }) => {
              setError();
              setPassword(value);
            }} placeholder="Password" />
        </div>
        {error?.length ? <div className={styles.ErrorText}>{error}</div> : null}
        <div className={styles.Info}>
          <Checkbox onChange={Checked}>Remember me</Checkbox>

          <a href="/profile">Fargot password ?</a>

        </div>
        <div onClick={onSubmit} className={styles.EnterSignIn}>
          Sign In
        </div>
        <div className={styles.Info}>
          <a href="/signup">Ruyhatdan o'tmadingizmi ?</a>
        </div>


      </div>


    </div >
  )
}
