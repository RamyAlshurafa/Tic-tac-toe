const classname=document.getElementsByClassName('element')
 let newarray= Array.prototype.slice.call(classname)
const myarray=[[0,1,2],[3,4,5],[6,7,8]]
const available =[0,1,2,3,4,5,6,7,8]
newarray.forEach(function(element) {
  console.log(newarray.indexOf(element));
  element.id=newarray.indexOf(element)

  // console.log(element);
  element.addEventListener('click', e=>{
    e.target.textContent='X'
    // console.log(e.target.id);
writer(Number(e.target.id),'X',myarray)
let newO=Math.ceil(Math.random()*available.length-1);
// console.log(newO,'newO');
// console.log(available[newO],'available[newO]');
find3(myarray)

setTimeout(()=>{
  document.getElementById(available[newO]).textContent='O'
  writer(available[newO],'O',myarray)
  find3(myarray)

},500)
// console.log(available[newO],'(available.indexOf(Number(newO))');
// console.log(myarray);
// e.target.textContent="X";
// writer(Number(e.target.id),'X',myarray)
// console.log(newO,'newO');
// console.log(available[newO],'available[newO]');
// // console.log(available,'available');
// // console.log(newO,'hihihihihi');
//
// writer(available[newO-1],'O',myarray)

// console.log(newarray.slice(newarray.indexOf(element)));

// console.log(newarray[]);
// console.log(sliced);
  });
});
// const classes=(str)=>{
//   newarray.forEach(element=>{
//     console.log(element);
//       if (element.id==str) {
//   }
//
//   })
// }




const classes=(str)=>{
  for (var i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
      if (myarray[i][j]==str) {
        console.log(  myarray[i][j]);
        document.getElementById(i*3+j).classList.add('win')
      }
    }
  }
}
const writer=(id,str,array)=>{
  for (var i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
      if(array[i][j]==id){
        array[i][j]=str
        // console.log((i*3+j));

        // available.splice(i*3+J)
        // console.log(available,'11111111111');
        available.splice(available.indexOf(i*3+j),1)
        // console.log(available,'2222222222');

        // console.log(id,str);
        // console.log(available,'available');
        // console.log(available.indexOf(id),'available.indexOf(id)');
        // console.log(array,'myarray');
      }
    }
  }
}
const listOfEmpties=classname
const find3=(array)=>{
  array.forEach(firstarray=>{

    if (firstarray[0]=='X'&&firstarray[1]=='X'&&firstarray[2]=='X') {
      console.log(1);
       array[array.indexOf(firstarray)]=['XX','XX','XX']
       classes('XX')
    }else if (firstarray[0]=='O'&&firstarray[1]=='O'&&firstarray[2]=='O') {
      console.log(2);
      array[array.indexOf(firstarray)]=['OO','OO','OO']
      classes('OO')
    }
    else if (array[0][array.indexOf(firstarray)]=='X'&&array[1][array.indexOf(firstarray)]=='X'&&array[2][array.indexOf(firstarray)]=='X') {
      console.log(3,array.indexOf(firstarray));
      array[0][array.indexOf(firstarray)]='XX'
      array[1][array.indexOf(firstarray)]='XX'
      array[2][array.indexOf(firstarray)]='XX'
      classes('XX')
    }else if (firstarray[0]=='O'&&array[1][array.indexOf(firstarray)]=='O'&&array[2][array.indexOf(firstarray)]=='O') {
      console.log(4);
      array[0][array.indexOf(firstarray)]='OO'
      array[1][array.indexOf(firstarray)]='OO'
      array[2][array.indexOf(firstarray)]='OO'
      classes('OO')

    }else if (array[0][0]=='X'&&array[1][1]=='X'&&array[2][2]=='X') {
      console.log(5);
      array[0][0]='XX'
      array[1][1]='XX'
      array[2][2]='XX'
      classes('XX')
    }else if (array[0][2]=='X'&&array[1][1]=='X'&&array[2][0]=='X') {
      console.log(6);
      array[0][2]='XX'
      array[1][1]='XX'
      array[2][0]='XX'
      classes('XX')

    }else if (array[0][0]=='O'&&array[1][1]=='O'&&array[2][2]=='O') {
      console.log(7);
      array[0][0]='OO'
      array[1][1]='OO'
      array[2][2]='OO'
      classes('OO')
    }else if (array[0][2]=='O'&&array[1][1]=='O'&&array[2][0]=='O') {
      console.log(8);
      array[0][2]='OO'
      array[1][1]='OO'
      array[2][0]='OO'
      classes('OO')

    }
  })
}
