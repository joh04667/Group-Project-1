var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

employees.forEach(s => console.log(totalComp(s)));

function sti(array) {
var bonus = [0,0,0,.04,.06,.1][array[3]];

    if(array[1].length === 4){
      bonus += 0.05;
    }
    if(array[2] > 65000){
      bonus -= 0.01;
    }
    if(bonus > 0.13){
      bonus = 0.13;
    }
    return bonus;
}

function totalComp(name){
  return [name[0], (sti(name) * 100).toString() + '%' , parseInt(name[2]) + (name[2] * sti(name)), Math.round(name[2] * sti(name)) ];
}
