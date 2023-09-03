import AsyncStorage from "@react-native-async-storage/async-storage";
import { CHECKLIST } from "./storageConfig";
import { ItemDTO } from "@dtos/ItemDTO";

export async function itemDelete() {
    try {
        await AsyncStorage.removeItem(CHECKLIST);
    } catch (error) {
        throw error;
    }
}