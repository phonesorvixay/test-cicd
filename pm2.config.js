export default {
    apps: [
        {
            name: 'MyApp',
            exec_mode: 'cluster',
            instances: 'max',
            script: './build/server.js',
        },
    ],
};
