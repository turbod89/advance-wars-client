module.exports = {
    size: [1,2],
    terrains: {
        "Unknown": require('./unknown'),
        "Plain": require('./plain'),
        "River": require('./river'),
        "Wood": require('./wood'),
        "Mountain": require('./mountain'),
    },
};