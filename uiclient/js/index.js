import { HttpFetch } from "./modules/HttpFetch.js";
import { UIBuilder } from "./modules/UIBuilder.js";
import { Mapper } from "./mapper/Mapper.js";

const httpFetch = new HttpFetch('http://localhost:3000');
httpFetch.obtenerUI('', (datos) => {
    setupPanelSelection(datos);
    setupFilters(datos);
});

function setupPanelSelection(data) {
    const panelSelect = document.getElementById('panelSelect');
    panelSelect.addEventListener('change', (event) => {
        const selectedPanel = event.target.value;
        showPanel(selectedPanel, data);
    });
}

function setupFilters(data) {
    const monthFilter = document.getElementById('monthFilter');
    const yearFilter = document.getElementById('yearFilter');

    monthFilter.addEventListener('change', () => {
        filterNotes(data);
    });

    yearFilter.addEventListener('change', () => {
        filterNotes(data);
    });
}

function filterNotes(data) {
    const monthFilter = document.getElementById('monthFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;

    const filteredNotes = data.notes.filter(note => {
        const noteDate = new Date(note.date);
        const noteMonth = noteDate.getMonth() + 1;
        const noteYear = noteDate.getFullYear();

        const monthMatch = monthFilter ? noteMonth === parseInt(monthFilter.split('-')[1]) : true;
        const yearMatch = yearFilter ? noteYear === parseInt(yearFilter) : true;

        return monthMatch && yearMatch;
    });

    const panelSelect = document.getElementById('panelSelect').value;
    showPanel(panelSelect, { ...data, notes: filteredNotes });
}

function showPanel(panelName, data) {
    const contenedor = document.getElementById("main_container");
    contenedor.innerHTML = '';

    const panelData = data.panels.find(panel => panel.panelName === panelName);
    if (panelData) {
        const panel = Mapper.createPanel(panelData);
        contenedor.appendChild(panel);

        const components = data.components.filter(component => component.father === panelName);
        components.forEach(componentData => {
            const component = Mapper.createComponent(componentData);
            panel.appendChild(component);
        });

        const notes = data.notes.filter(note => note.father === panelName);
        notes.forEach(noteData => {
            const note = Mapper.createNote(noteData);
            panel.appendChild(note);
        });
    }
}