let mysubmit = document.querySelector('.comment__container__data__content__text');
let myform = document.querySelector('.comment__container__data__content__name');
let mylike = document.querySelectorAll('.buttonLike');


// let counter = 0;
// let asdf = document.querySelector('.buttonLike');
// let fsad = asdf.getAttribute('id');
// alert(asdf.getAttribute('id'));

// mylike.innerHTML = `<img class="like" src="./image/like2.png" alt="Иконка лайка" id="id${counter}"></img>`;
// let myike = document.querySelector('.like');
// alert(myike.getAttribute('id'))


// var attrs = asdf.attributes; // (4) можно получить коллекцию атрибутов
// for (var i = 0; i < attrs.length; i++) {
//   alert( attrs[i].name + " = " + attrs[i].value );
// }

function sorting() {
    
    
    for (let elem of document.querySelector('.comment__container__data__content')) {
        let dateElem = elem.querySelector('.comment__container__comments__content__date');
        let dateSibling = elem.nextElementSibling.querySelector('.comment__container__comments__content__date');

        if(dateElem.innerHTML < dateSibling.innerHTML){
            elem.nextElementSibling.after(elem);
        }
    }
} 

function createComment(name, date, comment) {

    if (date == null){
        date = new Date()
    }
    else{
        date.setHours(Date.now())
        date.setMinutes(Date.now())
    }
    

}

function like(id) {

    let img = document.getElementById(id)
    let imgSrc = img.getAttribute('src');
    if(imgSrc === 'image/like.png'){
        img.setAttribute('src', 'image/like2.png');
    }
    else{
        img.setAttribute('src', 'image/like.png');
    }

}









mysubmit.onkeyup = function(e){
    if (e.keyCode === 13 && !e.ctrlKey) {
        if(!myform.checkValidity()){

            myform.reportValidity();
        }
        else{

            document.querySelector('.comment__container__data__content').submit() ;
        }

    }
    return true;
}

for (let elem of mylike){
    let id = elem.id;
    
    like(id)
}
