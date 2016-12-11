<!DOCTYPE html>
<html lang="en">

    
<!-- START HEAD -->
<head> 
    <title>Help Angel Dogs</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/jquery.js"></script>
    <script src="../js/bootstrap-formhelpers-states.en_US.js"></script>
    <script src="../js/bootstrap-formhelpers-states.js"></script>
    <script src="../js/jquery.easing.min.js"></script>
    <script src="../js/scrolling-nav.js"></script>
    <!-- Angular -->
    <script src="../js/angular.min.js"></script>
    <script src="../js/myApp.js"></script>
    <script src="../js/myAdminCtrl.js"></script>
    <!-- CSS -->
    <link rel="stylesheet" href="../packages/bootstrap-3.3.6/dist/css/bootstrap.min.css">
    <link rel="shortcut icon" href="../uploads/angelDog.png" />
    <link rel="stylesheet" href="../css/style.css">
</head> <!-- END HEAD -->

    
<!-- START BODY -->
<body id="page-top" data-spy="scroll" data-target=".navbar" data-offset="50" ng-app="myApp" ng-controller="myAdminCtrl">

    
<!-- Header -->
<div class="container-fluid text-center jumbotron">
    <h1>Angel Dogs, Inc.</h1>      
    <h3>Saving One Dog at a Time!</h3>
</div>


<!-- Login Modal -->
<div class="modal {{modalShow}} myLoginModal" id="loginModal" role="dialog">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-body">
              <form class="form-signin">
                <h2 id="form-signin-heading" class="text-center">Please Sign In</h2>
                <h5 ng-show="modalMessage != null" class="text-center text-danger">{{modalMessage}}</h5>
                <input type="username" id="inputEmail" class="form-control" placeholder="Username" ng-model="username" required>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" ng-model="password" required>
                <button class="btn btn-lg btn-primary btn-block" id="loginButton" ng-click="login(username,password)">Sign In</button>
              </form>
            </div>
        </div>
    </div>
</div>


<!-- Navigation Bar -->
<nav class="navbar navbar-inverse" data-spy="affix" data-offset-top="242">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="page-scroll navbar-brand" href="#page-top">Angel Dogs</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li><a class="page-scroll" href="#eventSection">Edit Animals</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="../index.html"><span class="glyphicon glyphicon-home"></span>&nbsp;&nbsp;Return Home</a></li>
            </ul>
        </div>
    </div>
</nav>


<!-- EDIT SECTION -->
<section id="eventSection" class="container-fluid text-center">
    <div class="row">
        <h2>Hello there, {{adminUser}}!</h2>
        <h4>What changes would you like to make?</h4>
    </div>
    
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <form class="form-horizontal getInTouchForms" id="myUpdateForm" role="form" action="uploadImage.php" method="post" enctype="multipart/form-data">
                <feildset>
                    <div class="form-group">
                        <div class="col-sm-6">
                            <div id="sponsorInput1" class="input-group">
                                <a class="btn btn-primary dropdown-toggle input-group-addon" data-toggle="dropdown" href="#">
                                    <span class="caret"></span>
                                </a>
                                <input class="form-control" type="text" ng-model="data.value.name" ng-change="calculateNames()" placeholder="Animal Name" required>
                                <ul class="dropdown-menu">
                                    <li ng-repeat="x in data.options.name"><a ng-click="setAnimal(x.id)"> {{x.name}}</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <select class="form-control" id="status" ng-model="data.value.status" required>
                                <option value="" disabled selected>-- Status --</option>
                                <option value="SHELTERED">Sheltered</option>
                                <option value="FOSTERED">Fostered</option>
                                <option value="ADOPTED" disabled>Adopted</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <textarea class="form-control" rows="2" placeholder="Animal Write Up" ng-model="data.value.writeUp" required></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-4">
                            <select class="form-control" id="species" ng-model="data.value.species" required>
                                <option value="" disabled selected>-- Species --</option>
                                <option ng-repeat="x in data.options.species">{{x.name}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control" id="breed" ng-model="data.value.breed" required>
                                <option value="" disabled selected>-- Breed --</option>
                                <option ng-repeat="x in data.options.breed">{{x.name}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control" id="sex" ng-model="data.value.sex" required>
                                <option value="" disabled selected>-- Sex --</option>
                                <option ng-repeat="x in data.options.sex">{{x.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-4">
                            <select class="form-control" name="expiry-month" id="expiry-month" ng-model="data.value.monthBorn" required>
                                <option value="" disabled selected>-- Month Born --</option>
                                <option ng-repeat="x in data.options.month">{{x.name}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control" name="expiry-year" ng-model="data.value.yearBorn" required>
                                <option value="" disabled selected>-- Year Born --</option>
                                <option ng-repeat="x in data.options.year">{{x.name}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control" id="size" ng-model="data.value.aSize" required>
                                <option value="" disabled selected>-- Size --</option>
                                <option ng-repeat="x in data.options.aSize">{{x.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-4">
                            <select class="form-control" name="expiry-month" id="expiry-month" ng-model="data.value.monthFound" required>
                                <option value="" disabled selected>-- Month Found --</option>
                                <option ng-repeat="x in data.options.month">{{x.name}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control" name="expiry-year" ng-model="data.value.yearFound" required>
                                <option value="" disabled selected>-- Year Found --</option>
                                <option ng-repeat="x in data.options.year">{{x.name}}</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <select class="form-control" id="fixed" ng-model="data.value.fixed" required>
                                <option value="" disabled selected>-- Fixed --</option>
                                <option ng-repeat="x in data.options.fixed">{{x.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-6">
                            <input type="file" name="fileToUpload" id="fileToUpload" ng-model="data.value.photo">
                        </div>
                        <div class="col-sm-6">
                            <input class="form-control" type="text" ng-model="data.value.id" placeholder="Animal ID" readonly>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-group text-center">
                            <button type='button' class="btn btn-primary" ng-click="update()">Update</button>
                        </div>
                    </div>
                </feildset>
            </form>
        </div>
        <div class="col-sm-2"></div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
</section>

<!-- Footer -->
<footer class="container-fluid navbar-fixed-bottom text-center">
    <h5>Update details of an existing animal --- Add a new animal --- Add pictures to an existing animal</h5>
</footer>

    
</body> <!-- END BODY -->
</html> <!-- END HTML -->
