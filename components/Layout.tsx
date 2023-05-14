import Headers from "./Header";
// import Footer from "./Footer";
import { DownloadOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { useState } from 'react';
import {Layout,Menu} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';


const layout = ({children}) => {
    
const [collapse,setCollapse]=useState(false);

const {Content,Sider,Footer,Header} = Layout;

const [size, setSize] = useState<SizeType>('large'); // default is 'middle'


    return ( 
         <>
         
         <Layout className='h-screen'>
         
        
          <Headers b={collapse,setCollapse}/>
            <Layout>
            <Sider width={200} trigger={null} collapsible collapsed={collapse}>

      <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
          />

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