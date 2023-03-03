import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateCampaign from '../pages/createCampaign';
import ListCampaign from '../pages/listCampaign';

const NotFound = () => {
  return (
    <p>Não encontrado</p>
  )
}

function RoutesApp() {
  return (
    <>
      <Routes>

        <Route path='/' element={<ListCampaign />} />
        <Route path='/create' element={<CreateCampaign />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;