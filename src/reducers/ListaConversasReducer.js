const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'lista_conversas_usuario':
            return action.payload;

        default:
            return state;
    }
}