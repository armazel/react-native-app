import actionsType from './index'
import {getSometing} from '../api/getIfos'


export function getUsers() {
    return {
        type: actionsType.GET_USERS,
        payload:{
            users: getSometing()
        }
    };

}
