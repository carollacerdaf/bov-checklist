import Realm from 'realm';

import FarmSchema from '../schema/FarmSchema';
import FarmerSchema from '../schema/FarmerSchema';
import LocationSchema from '../schema/LocationSchema';
import ToSchema from '../schema/ToSchema';
import FromSchema from '../schema/FromSchema';

export default function getRealm() {
    return Realm.open({
        schema: [FarmSchema,FarmerSchema, LocationSchema, ToSchema, FromSchema ]
    })
}