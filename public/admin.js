
function viewshop() {
document.querySelector('.shop').style.display = 'block';
document.querySelector('.turf').style.display = 'none';
document.querySelector('.stadium').style.display = 'none';
document.querySelector('.signup').style.display = 'none';

document.querySelector('.feedback').style.display = 'none';


}


viewshop()
function viewturf(){
    document.querySelector('.shop').style.display = 'none';
document.querySelector('.turf').style.display = 'block';
document.querySelector('.stadium').style.display = 'none';
document.querySelector('.signup').style.display = 'none';

document.querySelector('.feedback').style.display = 'none';

}
function viewstadium(){
    document.querySelector('.shop').style.display = 'none';
    document.querySelector('.turf').style.display = 'none';
    document.querySelector('.stadium').style.display = 'block';
    document.querySelector('.signup').style.display = 'none';
    
    document.querySelector('.feedback').style.display = 'none';
}
function viewsignup(){
    document.querySelector('.shop').style.display = 'none';
document.querySelector('.turf').style.display = 'none';
document.querySelector('.stadium').style.display = 'none';
document.querySelector('.signup').style.display = 'block';

document.querySelector('.feedback').style.display = 'none';

}
function viewfeedback(){
    document.querySelector('.shop').style.display = 'none';
document.querySelector('.turf').style.display = 'none';
document.querySelector('.stadium').style.display = 'none';
document.querySelector('.signup').style.display = 'none';

document.querySelector('.feedback').style.display = 'block';

}