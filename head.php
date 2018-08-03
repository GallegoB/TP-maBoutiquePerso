 <?php include ("php/init.php"); ?>
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtm111/DTD/xhtm111.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr">
  <head>
  <meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
  <meta name="author" content="Ed" />
  <meta name="keywords" content="boutique, t-shirt" />
  <meta name="destription" content="Vente de t-shirts et objets de collection" />
  <meta name="date" content="2011-12-19T12:10:15+01:00" />
  
  <script type="text/javascript" src="js/boutique.js"></script>
  <noscript>Activez le JavaScript pour visualiser ce site</noscript>
   <link rel="shortcut icon" type="image/x-icon" href="images/boutiqueIcon.ico" />
  <link rel="stylesheet" type="text/css" href="css/cssPrincipal.php" />
  
  <title>Ma Boutique Personnelle</title>
  </head>
  <body>  
          <div id="divPrincipal">
          <div id="divTitre" class="petitText"><?php echo date('d M Y'); ?></div>
          
          <div id="divMenus">
            |<?php espace(2); ?><a href="index.php">accueil</a><?php espace(2); ?>|<?php espace(); ?>
            <a href="tshirt.php">t-shirt personnalisé</a><?php espace(2); ?>|<?php espace();  ?>
            <a href="boutique.php">boutique</a><?php espace(2); ?>|<?php espace(2);  ?>
            <a href="panier.php">votre panier</a><?php espace(2); ?>|<?php espace(2); ?>
            <a href="perso.php">votre espace perso</a><?php espace(2); ?>|<?php espace(3); ?>|<?php espace(); ?>
            <a href="mailto:test@free.fr">contact</a><?php espace(2) ?>|
          </div>
<?php
?>
