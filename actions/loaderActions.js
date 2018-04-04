import actionsType from './index'



export function activeLoaderToggle(toggle) {
    return {
        type: actionsType.ACTIVE_LOADER,
        toggle:toggle
    };

}

