
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeAuthorizedRequest } from "../../../utils/api";
import Layouts from "../../../components/Layout"; 

const InfoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [courseInfo, setCourseInfo] = useState(null);

  const info = async () => {
    const data = await makeAuthorizedRequest(`courses/${id}`, "GET");
    setCourseInfo(data?.data);
  };
 
  useEffect(() => {
    info();
  } ,[]);
  
  return (
    <Layouts>
      <div> 
       
 
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Course Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and Course Information.</p>
      </div>
    { courseInfo && (<div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Course Names</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['course_names']}</dd>
          </div>

          
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Course ID</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['course_codes']}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">payment Amount Birr</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{   courseInfo['payment_amount_birr']}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Payment Amount Usd</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{courseInfo['payment_amount_usd']}</dd>
          </div>

        </dl>
      </div>)}

    </div>  
    </Layouts>
  );
};

export default InfoPage;
