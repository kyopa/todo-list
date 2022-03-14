import { container, projectBox } from "./interface";
import { addButton, newProjectButton, projectForm } from "./interface";
import { newProject } from "./newProject";
import { displayProjects } from "./interface";

export default newProjectButton.addEventListener("click", () => {


    hide.style.display = "block"
    newProjectButton.style.display = "none"
    projectBox.style.display = "block"
    
    hide.addEventListener("click", () => {
        newProjectButton.style.display = "block"
        hide.style.display = "none"
        projectBox.style.display = "none"
    });
    
 
})

const hide = document.createElement("button")
hide.textContent = "Hide Projects";
container.insertBefore(hide, projectBox)
hide.style.marginBottom = "20px";
hide.style.display = "none"









