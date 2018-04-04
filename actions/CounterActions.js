import actionsType from './index'
import {getSometing} from '../api/getIfos'

export function addCounter() {
    return {
        type: actionsType.COUNTER_ADD,
    };
}

export function removeCounter() {
    return {
        type: actionsType.COUNTER_REMOVE,
    };
}

export function updateCounter(value) {
    return {
        type: actionsType.UPDATE_COUNTER,
        payload:{
            value: value
        }
    };
}

