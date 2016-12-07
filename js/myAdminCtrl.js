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
                    
                    $scope.formData = {
                        values: {
                            id:         null,
                            name:       null,
                            writeUp:    null,
                            species:    null,
                            breed:      null,
                            sex:        null,
                            monthBorn:  null,
                            yearBorn:   null,
                            aSize:      null,
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
                                {value: 'Akita'},
                                {value: 'Akita Mix'},
                                {value: 'Beagle'},
                                {value: 'Beagle Mix'},
                                {value: 'Border Collie'},
                                {value: 'Border Collie Mix'},
                                {value: 'Boxer'},
                                {value: 'Boxer Mix'},
                                {value: 'Bulldog'},
                                {value: 'Bulldog Mix'},
                                {value: 'Chihuahua'},
                                {value: 'Chihuahua Mix'},
                                {value: 'Cane Corso'},
                                {value: 'Cane Corso Mix'},
                                {value: 'Corgi'},
                                {value: 'Corgi Mix'},
                                {value: 'Dachshund'},
                                {value: 'Dachshund Mix'},
                                {value: 'German Shepherd'},
                                {value: 'German Shepherd Mix'},
                                {value: 'Golden Retriever'},
                                {value: 'Golden Retriever Mix'},
                                {value: 'Great Dane'},
                                {value: 'Great Dane Mix'},
                                {value: 'Greyhound'},
                                {value: 'Greyhound Mix'},
                                {value: 'Hound'},
                                {value: 'Hound Mix'},
                                {value: 'Husky'},
                                {value: 'Husky Mix'},
                                {value: 'Labrador'},
                                {value: 'Labrador Mix'},
                                {value: 'Malamute'},
                                {value: 'Malamute Mix'},
                                {value: 'Mastiff'},
                                {value: 'Mastiff Mix'},
                                {value: 'Newfoundland'},
                                {value: 'Newfoundland Mix'},
                                {value: 'Pitbull'},
                                {value: 'Pitbull Mix'},
                                {value: 'Pointer'},
                                {value: 'Pointer Mix'},
                                {value: 'Poodle'},
                                {value: 'Poodle Mix'},
                                {value: 'Pug'},
                                {value: 'Pug Mix'},
                                {value: 'Retriever'},
                                {value: 'Retriever Mix'},
                                {value: 'Rottweiler'},
                                {value: 'Rottweiler Mix'},
                                {value: 'Shih Tzu'},
                                {value: 'Shih Tzu Mix'},
                                {value: 'Spaniel'},
                                {value: 'Spaniel Mix'}
                            ],
                            fixed: [
                                {value: 'No'},
                                {value: 'Yes'}
                            ],
                            month: [
                                {value: 'January'},
                                {value: 'February'},
                                {value: 'March'},
                                {value: 'April'},
                                {value: 'May'},
                                {value: 'June'},
                                {value: 'July'},
                                {value: 'August'},
                                {value: 'September'},
                                {value: 'October'},
                                {value: 'November'},
                                {value: 'December'}
                            ],
                            name: [
                                /* $scope.calculateNames() called below */
                            ],
                            sex: [
                                {value: 'Female'},
                                {value: 'Male'}
                            ],
                            aSize: [
                                {value: 'Extra Small (less than 10 lbs)'},
                                {value: 'Small (between 10 and 30 lbs)'},
                                {value: 'Medium (between 30 and 60 lbs)'},
                                {value: 'Large (between 60 and 100 lbs)'},
                                {value: 'Extra Large (more than 100 lbs)'}
                            ],
                            species: [
                                {value: 'Canine'},
                                {value: 'Feline'},
                                {value: 'Other'}
                            ],
                            status: [
                                {value: 'Sheltered'},
                                {value: 'Fostered'},
                                {value: 'Adopted'}
                            ],
                            year: [
                                {value: '2000'},
                                {value: '2001'},
                                {value: '2002'},
                                {value: '2003'},
                                {value: '2004'},
                                {value: '2005'},
                                {value: '2006'},
                                {value: '2007'},
                                {value: '2008'},
                                {value: '2009'},
                                {value: '2010'},
                                {value: '2011'},
                                {value: '2012'},
                                {value: '2013'},
                                {value: '2014'},
                                {value: '2015'},
                                {value: '2016'}
                            ]
                        }
                    };

                    document.getElementById("fileToUpload").value = "";

                    console.log("Getting animals from database...");
                    $http.get("/php/getAnimals.php").then(function (response) {
                        $scope.animals = response.data.animals;
                        $scope.calculateNames();
                        $scope.calculateNewAnimalID();
                        $scope.formData.values.id = $scope.formData.values.newAnimalID;
                    });
                };

                /**
                 * Take the actual list of breeds, and have them be the only options available.
                 **/
                $scope.calculateNames = function () {
                    console.log("Calculating names...");
                    var i;
                    
                    $scope.clearForm();
                    
                    $scope.formData.options.name = [];
                    
                    if ($scope.formData.values.name !== null && $scope.formData.values.name !== "" && $scope.formData.values.name !== undefined) {
                        var len = $scope.formData.values.name.length;

                        for (i = 0; i < $scope.animals.length; i = i + 1) {
                            if (angular.lowercase($scope.formData.values.name) === angular.lowercase($scope.animals[i].name.substring(0, len))) {
                                $scope.tempObject = {id: null, value: null};
                                $scope.tempObject.id = $scope.animals[i].id;
                                $scope.tempObject.value = $scope.animals[i].name;
                                $scope.formData.options.name.push($scope.tempObject);
                            }
                        }
                    } else {
                        for (i = 0; i < $scope.animals.length; i = i + 1) {
                            $scope.tempObject = {id: null, value: null};
                            $scope.tempObject.id = $scope.animals[i].id;
                            $scope.tempObject.value = $scope.animals[i].name;
                            $scope.formData.options.name.push($scope.tempObject);
                        }
                    }
                };

                /**
                 * 
                 **/
                $scope.calculateNewAnimalID = function () {
                    console.log("Calculating new animal id...");

                    $scope.formData.values.newAnimalID = "";

                    if ($scope.animals.length < 10) {
                        $scope.formData.values.newAnimalID = '00000' + $scope.animals.length;
                    } else if ($scope.animals.length < 100) {
                        $scope.formData.values.newAnimalID = '0000' + $scope.animals.length;
                    } else if ($scope.animals.length < 1000) {
                        $scope.formData.values.newAnimalID = '000' + $scope.animals.length;
                    } else if ($scope.animals.length < 10000) {
                        $scope.formData.values.newAnimalID = '00' + $scope.animals.length;
                    } else if ($scope.animals.length < 100000) {
                        $scope.formData.values.newAnimalID = '0' + $scope.animals.length;
                    } else {
                        $scope.formData.values.newAnimalID = $scope.animals.length;
                    }
                };
                
                /**
                 *
                 **/
                $scope.clearForm = function () {
                    console.log("Clearing form...");

                    document.getElementById("fileToUpload").value = "";

                    $scope.formData.values.writeUp =    null;
                    $scope.formData.values.species =    null;
                    $scope.formData.values.breed =      null;
                    $scope.formData.values.sex =        null;
                    $scope.formData.values.monthBorn =  null;
                    $scope.formData.values.yearBorn =   null;
                    $scope.formData.values.aSize =      null;
                    $scope.formData.values.monthFound = null;
                    $scope.formData.values.yearFound =  null;
                    $scope.formData.values.fixed =      null;
                    $scope.formData.values.status =     null;
                    
                    $scope.formData.values.id = $scope.formData.values.newAnimalID;
                };

                /**
                 * Set the active animal
                 **/
                $scope.setAnimal = function (id) {
                    console.log("Setting animal...");
                    var i;
                    for (i = 0; i < $scope.animals.length; i = i + 1) {
                        if ($scope.animals[i].id === id) {
                            $scope.formData.values.id = id;
                            $scope.formData.values.name = $scope.animals[i].name;
                            $scope.formData.values.writeUp = $scope.animals[i].writeUp;
                            $scope.formData.values.species = $scope.animals[i].species;
                            $scope.formData.values.breed = $scope.animals[i].breed;
                            $scope.formData.values.sex = $scope.animals[i].sex;
                            $scope.formData.values.monthBorn = $scope.animals[i].monthBorn;
                            $scope.formData.values.yearBorn = $scope.animals[i].yearBorn;
                            $scope.formData.values.aSize = $scope.animals[i].aSize;
                            $scope.formData.values.monthFound = $scope.animals[i].monthFound;
                            $scope.formData.values.yearFound = $scope.animals[i].yearFound;
                            $scope.formData.values.fixed = $scope.animals[i].fixed;
                            $scope.formData.values.status = $scope.animals[i].status;
                        }
                    }
                };
                
                /**
                 * Update the database
                 **/
                $scope.update = function () {
                    console.log("Updating...");

                    var fileButton = document.getElementById("fileToUpload");
                    $scope.formData.values.photo = fileButton.value.replace(/^.*[\\\/]/, '');
                                        
                    if ($scope.formData.values.name === null || $scope.formData.values.name.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.writeUp === null || $scope.formData.values.writeUp === undefined || $scope.formData.values.writeUp.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.species === null || $scope.formData.values.species.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.breed === null || $scope.formData.values.breed.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.sex === null || $scope.formData.values.sex.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.monthBorn === null || $scope.formData.values.monthBorn.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.yearBorn === null || $scope.formData.values.yearBorn.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.aSize === null || $scope.formData.values.aSize.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.monthFound === null || $scope.formData.values.monthFound.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.yearFound === null || $scope.formData.values.yearFound.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.fixed === null || $scope.formData.values.fixed.trim() === '') {
                        console.log("Updating animal failed!");
                    } else if ($scope.formData.values.status === null || $scope.formData.values.status.trim() === '') {
                        console.log("Updating animal failed!");
                    } else {
                        if ($scope.formData.values.id === $scope.formData.values.newAnimalID) {
                            $scope.addAnimal();
                        } else {
                            $scope.updateAnimal();
                        }
                        
                        if ($scope.formData.values.photo !== null && $scope.formData.values.photo !== "" && $scope.formData.values.photo !== undefined) {
                            $scope.addPicture();
                        }
                    }
                };

                /**
                 *
                 **/
                $scope.updateAnimal = function () {
                    console.log("Updating existing animal: ");

                    if ( $scope != null && $scope.formData != null && $scope.formData.values != null ) {
                        console.log("Animal: " + JSON.stringify( $scope.formData.values, undefined, 2 ));

                        var getURL = "/php/updateAnimal.php";
                        getURL = getURL + "?id=" + $scope.formData.values.id.trim();
                        getURL = getURL + "&name=" + $scope.formData.values.name.trim();
                        getURL = getURL + "&writeUp=" + $scope.formData.values.writeUp.trim();
                        getURL = getURL + "&species=" + $scope.formData.values.species.trim();
                        getURL = getURL + "&breed=" + $scope.formData.values.breed.trim();
                        getURL = getURL + "&sex=" + $scope.formData.values.sex.trim();
                        getURL = getURL + "&monthBorn=" + $scope.formData.values.monthBorn.trim();
                        getURL = getURL + "&yearBorn=" + $scope.formData.values.yearBorn.trim();
                        getURL = getURL + "&aSize=" + $scope.formData.values.aSize.trim();
                        getURL = getURL + "&monthFound=" + $scope.formData.values.monthFound.trim();
                        getURL = getURL + "&yearFound=" + $scope.formData.values.yearFound.trim();
                        getURL = getURL + "&fixed=" + $scope.formData.values.fixed.trim();
                        getURL = getURL + "&status=" + $scope.formData.values.status.trim();
                        getURL = getURL + "&rescuerID=" + $scope.formData.values.rescuerID;
                        getURL = getURL + "&monthRescued=" + $scope.formData.values.monthRescued;
                        getURL = getURL + "&yearRescued=" + $scope.formData.values.yearRescued;
                        getURL = getURL + "&age=" + $scope.formData.values.age;
                        getURL = getURL + "&years=" + $scope.formData.values.years;
                        getURL = getURL + "&photos=" + $scope.formData.values.photos;
                        $http.get(getURL).then(function (response) {
                            console.log("Animal updated successfully!");
                            $scope.resetPage();
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
                    $http.get(getURL)
                        .then(function (response) {
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
                            getURL = getURL + "&animalID=" + $scope.formData.values.id.trim();
                            getURL = getURL + "&photo=uploads/" + $scope.formData.values.photo.trim();
                            $http.get(getURL).then(function (response) {
                                console.log("Picture added successfully!");
                                $timeout( function() {
                                    $scope.resetPage();
                                }, 3000);
                            });
                        });
                };

                /**
                 *
                 **/
                $scope.addAnimal = function () {
                    console.log("Adding new animal...");

                    var getURL = "/php/addAnimal.php";
                    getURL = getURL + "?id=" + $scope.formData.values.id.trim();
                    getURL = getURL + "&name=" + $scope.formData.values.name.trim();
                    getURL = getURL + "&writeUp=" + $scope.formData.values.writeUp.trim();
                    getURL = getURL + "&species=" + $scope.formData.values.species.trim();
                    getURL = getURL + "&breed=" + $scope.formData.values.breed.trim();
                    getURL = getURL + "&sex=" + $scope.formData.values.sex.trim();
                    getURL = getURL + "&monthBorn=" + $scope.formData.values.monthBorn.trim();
                    getURL = getURL + "&yearBorn=" + $scope.formData.values.yearBorn.trim();
                    getURL = getURL + "&aSize=" + $scope.formData.values.aSize.trim();
                    getURL = getURL + "&monthFound=" + $scope.formData.values.monthFound.trim();
                    getURL = getURL + "&yearFound=" + $scope.formData.values.yearFound.trim();
                    getURL = getURL + "&fixed=" + $scope.formData.values.fixed.trim();
                    getURL = getURL + "&status=" + $scope.formData.values.status.trim();
                    getURL = getURL + "&rescuerID=" + $scope.formData.values.rescuerID;
                    getURL = getURL + "&monthRescued=" + $scope.formData.values.monthRescued;
                    getURL = getURL + "&yearRescued=" + $scope.formData.values.yearRescued;
                    getURL = getURL + "&age=" + $scope.formData.values.age;
                    getURL = getURL + "&years=" + $scope.formData.values.years;
                    getURL = getURL + "&photos=" + $scope.formData.values.photos;
                    $http.get(getURL).then(function (response) {
                        console.log("Animal added successfully!");
                        $scope.resetPage();
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
