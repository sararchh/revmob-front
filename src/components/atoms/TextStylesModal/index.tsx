import React from 'react';

type TextStylesModalProps = {
  children: React.ReactNode,
  href: string
}

const TextStylesModal: React.FC<TextStylesModalProps> = ({ children, href }) => {
  return (
    <a href={href} className='p-3 my-2  text-lg text-slate-600 flex flex-row items-center hover:bg-gray-200'>
      {children}
    </a>
  );
}

export default TextStylesModal;