

const state = {
    utang: [ 
        {
            tanggal : '2020-01-11',
            jatuhTempo: '',
            deskripsi : 'test',
            nominal : 10000,
        },
        {
            tanggal : '2020-01-11',
            jatuhTempo: '2020-10-11',
            deskripsi : 'test',
            nominal : 10000,
        },
        {
            tanggal : '2020-01-11',
            jatuhTempo: '',
            deskripsi : 'test',
            nominal : 10000,
        },
    ]
};

const getters = {
    allUtang: (state) => state.utang
};

const mutations = {
    addUtang: (state, payload) => {
        state.utang.push(payload);
    }
};

const actions = {
    saveUtang: ({ commit }, payload) => {
        commit('addUtang', payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}