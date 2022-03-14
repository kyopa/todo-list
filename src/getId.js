import { allProjects } from "./newProject";

export let projectId;
export let project;

export function getProjectId(projectName) {
    project = allProjects.find(obj => obj.projectTitle === projectName)
    projectId = project.id;
    return {
        projectId,
        project
    }
}

export let task;
export let taskId;
export let altTask;

export function getTaskId(taskName) {
    task = project.tasks.find(task => task.title === taskName)
    altTask = task;
    taskId = task.id;
    
    return task, taskId
}