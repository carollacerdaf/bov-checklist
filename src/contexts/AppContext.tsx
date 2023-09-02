import { ReactNode, createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

import uuid from 'react-native-uuid';

import { ItemDTO } from "@dtos/ItemDTO";
import { api } from '@service/api';
import { ChecklistDTO } from "@dtos/ChecklistDTO";
import { DetailsDTO } from "@dtos/DetailsDTO";

export type AppContextDataProps = {
  items: ChecklistDTO[];
  register: (item: ItemDTO) => Promise<void>;
  update: (item: DetailsDTO, data: ItemDTO) => Promise<void>;
  checkLists: () => Promise<void>;
}

type AppContextProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext<AppContextDataProps>({} as AppContextDataProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [items, setItems] = useState([]);
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
              "latitude": -23.5,
              "longitude": -46.6
            },
            "created_at": Date.now().toString(),
            "updated_at": Date.now().toString(),
          }
        ]
      });
    } catch (error) {
      Alert.alert('Ocorreu um erro', 'Não foi possível realizar o cadastro. Tente mais tarde.');
    }
  }

  async function update(checklistItem: DetailsDTO, data: ItemDTO) {
    try {
      const response = await api.put(`/v1/checkList/${checklistItem.id}`, {
        "type": data.type,
        "amount_of_milk_produced": data.milkAmount,
        "number_of_cows_head": data.cowsHead,
        "had_supervision": data.hadSupervision,
        "farmer": {
          "name": data.farm,
          "city": data.city,
        },
        "from": {
          "name": data.supervisor
        },
        "to": {
          "name": data.name
        },
        "location": {
          "latitude": checklistItem.location.latitude,
          "longitude": checklistItem.location.longitude
        }
      });
    } catch (error) {
      Alert.alert('Ocorreu um erro',
        'Não foi possível realizar a atualização. Tente mais tarde.');
    }
  }

  async function checkLists() {
    api.get('/v1/checkList').then((response) => {
      setItems(response.data);
    }).catch((err) => {
      throw err;
    })
  }

  useEffect(() => {
    api.get('/v1/checkList').then((response) => {
      setItems(response.data);
    }).catch((err) => {
      throw err;
    })
  }, []);
  return (
    <AppContext.Provider value={
      { items, register, checkLists, update }}>
      {children}
    </AppContext.Provider>
  );
}