import { changeProp } from "./changeProp"
import { deleteTask } from "./deleteTask"
import { altTask, getProjectId, getTaskId, project, task } from "./getId"
import { allProjects, newProject } from "./newProject"
import { newTask } from "./newTask"


export const main = document.querySelector("#content")

export const container = document.createElement("div")
container.style.marginBottom = "14px"
main.appendChild(container)

export const projectBox = document.createElement("div")
projectBox.setAttribute("style", "width: fit-content; display: block")
container.appendChild(projectBox)

export const newProjectButton = document.createElement("button")
newProjectButton.setAttribute("style", "color: orange; background-color: black")
newProjectButton.textContent = "Show Projects";
container.insertBefore(newProjectButton, projectBox);

const formBox = document.createElement("div")
formBox.setAttribute("style", "display: grid; grid-template-columns: repeat(4, 40px); grid-template-rows: repeat(2, 40px)")
projectBox.appendChild(formBox)

let dataId = crypto.randomUUID();

export function projectForm() {
    const input = document.createElement("input")
    input.setAttribute("style", "background-color: black; color: gold; margin-top: 20px; grid-column: 1 / 4")
    input.setAttribute("value", "Project Name")
    input.setAttribute("data-id", dataId)
    formBox.appendChild(input);
}

export function addButton() {
    const button = document.createElement("button")
    button.setAttribute("style", "color: orange; background-color: black; grid-row: 2 / 3")
    button.setAttribute("data-id", crypto.randomUUID())
    button.textContent = "Add"
    formBox.appendChild(button);

    button.addEventListener("click", () => {
        
        newProject(document.querySelector(`[data-id="${dataId}"]`).value)

        
       
        getProjectId(document.querySelector(`[data-id="${dataId}"]`).value)
        document.querySelector(`[data-id="${dataId}"]`).value = "Project Name"
        createElement(project);
        

        
        
       
        // console.log(JSON.parse(localStorage.getItem(project.projectTitle)).projectTitle)
        
    })
    
}
const display = document.createElement("div")
projectBox.appendChild(display)

export function displayProjects() {
    for (let project of allProjects) {


       // console.log(JSON.parse(localStorage.getItem("allProjects")))

       // console.log(allProjects);
        
        
        createElement(project);
    }

}

projectForm();
addButton();
displayProjects();

projectBox.style.display = "none"

export function createElement(obj) {

    const box = document.createElement("div")
    
    box.classList.add("box")
    projectBox.insertBefore(box, formBox) 
    const el = document.createElement("button")
    el.setAttribute("style", "background-color: black; color: yellow")
    el.setAttribute("data-id", crypto.randomUUID())

    // GET PROJECT FROM LOCAL STORAGE
   //  console.log(JSON.parse(localStorage.getItem(obj.projectTitle)))
    
    

    el.textContent = obj.projectTitle
    box.appendChild(el)

    el.addEventListener("click", () => {

        
        
        el.disabled = true;
        getProjectId(el.textContent)

        console.log(JSON.parse(localStorage.getItem(project.projectTitle)));
        
        displayTasks(box, project, el)
        console.log("EEE")
    })

    
}

export function displayTasks(box, project, el) {

    const task = document.createElement("div")
   
    task.setAttribute("style", "display: block; border: 1px solid red")
    box.appendChild(task);

    const elementBox = document.createElement("div")
    elementBox.setAttribute("style", "display: flex; flex-direction: column; align-items: flex-start")
    task.appendChild(elementBox)

    let storeProjects;

    if (!JSON.parse(localStorage.getItem(project.projectTitle))) {
        storeProjects = project.tasks
    } else {
        storeProjects = JSON.parse(localStorage.getItem(project.projectTitle));
    }
    
   
    // console.log(JSON.parse(localStorage.getItem("Default")))

    for (let obj of storeProjects) {
       //  console.log(obj);
        taskFunction(obj, elementBox, storeProjects);
    }

    const buttons = document.createElement("div")
    buttons.setAttribute("style", "display: flex; gap: 10px")
    task.appendChild(buttons)

    const hide = document.createElement("button")
    hide.setAttribute("style", "background-color: black; color: yellow")
    hide.textContent = "Hide"
    buttons.appendChild(hide)

    const add = document.createElement("button")
    add.setAttribute("style", "background-color: black; color: orange")
    add.textContent = "New task"
    buttons.appendChild(add);

    add.addEventListener("click", () => {
        add.disabled = true;

        const newTaskBox = document.createElement("div")
        newTaskBox.setAttribute("style", "display: flex; flex-direction: column")
        task.appendChild(newTaskBox)
s
        const title = elementFactory("title", newTaskBox)
        const desc = elementFactory("description", newTaskBox)
        
        
        const dueDate = document.createElement("input")
        dueDate.setAttribute("type", "date")
        
        
        newTaskBox.appendChild(dueDate);

        const priority = elementFactory("priority", newTaskBox)

        const button = document.createElement("button")
        button.setAttribute("style", "background-color: aqua; border-radius: 5px ")
        button.textContent = "Add";
        newTaskBox.appendChild(button);

        button.addEventListener("click", () => {
            add.disabled = false;
            newTaskBox.style.display = "none"
            newTask(project.projectTitle, title.value, desc.value, dueDate.value, priority.value)
            
            console.log(JSON.parse(localStorage.getItem(project.projectTitle)))

            

            getTaskId(title.value)
            taskFunction(altTask, elementBox)
        })
    })

    hide.addEventListener("click", () => {
        el.disabled = false;
        hideDetails(task, hide)
    })
}

