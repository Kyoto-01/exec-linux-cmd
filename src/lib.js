import si from 'systeminformation';

async function get_cpu_infos(){
    const data = await si.cpu();
    return format_infos(data, 'CPU');
}

async function get_memory_infos(){
}

function format_infos(infosObj, infoName){
    let infoStr = infoName ? `<h1>${infoName}</h1><ul>` : '<ul>';

    for (let key in infosObj){
        if (typeof(infosObj[key]) == 'object'){
            infoStr += `<li>${key} --> ${format_infos(infosObj[key])}</li>`;
        }
        else{
            infoStr += `<li>${key} --> ${infosObj[key]}</li>`;
        }
    }

    infoStr += '</ul>';

    return infoStr;
}

export default { get_cpu_infos, get_memory_infos };
