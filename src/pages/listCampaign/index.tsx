import React, { useEffect, useContext } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import DefaultTemplate from '../../components/templates/defaultTemplate';
import { GeneralContext } from '../../contexts/generalContext';
import api from '../../services/api';


const ListCampaign: React.FC = () => {
  const navigate = useNavigate();

  const { handleEditMode, selectedCampaign, setSelectedCampaign } = useContext(GeneralContext);

  useEffect(() => {
    handleGetCampaign();
  }, []);

  const handleGetCampaign = async () => {
    try {
      const { data } = await api.get("/fetch?seg=BR");
      data.sort((a: any, b: any) => b.bid - a.bid);

      setSelectedCampaign([data[0]]);

    } catch (error) {
      toast.warning("Não existe campanha para segmentação!")
    }
  }

  const handleNavigateEdition = () => {
    handleEditMode();
    navigate("/createUpdate");
  }

  return (
    <DefaultTemplate>

      {selectedCampaign.length > 0 &&
        <div className='h-4/5 w-2/3 bg-white m-auto rounded-md shadow-md p-10'>
          <div className='flex justify-between items-center'>
            <h2 className='font-semibold text-2xl mt-2 mb-6'>Melhor Campanha</h2>
            <h2 className='text-1xl  mb-6'>Segmentação: {selectedCampaign[0]?.segmentation}</h2>
          </div>

          <div>
            {Boolean(selectedCampaign?.length) && selectedCampaign?.map((item) => (
              <div className='flex flex-row' key={item._id}>
                <div className='h-[430px] w-[420px] m-2 rounded-md shadow-md'>
                  <img className="h-[260px] w-[420px]" src={item.image} alt="Campaign logo" />

                  <div className='p-4 flex-col h-[150px] justify-between flex'>
                    <div className='flex-row flex items-center justify-between'>
                      <h5 className="text-lg mt-2 mb-1 font-medium">{item.title}</h5>
                      <MdModeEditOutline className='cursor-pointer h-[17px] w-[17px]' onClick={handleNavigateEdition} />
                    </div>
                    <p>{item.segmentation}</p>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      }

      {selectedCampaign.length === 0 &&
        <div className='h-4/5 w-2/3 bg-white m-auto rounded-md shadow-md p-10'>
          <h2 className='font-semibold text-2xl mt-2 mb-6'>Nenhuma campanha encontrada</h2>
        </div>
      }
    </DefaultTemplate>
  );
}

export default ListCampaign;