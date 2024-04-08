// banner navigation
const mainButton = document.getElementById('mainButton')
const blogButton = document.getElementById('blogButton');
const projectsButton = document.getElementById('projectsButton');
const contactmeButton = document.getElementById('contactmeButton');

function main_button_handler() {
    window.location.href = 'index.html';
}
mainButton.addEventListener('click', main_button_handler);

function blog_button_handler(){
    window.location.href = 'blog.html';
}
blogButton.addEventListener('click', blog_button_handler)

function projects_button_handler() {
    window.location.href = 'projects.html';
}
projectsButton.addEventListener('click', projects_button_handler)

function contactme_button_handler() {
    window.location.href = 'contact_me.html';
}
contactmeButton.addEventListener('click', contactme_button_handler)