export const makeAuthorizedRequest = async (url: string, method: string = 'GET', body?: any) => {
    const token = localStorage.getItem('skillAuth');
  
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
  
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
      const response = await fetch('http://192.168.137.91:8000/api/'+url, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
     // throw new Error('Request failed');
     console.error(`Request failed /${url} `,response);
    }
  };
  