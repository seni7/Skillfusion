import { Layout } from 'antd';
// import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const GustLayout = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '16px' }}>
       {children}
      </Content>
    </Layout>
  );
};

export default GustLayout;
