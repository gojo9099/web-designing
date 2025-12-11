import { showMenu } from "./menu.js";
import { addNote, viewNotes, clearNotes } from "./notes.js";
import { show } from "./utils.js";

$("#startBtn").on("click", function () {
    runProgram();
});

function runProgram() {
    let running = true;
    while (running) {
        let op = showMenu();
        while (!op || isNaN(op) || op < 1 || op > 4) {
            op = showMenu();
        }
        if (op == 1) {
            let m = addNote();
            show(m);
            alert("Note added");
        } else if (op == 2) {
            let m = viewNotes();
            show(m);
            alert("Showing notes");
        } else if (op == 3) {
            let m = clearNotes();
            show(m);
            alert("All cleared");
        } else if (op == 4) {
            running = false;
            show("Program exited");
            alert("Exit");
        }
    }
}
