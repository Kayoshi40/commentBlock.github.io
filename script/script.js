let mysubmit = document.querySelector('.comment__container__data__content__text');
let mylike = document.querySelectorAll('.buttonLike');
let commentsContent = document.querySelector('.comment__container__comments__content')
let myForm = document.forms.data;

let userDate = myForm.elements.userDate;
let userText = myForm.elements.userText;
let submitButton = myForm.elements.buttonSend;


let counter = 0;
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
    
    
    for (let elem of document.querySelector('.comment__container__comments')) {
        let dateElem = elem.querySelector('.comment__container__comments__content__date');
        let dateSibling = elem.nextElementSibling.querySelector('.comment__container__comments__content__date');

        if(dateElem.innerHTML < dateSibling.innerHTML){
            elem.nextElementSibling.after(elem);
        }
    }
} 

function deleteContent(elem){

    elem.parentElement.remove();
}

function like(id) {

    let img = document.getElementById(id)
    let imgSrc = img.getAttribute('src');
    if(imgSrc === './image/like.png'){
        img.setAttribute('src', './image/like2.png');
    }
    else{
        img.setAttribute('src', './image/like.png');
    }

}


function createComment(name, date, comment) {

    date = date.getAttribute('value');

    let currentDate = new Date(date)
    if (currentDate == null){
        currentDate = new Date()
    }
    else{
        currentDate.setHours(new Date().getTime());
    }

    let dateNull = currentDate.setHours(0,0,0,0);
    let NewDateNull = (new Date()).setHours(0,0,0,0);
    
    if ((NewDateNull - dateNull) == 0){

        currentDate = 'Сегодня ' + currentDate.getHours() + currentDate.getMinutes(); 
    }
    else if((NewDateNull - dateNull) == 86400000){
        currentDate = 'Вчера ' + currentDate.getHours() + currentDate.getMinutes();
    }

    
    let newContent = commentsContent.cloneNode(true);
    newContent.getAttribute('id',`content${counter}`)

    let userName1 = newContent.querySelector('comment__container__comments__content__userName');
    let userDate = newContent.querySelector('comment__container__comments__content__date');
    let userComment = newContent.querySelector('comment__container__comments__content__comment');
    let like = newContent.querySelector('buttonLike');
    let likeImg = newContent.querySelector('like');
    let trash = newContent.querySelector('buttonTrash');

    userName1.innerHTML = name;

    userDate.innerHTML = currentDate.toString;

    userComment.innerHTML = comment.value;

    likeId = 'like' + counter;
 
    likeImg.getAttribute('id', likeId);

    trash.onclick = deleteContent(trash);
    
    like.onclick = like(likeId)

    counter++

}

mysubmit.onkeyup = function(e){
    if (e.keyCode === 13 && !e.ctrlKey) {
        // if(!userName.checkValidity() && !userText.checkValidity()){
        //     userName.reportValidity();
        //     userText.reportValidity();
        // }
        // else{

            document.addEventListener('submit', createComment(userName, userDate, userText));
            document.querySelector('.comment__container__data__content').submit() ;
        // }

    }
    return true;
}

submitButton.onclick = function(){
    // if(!userName.checkValidity() && !userText.checkValidity()){
    //     userName.reportValidity();
    //     userText.reportValidity();
    // }
    // else{

        let userDate = myForm.elements.userDate;
        let userName = document.querySelector('.invisible').innerHTML;
        let userText = myForm.elements.userText;
        createComment(userName, userDate, userText);
        // document.addEventListener('submit', createComment(userName, userDate, userText));
        // myForm.submit();
    // }
    return true;

}




