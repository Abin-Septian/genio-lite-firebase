

const state = {
    kategori :{
        pemasukan: [
            'gaji',
            'upah'
        ],
        pengeluaran: [
            'belanja'
        ],
}
};

const getters = {
    allKategori: (state) => state.kategori
};

const mutations = {
    addKategoriPemasukan: (state, payload) => {
        state.kategori.pemasukan.push(payload);
    },
    addKategoriPengeluaran: (state, payload) => {
        state.kategori.pengeluaran.push(payload);
    }
};

const actions = {
    saveKategoriPemasukan: ({ commit }, payload) => {
        commit('addKategoriPemasukan', payload);
    },
    saveKategoriPengeluaran: ({ commit }, payload) => {
        commit('addKategoriPengeluaran', payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}