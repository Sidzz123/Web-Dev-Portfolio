const theme_toggle=()=>{
const theme_btn= document.querySelectorAll("#theme");

const theme = localStorage.getItem('theme');

theme && document.body.classList.add(theme);

theme_btn.forEach(btn=>{
    btn.addEventListener(('click'),()=>{
        document.body.classList.toggle('light-mode');
        const mode = document.body.classList.contains('light-mode');
        if(mode){
            localStorage.setItem('theme','light-mode');
        }
        else{
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    });
});
}

export default theme_toggle;