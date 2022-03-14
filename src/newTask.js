import { getProjectId, getTaskId, task } from "./getId";
import { allProjects } from "./newProject";
import { project } from "./getId";





export function newTask(projectTitle, title, desc, dueDate, priority) {
    getProjectId(projectTitle)
    project.tasks.push({
        title: title,
        id: crypto.randomUUID(),
        desc: desc,
        dueDate: dueDate,
        priority: priority
    })
    getTaskId(title)
    

}

newTask("Default", "first task", "desc", "due Date", "urgent")
newTask("Default", "second task", "desc", "due date", "no urgent")
newTask("Default", "third task", "desc", "due date", "no urgent")
newTask("random stuff", "fourth task", "desc", "due date", "very urgent")







