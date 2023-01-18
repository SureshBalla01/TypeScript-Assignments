<!doctype html>
<html>
<head>
<title>Mobile Cart</title>
<meta charset="UTF-8">
<meta name="viewport"content="width=device-width, initial-scale=1">

<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<style>
     .navbar-inverse {
   background-color:#005580;
  background-image: none;
  background-repeat: no-repeat;
    color:#ffffff;
 }
 .navbar-inverse .navbar-nav > .active > a {
    color: #ffffff;
    background-color:transparent;

}
.navbar-inverse .navbar-nav > li > a:hover{
     text-decoration: none;
    color: #ffffff;
}
</style>
</head>

<body>
<nav class="navbar navbar-inverse navbar-fixed-top">
<div class="navbar-header">
<button type="button"class="navbar-toggle collapsed"data-toggle="collapse"data-target="#navbar"aria-expanded="false"aria-controls="navbar">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand"href="#">Mobile Cart</a>
</div>
<div id="navbar"class="collapse navbar-collapse">
<ul class="nav navbar-nav">
<li><a href="#">Home</a></li>
</ul>
<!--/.nav-collapse -->
<ul class="nav navbar-nav navbar-middle"style="color:white; margin-right:30px;">
<li><a href="Cart.html"><span class="glyphicon glyphicon-shopping-cart"style="color:white"></span></a></li>

</ul>
</div>
</nav>
<div style="margin-top:7%">
<center><h2>Your Favorite Online Mobile Shop!</h2></center>
</div>
<div class="container"style="padding-top:5%">
<div class="row">
<div class="col-md-4">
<div style="text-align: center;">
<img src="https://freepngimg.com/thumb/samsung_mobile_phone/5-2-samsung-mobile-phone-png-hd.png" height="250px">
</div>
<div style="padding-top:10px;">
<div onclick="getMobileDetails('Samsung Galaxy Note 7'); " style="cursor:pointer; color:Steelblue ;text-align: center;"><b><span id="pName0"> </span></b></div>
<div style="padding-top:10px;padding-left: 101px;"><b>Price:</b>&nbsp;&dollar;<span id="pPrice0"></span></div>
<div style="padding-left: 100px;"><b>Status:</b><span id="pAvailable0"></span></div>
</div>
</div>
<div class="col-md-4">
<div style="text-align: center;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJlGPlSo7nDKAXMa_mluJDQMG4qar7QT9wWQ&usqp=CAU"height="250px">
</div>
<div style="padding-top:10px;">
<div onclick="getMobileDetails('samsungedge');"style="cursor:pointer;color:Steelblue;text-align: center;"><b><span id="pName1"></span></b></div>
<div style="padding-top:10px;padding-left: 95px;"><b>Price:</b>&nbsp;&dollar;<span id="pPrice1"></span></div>
<div style="padding-left: 94px;"><b>Status:</b><span id="pAvailable1"></span></div>
</div>
</div>
<div class="col-md-4">
<div style="text-align: center;">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS39_sj9RYBTYL45JjNoeyc7pKXzV1QXW75fg&usqp=CAU"height="250px">
</div>
<div style="padding-top:10px;">
<div onclick="getMobileDetails('lumia');"style="cursor:pointer;color:Steelblue;text-align: center; "><b><span id="pName2"></span></b></div>
<div style="padding-top:10px;padding-left: 118px;"><b>Price:</b>&nbsp;&dollar;<span id="pPrice2"></span></div>
<div style="padding-left: 117px;"><b>Status:</b><span id="pAvailable2"></span></div>
</div>
</div>
</div>

</div>

</body>
<!--Adding the converted js file -->
<script src="Ass-2-arrays.js"></script>
</html> 
