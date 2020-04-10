const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const firstnew = document.querySelectorAll('nav a')
 firstnew.forEach((element,i) => {
  element.textContent = siteContent.nav['nav-item-' + (i + 1)]
  element.style.color = 'green'
  })
  const newvar = document.createElement('h1')
  document.body.appendChild(newvar)
  newvar.textContent= 'APPEND CHILD ADD ON'

  const secondvar = document.createElement('h1')
  document.body.prepend(secondvar)
  secondvar.textContent = 'PREPEND CHILD ADD ON'

const newimg = document.querySelector ('.logo')
newimg.src = siteContent.nav["img-src"]
console.log(newimg)

const Domawe = document.querySelector ('.cta-text h1')
Domawe.textContent = siteContent.cta.h1

const buttony = document.querySelector('.cta-text button')
buttony.textContent = siteContent.cta.button

const imgy = document.querySelector('#cta-img')
imgy.src = siteContent.cta['img-src']

const firstone = document.querySelector('.text-content h4')
firstone.textContent = siteContent["main-content"]["features-h4"]

const firstonetwo = document.querySelector('.text-content p')
firstonetwo.textContent = siteContent["main-content"]["features-content"]

const secondh = document.querySelector('.text-content:nth-child(2) h4')
secondh.textContent=siteContent['main-content']["about-h4"]

const third = document.querySelector('.text-content:nth-child(2) p')
third.textContent=siteContent["main-content"]['about-content']

const nextimg = document.querySelector('#middle-img')
nextimg.src = siteContent["main-content"]["middle-img-src"]

const fourth = document.querySelector('.text-content:nth-child(3) h4')
fourth.textContent=siteContent["main-content"]['services-h4']

const fourthone = document.querySelector('.text-content:nth-child(3) p')
fourthone.textContent=siteContent["main-content"]["services-content"]

const fifthone = document.querySelector('.bottom-content .text-content h4')
fifthone.textContent=siteContent["main-content"]["product-h4"]

const fifthtwo = document.querySelector('.bottom-content .text-content p')
fifthtwo.textContent=siteContent["main-content"]["product-content"]

const six = document.querySelector('.bottom-content .text-content:nth-child(2) h4')
six.textContent=siteContent["main-content"]["vision-h4"]

const sixtw = document.querySelector('.bottom-content .text-content:nth-child(2) p')
sixtw.textContent=siteContent["main-content"]["vision-content"]

const contact = document.querySelector('.contact h4')
contact.textContent=siteContent["contact"]["contact-h4"]

const add = document.querySelector('.contact p')
add.textContent=siteContent["contact"]["address"]

const num = document.querySelector('.contact p:nth-child(3)')
num.textContent=siteContent["contact"]["phone"]

const email = document.querySelector('.contact p:nth-child(4)')
email.textContent=siteContent["contact"]["email"]

const foot = document.querySelector('footer p')
foot.textContent=siteContent["footer"]["copyright"]