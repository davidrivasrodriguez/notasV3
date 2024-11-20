import { HttpFetch } from "./modules/HttpFetch.js";
import { UIBuilder } from "./modules/UIBuilder.js";
import { Mapper } from "./mapper/Mapper.js";

const httpFetch = new HttpFetch("http://localhost:3000");
httpFetch.obtenerUI("", (datos) => {
  setupPanelSelection(datos);
  setupFilters(datos);
  setupAlignButton();
});

function setupPanelSelection(data) {
  const panelSelect = document.getElementById("panelSelect");
  panelSelect.addEventListener("change", (event) => {
    const selectedPanel = event.target.value;
    showPanel(selectedPanel, data);
  });
}

function setupFilters(data) {
  const monthFilter = document.getElementById("monthFilter");
  const yearFilter = document.getElementById("yearFilter");

  monthFilter.addEventListener("change", () => {
    filterNotes(data);
  });

  yearFilter.addEventListener("change", () => {
    filterNotes(data);
  });
}

function setupAlignButton() {
  const alignButton = document.getElementById("alignNotesButton");
  alignButton.addEventListener("click", alignNotes);
}

function filterNotes(data) {
  const monthFilter = document.getElementById("monthFilter").value;
  const yearFilter = document.getElementById("yearFilter").value;

  const filteredNotes = data.notes.filter((note) => {
    const noteDate = new Date(note.date);
    const noteMonth = noteDate.getMonth() + 1;
    const noteYear = noteDate.getFullYear();

    const monthMatch = monthFilter
      ? noteMonth === parseInt(monthFilter.split("-")[1])
      : true;
    const yearMatch = yearFilter ? noteYear === parseInt(yearFilter) : true;

    return monthMatch && yearMatch;
  });

  const panelSelect = document.getElementById("panelSelect").value;
  showPanel(panelSelect, { ...data, notes: filteredNotes }, true);
}

function showPanel(panelName, data, hideDate = false) {
  const contenedor = document.getElementById("main_container");

  if (!panelName) {
    contenedor.style.display = "none";
    return;
  } else {
    contenedor.style.display = "block";
  }

  contenedor.innerHTML = "";

  const panelData = data.panels.find((panel) => panel.panelName === panelName);
  if (panelData) {
    const panel = Mapper.createPanel(panelData);
    contenedor.appendChild(panel);

    // Añadir el div con la clase divider si el panel es panel2
    if (panelName === "panel2") {
      const divider = document.createElement("div");
      divider.classList.add("divider");
      contenedor.appendChild(divider);
    }

    const components = data.components.filter(
      (component) => component.father === panelName
    );
    components.forEach((componentData) => {
      const component = Mapper.createComponent(componentData);
      panel.appendChild(component);
    });

    const notes = data.notes.filter((note) => note.father === panelName);
    let x = 10;
    let y = 10;
    const gap = 10;

    notes.forEach((noteData) => {
      const note = Mapper.createNote(noteData);
      if (hideDate) {
        note.querySelector(".note-date").style.display = "none";
      }
      note.style.left = `${x}px`;
      note.style.top = `${y}px`;
      panel.appendChild(note);

      x += note.offsetWidth + gap;
      if (x + note.offsetWidth > panel.offsetWidth) {
        x = 10;
        y += note.offsetHeight + gap;
      }
    });
  }
}

function alignNotes() {
  const panel = document.querySelector("#main_container > div");
  if (panel) {
    const notes = panel.querySelectorAll(".note");
    let x = 10;
    let y = 10;
    const gap = 10;

    notes.forEach((note) => {
      note.style.left = `${x}px`;
      note.style.top = `${y}px`;
      y += note.offsetHeight + gap;

      if (y + note.offsetHeight > panel.offsetHeight) {
        y = 10;
        x += note.offsetWidth + gap;
      }
    });
  }
}
