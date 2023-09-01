import { ReactNode, createContext, useState } from "react";
import { Alert } from "react-native";

import uuid from 'react-native-uuid';

import { ItemDTO } from "@dtos/ChecklistDTO";
import { api } from '@service/api';

export type AppContextDataProps = {
  item: ItemDTO;
  register: (item: ItemDTO) => Promise<void>;
  checkLists: () => Promise<void>;
}

type AppContextProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext<AppContextDataProps>({} as AppContextDataProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [item, setItem] = useState<ItemDTO>({} as ItemDTO);
  const idNumber = uuid.v1().toString().replace(/\D/g, '');

  async function register(data: ItemDTO) {
    try {
      const response = await api.post('/v1/checklist', {
        "checklists": [
          {
            "_id": idNumber,
            "type": data.type,
            "amount_of_milk_produced": data.milkAmount,
            "number_of_cows_head": data.cowsHead,
            "had_supervision": data.hadSupervision,
            "farmer": {
              "name": data.farm,
              "city": data.city
            },
            "from": {
              "name": data.name
            },
            "to": {
              "name": data.supervisor
            },
            "location": {
              "latitude": 0,
              "longitude": 0
            },
            "created_at": Date.now().toString(),
            "updated_at": Date.now().toString(),
          }
        ]
      });
      console.log('DONE');
      if (response.data) {
        setItem(data)
      }
    } catch (error) {
      Alert.alert('Ocorreu um erro', 'Não foi possível realizar o cadastro. Tente mais tarde.');
    }
  }

  async function checkLists() {
    api.get('/v1/checkList').then((response) => {
      return response;
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <AppContext.Provider value={
      { item, register, checkLists }}>
      {children}
    </AppContext.Provider>
  );
}