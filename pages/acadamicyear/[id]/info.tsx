
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeAuthorizedRequest } from "../../../utils/api";
import Layouts from "../../../components/Layout"; 

const InfoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [AcadamicYearInfo, setAcadamicYearInfo] = useState(null);

  const info = async () => {
    const data = await makeAuthorizedRequest(`Center/${id}`, "GET");
    setAcadamicYearInfo(data?.data);
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
    { AcadamicYearInfo && (<div className="mt-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2">
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Acadamic Year</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{AcadamicYearInfo['acadamic_year']}</dd>
          </div>

          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Start Date</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{AcadamicYearInfo?.["start_date"]}</dd>
          </div>
          <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">End Date</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{AcadamicYearInfo['end_date']}</dd>
          </div>

        </dl>
      </div>)}

    </div>  
    </Layouts>
  );
};

export default InfoPage;
