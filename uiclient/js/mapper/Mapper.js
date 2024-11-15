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
    }
};