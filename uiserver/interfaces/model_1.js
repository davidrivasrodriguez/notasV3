export const model1 = {
    panels: [
        {
            type: "panel",
            panelName: 'panel1',
            panelDescription: 'panel1 description',
            panelWidth: '100',
            panelHeight: '100',
            cssData: 'panel_style_1'
        },
        {
            type: "panel",
            panelName: 'panel2',
            panelDescription: 'panel2 description',
            panelWidth: '100',
            panelHeight: '100',
            cssData: 'panel_style_1'
        }
    ],
    components: [
        {
            type: 'boton',
            father: 'panel1',
            content: 'Pulsa aquí',
            position: '0,0'
        },
        {
            type: 'boton',
            father: 'panel2',
            content: 'Pulsa aquí',
            position: '0,0'
        }
    ]
};

