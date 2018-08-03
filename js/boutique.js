// JavaScript Document

//--- défilement horizontal d'un tableau d'images ---
function animImages(idImage1, idImage2, tabImages){
   // fonction récursive de défilement des images
  function goAnime() {
    img[imgActive].style.width = largeur + "px" ;
    largeur -=  5 ;
    if (largeur <= 0) {
      // changement d'image
      numImage = (numImage + 1) % maxImages ;
      img[imgActive].style.backgroundImage = "url("+tabImages[numImage].src+")" ;
      // inversion dans le plan des images
      img[imgActive].style.zIndex = 1 ;
      img[imgActive].style.width = maxTaille + "px" ;
      imgActive = (imgActive + 1) % 2 ;
      img[imgActive].style.zIndex = 2 ;
      // redémarrage à la taille maximale
      largeur = maxTaille ;
      // pause avant de diminuer l'image
      setTimeout(goAnime, pause) ;
    }else{
      // continue l'animation
      setTimeout(goAnime, temps) ;
    }
  }
  
  // déclarations 
  var numImage = 0 ;
  var maxImages = tabImages.length ;
  var img = new Array() ;
  img[0] = document.getElementById(idImage1) ;
  img[1] = document.getElementById(idImage2) ;
  img[1].style.backgroundImage = "url("+tabImages[0].src+")" ;
  var maxTaille = tabImages[0].width ;
  var largeur = 0 ;
  var imgActive = 0 ;
  var temps = 1 ;
  var pause = temps * 2000 ;
  
  // démarrage de l'animation
  goAnime() ;
}

//--- chargement en mémoire d'un tableau d'images ---
function chargeImages(tabNoms){
  var lesImages = new Array(tabNoms.length) ;
  for (k=0 ; k<tabNoms.length ; k++) {
    lesImages[k] = new Image() ;
    lesImages[k].src = tabNoms[k] ;
  }
  return lesImages ;
}

//--- dimensionnement et positionnement du navigateur ---
function dimposNavigateur(idCalquePrincipal, marge){
 var margeNavigateur = 100 ;
  var calque = document.getElementById(idCalquePrincipal) ;
  var hCalque = calque.offsetHeight ;
  var lCalque = calque.offsetWidth ;
  var hEcran = screen.availHeight ;
  var lEcran = screen.availWidth ;
 
  var y = Math.max(0, hEcran - hCalque - 2*marge - margeNavigateur)/2 ;
  var x = Math.max(0, lEcran - lCalque - 2*marge)/2 ;
  
  var hauteur = Math.min(hEcran, hCalque + 2*marge + margeNavigateur) ;
  var largeur = Math.min(lEcran, lCalque + 2*marge) ;
  
  moveTo(x, y) ;
  resizeTo(largeur, hauteur) ;
}

//--- défilement ---
function defile(idContenu, idConteneur, temps){
  var leContenu = document.getElementById(idContenu) ;   
  var leConteneur = document.getElementById(idConteneur) ;
  var hContenu = leContenu.offsetHeight ;
  var min = leContenu.offsetTop ;
  var max = leConteneur.offsetHeight ;
  var position = max ;
  var page = 0;
  var leTimer ;
  
  function go(){
    position-- ;
    if(position+hContenu < min ){
        position = max;
        page = 0 ;
    }
    leContenu.style.top = position + "px" ;
    if(position+(max-min)*page <= min){
      page++ ;
      leTimer = setTimeout (go, temps*100) ;
    }else{
      leTimer = setTimeout (go, temps) ;
    }   
    
  }     
  go();
  leConteneur.onmouseover = function(){
    clearTimeout(leTimer);
  }
}

window.onload = function() {

  //--- récupération du nom de la page active ---
  var url = (document.location.href).split("/") ;
  var mapage = (url[url.length-1].split("."))[0] ;

  //--- appel de la fonction correspondant à chaque page ---
  switch (mapage) {
    case "index" : index () ; break ;
    case "perso" : perso () ; break ;
    case "boutique" : boutique () ; break ;
    case "tshirt" : tshirt () ; break ;
    
  
  
  /renvisible si javascrip est activer
   document.getElementById("divNews").style.overflow = "hidden" ;

  document.getElementById("cmdOk").onclick = function() {
    if(document.getElementById("txtLogin").value=="" || document.getElementById("pwdMdp").value==""){
      alert("les 2 champs doivent être remplis");
    }else{
      document.getElementById("divTextIdent").style.visibility = "hidden" ;
      document.getElementById("divTextBienvenu").style.visibility = "visible" ;
    }

  }
  defile ("divTextNews", "divNews", 10);
  //--- sur le clic du lien deconnecter ---
  document.getElementById("aDeconnecter").onclick = function() {
    document.getElementById("divTextIdent").style.visibility = "visible" ;
    document.getElementById("divTextBienvenu").style.visibility = "hidden" ;
  }
  
  defile ("divTextNews", "divNews", 10);
   //--- redimensionnement de la fenetre ---
  //dimposNavigateur ("divPrincipal", 50) ;
    
  //--- préparation pour le défilement des images dans le bandeau ---
  function imageBandeau () {
    var cheminImages = "images/" ;
    var nbImages = 4 ;
    var tabNomsImages = new Array(nbImages) ;
    for (k=0 ; k<nbImages ; k++) {
      tabNomsImages[k] = cheminImages+"bandeau"+k+".jpg" ;
    }
    var lesImages = chargeImages(tabNomsImages) ;
    lesImages[lesImages.length-1].onload = function() {
      animImages("divImg0", "divImg1", lesImages) ;
    }
  }
  imageBandeau () ;
}