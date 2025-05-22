const $favorite = document.querySelectorAll('.favoriteItem');
const movieContainer = document.querySelector('.favoriteImgContainer');
const favoriteItemName = document.querySelector('#favoriteItemname');
const favoriteText = document.querySelector('#favoriteText');

const favoriteItem = [
    'ヨルシカ',
    'キタニタツヤ',
    'ツミキ',
    'ヴァイオレット・エヴァーガーデン',
    'アオのハコ',
    'k4sen',
    '橘ひなの'
];

const text = [
    'コンポーザーのn-bunaと、歌手のsuisによる音楽ユニット。サポートメンバーとしてキタニタツヤも参加している。（つまりヨルシカのライブに行けばキタニも観れるという）自分の好きな曲は「八月、某、月明り」「春泥棒」「ノーチラス」。ヨルシカのライブは神です。',
    '東大卒、ボカロP出身のシンガーソングライター。「青のすみか」でめっちゃ有名になって嬉しみ。Youtubeで定期的に行っている配信「キタニタツヤを開放せよ」がおもろいのでおすすめ。好きな曲は「クラブ・アンリアリティ」「タナトフォビア」「ずうっといっしょ」',
    'とにかくそのメロディセンスが半端ない作曲家。ボカロPだけでなく、NOMELON NOLEMONとしても活動している。ドラムもめっちゃ上手くてかっこいい。好きな曲は「アノニマスファンフアレ」「ビビデバ」「透明水曜日」',
    '戦うことしか知らなった主人公ヴァイオレットが「愛してる」の意味を探していく、とにかく泣けるアニメ。10話でもれなく泣いた。映像がいい。声優さんも豪華で耳にもいい。劇場版もめちゃくちゃ感動できるので是非。',
    '少年ジャンプに掲載されている青春恋愛漫画。超久しぶりに恋愛系の漫画を読んだところ、王道な展開がむしろ樫村にぶっ刺さってしまった模様。特に雛の恋模様に来るものがあります。アニメのOPのSame Blueもすごくいいです。',
    '主にTwitchで配信をしているストリーマー。「かせん」と読む。LoLや原神などの配信をしている。2024年10月には単独オフラインイベント「the k4sen con」を成功させ、その持ち前のセンスで様々な面白いイベントを開催している。彼のYouTubeの切り抜きも面白いので是非！',
    'ぶいすぽに所属するVTuver。愛称は「ひなーの」。歌枠や雑談配信が特におすすめ。その豪快な笑い方や、本人の平成好きを感じさせる歌声が魅力。歌ってみたの「ゲレンデがとけるほど恋したい」が良いです。'
];

const movie = [
    '<iframe src="https://www.youtube.com/embed/Sw1Flgub9s8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/pdkXf2Ztunk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/gGGgoW_vgWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/GgyYEf8ZkFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/d0jg9hNHqn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/665ESDulm1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    '<iframe src="https://www.youtube.com/embed/ZGIu8i8-YUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
];

for (let i = 0; i < $favorite.length; i++) {
    $favorite[i].addEventListener('mouseover', () => {
        movieContainer.innerHTML = ''; // 既存の内容をクリア
        movieContainer.insertAdjacentHTML('afterbegin', movie[i]);
        favoriteItemName.textContent = favoriteItem[i];
        favoriteText.textContent = text[i];
    });
};