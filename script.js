console.log("If you're here to scrutinize the logic of my code, reconsider before your head starts hurting.\n\nIt'd be a big mistake trying to read my HTML. My css however... I'm proud of the way I arranged it.\n\nTake a look at my css thru the sources.\n\nSeriously tho, if you just want to take some snippet, fork some js functions, or insepct the code, it's available in my github.\n\nfind it on: https://github.com/Jideeh1 \n\nJust don't complain when you see how messy the directory is. ーｗー \n\nYours truly, Jideeh");

function toggleButton() {
    var collapsedSideBar = document.querySelector('.sidebar');
    var collapsedInfoBox = document.querySelector('.name-occupation');

    collapsedSideBar.classList.toggle('collapsed');
    collapsedInfoBox.classList.toggle('collapsed-infobox');
}