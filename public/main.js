async function init(){
    let rustApp = null;

    try{
        rustApp = await import('../pkg');
    }catch(err){
        console.error(err);
    }

    console.log(rustApp);

    const input = document.getElementById('upload');
    const fileReader = new FileReader();
    fileReader.onloadend = ()=>{
        const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/,'');
       
        let image_data = rustApp.grayscale(base64);
        document.getElementById('new-img').setAttribute(
            'src',image_data
        );

    };

    input.addEventListener('change', ($event)=> {
        fileReader.readAsDataURL($event.target.files[0]);
    })
}

init();