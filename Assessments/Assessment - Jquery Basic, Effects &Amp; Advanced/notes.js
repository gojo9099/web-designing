const NOTES_KEY = "my_notes_app";

function getNotes() {
    return JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
}

function saveNotes(notes) {
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export function addNote() {
    let notes = getNotes();

    let note = prompt("Enter note:");
    if (note === null) return "Operation cancelled";

    note = note.trim();
    if (note.length === 0) return "Invalid note";

    notes.push(note);
    saveNotes(notes);

    let output = "Note added successfully\n\nAll Notes:\n";
    notes.forEach((n, i) => {
        output += (i + 1) + ". " + n + "\n";
    });

    return output;
}

export function viewNotes() {
    let notes = getNotes();
    if (notes.length === 0) return "No notes found";

    let output = "Saved Notes:\n";
    notes.forEach((n, i) => {
        output += (i + 1) + ". " + n + "\n";
    });

    return output;
}

export function clearNotes() {
    localStorage.removeItem(NOTES_KEY);
    return "All notes cleared";
}
