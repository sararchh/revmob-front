import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CreateOrUpdateCampaign from '../pages/CreateOrUpdateCampaign';
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
        <Route path='/createUpdate' element={<CreateOrUpdateCampaign />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesApp;