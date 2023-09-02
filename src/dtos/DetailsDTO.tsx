import { boolean } from "yup"

export type DetailsDTO = {
    __v: number,
    amount_of_milk_produced: number,
    created_at: string,
    farmer: {
        city: string,
        name: string
    },
    from: {
        name: string
    },
    had_supervision: boolean,
    id: number,
    location: {
        latitude: number,
        longitude: number
    },
    number_of_cows_head: number,
    to: {
        name: string
    },
    type: string,
    updated_at: string

}