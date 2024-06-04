import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Signup.module.css";
import { LeftOutlined, GlobalOutlined } from '@ant-design/icons';
import { FcGoogle } from "react-icons/fc";
import { BsPerson } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { useMutation } from 'react-query';


export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false)
  const [eyesCondirm, setEyesCondirm] = useState(false)
  const navigate = useNavigate()
  const url = 'https://reqres.in/api/register'

  const { mutate } = useMutation(() => {
    return fetch(`${url}`, {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({})
    }).then(res => res.json())
  })

  const onSubmit = () => {
    if (name?.length && password?.length && email?.length) {
      mutate({}, {
        onSuccess: res => {
          if (res?.token) {
            localStorage.setItem("minidevToken", res?.token)
            navigate('/profile/menejerpage')
            setEmail('')

          } else {
            setError("Email yoki parolda xatolik");

          }
        },
        onError: (err) => {
          console.log(err, "error");
        }
      })

    } else {
      setError("Bush maydon junatish mumkin emas");

    }

  }


  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.MdSize}>Sign Up</div>
        <div className={styles.InputsFN}>
          <input type="text" name="full name" value={name} onChange={
            ({ target: { value } }) => {
              setError();
              setName(value);
            }
          } placeholder="Full name" />
        </div>
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
        <div onClick={onSubmit} className={styles.EnterSignUp}>
          Sign Up
        </div>
        <div className={styles.Info}>
          <a href="/login">Ruyhatdan o'tganmisiz ?</a>
        </div>
      </div>



    </div>
  )
}
