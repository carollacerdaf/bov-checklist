export default class FarmSchema extends Realm.Object {
    static schema =
    {
        name: 'Farmer',
        properties: {
            name: 'string',
            city: 'string',
        },
    }
}