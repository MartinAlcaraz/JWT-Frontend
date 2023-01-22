import React from 'react';
import { useState } from 'react';
import TabComponent from '../components/TabComponent.jsx';
import UserServices from '../services/userServices.js';

const Dashboard = () => {
  const [data, setData] = useState(null);

  const onclick = async () => {
    const datos = await UserServices.getProfile();
    console.log(datos);
    if (datos == null) {
      alert('You need login.')
    } else {
      setData(datos);
    }
  }

  return (
    <div className="bg-blue-gray-700 rounded-xl p-4 mt-2 min-h-[70vh]">
      <h1 className="text-center text-4xl">Main</h1>
      <button className='px-4 py-2 bg-blue-700' onClick={onclick}>Button</button>
      <TabComponent />

      <div>
        <p>Nombre: {data ? data.username : '?'}</p>
        <p>Email: {data ? data.email : '?'}</p>
      </div>

    </div>
  )
}
export default Dashboard;