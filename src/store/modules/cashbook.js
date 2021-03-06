

const state = {
    bukuKas: [ 
        {
            tipe : 'pemasukan',
            tanggal : '2020-01-11',
            kategori : 'test',
            deskripsi : 'test',
            nominal : 10000,
        },
        {
            tipe : 'pengeluaran',
            tanggal : '2020-01-11',
            kategori : 'test',
            deskripsi : 'test',
            nominal : 10000,
        },
        {
            tipe : 'pemasukan',
            tanggal : '2020-01-11',
            kategori : 'test',
            deskripsi : 'test',
            nominal : 10000,
        },
    ]
};

const getters = {
    allBukuKas: (state) => state.bukuKas
};

const mutations = {
    addTransaksi: (state, payload) => {
        state.bukuKas.push(payload);
    }
};

const actions = {
    saveTransaksi: ({ commit }, payload) => {
        commit('addTransaksi', payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}