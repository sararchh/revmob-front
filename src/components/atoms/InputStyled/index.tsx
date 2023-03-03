import React from 'react';

type InputStyledProps = {
  title: string,
  type?: string,
  htmlFor: string,
  onChange?: any,
  name: string
}

const InputStyled: React.FC<InputStyledProps> = ({ title, type = 'text', htmlFor, onChange, name }) => {
  return (
    <div className="form-group flex-shrink px-4 w-3/4 mb-4">
      <label htmlFor={htmlFor} className="inline-block">{title}</label>
      <input type={type}
        className="w-full
      leading-5 
      relative
      py-2
      px-4
      rounded 
      text-gray-800
      bg-white
      border 
      border-gray-300
      overflow-x-auto 
      focus:outline-none 
      focus:border-gray-400 
      focus:ring-0"
        id={htmlFor}
        required
        onChange={e => onChange(e.target.value)}
        name={name}
      />
    </div>
  );
}

export default InputStyled;