const elementFactory = (text, newTaskBox) => {
    const el = document.createElement("input")
    el.setAttribute("style", "border: 0; font-size: .9rem; background-color: transparent")
    el.setAttribute("value", text)
    newTaskBox.appendChild(el);
    return el
}

export function hideDetails(tasks, hide) {
    tasks.style.display = "none"
    hide.style.display = "none"
}


function taskFunction(task, elementBox, storeProjects) {
    
        const cell = document.createElement("div")
        elementBox.appendChild(cell)

        const deleteButton = document.createElement("button")
        deleteButton.setAttribute("style", "background-color: grey; color: white; border: 0; border-radius: 6px; height: fit-content")
        deleteButton.textContent = "delete"
        cell.appendChild(deleteButton)

        deleteButton.addEventListener("click", () => {
            deleteTask(project.projectTitle, task.title)
            
            cell.remove();
        })


        const element = document.createElement("button")
        element.setAttribute("style", "background-color: transparent; border: 0; font-weight: bold")

        // GET TASK FROM LOCAL STORAGE

        // console.log(JSON.parse(localStorage.getItem(task.title)).title)

       //  console.log(JSON.parse(localStorage.getItem(project.projectTitle)))

        


        element.textContent = JSON.parse(localStorage.getItem(task.title)).title
        cell.insertBefore(element, deleteButton)

        element.addEventListener("click", () => {
            element.disabled = true;
           
            
            
            displayDetails(task, cell, element)
            
        })
}

export function displayDetails(task, appendTo, element) {
    
    const details = document.createElement("div")
    appendTo.appendChild(details)

    const desc = factory(task, "desc", details)
    desc.style.opacity = 0.6

    const dueDate = factory(task, "dueDate", details)
    const priority = factory(task, "priority", details)

    const close = document.createElement("strong")
    close.textContent = "close"
    details.appendChild(close)

    close.addEventListener("click", () => {
        element.disabled = false
        details.style.display = "none"
    })
}

export function factory(task, detail, appendTo) {
    const el = document.createElement("div")
    
    // GET DETAIL FROM LOCAL STORAGE
    
   //  console.log(JSON.parse(localStorage.getItem(task.title)))
   

    el.textContent = task[detail]
    appendTo.appendChild(el)

    el.addEventListener("click", () => {
        
        editDetails(appendTo, el, detail, task)
    
    })
    return el
}

export function editDetails(appendTo, el, detail, task) {
    const button = document.createElement("button")
    button.textContent = "save"
    appendTo.replaceChild(button, el)
    

    button.addEventListener("click", () => {

        
        saveButton(input, detail, task)

        const div = document.createElement("div")
        div.textContent = task[detail]
        appendTo.replaceChild(div, input)

        button.style.display = "none"

        div.addEventListener("click", () => {
            editDetails(appendTo, div, detail, task)
        })
    })

    

    const input = document.createElement("input")
    
    input.setAttribute("value", el.textContent)
    input.setAttribute("style", "border: 0; background-color: transparent; font-size: 1rem")
    
    appendTo.insertBefore(input, button)

}


export function saveButton(input, detail, task) {
    
    changeProp(project.projectTitle, task.title, detail, input.value)
   //  console.log(allProjects)
}










