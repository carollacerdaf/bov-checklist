export default class FarmSchema extends Realm.Object {
    static schema =
        {
            name: 'Location',
            properties: {
                latitude: 'double',
                longitude: 'double',
            },
        }
}