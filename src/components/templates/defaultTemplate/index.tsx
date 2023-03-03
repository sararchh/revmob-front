import React from 'react';
import Header from '../../molecules/Header';
import SideMenu from '../../molecules/SideMenu';

type TemplateProps = {
  children: React.ReactNode
}

const DefaultTemplate: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div className='w-screen h-screen bg-gray-100 flex '>
      <Header />
      <SideMenu />
      {children}
    </div>
  );
}

export default DefaultTemplate;