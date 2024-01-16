import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowData = () => {
   const [userAllData, setUserAllData] = useState([]);
   const getuserData = async () => {
      const udata = await axios.get('http://localhost:8000/api/v1/userreg/display');
      setUserAllData(udata.data.userData);
      console.log(udata.data.userData);
   }
   useEffect(()=>{
      getuserData();
   }, []);
  return (
    <div>
    <h1>ShowData</h1>
    {
      userAllData.map((dt, key)=>{
         return <div>
            <div>{dt.userName}</div>
            <div>{dt.userEmail}</div>
         </div>
      })
    }
    </div>
  );
};

export default ShowData;
