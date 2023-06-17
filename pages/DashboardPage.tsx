import type { NextPage } from "next"; 
import { selectNotificationState, setNotification} from "../store/notification";
import { useDispatch, useSelector } from "react-redux";
import Layouts from "../components/Layout";
import { useEffect } from "react";

const DashboardPage: NextPage = () => { 
  const notifications = useSelector(selectNotificationState);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log("notification", notifications);
  },[notifications])
  return (
    <Layouts>
      <div>{notifications.message }</div>
    
      <button
        onClick={() =>
          notifications
            ?
            
            dispatch(setNotification({
               type: "info",
               message: "SkillFusion 22 ",
               description : "loaded 2se", 
          }))

          
            : dispatch(setNotification(true))
        }
      >
        {notifications.message}
      </button>
    </Layouts>
  );
};

export default DashboardPage;