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
               // Prendiamo dal DOM la selezione della difficoltà    
            const gameDifficulty = document.getElementById("difficulty");
                // Prendiamo il Bottone Dal DOM 
            const play =document.getElementById("play");  
            
            
            // Creiamo l'elemento 
            // const element = document.createElement("div");
            // // Aggiungiamo una classe 
            // element.classList.add("my-square"); 
            // // Inseriamolo nel DOM
            // domGrid.appendChild(element); 
            
            //Creaimo l'elemento div con funzione 
            function createGrid() { 
                // Creazione elemento "div"
                const element = document.createElement("div"); 
                // Aggiunta classe
                element.classList.add("my-square"); 
                return element;
            };
            
            

            play.addEventListener("click", function(){ 
                domGrid.innerHTML="";
                if(gameDifficulty.value === "easy"){
                    for(let i = 0; i < 100; i ++){ 
                        // Singolo quadrato 
                        const singleSquare = createGrid(); 
                        // Aggiungiamo un evento  
                        singleSquare.addEventListener("click", function(){ 
                        // Aggiungiamo la classe 
                        singleSquare.classList.toggle("bg-warning");
                        console.log(singleSquare); 
                        })
                        // Inseriamo gli elementi nel DOM
                        domGrid.appendChild(singleSquare);
        
                    }

                    } else if(gameDifficulty.value === "medium"){
                        for(let i = 0; i < 80; i ++){ 
                            // Singolo quadrato 
                            const singleSquare = createGrid(); 
                            // Aggiungiamo un evento  
                            singleSquare.addEventListener("click", function(){ 
                            // Aggiungiamo la classe 
                            singleSquare.classList.toggle("bg-warning");
                            console.log(singleSquare); 
                            })
                            // Inseriamo gli elementi nel DOM
                            domGrid.appendChild(singleSquare);
            
                        }
                    } else{
                            for(let i = 0; i < 40; i ++){ 
                                // Singolo quadrato 
                                const singleSquare = createGrid(); 
                                // Aggiungiamo un evento  
                                singleSquare.addEventListener("click", function(){ 
                                // Aggiungiamo la classe 
                                singleSquare.classList.toggle("bg-warning");
                                console.log(singleSquare); 
                                })
                                // Inseriamo gli elementi nel DOM
                                domGrid.appendChild(singleSquare);
                
                            }   
                    }
            });