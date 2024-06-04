import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AllCourse from '../components/CourseCatolog/AllCourse/AllCourse'
import CourseCatolog from '../components/CourseCatolog/CourseCatolog'
import ElementaryCourse from '../components/CourseCatolog/ElementaryCourse/ElementaryCourse'
import IntermediateCourse from '../components/CourseCatolog/IntermadiateCourse/IntermediateCourse'
import FooterMain from '../components/Footer/FooterMain'
import NavbarMain from '../components/Navbar/NavbarMain'
import CourseList from '../components/ProfilePage/Components/CourseList/CourseList'
import ProfileNavbar from '../components/ProfilePage/ProfilNavbar/ProfileNavbar'
import { navbar } from '../util/navbar'
// Pragramming Language

import HtmlCssCourse from '../components/ProfilePage/PragrammingLanguage/HtmlCss/HtmlCssCourse'
import GoLangCourse from '../components/ProfilePage/PragrammingLanguage/GoLang/GoLangCourse'
import JavaCourse from '../components/ProfilePage/PragrammingLanguage/Java/JavaCourse'
import JavascriptCourse from '../components/ProfilePage/PragrammingLanguage/JavaScript/JsCourse'
import SqlCourse from '../components/ProfilePage/PragrammingLanguage/SQL/SqlCourse'
import PythonCourse from '../components/ProfilePage/PragrammingLanguage/Python/PythonCourse'
import RubyCourse from '../components/ProfilePage/PragrammingLanguage/Ruby/RubyCourse'
import CsharpCourse from '../components/ProfilePage/PragrammingLanguage/CSharp/Csharp'
import CppCourse from '../components/ProfilePage/PragrammingLanguage/Cpp/CppCourse'
import SwiftCourse from '../components/ProfilePage/PragrammingLanguage/Swift/SwiftCourse'
import PHPCourse from '../components/ProfilePage/PragrammingLanguage/PHP/PHPCourse'
import KotlinCourse from '../components/ProfilePage/PragrammingLanguage/Kotlin/KotlinCourse'
import RCourse from '../components/ProfilePage/PragrammingLanguage/RCourse/RCourse'
import ReactCourse from '../components/ProfilePage/PragrammingLanguage/ReactJs/ReactCourse'
import MyCourse from '../components/ProfilePage/Components/MyCourse/MyCourse'
import MyAllCourse from '../components/ProfilePage/Components/MyCourse/MyAllCourse/MyAllCourse'
import MyActiveCourse from '../components/ProfilePage/Components/MyCourse/MyActiveCourse/MyActiveCourse'
import MyDoneCourse from '../components/ProfilePage/Components/MyCourse/MyDoneCourse/MyDoneCourse'
import CoursePrivateInfo from '../components/ProfilePage/Components/MyCourse/CoursePrivateInfo/CoursePrivateInfo'


export default function RouterMain() {
    return (
        <>
            <Routes>
                <Route element={<NavbarMain />}>
                    {navbar.map(({ path, Element, id, param }) => {
                        return param && <Route key={id} path={path} element={Element} />;
                    })}
                </Route>
                <Route >
                    {navbar.map(({ path, Element, id, noSeen }) => {
                        return noSeen && <Route key={id} path={path} element={Element} />;
                    })}
                </Route>
                <Route element={<NavbarMain />}>
                    {navbar.map(({ path, id, Element, hidden }) => {
                        return !hidden && <Route key={id} path={path} element={Element} />
                    })}
                    <Route path="/" element={<Navigate to={"/home"} />} />
                </Route>

                <Route element={<ProfileNavbar />}>
                    {navbar.map(({ path, id, Element, profileP }) => {
                        return profileP && <Route key={id} path={path} element={Element} />
                    })}

                </Route>

                {/*Kurslar ruyhati */}
                {
                    localStorage.getItem('minidevToken') &&
                    (<Route element={<ProfileNavbar />}>
                        <Route path='/profile/courselist' element={<CourseList />}>
                            <Route index element={<HtmlCssCourse />} />
                            <Route path='/profile/courselist/htmlCss' element={<HtmlCssCourse />} />
                            <Route path='/profile/courselist/python' element={<PythonCourse />} />
                            <Route path='/profile/courselist/javascript' element={<JavascriptCourse />} />
                            <Route path='/profile/courselist/java' element={<JavaCourse />} />
                            <Route path='/profile/courselist/sql' element={<SqlCourse />} />
                            <Route path='/profile/courselist/ruby' element={<RubyCourse />} />
                            <Route path='/profile/courselist/csharp' element={<CsharpCourse />} />
                            <Route path='/profile/courselist/cpp' element={<CppCourse />} />
                            <Route path='/profile/courselist/golang' element={<GoLangCourse />} />
                            <Route path='/profile/courselist/swift' element={<SwiftCourse />} />
                            <Route path='/profile/courselist/php' element={<PHPCourse />} />
                            <Route path='/profile/courselist/kotlin' element={<KotlinCourse />} />
                            <Route path='/profile/courselist/r' element={<RCourse />} />
                            <Route path='/profile/courselist/reactjs' element={<ReactCourse />} />
                        </Route>
                    </Route>
                    )
                }



                {/* Mening Kurslarim */}
                {
                    localStorage.getItem('minidevToken') &&
                    (<Route element={<ProfileNavbar />}>
                        <Route path='/profile/mycourse' element={<MyCourse />}>
                            <Route index element={<MyAllCourse />} />
                            {/* <Route path='/profile/mycourse/all_course' element={<CoursePrivateInfo />} /> */}
                            <Route path='/profile/mycourse/all_course' element={<MyAllCourse />} />
                            <Route path='/profile/mycourse/active_course' element={<MyActiveCourse />} />
                            <Route path='/profile/mycourse/active_course/:id' element={<CoursePrivateInfo />} />
                            <Route path='/profile/mycourse/done_course' element={<MyDoneCourse />} />
                        </Route>
                    </Route>)
                }
                <Route element={<NavbarMain />}>
                    <Route path='courseCatolog' element={<CourseCatolog />}>
                        {/* <Route path='courseCatolog' element={<Navigate  to="allcourse" />} /> */}
                        <Route index element={<AllCourse />} />
                        <Route path="allcourse" element={<AllCourse />} />
                        <Route path="interm" element={<IntermediateCourse />} />
                        <Route path="elemtary" element={<ElementaryCourse />} />
                    </Route>
                </Route>






                <Route path="*" element={<div>Not Found</div>} />
            </Routes>
            <FooterMain />

        </>
    )
}
