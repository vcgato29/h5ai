const {win} = require('../globals');

const store = win.localStorage;
const storekey = '_h5ai';


const load = () => {
    try {
        return JSON.parse(store[storekey]);
    } catch (e) {/* skip */}
    return {};
};

const save = obj => {
    store[storekey] = JSON.stringify(obj);
};

const put = (key, value) => {
    const obj = load();
    obj[key] = value;
    save(obj);
};

const get = key => {
    return load()[key];
};


module.exports = {
    put,
    get
};
