
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeAuthorizedRequest } from "../../../utils/api";
import Layouts from "../../../components/Layout"; 

const InfoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [SchoolInfo, setSchoolInfo] = useState(null);

  const info = async () => {
    const data = await makeAuthorizedRequest(`Center/${id}`, "GET");
    setSchoolInfo(data?.data);
  };
 
  useEffect(() => {
    info();
  } ,[]);
  
  return (
    <Layouts>
      <div> 
       
 
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">School Information</h3>
      </div>
    { SchoolInfo && (<div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Schools Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{SchoolInfo['name']}</dd>
          </div>

          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Amharic Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{SchoolInfo?.["am_name"]}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Amharic Short Name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{SchoolInfo['am_short_code_name']}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{   SchoolInfo['description']}</dd>
          </div>

        </dl>
      </div>)}

    </div>  
    </Layouts>
  );
};

export default InfoPage;
