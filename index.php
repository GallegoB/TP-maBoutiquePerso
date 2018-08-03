<?php
include ("head.php");

?>
          
          <div id="divBandeau">
          <?php for($k=0 ; $k<2 ; $k++) {
          echo ('<div id="divImg'.$k.'"></div>'); 
          }
          ?>
          </div>
          
          <div id="divIdent">
          <div id="divTextIdent">          
          <div class="petitTitre">Déja client<br /></div> <br />
          <div class="petitText">
            login : <input id="txtLogin" type="text" maxlength="20" size="10" class="petitText" /><br />
            mdp : <input id="pwdMdp" type="password" maxlengh="20" size="4" class="petitText" />
          <input id="cmdOk" type="button" class="petitText" size="2" value="ok" /> <br />
          </div> </div>
           <div id="divTextBienvenu">          
          <div class="petitTitre">Bienvenue<br /></div> <br />
          <div class="petitText">
            bonjour<label id="lblLogin"></label><br /><br />
            <a href="#" id="aDeconnecter">se déconnecter</a>
          </div> </div>
          </div>
          
          <div id="divNews"><div id="divImgNews" ></div><div id="divTextNews" class="petitText">
          <?php 
          $lesnews = new XMLReader() ;
          $lesnews->open("xml/news.xml") ;
          $message = "" ;
          while ($lesnews->read()) {
            if ($lesnews->nodeType==XMLReader::ELEMENT) {
              switch ($lesnews->localName) {
                case "item" :
                  echo $message ;
                  $message = "" ; 
                  break ;
                case  "title" :
                  $message.="<strong>".utf8_decode($lesnews->readInnerXML())."</strong><br />" ;
                  break;
                case "description" :
                  $message.= utf8_decode($lesnews->readInnerXML())."<br /><br />" ;
                  break ;
                case "pubDate" :
                  $message.=date_format(date_create($lesnews->readInnerXML()), "d/m/Y").":" ;
                  break ;                  
              }
            }
          }
          ?>
          </div></div> 
          
          <div id="divPostits">
          <?php
          $tabPostit = array("tshirt" => "t-shirt personalisé", 
                              "boutique" => "boutique",
                              "panier" => "votre panier",
                              "espace perso" => "votre espace perso") ;
          $k = 1 ;
          
           foreach ($tabPostit as $cle => $valeur) {
            echo '<div id="divPostit'.$k.'" class="divPostit petitTitre">' ;
            echo '<img src="images/menu'.$k.'.png" alt="'.$cle.'" />' ;
            echo $valeur.'</div>' ;
            $k++ ;
           }                 
          
          ?>
          
          </div>
          
          <div id="divLiens"><div id="divTextLiens">
          <div class="petitTitre">mes liens favoris</div><br />
             <div class="petitText">
            <a href="http://www.meteofrance.com">Météo France : les meilleures prévisions</a><br />
            <a href="http://www.horlogeparlante.com">Horloge parlante : soyez à l'heure</a>
            </div>
          </div></div>
          
<?php
include ("foot.php");
?>
