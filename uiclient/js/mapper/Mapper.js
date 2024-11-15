import { Factory } from '../modules/Factory.js';

export const Mapper = {
    createPanel(panelData) {
        const panel = Factory.create('panel', panelData.type, panelData.panelName, panelData.panelDescription, panelData.panelWidth, panelData.panelHeight, panelData.cssData);
        const div = document.createElement("div");
        div.setAttribute("id", panel.panelName);
        div.setAttribute("class", panel.cssData);
        div.style.width = panel.panelWidth + 'px';
        div.style.height = panel.panelHeight + 'px';
        return div;
    },

    createComponent(componentData) {
        const component = Factory.create('component', componentData.type, componentData.father, componentData.content, componentData.position);
        const div = document.createElement("div");
        div.textContent = component.content;
        return div;
    },

    createNote(noteData) {
        const note = Factory.create('note', noteData.type, noteData.father, noteData.content, noteData.position);
        const div = document.createElement("div");
        div.textContent = note.content;
        div.classList.add('note');
        div.style.left = note.position.split(',')[0] + 'px';
        div.style.top = note.position.split(',')[1] + 'px';
        div.draggable = true;
        div.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', null);
            e.dataTransfer.setDragImage(div, 0, 0);
        });
        return div;
    }
};