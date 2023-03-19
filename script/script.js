

let mysubmit = document.querySelector('.comment__container__data__content__text');
let mylike = document.querySelectorAll('.buttonLike');
let commentsContent = document.querySelector('.comment__container__comments__content')
let myForm = document.forms.data;
let submitButton = myForm.elements.buttonSend;
let list = document.querySelector('.comment__container__comments')


let counter = 0;


let sortList = (list) => {

    let listElem = Array.prototype.slice.call(list.children);

    let sortedListElem = listElem.sort(function(a, b) {
        return (+b.querySelector('.invisible').innerHTML) - (+a.querySelector('.invisible').innerHTML);
    })

    list.innerHTML = '';
    sortedListElem.forEach(function(el) {
        list.appendChild(el)
    });
}


function deleteContent(id1,id2){
    document.getElementById(`${id2}`).onclick = function(){
        document.getElementById(id1).remove();
    }

}

function getLike(id){
    document.getElementById(`${id}`).onclick = function(){
        let imgSrc = document.getElementById(`${id}`).src;
        if ( imgSrc.includes('image/like.png')){
            document.getElementById(`${id}`).src = './image/like2.png'
        }
        else{
            document.getElementById(`${id}`).src = './image/like.png'
        }
    }
}

function autoForm(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

function dateData(date){

    if (date.value == 0 || date.value == null || date.value == undefined){
        date = new Date(Date.now());
        return date.getTime() / 1000

    }

    else{

        date = new Date(Date.parse(date.value))
        return date.getTime() / 1000
    }
}

function dateTime(date)
{
    if (date.value == 0 || date.value == null || date.value == undefined){
        date = new Date(Date.now());
        let hours = autoForm(date.getHours());
        let minutes = autoForm(date.getMinutes());
        return "Сегодня " +hours+':'+minutes;

    }

    else{

        date = new Date(Date.parse(date.value))
        dateNow = new Date(Date.now());

        if(date.setHours(0,0,0,0) == dateNow.setHours(0,0,0,0)){
            
            dateNow = new Date(Date.now());

            let hours = autoForm(dateNow.getHours());
            let minutes = autoForm(dateNow.getMinutes());
            return "Сегодня " +hours+':'+minutes;
        }
        else if(date.setHours(0,0,0,0) - dateNow.setHours(0,0,0,0) == 86400000){

            dateNow = new Date(Date.now());

            let hours = autoForm(dateNow.getHours());
            let minutes = autoForm(dateNow.getMinutes());
            return "Вчера " +hours+':'+minutes;
        }
        else{

            dateNow = new Date(Date.now());

            var day = autoForm(date.getDate());
            var month = autoForm(date.getMonth()+1);
            var year = date.getFullYear();
            var hours = autoForm(dateNow.getHours());
            var minutes = autoForm(dateNow.getMinutes());

            return day+"."+month+"."+year+" "+hours+":"+minutes;
        }
    }
}


function createComment(name, date, comment) {

    
    let newContent = commentsContent.cloneNode(true);
    newContent.setAttribute('id',`content${counter}`);
    let idContent = newContent.id;
    

    let userName = newContent.querySelector('.comment__container__comments__content__userName');
    let userDate = newContent.querySelector('.comment__container__comments__content__date');
    let userComment = newContent.querySelector('.comment__container__comments__content__comment');
    let likeImg = newContent.querySelector('.like');
    let trashButton = newContent.querySelector('.buttonDelete');
    let dateInv = newContent.querySelector('.invisible')

    document.querySelector('.comment__container__comments').appendChild(newContent)


    userName.innerHTML = name.value;

    userDate.innerHTML = dateTime(date);

    dateInv.innerHTML = dateData(date);

    userComment.innerHTML = comment.value;

    let likeId = 'like' + counter;
 
    likeImg.setAttribute('id', likeId);

    let trashId = 'trash' + counter;

    trashButton.setAttribute('id', trashId)

    deleteContent(idContent, trashId);

    getLike(likeId);

    sortList(list);

    counter++

}

mysubmit.onkeyup = function(e){
    if (e.keyCode === 13 && !e.ctrlKey) {
        if (mysubmit.value.trim() == ''){
            mysubmit.value = '';
            mysubmit.reportValidity();
        }
        else{
            submitFunc();
            mysubmit.value = '';
        }

    }
    return false;
}

let submitFunc = function(){
    let userDate = myForm.elements.userDate;
    let userName = myForm.elements.userName;
    let userText = myForm.elements.userText;
    if(!userName.checkValidity() || !userText.checkValidity()){
        userName.reportValidity();
        userText.reportValidity();
    }
    else{
        createComment(userName, userDate, userText);
        return false;
    }
    return false;

}









