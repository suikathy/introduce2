const $favorite = document.querySelectorAll('favoriteItem');
const movieContainer = document.querySelectorAll('favoriteImgContainer');

const favoriteItem = [
    'ヨルシカ',
    'キタニタツヤ',
    'ツミキ',
    'k4sen',
    'ヴァイオレット・エヴァーガーデン'
];

const text = [
    'コンポーザーのn-bunaと、歌手のsuisによる音楽ユニット。サポートメンバーとしてキタニタツヤも参加している。（つまりヨルシカのライブに行けばキタニも観れるという）自分の好きな曲は「八月、某、月明り」「春泥棒」「ノーチラス」。ヨルシカのライブは神です。',
    '東大卒、ボカロP出身のシンガーソングライター。「青のすみか」でめっちゃ有名になって嬉しみ。Youtubeで定期的に行っている配信「キタニタツヤを開放せよ」がおもろいのでおすすめ。好きな曲は「クラブ・アンリアリティ」「タナトフォビア」「ずうっといっしょ」',
    'とにかくそのメロディセンスが半端ない作曲家。ボカロPだけでなく、NOMELON NOLEMONとしても活動している。ドラムもめっちゃ上手くてかっこいい。好きな曲は「アノニマスファンフアレ」「ビビデバ」「透明水曜日」',
    '主にtwitchで配信をしている大人気ストリーマー。LoLや原神などの配信をしている。2024年10月には単独オフラインイベント「the k4sen con」を成功させ、その持ち前のセンスで様々な面白いイベントを開催している。彼のYouTubeの切り抜きも面白いので是非！',
    '戦うことしか知らなった主人公ヴァイオレットが「愛してる」の意味を探していく、とにかく泣けるアニメ。10話でもれなく泣いた。映像がいい。声優さんも豪華で耳にもいい。劇場版もめちゃくちゃ感動できるので是非。'
];

const movie = [
    '<iframe src="https://www.youtube.com/embed/Sw1Flgub9s8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/pdkXf2Ztunk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/gGGgoW_vgWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/665ESDulm1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/GgyYEf8ZkFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
];

for (let i = 0; i < $favorite.length; i++) {
    $favorite[i].addEventListener('mouseover', () => {
        movieContainer.innerHTML = ''; // 既存の内容をクリア
        movieContainer.insertAdjacentHTML('afterbegin', movie[i]);
        document.querySelectorAll('#favoriteItemname').textContent = favoriteItem[i];
        document.querySelectorAll('#favoriteText').textContent = text[i];
    });
};



console.log(document.querySelectorAll('favoriteItem'));
console.log(document.querySelectorAll('.favoriteImgContainer'));
console.log(document.querySelectorAll('favoriteItemname'));
console.log(document.querySelectorAll('favoriteText'));


console.log($favorite[2]);



// const topImg = document.querySelector('.topImg');

// topImg.onmouseout = function(){
//     this.src = 'image/web集合写真モノクロ.jpg';
// }

// topImg.onmouseover = function(){
//     this.src = 'image/web集合写真.jpg';
// }

// const $favorite = document.getElementsByClassName('favoriteItem');

// const movieContainer = document.getElementsByClassName('favoriteImgContainer');

// const favoriteItem = [
//     'ヨルシカ',
//     'キタニタツヤ',
//     'ツミキ',
//     'k4sen',
//     'ヴァイオレット・エヴァーガーデン'
// ];

// const text = [
//     'コンポーザーのn-bunaと、歌手のsuisによる音楽ユニット。サポートメンバーとしてキタニタツヤも参加している。（つまりヨルシカのライブに行けばキタニも観れるという）自分の好きな曲は「八月、某、月明り」「春泥棒」「ノーチラス」。ヨルシカのライブは神です。',
//     '東大卒、ボカロP出身のシンガーソングライター。「青のすみか」でめっちゃ有名になって嬉しみ。Youtubeで定期的に行っている配信「キタニタツヤを開放せよ」がおもろいのでおすすめ。好きな曲は「クラブ・アンリアリティ」「タナトフォビア」「ずうっといっしょ」',
//     'とにかくそのメロディセンスが半端ない作曲家。ボカロPだけでなく、NOMELON NOLEMONとしても活動している。ドラムもめっちゃ上手くてかっこいい。好きな曲は「アノニマスファンフアレ」「ビビデバ」「透明水曜日」',
//     '主にtwitchで配信をしている大人気ストリーマー。LoLや原神などの配信をしている。2024年10月には単独オフラインイベント「the k4sen con」を成功させ、その持ち前のセンスで様々な面白いイベントを開催している。彼のYouTubeの切り抜きも面白いので是非！',
//     '戦うことしか知らなった主人公ヴァイオレットが「愛してる」の意味を探していく、とにかく泣けるアニメ。10話でもれなく泣いた。映像がいい。声優さんも豪華で耳にもいい。劇場版もめちゃくちゃ感動できるので是非。'
// ];

// const movie = [
//     '<iframe src="https://www.youtube.com/embed/Sw1Flgub9s8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
//     '<iframe  src="https://www.youtube.com/embed/pdkXf2Ztunk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
//     '<iframe  src="https://www.youtube.com/embed/gGGgoW_vgWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
//     '<iframe src="https://www.youtube.com/embed/665ESDulm1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
//     '<iframe  src="https://www.youtube.com/embed/GgyYEf8ZkFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
// ];



// $favorite[0].addEventListener('mouseover' , () => {
//     movieContainer.insertAdjacentHTML('afterbegin', movie[0]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[0];
//     document.querySelector('.favoriteText').textContent = text[0];
// });

// $favorite[1].addEventListener('mouseover' , () => {
//     movieContainer.insertAdjacentHTML('afterbegin', movie[1]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[1];
//     document.querySelector('.favoriteText').textContent = text[1];
// });

// $favorite[2].addEventListener('mouseover' , () => {
//     movieContainer.insertAdjacentHTML('afterbegin', movie[2]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[2];
//     document.querySelector('.favoriteText').textContent = text[2];
// });

// $favorite[3].addEventListener('mouseover' , () => {
//     movieContainer.insertAdjacentHTML('afterbegin', movie[3]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[3];
//     document.querySelector('.favoriteText').textContent = text[3];
// });

// $favorite[4].addEventListener('mouseover' , () => {
//     movieContainer.insertAdjacentHTML('afterbegin', movie[4]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[4];
//     document.querySelector('.favoriteText').textContent = text[4];
// });

// let favoriteIndex = 0;
// let favoriteLength = $favorite.length;

// $favorite[favoriteLength].addEventListener('mouseover' , () =>{

//     while



//     movieContainer.insertAdjacentHTML('afterbegin', movie[favoriteLength]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[favoriteLength];
//     document.querySelector('.favoriteText').textContent = text[favoriteLength];
// });



// while(favoriteIndex < favoriteLength){
//     movieContainer.insertAdjacentHTML('afterbegin', movie[favoriteindex]);
//     document.querySelector('.favoriteItemname').textContent = favoriteItem[favoriteLength];
//     document.querySelector('.favoriteText').textContent = text[favoriteLength];
//     favoriteIndex
    
// }

