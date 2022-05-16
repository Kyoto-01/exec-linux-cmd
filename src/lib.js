import { promisify } from 'util';
import { exec } from 'child_process';


const execAsync = promisify(exec);

async function get_cpu_infos(){
    const { stdout } = await execAsync('lscpu');

    return stdout;
}

async function get_memory_infos(){
    const { stdout } = await execAsync('lsmem');

    return stdout;
}

export default { get_cpu_infos, get_memory_infos };