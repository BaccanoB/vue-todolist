// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.
// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.
// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).
// BONUS:
// Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
// Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).

var app = new Vue (
    {
         el:"#root",
         data:{
             toDoList:[
                 {
                    text:"Fai la spesa",
                    completed:false
                 },
                 {
                    text:"Compra il latte",
                    completed:false
                 },
                 {
                    text:"Vai dal meccanico",
                    completed:false
                 },
                 {
                    text:"Fai la lavatrice",
                    completed:false
                 }
             ],
             newItem:{
                 completed:false
             }
         },
         methods:{
            removeItem: function (itemToRemove) {
                this.toDoList.splice(itemToRemove, 1);
            },
            addItem: function () {
                this.toDoList.push(this.newItem);
                this.newItem={};
            }
         }
    }
);