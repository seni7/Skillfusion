 
import React  from "react"; 
import {useEffect, useState}  from "react"; 
import { useRouter } from "next/router"; 
import {
  Select,
  Button, 
  Typography,
  Form,
  Input, 
} from "antd"; 
 
import { makeAuthorizedRequest } from "../../utils/api";
import Layouts from "../../components/Layout";
// import { DownloadOutlined } from '@mui/icons-material';

const StudentRegister = () => {
  const { Title } = Typography;
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await makeAuthorizedRequest("student", "POST", {
        username: values["username"],
        password: values["password"],
        first_name: values["first_name"],
        middle_name: values["middle_name"],
        last_name: values["last_name"],
        gender: values["gender"],
        phone_number: values["phone_number"],
        date_of_birth: values["date_of_birth"],
        country_of_residence: values["country_of_residence"],
        region: values["region"],
        zone: values["zone"],
        city: values["city"],
        email: values["email"],
        current_religion: values["current_religion"],
        main_centers_id: values["main_centers_id"],
        sub_centers_id: values["sub_centers_id"],
        curricula_id: values["curricula_id"],
        age: values["age"], 
        name_of_Chirstianity_fn: "name  " ,
        name_of_cherch_member: "name member" , 
        name_of_Chirstianity:  "name  ",
        your_services: 'services', 
        service_sub_center:'of service',
        our_services :'our services',
        other_service:'other services',
        lernning_mode:'on Site',
      });

      if (response.ok) {
        // Store the token in local storage or a state management solution 
        router.push("/Student/list"); 
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  /**  options for fill forms from networks */
  const [schools, setSchools] = useState([]);
  const [branchs, setBranchs] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState<Number>();


  const fetchSchools = async () => {
    try {
      const response = await makeAuthorizedRequest('mainCenters/search',"POST");
      const data = response.data;
      setSchools(data); 
    } catch (error) {
      console.error(error);
    }
  };
  
  const fetchCurriculums = async () => {
    try {
      const response = await makeAuthorizedRequest('curriculum/search',"POST");
      const data = response.data;
      setCurriculums(data); 
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBranch = async (selectedSchool) => {
    try {
      const response = await makeAuthorizedRequest('subCenters/search',"POST",{filters:[{ field: "main_center_id", operator: "=", value: selectedSchool }]});
      const data = response.data;
      setBranchs(data); 
    } catch (error) {
      console.error(error);
    }
  };

  const schoolOnChange = (value) =>{
    setSelectedSchool(value);
  }

  useEffect(() => {
    fetchBranch(selectedSchool);
  }, [selectedSchool]);

  useEffect(() => {
    fetchSchools();
    fetchCurriculums();
  }, []);
  
  /**  options for fill forms from networks */

  return (
    <>
      <Layouts>
        <Title className="mb-15">Student Register</Title>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
          className="row-col "
        >
          <div className="space-x-2 grid grid-cols-3">
            <Form.Item
              className="username"
              label="User Name"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your User Name!",
                },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item> 
            <Form.Item
              className="username"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input placeholder="Password" />
            </Form.Item>
            <Form.Item
              className=" "
              label="First Name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input placeholder="first_name" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Middle Name"
              name="middle_name"
              rules={[
                {
                  required: true,
                  message: "Please input your Middle Name!",
                },
              ]}
            >
              <Input placeholder="Middle Name" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Last Name"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item> 
            <Form.Item
              className=" "
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please input your Gender!",
                },
              ]}
            >
              <Select >
                  {['Male','Female'].map((gender) => (
                    <Select.Option key={gender} value={gender}  >
                      {gender}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item> 
            <Form.Item
              className=" "
              label="Phone Number"
              name="phone_number"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone Number!",
                },
              ]}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              className=" "
              label="Date of Birth"
              name="date_of_birth"
              rules={[
                {
                  required: true,
                  message: "Please input your Date of Birth!",
                },
              ]}
            >
              <Input placeholder="Date of Birth" />
            </Form.Item>
            <Form.Item
              className=" "
              label="city"
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please input your city!",
                },
              ]}
            >
              <Input placeholder="city" />
            </Form.Item>
            <Form.Item
              className=" "
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="email" />
            </Form.Item>
            
            <Form.Item
              className=" "
              label="School Name"
              name="main_centers_id"
              rules={[
                {
                  required: true,
                  message: "Please input your main_centers_id!",
                },
              ]}
            > 
              <Select placeholder="School Name" onChange={schoolOnChange}>
                  {schools.map((school) => (
                    <Select.Option key={school.value} value={school.id}  >
                      {school.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item> 
            <Form.Item
              className=" "
              label="age"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Please input your age!",
                },
              ]}
            >
              <Input placeholder="age" />
            </Form.Item> 
            <Form.Item
              className=" "
              label="School Branch's"
              name="sub_centers_id"
              rules={[
                {
                  required: true,
                  message: "Please input your School Branch Name!",
                },
              ]}
            > 
              <Select placeholder="School Branch's" >
                  {branchs.map((branch) => (
                    <Select.Option key={branch.value} value={branch.id}  >
                      {branch.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
        
            <Form.Item
              className=" "
              label="Country"
              name="country_of_residence"
              rules={[
                {
                  required: true,
                  message: "Please input your Country!",
                },
              ]}
            >
              <Input placeholder="Country" />
            </Form.Item> 

            <Form.Item
              className=" "
              label="Curricula"
              name="curricula_id"
              rules={[
                {
                  required: true,
                  message: "Please input your Curricula!",
                },
              ]}
            > 
              <Select  placeholder="Curricula" >
                  {curriculums.map((curricula) => (
                    <Select.Option key={curricula.value} value={curricula.id}  >
                      {curricula.name_en}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </div>
          <div className="flex space-x-3 justify-end">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", backgroundColor: "blue" }}
              >
                Student Register
              </Button>
            </Form.Item>
            
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", backgroundColor: "blue" }}
              >
                Close

              </Button>
            </Form.Item>
          </div>
        </Form>
        {/* </Col>  */}
        {/* </Row>  */}
      </Layouts>
    </>
  );
};

export default StudentRegister;
