import Realm from 'realm';

import ItemSchema from '@schema/ItemSchema';

export default function getRealm() {
    return Realm.open({
        schema: [ItemSchema]
    })
}