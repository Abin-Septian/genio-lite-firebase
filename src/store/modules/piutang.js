

const state = {
    piutang: [ 
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
        {
            tanggal : '2020-01-11',
            jatuhTempo: '',
            deskripsi : 'test',
            nominal : 10000,
        },
    ]
};

const getters = {
    allPiutang: (state) => state.piutang
};

const mutations = {
    addPiutang: (state, payload) => {
        state.piutang.push(payload);
    }
};

const actions = {
    savePiutang: ({ commit }, payload) => {
        commit('addPiutang', payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}