export default {
    namespaced: true,
    state: {
        items: [
            {
                url: '/customers',
                text: 'Клиенты'
            },
            {
                url: '/employees',
                text: 'Сотрудники'
            }
        ]
    },
    getters: {
        items(state){
            return state.items
        }
    }
}