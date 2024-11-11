// import { Mapper } from "../mapper/Mapper.js";

// export class UIBuilder {
//     static build(data) {
//         console.log(data.panels);
//         const contenedor = document.getElementById("main_container");
//         data.panels.forEach(element => {
//             const div = Mapper(element);
//             contenedor.appendChild(div);
//         });
//     }
    
// }


// import { Mapper } from './Mapper';

// document.addEventListener('DOMContentLoaded', () => {
//     Mapper(model1);
// });

import { Mapper } from "../mapper/Mapper.js";

export class UIBuilder {
    static build(data) {
        Mapper(data);
    }
}