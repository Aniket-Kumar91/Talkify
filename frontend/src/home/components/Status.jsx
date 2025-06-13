import React, { useState } from 'react';
import { FaComments, FaPhoneAlt, FaCircle, FaLock, FaStar, FaArchive, FaCog, FaUser } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineCircle } from 'react-icons/md';
import { Badge } from './ui/badge';

const Status = () => {
  const [selected, setSelected] = useState('Chats');

  const menuItems = [
    { label: 'Chats', icon: <FaComments />, badge: 25 },
    { label: 'Calls', icon: <FaPhoneAlt />, badge: 1 },
    { label: 'Status', icon: <FaCircle color='green' />, badge: 0 },
  ];

  const lowerItems = [
    { label: 'Locked chats', icon: <FaLock /> },
    { label: 'Starred messages', icon: <FaStar /> },
    { label: 'Archived chats', icon: <FaArchive />, badge: 2 },
    { label: 'Settings', icon: <FaCog /> },
    { label: 'Profile', icon: <FaUser /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-md flex flex-col justify-between p-2">
      <div>
        <div className="flex items-center justify-between mb-4">
          <BsThreeDots size={20} />
        </div>
        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={() => setSelected(item.label)}
            className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-green-600 ${selected === item.label ? 'bg-blue-600' : ''}`}
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {item.badge > 0 && (
              <Badge className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-full">
                {item.badge}
              </Badge>
            )}
          </div>
        ))}

        <div className="mt-4 flex items-center gap-2 p-2 hover:bg-green-600 rounded cursor-pointer"
          onClick={() =>
            window.open("https://chatwithai-pro.netlify.app/", "_blank")
          }
        // onClick={e => e.currentTarget.style.backgroundColor = e.currentTarget.style.backgroundColor === 'green' ? 'lightcoral' : 'green'} style={{ backgroundColor: 'green'}}
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500" />
          <span >ChatWith Ai</span>
        </div>
      </div>

      <div>
        {lowerItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between p-2 rounded hover:bg-green-600 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.label}</span>
            </div>
            {item.badge > 0 && (
              <Badge className="bg-green-600 text-white px-2 py-0.5 text-xs rounded-full">
                {item.badge}
              </Badge>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Status;
