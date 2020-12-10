

const state = {
    pemasukan: [ 
        {
            id : 1,
            tipe : 'pemasukan',
            tanggal : 'test',
            kategori : 'test',
            deskripsi : 'test',
            nominal : 10000.11,
        },
        {
            id : 2,
            tipe : 'pemasukan',
            tanggal : 'test',
            kategori : 'test',
            deskripsi : 'test',
            nominal : 10000.11,
        },
        {
            id : 3,
            tipe : 'pemasukan',
            tanggal : 'test',
            kategori : 'test',
            deskripsi : 'test',
            nominal : 10000.11,
        },
    ]
};

const getters = {
    allPemasukan: (state) => state.pemasukan
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
}