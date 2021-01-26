 function Common(n) {
    let item = document.querySelectorAll('.item');
    for ( i = 0; i < item.length; i++) {
        if (item[i].classList.contains('hidden') === false &&
            item[i].classList.contains('dislike') === false &&
            item[i].classList.contains('like') === false &&
            item[i].classList.contains('super') === false) {
            if (n === 1) {
                DisLike();
            } else if (n === 2) {
                Like();
            } else if (n === 3) {
                SuperLike();
            }
           item[i].classList.add('hidden');
        } else if (item[i].classList.contains('hidden') === true &&
            item[i].classList.contains('dislike') === true ||
            item[i].classList.contains('like') === true ||
            item[i].classList.contains('super') === true) {
            continue;
        } else {
            item[i].classList.remove('hidden');
            break;
        }
    }
    ;
}

 function DisLike() {
    let item = document.querySelectorAll('.item')
    item[i].classList.add('dislike');
    item[i].classList.add('left');
};

 function Like() {
    let item = document.querySelectorAll('.item')
    item[i].classList.add('like');
    item[i].classList.add('right');
};

function SuperLike() {
    let item = document.querySelectorAll('.item')
    item[i].classList.add('super');
};

function Reset() {
    let item = document.querySelectorAll('.item')
    for ( i = 0; i < item.length; i++) {
        item[i].classList.add('hidden');
        item[i].classList.remove('block');
        item[i].classList.remove('like');
        item[i].classList.remove('dislike');
        item[i].classList.remove('super');
    }
    item[0].classList.remove('hidden');
    Previous();
}

function Previous() {
    let prev = document.getElementsByClassName('previous');
    let btn = document.getElementById('arrow')
    prev[0].classList.toggle('hidden1');
    prev[0].classList.toggle('block1');
    btn.classList.toggle('arrow-active');

};

function Hidden() {
    let item = document.querySelectorAll('.item')
    for ( i = 0; i < item.length; i++) {
        item[i].classList.add('hidden');
        item[i].classList.remove('block');
    }
}

function ShowDisLike() {
    Hidden();
    let item = document.querySelectorAll('.item')
    for ( i = 0; i < item.length; i++) {
        if (item[i].classList.contains('dislike')) {
            item[i].classList.remove('hidden')
            item[i].classList.add('block')
        } else {
            continue;
        }
        ;
    }
    ;
}

function ShowLike() {
    Hidden();
    let item = document.querySelectorAll('.item')
    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains('like')) {
            item[i].classList.remove('hidden')
            item[i].classList.add('block')
        } else {
            continue;
        }
        ;
    }
    ;
}

function ShowSuperLike() {
    Hidden();
    let item = document.querySelectorAll('.item')
    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains('super')) {
            item[i].classList.remove('hidden')
            item[i].classList.add('block')
        } else {
            continue;
        }
        ;
    }
    ;
}
