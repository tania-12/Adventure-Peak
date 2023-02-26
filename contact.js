const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const header1 = document.getElementById('header1')
const title1 = document.getElementById('title1')
const excerpt1 = document.getElementById('excerpt1')
const header2 = document.getElementById('header2')
const title2 = document.getElementById('title2')
const excerpt2 = document.getElementById('excerpt2')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="assets/courses.jpg" alt="courses" />'
  title.innerHTML = 'Courses'
  excerpt.innerHTML =
    'Come learn more about our courses'
    header1.innerHTML =
    '<img src = "assets/programs.jpg" alt = "programs">'
  title1.innerHTML = 'Programs'
  excerpt1.innerHTML =
    'Come learn more about our programs'
    header2.innerHTML =
    '<img src = "assets/questions.jpg" alt = "questions">'
  title2.innerHTML = 'FAQ'
  excerpt2.innerHTML =
    'Still have more questions?'


  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}