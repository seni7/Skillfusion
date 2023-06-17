import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeAuthorizedRequest } from "../../../utils/api";
import Layouts from "../../../components/Layout"; 

const InfoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [studentInfo, setStudentInfo] = useState(null);

  const info = async () => {
    const data = await makeAuthorizedRequest(`student/${id}`, "GET");
    setStudentInfo(data?.data);
  };
 
  useEffect(() => {
    info();
  } ,[]);
  
  return (
    <Layouts>
      <div> 
        {/* {JSON.stringify(studentInfo)} */}
 
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Class Room Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Class Room details , Students Information , Courses and teachers.</p>
      </div>
    { studentInfo && (<div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{studentInfo['first_name'] + ' ' +studentInfo['last_name'] }</dd>
          </div>

          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">level</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{studentInfo?.curriculum?.name_en}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Students ID</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{studentInfo['student_id']}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Registered Date</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{   studentInfo['created_at'].match(/^(\d{4}-\d{2}-\d{2})/)[1]}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Gender</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{studentInfo['gender']}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Contact address </dt> 
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{studentInfo?.address?.email}</dd>
          </div>
           
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            { studentInfo?.address?.country_of_residence +' / '+studentInfo?.address?.city+ '  ' + studentInfo?.address?.region || '' +' / '+ studentInfo?.address?.zone || '' } 
            </dd>
            <dt className="text-sm font-medium leading-6 text-gray-900">contact info</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
            { studentInfo?.address?.email  +' / '+ studentInfo?.address?.phone_number  } 
            </dd>
          </div>

          {/* <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div> */}

        </dl>
      </div>)}

    </div>  
    </Layouts>
  );
};

export default InfoPage;
