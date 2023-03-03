import React from 'react';

import TextStylesModal from '../../atoms/TextStylesModal';

import { MdOutlineAddBox, MdOutlineCheckBox } from "react-icons/md";

const SideMenu: React.FC = () => {
  return (
    <div className='h-full w-64 bg-white flex flex-col pt-10 box-border shadow-md z-10'>

      <TextStylesModal href='/' >
        <MdOutlineCheckBox className='mx-2 text-2xl text-slate-500' />
        Listar campanhas
      </TextStylesModal>

      <TextStylesModal href='/create'>
        <MdOutlineAddBox className='mx-2 text-2xl text-slate-500' />
        Criar campanha
      </TextStylesModal>
    </div>
  );
}

export default SideMenu;