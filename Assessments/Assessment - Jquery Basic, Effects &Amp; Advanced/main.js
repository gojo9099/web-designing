import { showMenu } from "./menu.js";
import { addNote, viewNotes, clearNotes } from "./notes.js";
import { show } from "./utils.js";

$("#startBtn").on("click", function () {
    openMenu();
});

function openMenu() {
    let choice = showMenu();
    if (choice === null) {
        show("Program cancelled");
        return;
    }

    choice = Number(choice);

    if (isNaN(choice) || choice < 1 || choice > 3) {
        alert("Invalid choice");
        openMenu();
        return;
    }

    if (choice === 1) {
        show(addNote());
        setTimeout(() => {
            alert("Press OK to continue");
            openMenu();
        }, 0);
    }
    else if (choice === 2) {
        show(clearNotes());
        setTimeout(() => {
            alert("Press OK to continue");
            openMenu();
        }, 0);
    }
    else if (choice === 3) {
        show("Program exited");
    }
}
