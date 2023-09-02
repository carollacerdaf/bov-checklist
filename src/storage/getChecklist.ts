import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHECKLIST } from "./storageConfig";
import { ChecklistDTO } from "@dtos/ChecklistDTO";
import { ItemDTO } from "@dtos/ItemDTO";

export async function getChecklist() {
    try {
        const storage = await AsyncStorage.getItem(CHECKLIST);
        const checklist: ItemDTO[] = storage ? JSON.parse(storage) : [];

        return checklist;
    } catch (error) {
        throw error;
    }


}