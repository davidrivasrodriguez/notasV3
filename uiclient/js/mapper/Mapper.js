// export const Mapper = (panel) => {
//     const div = document.createElement("div");
//     for (const key in panel) {
//         switch(key) {
//             case 'panelName': 
//                 div.setAttribute("id",panel[key]);
//                 break;
//         }
//     }
//     return div;
// };

// import { Factory } from './Factory';

// export const Mapper = (data) => {
//     const factory = new Factory();
//     const contenedor = document.getElementById("main_container");

//     data.panels.forEach(panelData => {
//         const panel = factory.create('panel', panelData.type, panelData.panelName, panelData.panelDescription, panelData.panelWidth, panelData.panelHeight, panelData.cssData);
//         const div = document.createElement("div");
//         div.setAttribute("id", panel.panelName);
//         contenedor.appendChild(div);
//     });

//     data.components.forEach(componentData => {
//         const component = factory.create('component', componentData.type, componentData.father, componentData.content, componentData.position);
//         const parentDiv = document.getElementById(component.father);
//         if (parentDiv) {
//             const div = document.createElement("div");
//             div.textContent = component.content;
//             parentDiv.appendChild(div);
//         }
//     });
// };


import { Factory } from '../modules/Factory.js';

export const Mapper = (data) => {
    const factory = new Factory();
    const contenedor = document.getElementById("main_container");

    data.panels.forEach(panelData => {
        const panel = factory.create('panel', panelData.type, panelData.panelName, panelData.panelDescription, panelData.panelWidth, panelData.panelHeight, panelData.cssData);
        const div = document.createElement("div");
        div.setAttribute("id", panel.panelName);
        div.setAttribute("class", panel.cssData);
        div.style.width = panel.panelWidth + 'px';
        div.style.height = panel.panelHeight + 'px';
        contenedor.appendChild(div);
    });

    data.components.forEach(componentData => {
        const component = factory.create('component', componentData.type, componentData.father, componentData.content, componentData.position);
        const parentDiv = document.getElementById(component.father);
        if (parentDiv) {
            const div = document.createElement("div");
            div.textContent = component.content;
            parentDiv.appendChild(div);
        }
    });
};