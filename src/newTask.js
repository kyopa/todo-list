import { getProjectId, getTaskId, task, project } from "./getId";
import { allProjects } from "./newProject";






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

    localStorage.setItem(project.projectTitle, JSON.stringify(project.tasks))
    localStorage.setItem(title, JSON.stringify(task))

    localStorage.setItem("allProjects", JSON.stringify(allProjects))

}












