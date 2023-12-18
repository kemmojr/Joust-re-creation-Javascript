export function modal() {
    
    const rules = document.querySelector('button.btn.btn-success');
    
    
    rules.addEventListener('click', () => {
       show();
    });
}

function show() {
    const modal = document.querySelector('dialog');
    const close = document.getElementById('close');
    modal.showModal();

    // document.addEventListener('click', (e) =>  {
    //     const dimensions = modal.getBoundingClientRect();

    //     if (dimensions.top < e.clientY || dimensions.left > e.clientX ||
    //         dimensions.bottom > e.clientY || dimensions.right < e.clientX) {
    //             modal.close();
    //             modal.removeEventListener('click', this);
    //         }
    // });

    // close.addEventListener('click', () => {
    //     modal.close();
    //     close.removeEventListener('click', this);
    // });
}



