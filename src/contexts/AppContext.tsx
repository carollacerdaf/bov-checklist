import { ReactNode, createContext, useState } from "react";
import { ItemDTO } from "src/dtos/ChecklistDTO";

export type AppContextDataProps = {
  item: ItemDTO;
  setItem: (item: ItemDTO) => void;
}

type AppContextProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext<AppContextDataProps>({} as AppContextDataProps);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [item, setItem] = useState({
    "_id": 77777275,
    "type": "Antibiótico",
    "amount_of_milk_produced": "200",
    "farmer": {
      "name": "Marianos",
      "city": "São Paulo"
    },
    "from": {
      "name": "Mariano Silva"
    },
    "to": {
      "name": "Thiago Moraes"
    },
    "number_of_cows_head": "25",
    "had_supervision": true,
    "location": {
      "latitude": -23.5,
      "longitude": -46.6
    },
    "created_at": "2023-04-15T04:54:33.000Z",
    "updated_at": "2023-04-15T04:54:33.000Z",
    "__v": 0
  });
  return (
    <AppContext.Provider value={
      { item, setItem }}>
      {children}
    </AppContext.Provider>
  );
}