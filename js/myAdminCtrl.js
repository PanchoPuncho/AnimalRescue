app.controller("myAdminCtrl", function ($scope, $http, $timeout, $window) {
    
    $scope.admin = false;
    $scope.modalShow = "show";
    $scope.modalMessage = null;
    $scope.adminUser = "Admin";
    console.log("start");

    $scope.login = function ( user, pass ) {
        console.log("Checking admin credentials...");
        $http.get("/php/adminExists.php?user=" + user + "&pass=" + pass).then(function (response) {
            if ( response.data.numAdmins == "1" ) {
                console.log( "Logged into super_secret as " + user );

                /**
                 *
                 **/
                $scope.resetPage = function() {
                    $scope.admin = true;
                    $scope.modalShow = "fade";
                    $scope.adminUser = user;

                    $scope.animals = [];
                    
                    $scope.data = {
                        value: {
                            id:         null,
                            name:       null,
                            writeUp:    null,
                            species:    null,
                            breed:      null,
                            sex:        null,
                            monthBorn:  null,
                            yearBorn:   null,
                            size:      null,
                            monthFound: null,
                            yearFound:  null,
                            fixed:      null,
                            status:     null,
                            rescuerID:  null,
                            monthRescued: null,
                            yearRescued: null,
                            age:        null,
                            years:      null,
                            photos:     null,
                            photo:      null,
                            newAnimalID: null
                        },
                        options: {
                            breed: [
                                {name: 'Akita'},
                                {name: 'Akita Mix'},
                                {name: 'Beagle'},
                                {name: 'Beagle Mix'},
                                {name: 'Border Collie'},
                                {name: 'Border Collie Mix'},
                                {name: 'Boxer'},
                                {name: 'Boxer Mix'},
                                {name: 'Bulldog'},
                                {name: 'Bulldog Mix'},
                                {name: 'Chihuahua'},
                                {name: 'Chihuahua Mix'},
                                {name: 'Cane Corso'},
                                {name: 'Cane Corso Mix'},
                                {name: 'Corgi'},
                                {name: 'Corgi Mix'},
                                {name: 'Dachshund'},
                                {name: 'Dachshund Mix'},
                                {name: 'German Shepherd'},
                                {name: 'German Shepherd Mix'},
                                {name: 'Golden Retriever'},
                                {name: 'Golden Retriever Mix'},
                                {name: 'Great Dane'},
                                {name: 'Great Dane Mix'},
                                {name: 'Greyhound'},
                                {name: 'Greyhound Mix'},
                                {name: 'Hound'},
                                {name: 'Hound Mix'},
                                {name: 'Husky'},
                                {name: 'Husky Mix'},
                                {name: 'Labrador'},
                                {name: 'Labrador Mix'},
                                {name: 'Malamute'},
                                {name: 'Malamute Mix'},
                                {name: 'Mastiff'},
                                {name: 'Mastiff Mix'},
                                {name: 'Newfoundland'},
                                {name: 'Newfoundland Mix'},
                                {name: 'Pitbull'},
                                {name: 'Pitbull Mix'},
                                {name: 'Pointer'},
                                {name: 'Pointer Mix'},
                                {name: 'Poodle'},
                                {name: 'Poodle Mix'},
                                {name: 'Pug'},
                                {name: 'Pug Mix'},
                                {name: 'Retriever'},
                                {name: 'Retriever Mix'},
                                {name: 'Rottweiler'},
                                {name: 'Rottweiler Mix'},
                                {name: 'Shih Tzu'},
                                {name: 'Shih Tzu Mix'},
                                {name: 'Spaniel'},
                                {name: 'Spaniel Mix'}
                            ],
                            fixed: [
                                {name: 'No'},
                                {name: 'Yes'}
                            ],
                            month: [
                                {name: 'January'},
                                {name: 'February'},
                                {name: 'March'},
                                {name: 'April'},
                                {name: 'May'},
                                {name: 'June'},
                                {name: 'July'},
                                {name: 'August'},
                                {name: 'September'},
                                {name: 'October'},
                                {name: 'November'},
                                {name: 'December'}
                            ],
                            name: [
                                /* $scope.calculateNames() called below */
                            ],
                            sex: [
                                {name: 'Female'},
                                {name: 'Male'}
                            ],
                            size: [
                                {name: 'Extra Small (less than 10 lbs)'},
                                {name: 'Small (between 10 and 30 lbs)'},
                                {name: 'Medium (between 30 and 60 lbs)'},
                                {name: 'Large (between 60 and 100 lbs)'},
                                {name: 'Extra Large (more than 100 lbs)'}
                            ],
                            species: [
                                {name: 'Canine'},
                                {name: 'Feline'},
                                {name: 'Other'}
                            ],
                            status: [
                                {name: 'SHELTERED'},
                                {name: 'FOSTERED'},
                                {name: 'ADOPTED'}
                            ],
                            year: [
                                {name: '2000'},
                                {name: '2001'},
                                {name: '2002'},
                                {name: '2003'},
                                {name: '2004'},
                                {name: '2005'},
                                {name: '2006'},
                                {name: '2007'},
                                {name: '2008'},
                                {name: '2009'},
                                {name: '2010'},
                                {name: '2011'},
                                {name: '2012'},
                                {name: '2013'},
                                {name: '2014'},
                                {name: '2015'},
                                {name: '2016'}
                            ]
                        }
                    };

                    document.getElementById("fileToUpload").value = "";

                    console.log("Getting animals from database...");
                    $http.get("/php/getAnimals.php").then(function (response) {
                        $scope.animals = response.data.animals;
                        $scope.calculateNames();
                        $scope.calculateNewAnimalID();
                        $scope.data.value.id = $scope.data.value.newAnimalID;
                    });
                };

                /**
                 * Take the actual list of breeds, and have them be the only options available.
                 **/
                $scope.calculateNames = function () {
                    console.log("Calculating names...");
                    var i;
                    
                    $scope.clearForm();
                    
                    $scope.data.options.name = [];
                    
                    if ($scope.data.value.name !== null && $scope.data.value.name !== "" && $scope.data.value.name !== undefined) {
                        var len = $scope.data.value.name.length;

                        for (i = 0; i < $scope.animals.length; i = i + 1) {
                            if (angular.lowercase($scope.data.value.name) === angular.lowercase($scope.animals[i].name.substring(0, len))) {
                                $scope.tempObject = {id: null, name: null};
                                $scope.tempObject.id = $scope.animals[i].id;
                                $scope.tempObject.name = $scope.animals[i].name;
                                $scope.data.options.name.push($scope.tempObject);
                            }
                        }
                    } else {
                        for (i = 0; i < $scope.animals.length; i = i + 1) {
                            $scope.tempObject = {id: null, name: null};
                            $scope.tempObject.id = $scope.animals[i].id;
                            $scope.tempObject.name = $scope.animals[i].name;
                            $scope.data.options.name.push($scope.tempObject);
                        }
                    }
                };

                /**
                 * 
                 **/
                $scope.calculateNewAnimalID = function () {
                    console.log("Calculating new animal id...");

                    $scope.data.value.newAnimalID = "";

                    if ($scope.animals.length < 10) {
                        $scope.data.value.newAnimalID = '00000' + $scope.animals.length;
                    } else if ($scope.animals.length < 100) {
                        $scope.data.value.newAnimalID = '0000' + $scope.animals.length;
                    } else if ($scope.animals.length < 1000) {
                        $scope.data.value.newAnimalID = '000' + $scope.animals.length;
                    } else if ($scope.animals.length < 10000) {
                        $scope.data.value.newAnimalID = '00' + $scope.animals.length;
                    } else if ($scope.animals.length < 100000) {
                        $scope.data.value.newAnimalID = '0' + $scope.animals.length;
                    } else {
                        $scope.data.value.newAnimalID = $scope.animals.length;
                    }
                };
                
                /**
                 *
                 **/
                $scope.clearForm = function () {
                    console.log("Clearing form...");

                    document.getElementById("fileToUpload").value = "";

                    $scope.data.value.writeUp =    null;
                    $scope.data.value.species =    null;
                    $scope.data.value.breed =      null;
                    $scope.data.value.sex =        null;
                    $scope.data.value.monthBorn =  null;
                    $scope.data.value.yearBorn =   null;
                    $scope.data.value.size =      null;
                    $scope.data.value.monthFound = null;
                    $scope.data.value.yearFound =  null;
                    $scope.data.value.fixed =      null;
                    $scope.data.value.status =     null;
                    
                    $scope.data.value.id = $scope.data.value.newAnimalID;
                };

                /**
                 * Set the active animal
                 **/
                $scope.setAnimal = function (id) {
                    console.log("Setting animal...");
                    var i;
                    for (i = 0; i < $scope.animals.length; i = i + 1) {
                        if ($scope.animals[i].id === id) {
                            $scope.data.value.id = id;
                            $scope.data.value.name = $scope.animals[i].name;
                            $scope.data.value.writeUp = $scope.animals[i].writeUp;
                            $scope.data.value.species = $scope.animals[i].species;
                            $scope.data.value.breed = $scope.animals[i].breed;
                            $scope.data.value.sex = $scope.animals[i].sex;
                            $scope.data.value.monthBorn = $scope.animals[i].monthBorn;
                            $scope.data.value.yearBorn = $scope.animals[i].yearBorn;
                            $scope.data.value.size = $scope.animals[i].size;
                            $scope.data.value.monthFound = $scope.animals[i].monthFound;
                            $scope.data.value.yearFound = $scope.animals[i].yearFound;
                            $scope.data.value.fixed = $scope.animals[i].fixed;
                            $scope.data.value.status = $scope.animals[i].status;
                        }
                    }
                };
                
                /**
                 * Update the database
                 **/
                $scope.update = function () {
                    console.log("Updating...");

                    var fileButton = document.getElementById("fileToUpload");
                    $scope.data.value.photo = fileButton.value.replace(/^.*[\\\/]/, '');
                                        
                    if ($scope.data.value.name === null || $scope.data.value.name.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.writeUp === null || $scope.data.value.writeUp === undefined || $scope.data.value.writeUp.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.species === null || $scope.data.value.species.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.breed === null || $scope.data.value.breed.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.sex === null || $scope.data.value.sex.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.monthBorn === null || $scope.data.value.monthBorn.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.yearBorn === null || $scope.data.value.yearBorn.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.size === null || $scope.data.value.size.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.monthFound === null || $scope.data.value.monthFound.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.yearFound === null || $scope.data.value.yearFound.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.fixed === null || $scope.data.value.fixed.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.data.value.status === null || $scope.data.value.status.trim() === '') {
                        console.log("Updating animal failed!");
                    } else {
                        if ($scope.data.value.id === $scope.data.value.newAnimalID) {
                            $scope.addAnimal();
                        } else {
                            $scope.updateAnimal();
                        }
                        
                        if ($scope.data.value.photo !== null && $scope.data.value.photo !== "" && $scope.data.value.photo !== undefined) {
                            $scope.addPicture();
                        }
                    }
                };

                /**
                 *
                 **/
                $scope.updateAnimal = function () {
                    console.log("Updating existing animal: ");

                    if ( $scope != null && $scope.data != null && $scope.data.value != null ) {
                        console.log("Animal: " + JSON.stringify( $scope.data.value, undefined, 2 ));

                        var getURL = "/php/updateAnimal.php";
                        getURL = getURL + "?id=" + $scope.data.value.id.trim();
                        getURL = getURL + "&name=" + $scope.data.value.name.trim();
                        getURL = getURL + "&writeUp=" + $scope.data.value.writeUp.trim();
                        getURL = getURL + "&species=" + $scope.data.value.species.trim();
                        getURL = getURL + "&breed=" + $scope.data.value.breed.trim();
                        getURL = getURL + "&sex=" + $scope.data.value.sex.trim();
                        getURL = getURL + "&monthBorn=" + $scope.data.value.monthBorn.trim();
                        getURL = getURL + "&yearBorn=" + $scope.data.value.yearBorn.trim();
                        getURL = getURL + "&size=" + $scope.data.value.size.trim();
                        getURL = getURL + "&monthFound=" + $scope.data.value.monthFound.trim();
                        getURL = getURL + "&yearFound=" + $scope.data.value.yearFound.trim();
                        getURL = getURL + "&fixed=" + $scope.data.value.fixed.trim();
                        getURL = getURL + "&status=" + $scope.data.value.status.trim();
                        getURL = getURL + "&rescuerID=" + $scope.data.value.rescuerID;
                        getURL = getURL + "&monthRescued=" + $scope.data.value.monthRescued;
                        getURL = getURL + "&yearRescued=" + $scope.data.value.yearRescued;
                        getURL = getURL + "&age=" + $scope.data.value.age;
                        getURL = getURL + "&years=" + $scope.data.value.years;
                        getURL = getURL + "&photos=" + $scope.data.value.photos;
                        $http.get(getURL).then(function (response) {
                            console.log("Animal updated successfully!");
                            $timeout( function() {
                                $scope.resetPage();
                            }, 3000);
                        });
                        console.log("should be afterUpdate");
                    } else {
                        alert("Bad...really bad...");
                    }
                };

                /**
                 *
                 **/
                $scope.addPicture = function () {
                    console.log("Adding new picture...");
                    var numPics = "", photoID = "", getURL = "/php/getNumPics.php";
                    $http.get(getURL).then(function (response) {
                        numPics = response.data.numPics;

                        if (numPics < 10) {
                            photoID = '00000' + numPics;
                        } else if (numPics < 100) {
                            photoID = '0000' + numPics;
                        } else if (numPics < 1000) {
                            photoID = '000' + numPics;
                        } else if (numPics < 10000) {
                            photoID = '00' + numPics;
                        } else if (numPics < 100000) {
                            photoID = '0' + numPics;
                        } else {
                            photoID = numPics;
                        }

                        getURL = "/php/addPicture.php";
                        getURL = getURL + "?id=" + photoID.trim();
                        getURL = getURL + "&animalID=" + $scope.data.value.id.trim();
                        getURL = getURL + "&photo=uploads/" + $scope.data.value.photo.trim();
                        $http.get(getURL).then(function (response) {
                            console.log("Picture added successfully!");
                            $timeout( function() {
                                document.getElementById("myUpdateForm").submit();
                            }, 1000);
                        });
                    });
                };

                /**
                 *
                 **/
                $scope.addAnimal = function () {
                    console.log("Adding new animal...");

                    var getURL = "/php/addAnimal.php";
                    getURL = getURL + "?id=" + $scope.data.value.id.trim();
                    getURL = getURL + "&name=" + $scope.data.value.name.trim();
                    getURL = getURL + "&writeUp=" + $scope.data.value.writeUp.trim();
                    getURL = getURL + "&species=" + $scope.data.value.species.trim();
                    getURL = getURL + "&breed=" + $scope.data.value.breed.trim();
                    getURL = getURL + "&sex=" + $scope.data.value.sex.trim();
                    getURL = getURL + "&monthBorn=" + $scope.data.value.monthBorn.trim();
                    getURL = getURL + "&yearBorn=" + $scope.data.value.yearBorn.trim();
                    getURL = getURL + "&size=" + $scope.data.value.size.trim();
                    getURL = getURL + "&monthFound=" + $scope.data.value.monthFound.trim();
                    getURL = getURL + "&yearFound=" + $scope.data.value.yearFound.trim();
                    getURL = getURL + "&fixed=" + $scope.data.value.fixed.trim();
                    getURL = getURL + "&status=" + $scope.data.value.status.trim();
                    getURL = getURL + "&rescuerID=" + $scope.data.value.rescuerID;
                    getURL = getURL + "&monthRescued=" + $scope.data.value.monthRescued;
                    getURL = getURL + "&yearRescued=" + $scope.data.value.yearRescued;
                    getURL = getURL + "&age=" + $scope.data.value.age;
                    getURL = getURL + "&years=" + $scope.data.value.years;
                    getURL = getURL + "&photos=" + $scope.data.value.photos;
                    $http.get(getURL).then(function (response) {
                        console.log("Animal added successfully!");
                        $timeout( function() {
                            $scope.resetPage();
                        }, 3000);
                    });
                };



                /********** DRIVER **********/



                $scope.resetPage();
            } else {
                $scope.modalMessage = "Get off my website, you heathen!";
                $timeout( function() {
                    $window.location.href = '/index.html';
                }, 3000);
            }
        });
    };
});
