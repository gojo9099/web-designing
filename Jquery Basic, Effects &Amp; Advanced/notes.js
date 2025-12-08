let allNotes = [];

export function addNote() {
    let n = prompt("Enter note (press OK when done):");
    while (!n || n.trim().length === 0) {
        n = prompt("Enter valid note:");
    }
    allNotes.push(n.trim());
    return formatNotesAfterEntry(n.trim());
}

export function viewNotes() {
    if (allNotes.length === 0) return "No notes found";
    let out = "";
    for (let i = 0; i < allNotes.length; i++) {
        out += (i + 1) + ". " + allNotes[i] + "\n";
    }
    return out;
}

export function clearNotes() {
    allNotes = [];
    return "All notes cleared";
}

function formatNotesAfterEntry(latest) {
    let s = "Latest note: " + latest + "\n\nAll notes:\n";
    for (let i = 0; i < allNotes.length; i++) {
        s += (i + 1) + ". " + allNotes[i] + "\n";
    }
    return s;
}
