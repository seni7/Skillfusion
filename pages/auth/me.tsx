import { useEffect, useState } from 'react';
import { makeAuthorizedRequest } from '../../utils/api';
import Layout from '../../components/Layout'


const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeAuthorizedRequest('me');
        setData(response);
      } catch (error) {
        console.error('An error occurred', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <Layout>
      {JSON.stringify(data)}
      </Layout>
    </div>
  );
};

export default MyComponent;
