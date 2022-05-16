import express from 'express';
import morgan from 'morgan';
import lib from './lib.js'


const app = express();
const port = 3000;


app.use(morgan('tiny'));

// URLs

app.get('/info/cpu', async (req, res) => {
    const cpuInfos = await lib.get_cpu_infos();
    res.send(cpuInfos.replace('64', '*-*'));
});

app.get('/info/memory', async (req, res) => {
    const memInfos = await lib.get_memory_infos();
    res.send(memInfos);
});

//

app.listen(port, () => {
    console.log(`Server is running in port ${port}...`);
})