window.addEventListener('load', () => {
    var menu_frame = document.getElementById('menu_frame');
    var body_frame = document.getElementById('body_frame');

    var music_btn = menu_frame.contentWindow.document.getElementById('music_btn');
    var music_li = body_frame.contentWindow.document.getElementById('music');

    var history_btn = menu_frame.contentWindow.document.getElementById('history_btn');
    var history_li = body_frame.contentWindow.document.getElementById('history');

    var discography_btn = menu_frame.contentWindow.document.getElementById('discography_btn');
    var discography_li = body_frame.contentWindow.document.getElementById('discography');

    var facts_btn = menu_frame.contentWindow.document.getElementById('facts_btn');
    var facts_li = body_frame.contentWindow.document.getElementById('facts');

    music_btn.addEventListener('click', function(){
        music_li.scrollIntoView();
    });

    history_btn.addEventListener('click', function(){
        history_li.scrollIntoView();
    });

    discography_btn.addEventListener('click', function(){
        discography_li.scrollIntoView();
    });

    facts_btn.addEventListener('click', function(){
        facts_li.scrollIntoView();
    });
})