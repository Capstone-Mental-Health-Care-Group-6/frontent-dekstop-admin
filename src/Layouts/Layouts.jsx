import React from 'react'
import Sidebar from '../components/Fragments/Sidebar/Sidebar';
import Header from '../components/Fragments/header/Header';

const Layouts = ({ children }) => {
  return (
    <>
      <div className="d-flex">
          <Sidebar/>
          <div className="col bg-light">
          <Header/>
            <div className="p-4">
              {children}
            </div>
          </div>
      </div>
    </>
  );
};

export default Layouts