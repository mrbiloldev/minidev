import React, { useState } from 'react'
import style from "./profilnavbar.module.css"
import { FiSearch } from "react-icons/fi"
import { BsBell } from "react-icons/bs"
import User from "../../../assets/user4.png"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"
import { Dropdown, Menu, Space } from 'antd';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'




const notification = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        News
                    </a>
                ),
            },
            {
                key: '2',
                label: "News site",
            },
            {
                key: '3',
                label: "About site",
            },

        ]}
    />
);
function ProfileNavbar() {
    const location = useLocation()
    const [showDrop, setShowDrop] = useState(false)
    const LogOut = () => {
        localStorage.removeItem("minidevToken");
        if (location?.pathname?.includes("profile")) {
            navigate("/home");
        } else {
            navigate(location.pathname);
        }
    }; 
    let sana = new Date()
    const navigate = useNavigate()
    const HomePage = () => {
        navigate('/home')
    }
    return (
        <div className={style.Container}>
            <div className={style.Main}>
                <div className={style.navbar}>
                    <div className={style.brand} onClick={HomePage}>
                        <h1>Mini<span>Dev</span></h1>
                    </div>
                    <div className={style.searchparent}>
                        <div className={style.search}>
                            <form>
                                <input type="text"
                                    id="header-search"
                                    name="s" placeholder='Search...' />
                                <button type="submit"><FiSearch size={24} color="#086F6C" /></button>
                            </form>
                        </div>
                    </div>
                    <div className={style.navs}>
                        <div className={style.noti}>
                            <div className={style.notification}>
                                <span>3</span>
                                <Dropdown overlay={notification} className={style.dropdown}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <BsBell size={20} color='#d9d9d9' />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </div>
                        </div>
                        <div className={style.profil}>
                            <div className={style.img}>
                                <img src={User} alt="" />
                            </div>
                            <div className={style.userText}><p>Mirzabek Holmedov</p><p>{sana.toLocaleString()}</p></div>
                            <div>
                                <BiDotsVerticalRounded className={style.MenuIcons} size={35} onClick={() => setShowDrop(!showDrop)} color='#d9d9d9' />

                                <div className={showDrop ? style.DropDownOpen : style.DropDownClose}>
                                    <p> <span><NavLink style={({ isActive }) => ({
                                        color: isActive ? '#086F6C' : '#000',
                                        borderBottom: isActive ? '2px solid #086F6C' : 'none'
                                    })} to={'/profile'}> Profilim  </NavLink></span> <span> <MdOutlineClose onClick={() => setShowDrop(!showDrop)} /></span></p>
                                    <p> <NavLink style={({ isActive }) => ({
                                        color: isActive ? '#086F6C' : '#000',
                                        borderBottom: isActive ? '2px solid #086F6C' : 'none'
                                    })} to={'/statistic'}> Statistika</NavLink></p>
                                    <p> <NavLink style={({ isActive }) => ({
                                        color: isActive ? '#086F6C' : '#000',
                                        borderBottom: isActive ? '2px solid #086F6C' : 'none'
                                    })} to={'/'}> Notion    </NavLink></p>
                                    <p> <NavLink style={({ isActive }) => ({
                                        color: isActive ? '#086F6C' : '#000',
                                        borderBottom: isActive ? '2px solid #086F6C' : 'none'
                                    })} to={'/settings'}> Settings  </NavLink></p>
                                    <p onClick={LogOut}> <NavLink style={({ isActive }) => ({
                                        color: isActive ? '#086F6C' : '#000',
                                        borderBottom: isActive ? '2px solid #086F6C' : 'none'
                                    })} to={'/'}> Log Out   </NavLink></p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className={style.childNavbar}>
                    <ul>
                        <li><NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'
                            })}
                            to={'/profile/menejerpage'}>Boshqaruv paneli</NavLink></li>
                        <li><NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'

                            })}
                            to={'/profile/courselist'}>Kurs List</NavLink></li>
                        <li><NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'

                            })}
                            to={'/profile/mycourse'}>Mening Kurslarim</NavLink></li>
                        <li><NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'

                            })}
                            to={'/profile/interview'}>Interview</NavLink></li>
                        <li><NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'

                            })}
                            to={'/profile/tests'}>Testlar</NavLink></li>
                        <li><NavLink
                            style={({ isActive }) => ({
                                color: isActive ? '#086F6C' : '#000',
                                borderBottom: isActive ? '2px solid #086F6C' : 'none'

                            })}
                            to={'/profile/comunityroom'}>Savol - javob</NavLink></li>
                    </ul>

                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default ProfileNavbar
