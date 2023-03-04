import React, { useEffect, useState, useContext } from 'react';

import TextStylesModal from '../../atoms/TextStylesModal';

import { MdOutlineAddBox, MdOutlineCheckBox } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { GeneralContext } from '../../../contexts/generalContext';

const SideMenu: React.FC = () => {
  const location = useLocation();
  const [pathnameCurrent, setPathnameCurrent] = useState("");

  const { editMode } = useContext(GeneralContext);

  useEffect(() => {
    setPathnameCurrent(location.pathname);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='h-full w-64 bg-white flex flex-col pt-10 box-border shadow-md z-10'>

      <TextStylesModal href='/' active={pathnameCurrent === "/" ? true : false}>
        <MdOutlineCheckBox className='mx-2 text-2xl text-slate-500' />
        Listar campanhas
      </TextStylesModal>

      <TextStylesModal href='/createUpdate' active={pathnameCurrent === "/" ? false : true}>
        <MdOutlineAddBox className="mx-2 text-2xl text-slate-500 " />
        {editMode ? 'Atualizar campanha' : 'Criar campanha'}
      </TextStylesModal>
    </div>
  );
}

export default SideMenu;