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
            },
            {
                url: '/firebase',
                text: 'Firebase'
            }
        ]
    },
    getters: {
        items(state){
            return state.items
        }
    }
}