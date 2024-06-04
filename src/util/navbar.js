import Geniric from "../page/Geniric/Geniric";
import Home from "../components/Home/Home";
import CourseCatolog from '../components/CourseCatolog/CourseCatolog';
import CourseLearning from '../components/CourseLearning/CourseLearning';
import OurAbout from '../components/OurAbout/OurAbout';
import ElementaryCourse from "../components/CourseCatolog/ElementaryCourse/ElementaryCourse";
import IntermediateCourse from "../components/CourseCatolog/IntermadiateCourse/IntermediateCourse";
import AllCourse from "../components/CourseCatolog/AllCourse/AllCourse";
import SignUp from "../components/Registration/SignUp/SignUp";
import LogIn from "../components/Registration/LogIn/LogIn";
import MenejerPage from "../components/ProfilePage/Components/MenejerPage/MenejerPage";
import ComunityRoom from "../components/ProfilePage/Components/ComunityRoom/ComunityRoom";
import CourseList from "../components/ProfilePage/Components/CourseList/CourseList";
import InterView from "../components/ProfilePage/Components/Interview/InterView";
import MyCourse from "../components/ProfilePage/Components/MyCourse/MyCourse";
import Tests from "../components/ProfilePage/Components/Tests/Tests";
import TestPart from "../components/ProfilePage/Components/Tests/TestPart/TestPart";
// user Profile
import UserFullData from '../components/ProfilePage/Settings/UserFullData/UserFullData'
import UserSettings from '../components/ProfilePage/Settings/UserSettings/UserSettings'
import UserStatistic from '../components/ProfilePage/Settings/UserStatistic/UserStatistic'
import InterviewCpp from "../components/ProfilePage/Components/Interview/InterviewLanguage/Cpp/InterviewCpp";

export const navbar = [

  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Home />,
    search: "?",
    hidden: false,
    private: false,
  },
  // {
  //   id: 2,
  //   title: "Course Catolog",
  //   path: "/courseCatolog",
  //   Element: <CourseCatolog />,
  //   search: "?",
  //   hidden: false,
  //   private: false,
  // },
  {
    id: 2,
    title: "Learning Format",
    path: "/learningFormat",
    Element: <CourseLearning />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Biz Haqimizda",
    path: "/contacts",
    Element: <OurAbout />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Kirish",
    path: "/signup",
    Element: < SignUp />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    noSeen: true
  },
  {
    id: 5,
    title: "Ruyhatdan o'tish",
    path: "/login",
    Element: <LogIn />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    noSeen: true

  },
  {
    id: 6,
    title: "Savol Javob",
    path: "/profile/comunityroom",
    Element: <ComunityRoom />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },

  {
    id: 13,
    title: "Interview",
    path: "/profile/interview",
    Element: <InterView />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  {
    id: 14,
    title: "Interview",
    path: "/profile/interview/interview-cpp",
    Element: <InterviewCpp />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  {
    id: 7,
    title: "Boshqaro'v paneli",
    path: "/profile/menejerpage",
    Element: <MenejerPage />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  // {
  //   id: 9,
  //   title: "Mening Kurslarim",
  //   path: "/profile/mycourse",
  //   Element: <MyCourse />,
  //   search: "?",
  //   hidden: true,
  //   private: false,
  //   param: false,
  //   profileP: true

  // },
  {
    id: 8,
    title: "Testlar",
    path: "/profile/tests",
    Element: <Tests />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  {
    id: '9-1',
    title: "Testlar",
    path: "/profile/tests/:id",
    Element: <TestPart />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  {
    id: 10,
    title: "User Full Data",
    path: "/profile",
    Element: <UserFullData />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  {
    id: 11,
    title: "User Full Data",
    path: "/settings",
    Element: <UserSettings />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },
  {
    id: 12,
    title: "User Full Data",
    path: "/statistic",
    Element: <UserStatistic />,
    search: "?",
    hidden: true,
    private: false,
    param: false,
    profileP: true

  },


]