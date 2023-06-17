import React, { useState, useMemo, useEffect } from "react";
import DashboardPage from "./DashboardPage";
import CoursePage from "./CoursePage";
import { useRouter } from "next/router";
import { Layout, Menu, Switch, Dropdown, notification } from "antd";
import {
  DashboardOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
  ScheduleOutlined,
  BookOutlined,
  FolderOutlined,
  CalendarOutlined,
  UserOutlined, 
  ProfileOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  CommentOutlined,
  UserSwitchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import logoBlack from "../public/logoBlack.png";
import logoBlackCollapsed from "../public/logoBlackCollapsed.png";
import logoWhite from "../public/logoWhite.png";
import logoWhiteCollapsed from "../public/logoWhiteCollapsed.png";
import { makeAuthorizedRequest } from "../utils/api";
import {
  selectNotificationState,
  setNotification,
} from "../store/notification";
import { useDispatch, useSelector } from "react-redux";


const Result = () => <h1>Result Page</h1>;
const Schedule = () => <h1>Schedule Page</h1>;
const Attendance = () => <h1>Attendance Page</h1>;
const Resources = () => <h1>Resources Page</h1>;
const GradeOne = () => <h1>Grade One Page</h1>;
const GradeTwo = () => <h1>Grade Two Page</h1>; 
const Teacher = () => <h1>Teacher Page</h1>;
const Student = () => <h1>Student Page</h1>;
const Grades = () => <h1>Grades Page</h1>;
const Account = () => <h1>Account Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const Support = () => <h1>Support Page</h1>;
const Announcements = () => <h1>Announcements Page</h1>;
const Discussions = () => <h1>Discussions Page</h1>;

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

/* for notification start */
export type SF_Notification = {
  type: "success" | "error" | "warning" | "info" | "open";
  message?: string;
  description?: string;
  placement?: "bottomRight" | "bottomLeft" | "topRight" | "topLeft";
};

const Layouts = ({ children }) => {
  const router = useRouter(); 
  const { asPath } = router;
  const urlPrefix = asPath.split('/')[1];


  /* Start Notification */
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotificationState);
  useEffect(() => {
  openNotification(notifications); 
  }, [notifications]);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (data: SF_Notification) => {
   const notifyKey =  api[`${data["type"]}`]({
      message: data["message"],
      description: data["description"],
      placement: data["placement"],
    }); 
    api.destroy()
    // setTimeout(() => {
    // },2000)
    api

     
  };
  /** end Notification  */

  /** log out controller */
  const [token, setToken] = useState('null');
  useEffect(() => {

    setToken(localStorage.getItem("skillAuth"))
  },[])
  const handleLogout = async () => {
    const data = await makeAuthorizedRequest("logout", "POST");
    if (data?.status === "success") {
      localStorage.removeItem("skillAuth");
      setToken(localStorage.getItem("skillAuth"));
      localStorage.removeItem("me");

      dispatch(
        setNotification({
          message: "Successfully Logout",
          description: "",
          type: "success",
        })
      );
    } else {
      dispatch(
        setNotification({
          message: "failed to logout",
          description: " ",
          type: "error",
        })
      );
    }
  };
  useEffect(() => { 
    if (!token) router.push("/");
  }, [token]);
  /* end logout controller */

  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [content, setContent] = useState(urlPrefix);

  const handleMenuClick = (value) => {
    if (value.key !== content) {
      setContent(value.key);
    }
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const logoImage = collapsed
    ? darkMode
      ? logoWhiteCollapsed
      : logoBlackCollapsed
    : darkMode
    ? logoWhite
    : logoBlack;

  const userMenu = (
    <Menu>
      <Menu.Item key="18">Profile</Menu.Item>
      <Menu.Item onClick={handleLogout} key="19">
        Logout
      </Menu.Item>
    </Menu>
  );

  const renderContent = () => {
    switch (content) {
      case "1":
        return <DashboardPage />;
      case "2":
        return <CoursePage />;
      case "3":
        return <Result />;
      case "4":
        return <Schedule />;
      case "5":
        return <Attendance />;
      case "6":
        return <Resources />;
      case "7":
        return <GradeOne />;
      case "8":
        return <GradeTwo />;
      case "19":
        return <Teacher />;
      case "20":
        return <Student />;
      case "21":
        return <Grades />;
      case "22":
        return <Account />;
      case "23":
        return <Settings />;
      case "24":
        return <Support />;
      case "25":
        return <Announcements />;
      case "26":
        return <Discussions />;
      default:
        return null;
    }
  };

  return (
    <Layout className={`h-screen ${darkMode ? "dark" : ""}`}>
      {contextHolder}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleSidebar}
        theme={darkMode ? "dark" : "light"}
        style={{ overflow: "auto" }}
        trigger={null}
      >
        <div className="logo">
          <Image src={logoImage} alt="Logo" className="p-5" />
        </div>
        <Menu
          theme={darkMode ? "dark" : "light"}
          mode="inline"
          defaultSelectedKeys={[urlPrefix]}
          defaultOpenKeys={["sub1"]}
          className="pt-8"
          onClick={handleMenuClick}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link legacyBehavior href="/DashboardPage">
              <a href="">Dashboard</a>
            </Link>
          </Menu.Item>

          <div
            className={`sidebar-divider m-4 ${
              darkMode ? "bg-white" : "bg-black"
            }`}
          >
            <hr className="divider-line h-px opacity-50" />
          </div>
          <SubMenu key="users" icon={<UserOutlined />} title="Users">
            <Menu.Item key="staffs">Staffs</Menu.Item>
            <Menu.Item key="student"> 
            <Link legacyBehavior href="/student">
              <a>student</a>
            </Link></Menu.Item>
          </SubMenu>

          <Menu.Item key="schools" icon={<ReadOutlined />}>
            <Link legacyBehavior href="/schools">
              <a>Schools</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="branch" icon={<ReadOutlined />}>
            <Link legacyBehavior href="/branch">
              <a>Branch</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="subjects" icon={<ReadOutlined />}>
            <Link legacyBehavior href="/subjects">
              <a>Subjects</a>
            </Link>
          </Menu.Item>

          <Menu.Item key="classRoom" icon={<ReadOutlined />}>
            <Link legacyBehavior href="/classRoom">
              <a>Class Rooms</a>
            </Link>
          </Menu.Item>
   
          <Menu.Item key="3" icon={<ProfileOutlined />}>
            Result
          </Menu.Item>
          <Menu.Item key="4" icon={<ScheduleOutlined />}>
            Schedule
          </Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />}>
            Attendance
          </Menu.Item>
          <Menu.Item key="6" icon={<FolderOutlined />}>
            Resources
          </Menu.Item>
          <SubMenu key="sub2" icon={<BookOutlined />} title="Grade">
            <Menu.Item key="7">One</Menu.Item>
            <Menu.Item key="8">Two</Menu.Item>
            <Menu.Item key="9">Three</Menu.Item>
            <Menu.Item key="10">Four</Menu.Item>
            <Menu.Item key="11">Five</Menu.Item>
            <Menu.Item key="12">Six</Menu.Item>
            <Menu.Item key="13">Seven</Menu.Item>
            <Menu.Item key="14">Eight</Menu.Item>
            <Menu.Item key="15">Nine</Menu.Item>
            <Menu.Item key="16">Ten</Menu.Item>
            <Menu.Item key="17">Eleven</Menu.Item>
            <Menu.Item key="18">Twelve</Menu.Item>
          </SubMenu>
      

          <Menu.Item key="22" icon={<UsergroupAddOutlined />}>
            Account
          </Menu.Item>
          <Menu.Item key="23" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="24" icon={<QuestionCircleOutlined />}>
            Support
          </Menu.Item>
          <Menu.Item key="25" icon={<BellOutlined />}>
            Announcements
          </Menu.Item>
          <Menu.Item key="26" icon={<CommentOutlined />}>
            Discussions
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className={`p-4 flex items-center justify-between ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
          }`}
        >
          <div
            className="toggle-icon flex items-center"
            onClick={toggleSidebar}
          >
            <MenuOutlined
              className={`h-8 ${
                darkMode ? "text-white" : "text-black"
              } text-xl hover:text-gray-500`}
            />
          </div>
          <div className="flex items-center">
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              checkedChildren="Dark"
              unCheckedChildren="Light"
              className="bg-slate-500"
            />
            <Dropdown
              overlay={userMenu}
              placement="bottomRight"
              className="ml-4"
            >
              <div className={`user-icon ${darkMode ? "dark" : ""}`}>
                <UserSwitchOutlined
                  className={`circle ${
                    darkMode ? "text-white" : "text-black"
                  } hover:text-gray-500`}
                />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          className="p-6 overflow-y-auto bg-slate-100"
          style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
