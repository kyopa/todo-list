import { getProjectId, getTaskId, project, taskId } from "./getId";
import { allProjects } from "./newProject";
import { task } from "./getId";


export function deleteTask(projectOfTask, taskToDelete) {
    getProjectId(projectOfTask)
    getTaskId(taskToDelete)
    getIndex(project, task)

    project.tasks.splice(index, 1) 
}

let index;

export function getIndex(project, task) {
    index = project.tasks.indexOf(task)
    return index
}