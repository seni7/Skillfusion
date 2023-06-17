
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeAuthorizedRequest } from "../../../utils/api";
import Layouts from "../../../components/Layout"; 

const InfoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [courseInfo, setCourseInfo] = useState(null);

  const info = async () => {
    const data = await makeAuthorizedRequest(`course/${id}`, "GET");
    setCourseInfo(data?.data);
  };
 
  useEffect(() => {
    info();
  } ,[]);
  
  return (
    <Layouts>
      <div> 
       
 
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Subject Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and Subject Information.</p>
      </div>
    { courseInfo && (<div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Subject Names</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['course_names']}</dd>
          </div>  
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Subject Code</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['course_codes']}</dd>
          </div> 
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Subject Criteria</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['course_completion_criteria']}</dd>
          </div> 
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Subject Weight</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['assessment_weights']}</dd>
          </div> 
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Subject PassMark</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['assessment_pass_mark']}</dd>
          </div> 

        </dl>
      </div>)}

    </div>  
    </Layouts>
  );
};

export default InfoPage;
