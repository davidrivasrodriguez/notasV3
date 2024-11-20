import { Factory } from '../modules/Factory.js';

export const Mapper = {
    createPanel(panelData) {
        const panel = Factory.create('panel', panelData.type, panelData.panelName, panelData.panelDescription, panelData.panelWidth, panelData.panelHeight, panelData.cssData);
        const div = document.createElement("div");
        div.setAttribute("id", panel.panelName);
        div.setAttribute("class", panel.cssData);
        div.style.width = panel.panelWidth + 'px';
        div.style.height = panel.panelHeight + 'px';
        div.style.position = 'relative';
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
        div.classList.add('note');
        div.style.left = note.position.split(',')[0] + 'px';
        div.style.top = note.position.split(',')[1] + 'px';
        div.draggable = true;

        // Determinar el noteType inicial si es en panel2
        if (noteData.father === 'panel2') {
            const panel = document.getElementById('panel2');
            const panelWidth = panel.offsetWidth;
            const positionX = parseInt(div.style.left);

            if (positionX < panelWidth / 2) {
                noteData.noteType = 'critical';
            } else {
                noteData.noteType = 'normal';
            }
        }

        // Aplicar estilos según el noteType
        if (noteData.noteType === 'critical') {
            div.style.backgroundColor = 'red';
            div.style.color = 'white';
        } else {
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
        }

        // Añadir título
        const title = document.createElement("h3");
        title.textContent = noteData.title;
        div.appendChild(title);

        // Añadir contenido
        const content = document.createElement("p");
        content.textContent = note.content;
        div.appendChild(content);

        // Evento dragend para actualizar noteType y estilos según nueva posición
        div.addEventListener('dragend', (e) => {
            div.classList.remove('dragging');
            const rect = div.parentElement.getBoundingClientRect();
            const newLeft = e.clientX - rect.left;
            const newTop = e.clientY - rect.top;
            div.style.left = `${newLeft}px`;
            div.style.top = `${newTop}px`;

            // Actualizar noteType si está en panel2
            if (noteData.father === 'panel2') {
                const panelWidth = div.parentElement.offsetWidth;

                if (newLeft < panelWidth / 2) {
                    noteData.noteType = 'critical';
                    div.style.backgroundColor = 'red';
                    div.style.color = 'white';
                } else {
                    noteData.noteType = 'normal';
                    div.style.backgroundColor = 'white';
                    div.style.color = 'black';
                }
            }
        });

        return div;
    }
};