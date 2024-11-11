import { HttpFetch } from "./modules/HttpFetch.js";
import { UIBuilder } from "./modules/UIBuilder.js";
import { Mapper } from "./mapper/Mapper.js";

const httpFetch = new HttpFetch('http://localhost:3000');
httpFetch.obtenerUI('', (datos) => {
    setupPanelSelection(datos);
});

function setupPanelSelection(data) {
    const panelSelect = document.getElementById('panelSelect');
    panelSelect.addEventListener('change', (event) => {
        const selectedPanel = event.target.value;
        showPanel(selectedPanel, data);
    });
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
    }
}