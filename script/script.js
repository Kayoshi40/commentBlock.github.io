let mysubmit = document.querySelector('.comment__container__data__content__text');
let mylike = document.querySelectorAll('.buttonLike');
let commentsContent = document.querySelector('.comment__container__comments__content')
let myForm = document.forms.data;
let submitButton = myForm.elements.buttonSend;


let counter = 0;

function sorting() {
    
    
    for (let i = document.querySelector('.comment__container__comments').children.length; i == 0; i--) {
        let elem = document.querySelector('.comment__container__comments').children[i];
        let nextElem = document.querySelector('.comment__container__comments').children[i - 1];
        alert (elem.querySelector('.invisible').innerHTML);
        if (elem.querySelector('.invisible').innerHTML > nextElem.querySelector('.invisible').innerHTML){
            document.querySelector('.comment__container__comments').insertBefore(elem, nextElem);
        }
    }
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

    // newContent.appendChild(trashButton);
    document.querySelector('.comment__container__comments').appendChild(newContent)


    userName.innerHTML = name.value;

    userDate.innerHTML = dateTime(date);

    dateInv.innerHTML = dateData(date);

    userComment.innerHTML = comment.value;

    likeId = 'like' + counter;
 
    likeImg.setAttribute('id', likeId);

    trashId = 'trash' + counter;

    trashButton.setAttribute('id', trashId)

    deleteContent(idContent, trashId);

    getLike(likeId);

    counter++

}

mysubmit.onkeyup = function(e){
    if (e.keyCode === 13 && !e.ctrlKey) {
        // if(!userName.checkValidity() && !userText.checkValidity()){
        //     userName.reportValidity();
        //     userText.reportValidity();
        // }
        // else{

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
        let userName = myForm.elements.userName;
        let userText = myForm.elements.userText;
        createComment(userName, userDate, userText);
        sorting();
        // document.addEventListener('submit', createComment(userName, userDate, userText));
        // myForm.submit();
    // }
    return true;

}





