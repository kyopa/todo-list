import { getProjectId, project, projectId } from "./getId"


export const allProjects = []

export function newProject(name) {
    allProjects.push({
        projectTitle: name,
        id: crypto.randomUUID(),
        tasks: []
    })
    getProjectId(name)

}


newProject("Default")

newProject("random stuff")


