export const model1 = {
    panels: [
        {
            type: "panel",
            panelName: 'panel1',
            panelDescription: 'panel1 description',
            panelWidth: '600',
            panelHeight: '600',
            cssData: 'panel_style_1'
        },
        {
            type: "panel",
            panelName: 'panel2',
            panelDescription: 'panel2 description',
            panelWidth: '600',
            panelHeight: '600',
            cssData: 'panel_style_1'
        }
    ],
    components: [
        {
            type: 'boton',
            father: 'panel1',
            content: '',
            position: '0,0'
        },
        {
            type: 'boton',
            father: 'panel2',
            content: '',
            position: '0,0'
        }
    ],
    notes: [
        {
            type: 'note',
            father: 'panel1',
            content: 'Nota 1 en Panel 1',
            position: '50,50',
            date: '2023-01-15'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 2 en Panel 2',
            position: '100,100',
            date: '2023-02-20'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 3 en Panel 2',
            position: '200,200',
            date: '2023-03-25'
        }
    ]
};