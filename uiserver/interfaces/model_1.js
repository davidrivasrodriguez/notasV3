export const model1 = {
    panels: [
        {
            type: "panel",
            panelName: 'panel1',
            panelDescription: 'panel1 description',
            panelWidth: '',
            panelHeight: '',
            cssData: 'panel_style_1'
        },
        {
            type: "panel",
            panelName: 'panel2',
            panelDescription: 'panel2 description',
            panelWidth: '',
            panelHeight: '',
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
            date: '2023-01-15',
            noteType: 'normal',
            title: 'Nota 1'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 2 en Panel 2',
            position: '100,100',
            date: '2023-02-20',
            noteType: 'critical',
            title: 'Nota 2'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 3 en Panel 2',
            position: '200,200',
            date: '2023-03-25',
            noteType: 'normal',
            title: 'Nota 3'
        },
        {
            type: 'note',
            father: 'panel1',
            content: 'Nota 4 en Panel 1',
            position: '60,60',
            date: '2023-04-10',
            noteType: 'critical',
            title: 'Nota 4'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 5 en Panel 2',
            position: '110,110',
            date: '2023-05-15',
            noteType: 'normal',
            title: 'Nota 5'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 6 en Panel 2',
            position: '210,210',
            date: '2023-06-20',
            noteType: 'critical',
            title: 'Nota 6'
        },
        {
            type: 'note',
            father: 'panel1',
            content: 'Nota 7 en Panel 1',
            position: '70,70',
            date: '2023-07-25',
            noteType: 'normal',
            title: 'Nota 7'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 8 en Panel 2',
            position: '120,120',
            date: '2023-08-30',
            noteType: 'critical',
            title: 'Nota 8'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 9 en Panel 2',
            position: '220,220',
            date: '2023-09-05',
            noteType: 'normal',
            title: 'Nota 9'
        },
        {
            type: 'note',
            father: 'panel1',
            content: 'Nota 10 en Panel 1',
            position: '80,80',
            date: '2023-10-10',
            noteType: 'critical',
            title: 'Nota 10'
        },
        {
            type: 'note',
            father: 'panel2',
            content: 'Nota 11 en Panel 2',
            position: '130,130',
            date: '2023-11-15',
            noteType: 'normal',
            title: 'Nota 11'
        },
        {
            type: 'note',
            father: 'panel1',
            content: 'Nota 12 en Panel 1',
            position: '90,90',
            date: '2023-12-20',
            noteType: 'critical',
            title: 'Nota 12'
        }
    ]
};