import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import InputStyled from '../../components/atoms/InputStyled';
import DefaultTemplate from '../../components/templates/defaultTemplate';
import { GeneralContext } from '../../contexts/generalContext';
import api from '../../services/api';

import { useForm, useWatch } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos
import ButtonStyled from '../../components/atoms/ButtonStyled';
import InputSelectStyled from '../../components/atoms/InputSelectStyled';


const CreateOrUpdateCampaign: React.FC = () => {
  const navigate = useNavigate();

  const { editMode, selectedCampaign } = useContext(GeneralContext);

  useEffect(() => {
    setValue('type', 'CPM');
    setValue('segmentation', 'BR');
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handlePopulate();
    // eslint-disable-next-line
  }, [selectedCampaign]);


  const handlePopulate = () => {
    if (Boolean(selectedCampaign.length)) {
      setValue('title', selectedCampaign[0].title);
      setValue('type', selectedCampaign[0].type);
      setValue('segmentation', selectedCampaign[0].segmentation);
      setValue('author', selectedCampaign[0].author);
      setValue('bid', selectedCampaign[0].bid);
      setValue('image', selectedCampaign[0].image);
    }
  }

  const validationSchema = Yup.object().shape({
    bid: Yup.number().required('Obrigatório'),
    title: Yup.string().required('Obrigatório'),
    type: Yup.string().required('Obrigatório'),
    segmentation: Yup.string().required('Obrigatório'),
    author: Yup.string().required('Obrigatório'),
    image: Yup.string().required('Obrigatório'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, control } = useForm(formOptions);

  useWatch({ control });


  const handleSubmitValues = async () => {
    try {
      const values = getValues();

      const obj = {
        title: values.title,
        image: values.image,
        author: values.author,
        type: values.type.toLowerCase(),
        bid: values.bid,
        segmentation: values.segmentation
      }

      await api.post('/campaign', obj);
      toast.success("Cadastrado com sucesso!");
      navigate("/");

    } catch (error) {
      toast.error("Erro ao cadastrar!");
    }

  }

  const handleValuesToUpdate = async () => {
    try {
      const values = getValues();

      await api.put('/campaign', values, { headers: { id: selectedCampaign[0]._id } })

      toast.success("Atualizado com sucesso!");
      navigate("/")
    } catch (error) {
      toast.error("Erro ao atualizar!");
    }
  }


  return (
    <DefaultTemplate>
      <div className='h-4/5 w-2/3 bg-white m-auto rounded-md shadow-md p-10'>
        <h2 className='font-semibold text-2xl mt-2 mb-6'>{editMode ? 'Atualizar Campanha' : 'Criar Campanha'}</h2>
        <form className="valid-form flex flex-wrap flex-row -mx-4"
          onSubmit={handleSubmit(editMode ? handleValuesToUpdate : handleSubmitValues)}>

          <InputStyled
            title='Titulo'
            htmlFor='title'
            name='title'
            value={getValues("title")}
            onChange={(value: string) => setValue('title', value)}
          />

          <InputStyled
            title='Imagem'
            htmlFor='image'
            name='image'
            value={getValues('image')}
            onChange={(value: string) => setValue('image', value)}
          />


          <InputStyled
            title='Autor'
            htmlFor='author'
            name='author'
            value={getValues('author')}
            onChange={(value: string) => setValue('author', value)}
          />
          
          <InputSelectStyled
            onChange={(value: string) => setValue('type', value)}
            value={getValues('type')}
            title='Tipo de Conversão'
            htmlFor='inputType'
          >
            <option value="cpm">CPM</option>
            <option value="cpc">CPC</option>
            <option value="cpi">CPI</option>
          </InputSelectStyled>

          <div className="form-group flex-shrink max-w-full px-4 w-full md:w-1/6 mb-4">
            <label htmlFor="inputBid" className="inline-block">Lance</label>
            <input type="number" className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0" id="inputBid"
              name='bid'
              onChange={(e) => setValue('bid', Number(e.target.value))}
              value={getValues('bid')}
              required />
          </div>

          
          <InputSelectStyled
            onChange={(value: string) => setValue('segmentation', value)}
            value={getValues('segmentation')}
            title='Segmentação'
            htmlFor='inputSegmentation'
          >
           <option value="br">BR</option>
              <option value="uk">UK</option>
              <option value="us">US</option>
          </InputSelectStyled>

          <div className="form-group flex-shrink max-w-full px-4 w-full">
            <ButtonStyled editMode={editMode} />
          </div>
        </form>
      </div>
    </DefaultTemplate>
  );
}

export default CreateOrUpdateCampaign;