/**
 * L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49
        Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */ 
 
    // Atomicità 
        // 1) Creiamo un solo quadrato e inseriamolo nel DOM 
            // Prendiamo la posizione nel quale andrà inserito l'elemento
            const domGrid = document.getElementById("grid"); 
            const element = document.createElement("div");
            element.classList.add("my-square"); 
            domGrid.appendChild(element);