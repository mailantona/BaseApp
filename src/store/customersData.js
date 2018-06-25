import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {
        items(state){
            return state.items
        }
    },
    mutations: {
        loadCust(state, data){
            state.items = data;
        }
    },
    actions: {
        loadCust(store){
            Vue.http.get('Customers.json')
                .then(response => response.json())
                .then(data => {
                        store.commit('loadCust', data);
                    }
                )
        }
    }
}
/*
function getCustomers(){
    return [
        {
            id_customers: 1,
            fio: 'Anton',
            Phone: '+7985771616',
            Email: 'mailantona@gmail.com'
        },
        {
            id_customers: 2,
            fio: 'Paul',
            Phone: '+7985771619',
            Email: 'paul2@gmail.com'
        },
        {
            id_customers: 6,
            fio: 'Vasiliy',
            Phone: '+7985771606',
            Email: 'Vasiliy@gmail.com'
        }
    ]
}*/