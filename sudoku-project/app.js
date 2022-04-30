var numSelected = null;
var tileSelected = null;

var errors = 0 ;


var solution = [
    "826935147",
    "417682953",
    "953174826",
    "794821635",
    "568347291",
    "132569478",
    "341258769",
    "285796314",
    "679413582",
]
var panel= [
    "--69-51-7",
    "4---8-9-3",
    "-----4-2-",
    "-948----5",
    "--8----9-",
    "--25--478",
    "3-1-5---9",
    "28-79----",
    "67--13---",
]

window.onload =function() {
    playgame();
}
function playgame(){
    for (let i =1 ; i<=9; i++){
        let number = document.createElement("div");
        number.id=i
        number.innerText=i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("figure").appendChild(number);
    }

    for(let r=0; r<9; r++){
        for (let c=0; c < 9 ; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(panel[r][c] != "-"){
                tile.innerText= panel[r][c];
                tile.classList.add("tile-start");
            }
            if(r == 2 || r == 5){
                tile.classList.add("horizontal-line");
            }
            if(c==2 || c==5) {
                tile.classList.add("upright-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("panel").append(tile);
        }
    }
}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this ;
    numSelected.classList.add("number-selected");
}

function selectTile(){
    if (numSelected){
        if(this.innerText != ""){
            return;
        }
       
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if(solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
            setTimeout(() => {
                this.classList.remove("success");
            }, 1500);
        }else {
            errors += 1 ;
            document.getElementById("errors").innerText = errors ;
            this.classList.add("danger");
            setTimeout(() => {
                this.classList.remove("danger");
            }, 1500);
        }
        
    }
}