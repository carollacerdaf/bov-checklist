export default class FarmSchema extends Realm.Object {
    static schema =
        {
            name: 'FarmData',
            properties: {
                _id: 'objectId',
                type: 'string',
                amount_of_milk_produced: 'string',
                number_of_cows_head: 'string',
                had_supervision: 'bool',
                farmer: 'Farmer',
                from: 'From',
                to: 'To',
                location: 'Location',
                created_at: 'string',
                updated_at: 'string',
            },
            primaryKey: '_id',
        }
}