const gameContainer=document.getElementById('gameContainer')
const resultContainer=document.getElementById('resultContainer')
const repeat=()=>{
  let win=false
  gameContainer.innerHTML=
  `
  <div class="row">
    <div class="element">
    </div>
    <div class="element">
    </div>
    <div class="element">
    </div>
  </div>
  <div class="row">
    <div class="element">
    </div>
    <div class="element">
    </div>
    <div class="element">
    </div>
  </div>
  <div class="row">
    <div class="element">
    </div>
    <div class="element">
    </div>
    <div class="element">
    </div>
  </div>`

const classname=document.getElementsByClassName('element')
 let newarray= Array.prototype.slice.call(classname)
const myarray=[[0,1,2],[3,4,5],[6,7,8]]
const available =[0,1,2,3,4,5,6,7,8]
newarray.forEach(function(element) {
  element.id=newarray.indexOf(element)

  element.addEventListener('click', e=>{
    if ( e.target.textContent!=='X'&&e.target.textContent!=='O') {

    e.target.textContent='X'

writer(Number(e.target.id),'X',myarray)
if (available.length==0) {
  resultContainer.style.display='flex'

  resultContainer.innerHTML='<img src="https://ih0.redbubble.net/image.53610257.5292/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u2.jpg" alt=""><button type="button" name="button" id="playagain">play again</button>'
  gameContainer.style.display='none'
  const playagain=document.getElementById('playagain')
  playagain.addEventListener('click',deleteing)
}

find3(myarray)
let newO=Math.ceil(Math.random()*available.length-1);

setTimeout(()=>{
if (!win) {
  findEmpty(myarray,r=>{
    if (r&&r!=-1) {

      document.getElementById(r).textContent='O'
      writer(r,'O',myarray)
      return
    }else {
      document.getElementById(available[newO]).textContent='O'
      writer(available[newO],'O',myarray)

    }
  })



  find3(myarray)
}

},500)

}
  });
});




const classes=(str)=>{
  for (var i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
      if (myarray[i][j]==str) {

        document.getElementById(i*3+j).classList.add('win')
        setTimeout(()=>{
          resultContainer.style.display='flex'

          if (str=='XX') {
            resultContainer.innerHTML='<img src="https://ih1.redbubble.net/image.7380308.0915/sticker,375x360-bg,ffffff.png" alt=""><button type="button" name="button" id="playagain">play again</button>'
          }else{
            resultContainer.innerHTML='<img src="https://ih0.redbubble.net/image.53610257.5292/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u2.jpg" alt=""><button type="button" name="button" id="playagain">play again</button>'

          }
          const playagain=document.getElementById('playagain')
          playagain.addEventListener('click',deleteing)
          gameContainer.style.display='none'
        },1000)

      }
    }
  }
}
const writer=(id,str,array)=>{
  for (var i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
      if(array[i][j]==id){
        array[i][j]=str

        available.splice(available.indexOf(i*3+j),1)

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
       win=true
    }else if (firstarray[0]=='O'&&firstarray[1]=='O'&&firstarray[2]=='O') {
      console.log(2);
      array[array.indexOf(firstarray)]=['OO','OO','OO']
      classes('OO')
      win=true
    }
    else if (array[0][array.indexOf(firstarray)]=='X'&&array[1][array.indexOf(firstarray)]=='X'&&array[2][array.indexOf(firstarray)]=='X') {
      console.log(3,array.indexOf(firstarray));
      array[0][array.indexOf(firstarray)]='XX'
      array[1][array.indexOf(firstarray)]='XX'
      array[2][array.indexOf(firstarray)]='XX'
      classes('XX')
      win=true
    }else if (array[0][array.indexOf(firstarray)]=='O'&&array[1][array.indexOf(firstarray)]=='O'&&array[2][array.indexOf(firstarray)]=='O') {
      console.log(4);
      array[0][array.indexOf(firstarray)]='OO'
      array[1][array.indexOf(firstarray)]='OO'
      array[2][array.indexOf(firstarray)]='OO'
      classes('OO')
      win=true

    }else if (array[0][0]=='X'&&array[1][1]=='X'&&array[2][2]=='X') {
      console.log(5);
      array[0][0]='XX'
      array[1][1]='XX'
      array[2][2]='XX'
      classes('XX')
      win=true
    }else if (array[0][2]=='X'&&array[1][1]=='X'&&array[2][0]=='X') {
      console.log(6);
      array[0][2]='XX'
      array[1][1]='XX'
      array[2][0]='XX'
      classes('XX')
      win=true

    }else if (array[0][0]=='O'&&array[1][1]=='O'&&array[2][2]=='O') {
      console.log(7);
      array[0][0]='OO'
      array[1][1]='OO'
      array[2][2]='OO'
      classes('OO')
      win=true
    }else if (array[0][2]=='O'&&array[1][1]=='O'&&array[2][0]=='O') {
      console.log(8);
      array[0][2]='OO'
      array[1][1]='OO'
      array[2][0]='OO'
      classes('OO')
      win=true

    }
  })
}
}

repeat()

function deleteing(){
  gameContainer.innerHTML=''
  gameContainer.style.display='flex'
  resultContainer.style.display='none'
  repeat()
}


function findInRow(array,cb){
    array.forEach(row=>{
      let  counter=0
      let empty=''
      row.forEach(el=>{
        if (el=='X') {
          counter++
        }else {
          empty=el
        }
      })
      if (counter==2&&empty!='O') {
        cb(empty)
        return
      }

    })
    return cb(null)
}

const findEmpty=(array,cb)=>{
  let mm=-1
    findInRow(array,(r)=>{
      if (r) {
        mm=r
        return
      }
      else{

        let newar=  [[array[0][0],array[1][0],array[2][0]],[array[0][1],array[1][1],array[2][1]],[array[0][2],array[1][2],array[2][2]]]
        findInRow(newar,(r)=>{
          if (r) {
            mm=r
            return
          }else{
            let newarr2=[[array[0][0],array[1][1],array[2][2]],[array[0][2],array[1][1],array[2][0]]]
            findInRow(newarr2,(r)=>{
              if (r) {
                console.log(111,r);
                mm=r
                return
              }
            })

          }
        })

      }
    })
    cb(mm)

    }
