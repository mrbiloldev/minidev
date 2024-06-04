import React, { useState } from 'react'
import styles from './NavbarMain.module.css'
import Brand from '../../assets/CodeBox.svg'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import { Select } from 'antd';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'

export default function NavbarMain() {
    const [CheckUp, setCheckUp] = useState(false)
    const navigate = useNavigate()

    const { Option } = Select;

    const handleChange = (value) => {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    };
    const SignIn = () => {
        navigate('/login')
    }
    const EnterProfile = () => {
        navigate('/profile/menejerpage')
    }


    return (
        <div className={styles.Container}>
            <div className={styles.Main}>
                <div className={styles.Brand} >
                    <NavLink to="/home">Mini<span>Dev</span></NavLink>
                </div>
                <div className={styles.offcanvas}>
                <div className={styles.Text}>
                    <div><NavLink style={({ isActive }) => ({
                        color: isActive ? '#086F6C' : '#000',
                        borderBottom: isActive ? 'none' : 'none'
                    })} to="/home">Home</NavLink></div>

                    <div onClick={() => setCheckUp(!CheckUp)}>
                        Kurslar {CheckUp ? <span><BsChevronUp /></span> : <span><BsChevronDown /></span>}

                        <div className={CheckUp ? styles.LearnOpen : styles.LearnClose}>
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'
                            })} to='/courseCatolog'>Course Catolog</NavLink>
                            <NavLink style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'
                            })} to='/learningFormat'>Learning Format</NavLink>
                        </div>
                    </div>

                    <div><NavLink style={({ isActive }) => ({
                        color: isActive ? '#086F6C' : '#000',
                        borderBottom: isActive ? 'none' : 'none'
                    })} to="/contacts">Biz Haqimizda</NavLink></div>
                </div>
                <div className={styles.Action}>
                    <button onClick={SignIn} className={styles.ButtonNavbar}>Kirish</button>
                    {/* {
                        localStorage.getItem('minidevToken') && (<><button onClick={EnterProfile} className={styles.ButtonNavbar}>Profile</button></>)
                    } */}
                    <Select
                        labelInValue
                        defaultValue={{
                            value: 'UZB',
                            label: 'UZB',
                        }}
                        className={styles.SelectAndt}
                        onChange={handleChange}
                    >
                        <Option value="RUSSIAN">RUSS</Option>
                        <Option value="ENGLISH">ENG</Option>
                    </Select>
                </div>
                </div>
                <div className={styles.menu_bar} >
                    <AiOutlineMenu color='#000' />
                </div>
            </div>
            <Outlet />
        </div>
    )
}
