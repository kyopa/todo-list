import { getProjectId, project, projectId } from "./getId"




export const allProjects = JSON.parse(localStorage.getItem("allProjects")) ?? [];


export function newProject(name) {

    // console.log(JSON.parse(localStorage.getItem(`${name}`)))

    

    allProjects.push({
        projectTitle: name,
        id: crypto.randomUUID(),
        tasks: JSON.parse(localStorage.getItem(`${name}`)) ?? []
    })
    getProjectId(name)

    localStorage.setItem("allProjects", JSON.stringify(allProjects))
}









