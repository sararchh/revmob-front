import React from 'react';

type TextStylesModalProps = {
  children: React.ReactNode,
  href: string,
  active: boolean,
}

const TextStylesModal: React.FC<TextStylesModalProps> = ({ children, href, active }) => {
  return (
    <>

      {active ?
        (<a href={href} className='p-3 my-2  text-lg text-slate-600 flex flex-row items-center bg-gray-200'>
          {children}
        </a>)
        :
        (<a href={href} className='p-3 my-2  text-lg text-slate-600 flex flex-row items-center hover:bg-gray-200'>
          {children}
        </a>)
      }


    </>
  );
}

export default TextStylesModal;