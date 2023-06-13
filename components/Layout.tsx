import Headers from "./Header";
// import Footer from "./Footer";
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { useState } from 'react';
import {Layout,Menu} from 'antd'; 
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons'; 
import type { SizeType } from 'antd/es/config-provider/SizeContext';


const layout = ({children}) => {
    
const [collapse,setCollapse]=useState(false);

const {Content,Sider,Footer,Header} = Layout;

const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
 
const router = useRouter();

const handleMenuClick = (e) => {
  router.push(e.key); // Navigate to the selected route
};

    return ( 
         <> 
         <Layout className='h-screen'>
         
        
          <Header />
            <Layout>
            <Sider width={200} trigger={null} collapsible collapsed={collapse}>

            <Menu onClick={ ()=>{}} selectedKeys={[router.pathname]} mode="vertical">
            <Menu.Item key="/">
              <Link href="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/">
            <Link href="/auth/login">Login</Link> 
            </Menu.Item>
            <Menu.Item key="/">
            <Link href="/auth/me">Profile</Link> 
            </Menu.Item>
            <Menu.Item key="/subjects">
              <Link href="/subjects">Subjects</Link>
            </Menu.Item>
            <Menu.Item key="/contact">
              <Link href="/contact">Contact</Link>
            </Menu.Item>
          </Menu> 

      </Sider>
            
         

      <Layout>
      <Content className='bg-white p-6'>
        {children} 
        </Content>
      </Layout>
      </Layout>
     {/* <Footer /> */}
    </Layout>
         </>
     );
}
 
export default layout;