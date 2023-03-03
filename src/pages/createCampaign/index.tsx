import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import InputStyled from '../../components/atoms/InputStyled';
import DefaultTemplate from '../../components/templates/defaultTemplate';
import api from '../../services/api';

const CreateCampaign: React.FC = () => {
  const { handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    setValue('type', 'CPM');
    // eslint-disable-next-line
  }, []);

  const handleSubmitValues = async () => {
    const values = getValues();
    
    const obj = {
      title: values.title,
      author: values.author,
      type: values.type.toLowerCase(),
      bid: values.bid,
      segmentation: values.segmentation
    }

    console.log(obj);
    
    const response = await api.post('/campaign', obj);
    console.log(response);
    
  }

  return (
    <DefaultTemplate>
      <div className='h-4/5 w-2/3 bg-white m-auto rounded-md shadow-md p-10'>
        <h2 className='font-semibold text-2xl mt-2 mb-6'>  Criar Campanha</h2>
        <form className="valid-form flex flex-wrap flex-row -mx-4" onSubmit={handleSubmit(handleSubmitValues)}>

          <InputStyled
            title='Titulo'
            htmlFor='title'
            name='title'
            onChange={(value: string) => setValue('title', value)}
          />

          <InputStyled
            title='Autor'
            htmlFor='author'
            name='author'
            onChange={(value: string) => setValue('author', value)}
          />

          <div className="form-group flex-shrink max-w-full px-4 w-full md:w-1/3 mb-4">
            <label htmlFor="inputType" className="inline-block">Tipo de Conversão</label>
            <select id="inputType" onChange={(e) => setValue('type', e.target.value)} className="inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none" required>
              <option value="cpm" >CPM</option>
              <option value="cpc">CPC</option>
              <option value="cpi">CPI</option>
            </select>
          </div>

          <div className="form-group flex-shrink max-w-full px-4 w-full md:w-1/6 mb-4">
            <label htmlFor="inputBid" className="inline-block">Lance</label>
            <input type="number" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0" id="inputBid"
              name='bid'
              onChange={(e) => setValue('bid', e.target.value)}
              required />
          </div>

          <div className="form-group flex-shrink max-w-full px-4 w-full md:w-1/6 mb-4">
            <label htmlFor="segmentation" className="inline-block">Segmentação</label>
            <input
              type="text"
              className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0"
              id="segmentation"
              required
              name='segmentation'
              onChange={(e) => setValue('segmentation', e.target.value)}
            />
          </div>

          <div className="form-group flex-shrink max-w-full px-4 w-full">
            <button type="submit" className="py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0">Cadastrar</button>
          </div>
        </form>
      </div>
    </DefaultTemplate>
  );
}

export default CreateCampaign;