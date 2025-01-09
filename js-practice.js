const question = '樫村の嫌いな食べ物は？';
const answer = [
    'トマト',
    'きのこ',
    'ピーマン',
    'エビ'
];
const correct = 'きのこ';

document.getElementById('question').textContent = question;

const $button = document.getElementsByClassName('button');

let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answer[buttonIndex];
    buttonIndex++;
}

const clickHandler = () => {
    if(correct === ){

    }else{

    }
};  