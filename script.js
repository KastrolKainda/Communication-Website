// code for news read more section 
function showMore() {
  const content = document.querySelector('.more-content');
  const button = document.querySelector('button');
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
  button.textContent = content.style.display === 'none' ? 'Read More' : 'Read Less';
}


const parentcontainer = document.querySelector('.read-more-container');

parentcontainer.addEventListener('click', event=>{

  const current = event.target;

  const isReadMore = current.className.includes('read-more-btn');

  if(!isReadMore) return;

  const currentText = event.target.parentNode.querySelector('.read-more-text');

  currentText.classList.toggle('read-more-text--show');

  current.textcontent = current.textcontent.includes('read more') ?
  "Read Less..." : "Read More";
})

//news section codes 
function news_Selection(){

}