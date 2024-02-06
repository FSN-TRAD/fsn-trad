//delete for normal access to website
//redirect to new website
window.location.replace("https://fsn-trad.holofield.fr/")

//print the following divs on the page
const extension = 'html'

document.getElementById("headerContainer").innerHTML = `
<div id="header-boxPlaceholder"></div>

<header id="header-box">
  <nav>
    <ul>
      <a href="./" id="link_home">
        <picture>
          <source srcset="images/logo_fsn-trad_small.webp" type="image/webp">
          <source srcset="images/logo_fsn-trad_small.jpg" type="image/jpg"> 
          <img id="logo_home" src="images/logo_fsn-trad_small.webp" alt="Logo FSN-TRAD">
        </picture>
      </a>
      <li class="hover-container"><a href="./progression.${extension}" class="hover-title">Progression</a></li>
      <li class="hover-container"><a href="./patch.${extension}" class="hover-title">Patch</a></li>
      <li class="hover-container"><a href="./faq.${extension}" class="hover-title">FAQ</a></li>
      <li class="hover-container"><a href="./a_propos.${extension}" class="hover-title">À propos</a></li>
    </ul>
  </nav>

  <noscript>
    <div class="noscript">
      <p>Vous devez activer JavaScript pour le bon fonctionnement de ce site.</p>
    </div>
  </noscript>
</header>
`


heightHeader()
window.addEventListener('resize', heightHeader)

function heightHeader() {
  //set the height of the header box placeholder to the height of the header box
  let headerHeight = document.getElementById('header-box').getBoundingClientRect().height + 'px'
  document.getElementById('header-boxPlaceholder').style.height = headerHeight

  //set the height to the css var --header-height
  document.documentElement.style.setProperty('--header-height', headerHeight)
}
