function ageInDays(){
var birthYear = prompt('What year were you born');
var ageInDayss = (2018-birthYear) * 365;
var h1 =document.createElement('h1');
var textAnswer = document.createTextNode('You Are' +  ageInDayss +  'days old')
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);

}
function reset(){
    document.getElementById('ageInDays').remove();
}