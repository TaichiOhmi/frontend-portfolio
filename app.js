const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', (e) => {
            // 現在の active-btn を取得
            let currentBtn = document.querySelector('.active-btn');
            if (!e.target.classList.contains('active-btn')){
                // 現在の active-btn から active-btn を取り除く
                currentBtn.classList.remove('active-btn');
                // 押したボタンを active-btn　にする
                e.target.classList.add('active-btn'); 
            }
        })
    }

    // sections active class
    allSections.addEventListener('click', (e) => {
        // dataset は data-id で指定した要素
        // id はそのdatasetのid(home, about, portfolio, blogs, contact)
        const id = e.target.dataset.id;
        if(id){
            // remove selected from the other btns
            // sectBtn.forEach((btn) => {
            //     btn.classList.remove('active')
            // })
            // e.target.classList.add('active')

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();