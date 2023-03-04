import React from 'react';

interface InputStyledProps {
  title: string,
  htmlFor: string,
  onChange: any,
  value: string,
  children: React.ReactNode,
}

const InputSelectStyled: React.FC<InputStyledProps> = ({ title,  htmlFor, onChange, value,children }) => {
  return (
    <div className="form-group flex-shrink max-w-full px-4 w-full md:w-2/6  mb-4">
      <label htmlFor={htmlFor} className="inline-block">{title}</label>
      <select id={htmlFor}
        onChange={e => onChange(e.target.value)}
        className="inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none"
        required
        value={value}
      >
        {/* <option value="cpm">CPM</option>
        <option value="cpc">CPC</option>
        <option value="cpi">CPI</option> */}

        {children}
      </select>
    </div>
  );
}

export default InputSelectStyled;