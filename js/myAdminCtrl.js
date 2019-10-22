app.controller("myAdminCtrl", function ($scope, $http, $timeout, $window) {
    
    $scope.admin = false;
    $scope.hidden = "hidden";
    $scope.modalShow = "show";
    $scope.modalMessage = null;
    $scope.adminUser = "Admin";

    $scope.login = function ( user, pass ) {
        $http.get("/php/adminExists.php?user=" + user + "&pass=" + pass).then(function (response) {
            if ( response.data.numAdmins == "1" ) {
                /**
                 * Reset the page.
                 **/
                $scope.resetPage = function() {
                    $scope.admin = true;
                    $scope.hidden = "";
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
                                {name: '2016'},
                                {name: '2017'},
                                {name: '2018'},
                                {name: '2019'}
                            ]
                        }
                    };

                    document.getElementById("fileToUpload").value = "";

                    $http.get("/php/getAnimals.php").then(function (response) {
                        $scope.animals = response.data.animals;
                        $scope.calculateNames();
                        $scope.calculateNewAnimalID();
                        $scope.data.value.id = $scope.data.value.newAnimalID;
                    });
                };

                /**
                 * Take the actual list of breeds and have them be the only options available.
                 **/
                $scope.calculateNames = function () {
                    var i;
                    
                    $scope.clearForm();
                    
                    $scope.data.options.name = [];
                    
                    if ($scope.data.value.name) {
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
                 * Calculate the new animal ID. Note that animals cannot be deleted after their entry.
                 **/
                $scope.calculateNewAnimalID = function () {
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
                 * Clear the form.
                 **/
                $scope.clearForm = function () {
                    document.getElementById("fileToUpload").value = "";

                    $scope.data.value.writeUp =    null;
                    $scope.data.value.species =    null;
                    $scope.data.value.breed =      null;
                    $scope.data.value.sex =        null;
                    $scope.data.value.monthBorn =  null;
                    $scope.data.value.yearBorn =   null;
                    $scope.data.value.size =       null;
                    $scope.data.value.monthFound = null;
                    $scope.data.value.yearFound =  null;
                    $scope.data.value.fixed =      null;
                    $scope.data.value.status =     null;
                    
                    $scope.data.value.id = $scope.data.value.newAnimalID;
                };

                /**
                 * Set the active animal.
                 **/
                $scope.setAnimal = function (id) {
                    var i;
                    for (i = 0; i < $scope.animals.length; i = i + 1) {
                        if ($scope.animals[i].id === id) {
                            $scope.data.value.animalIndex = i;

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
                 * Compare the active animal values to the database values.
                 **/
                $scope.animalNotModified = function( ) {
                    var i = $scope.data.value.animalIndex;

                    if ( $scope.data.value.name !== $scope.animals[i].name ) {
                        return 1;
                    } else if ( $scope.data.value.writeUp !== $scope.animals[i].writeUp ) {
                        return 2;
                    } else if ( $scope.data.value.species !== $scope.animals[i].species ) {
                        return 3;
                    } else if ( $scope.data.value.breed !== $scope.animals[i].breed ) {
                        return 4;
                    } else if ( $scope.data.value.sex !== $scope.animals[i].sex ) {
                        return 5;
                    } else if ( $scope.data.value.monthBorn !== $scope.animals[i].monthBorn ) {
                        return 6;
                    } else if ( $scope.data.value.yearBorn !== $scope.animals[i].yearBorn ) {
                        return 7;
                    } else if ( $scope.data.value.size !== $scope.animals[i].size ) {
                        return 8;
                    } else if ( $scope.data.value.monthFound !== $scope.animals[i].monthFound ) {
                        return 9;
                    } else if ( $scope.data.value.yearFound !== $scope.animals[i].yearFound ) {
                        return 10;
                    } else if ( $scope.data.value.fixed !== $scope.animals[i].fixed ) {
                        return 11;
                    } else if ( $scope.data.value.status !== $scope.animals[i].status ) {
                        return 12;
                    } else {
                        return 0;
                    }

                };
                
                /**
                 * Update the animal in the database.
                 **/
                $scope.update = function () {
                    var fileButton = document.getElementById("fileToUpload");
                    $scope.data.value.photo = fileButton.value.replace(/^.*[\\\/]/, '');
                                        
                    if ($scope.data.value.name === null || $scope.data.value.name.trim() === '') {
                        window.alert("Failed to update animal. The name is required.");
                    } else if ($scope.data.value.writeUp === null || $scope.data.value.writeUp === undefined || $scope.data.value.writeUp.trim() === '') {
                        window.alert("Failed to update animal. The write up is required.");
                    } else if ($scope.data.value.species === null || $scope.data.value.species.trim() === '') {
                        window.alert("Failed to update animal. The species is required.");
                    } else if ($scope.data.value.breed === null || $scope.data.value.breed.trim() === '') {
                        window.alert("Failed to update animal. The breed is required.");
                    } else if ($scope.data.value.sex === null || $scope.data.value.sex.trim() === '') {
                        window.alert("Failed to update animal. The sex is required.");
                    } else if ($scope.data.value.monthBorn === null || $scope.data.value.monthBorn.trim() === '') {
                        window.alert("Failed to update animal. The month born is required.");
                    } else if ($scope.data.value.yearBorn === null || $scope.data.value.yearBorn.trim() === '') {
                        window.alert("Failed to update animal. The year born is required.");
                    } else if ($scope.data.value.size === null || $scope.data.value.size.trim() === '') {
                        window.alert("Failed to update animal. The size is required.");
                    } else if ($scope.data.value.monthFound === null || $scope.data.value.monthFound.trim() === '') {
                        window.alert("Failed to update animal. The month found is required.");
                    } else if ($scope.data.value.yearFound === null || $scope.data.value.yearFound.trim() === '') {
                        window.alert("Failed to update animal. The year found is required.");
                    } else if ($scope.data.value.fixed === null || $scope.data.value.fixed.trim() === '') {
                        window.alert("Failed to update animal. The fixed is required.");
                    } else if ($scope.data.value.status === null || $scope.data.value.status.trim() === '') {
                        window.alert("Failed to update animal. The status is required.");
                    } else {
                        if ($scope.data.value.photo !== null && $scope.data.value.photo !== "" && $scope.data.value.photo !== undefined) {
                            $scope.data.value.needToAddPhoto = true;
                            $scope.addPicture();
                        } else {
                            $scope.data.value.needToAddPhoto = false;
                        }

                        if ($scope.data.value.id === $scope.data.value.newAnimalID) {
                            $scope.addAnimal();
                        } else if ( $scope.animalNotModified() !== 0 ) {
                            $scope.updateAnimal();
                        }
                    }
                };

                /**
                 * Update the animal.
                 **/
                $scope.updateAnimal = function () {
                    if ( $scope != null && $scope.data != null && $scope.data.value != null ) {
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
                            window.alert("Animal updated successfully!");
                            if ( $scope.data.value.needToAddPhoto === false ) {
                                $scope.resetPage();
                            }
                        });
                    } else {
                        window.alert("Bad...really bad...");
                    }
                };

                /**
                 * Add a picture to an animal.
                 **/
                $scope.addPicture = function () {
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
                            $timeout( function() {
                                document.getElementById("myUpdateForm").submit();
                            }, 2000);
                        });
                    });
                };

                /**
                 * Add an animal.
                 **/
                $scope.addAnimal = function () {
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
                        window.alert("Animal added successfully!");
                        if ( $scope.data.value.needToAddPhoto === false ) {
                            $scope.resetPage();
                        }
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
