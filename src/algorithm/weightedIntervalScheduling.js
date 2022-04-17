const timeToNumber = (time) => {
    time = time.split(':');
    return parseInt(time[0]) + parseInt(time[1])/60
}

const findCompatibility = (tasks, index) => {
    for(let i = index - 1; i >= 0; i--){
        if(tasks[index].startTime >= tasks[i].finishTime){
            return i;
        }
    }

}

const mComputeOpt = (tasks, p) => {
    const M = new Array(tasks.length);

    M[0] = 0;

    for(let j = 1; j < tasks.length; j++){
        M[j] = Math.max(tasks[j].value + M[p[j]], M[j - 1])
    }

    return M;
}

const findSolution = (M, j, tasks, p, solution) => {
    if (j == 0){
        return;
    }
    else if (tasks[j].value + M[p[j]] > M[j-1]){
        solution.push(j);
        findSolution(M,p[j], tasks, p, solution);
    }
    else{
        findSolution(M,j-1, tasks, p, solution);
    }
}

export const weightedIntervalScheduling = (appointments) => {
    const tasks = [];

    for(let i = 0; i < appointments.length; i++){
        tasks.push({
            "startTime": timeToNumber(appointments[i].start),
            "finishTime": timeToNumber(appointments[i].start) + appointments[i].duration,
            "value": appointments[i].price,
            "id": i
        })
    }


    tasks.unshift({
        "startTime": 0,
        "finishTime": 0,
        "value": 0,
        "id": -1
    });

    let M; //Array de memorização
    const solution = []; //Array que guarda todos os serviços que fazem parte da solução final

    const p = new Array(tasks.length); //Array de compatibilidade
    p[0] = 0;


    tasks.sort((a,b) => a.finishTime - b.finishTime);

    for(let i = 1; i < tasks.length; i++){
        p[i] = findCompatibility(tasks, i);
    }

    M = mComputeOpt(tasks, p);
    console.log('Maior Valor: ',M[tasks.length - 1])
    console.log('Serviços escolhidos: ')
    findSolution(M, tasks.length - 1, tasks, p, solution);

    let path = [];
    for(let i = 0; i < solution.length; i++){
        path.push(tasks[solution[i]].id)
    }

    return path;
}

