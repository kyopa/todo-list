import { getProjectId, getTaskId, project, task } from "./getId";
import { allProjects } from "./newProject";



export function changeProp(projectName, taskName, prop, changeTo) {
    getProjectId(projectName);
    getTaskId(taskName);
    task[prop] = changeTo; 
}

