import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHECKLIST } from "./storageConfig";
import { getChecklist } from "./getChecklist";
import { ItemDTO } from "@dtos/ItemDTO";
import { ChecklistDTO } from "@dtos/ChecklistDTO";

export async function itemCreate(newItem : ItemDTO) {
    try {
        const storedItems = await getChecklist();
        const storage = JSON.stringify([...storedItems, newItem]);

        await AsyncStorage.setItem(CHECKLIST, storage)
    } catch (error) {
        throw error;
    }
}