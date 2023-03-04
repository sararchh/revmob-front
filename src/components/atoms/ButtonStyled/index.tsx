import React from 'react';

interface ButtonStyledProps {
  editMode: Boolean
}

const ButtonStyled: React.FC<ButtonStyledProps> = ({ editMode }) => {
  return (
    <button type="submit"
      className="py-2 px-4
             inline-block 
             text-center
             rounded
             leading-5 
             text-gray-100 
             bg-indigo-500 border 
             border-indigo-500
             hover:text-white 
             hover:bg-indigo-600 
             hover:ring-0 
             hover:border-indigo-600 
             focus:bg-indigo-600 
             focus:border-indigo-600 
             focus:outline-none 
             focus:ring-0">{editMode ? 'Atualizar' : 'Cadastrar'}
    </button>
  );
}

export default ButtonStyled;