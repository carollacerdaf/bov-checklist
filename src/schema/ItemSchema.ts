export default class ItemSchema {
    static schema = {
        name: 'Item',
        primaryKey: 'id',
        properties: {
            id: { type: 'string', indexed: true },
            name: { type: 'string' },
            farm: { type: 'string' },
            city: { type: 'string' },
            supervisor: { type: 'string' },
            type: { type: 'string' },
            milkAmount: { type: 'number' },
            cowsHead: { type: 'number' },
            hadSupervision: { type: 'boolean' },
        }
    }
}