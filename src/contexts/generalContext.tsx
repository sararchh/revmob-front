import React, { useState } from "react";
import { createContext } from "react";

import { ListCampaignProps } from '../utils';

interface GeneralDataProps {
  editMode: Boolean,
  selectedCampaign: ListCampaignProps[],
  setSelectedCampaign: any,
  handleEditMode: () => void,
}

interface GeneralProviderProps {
  children: React.ReactNode;
}


export const GeneralContext = createContext({} as GeneralDataProps);

export function GeneralContextProvider({ children }: GeneralProviderProps) {

  const [editMode, setEditMode] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<ListCampaignProps[]>([]);

  const handleEditMode = () => {
    setEditMode(!editMode);
  }

  return (
    <GeneralContext.Provider
      value={{
        handleEditMode,
        editMode,
        selectedCampaign,
        setSelectedCampaign
      }}>
      {children}
    </GeneralContext.Provider>
  );
}