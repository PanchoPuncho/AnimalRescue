app.controller("myAdminCtrl", function ($scope, $http) {
    /********** GLOBAL VARIABLES **********/
    
    // Array of rescue animal objects
    $scope.animals = [];
    
    // Data corresponding to the fields in the filter form
    $scope.formData = {
        values: {
            // Animal specific
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
            
            // Photo specific
            photo:      null,

            // Extra
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
                // $scope.calculateNames() called below
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
    
    
    
    /********** FUNCTIONS **********/


    
    /**
     *
     **/
    $scope.addPicture = function () {
        console.log("Adding new picture...");
        var numPics = "", photoID = "", getURL = "/php/getNumPics.php";
        $http.get(getURL)
            .then(function (response) {
                // Get the number of pictures
                numPics = response.data.numPics;

                // Calculate next photoID
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
                    // >= 100000
                    photoID = numPics;
                }

                // Add the image to the database
                getURL = "/php/addPicture.php";
                getURL = getURL + "?id=" + photoID;
                getURL = getURL + "&animalID=" + $scope.formData.values.id;
                getURL = getURL + "&photo=uploads/" + $scope.formData.values.photo;
                $http({
                    method: 'GET',
                    url: getURL,
                    dataType: 'text json'
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously when the response is available
                    console.log("Picture added successfully!");
                }, function errorCallback(response) {
                    // this callback will be called asynchronously when the get() command fails
                    console.log(status + " " + getURL);
                });
            });
    };

    /**
     *
     **/
    $scope.addAnimal = function () {
        console.log("Adding new animal...");

        // Add the image to the database
        var getURL = "/php/addAnimal.php";
        getURL = getURL + "?id=" + $scope.formData.values.id;
        getURL = getURL + "&name=" + $scope.formData.values.name;
        getURL = getURL + "&writeUp=" + $scope.formData.values.writeUp;
        getURL = getURL + "&species=" + $scope.formData.values.species;
        getURL = getURL + "&breed=" + $scope.formData.values.breed;
        getURL = getURL + "&sex=" + $scope.formData.values.sex;
        getURL = getURL + "&monthBorn=" + $scope.formData.values.monthBorn;
        getURL = getURL + "&yearBorn=" + $scope.formData.values.yearBorn;
        getURL = getURL + "&aSize=" + $scope.formData.values.aSize;
        getURL = getURL + "&monthFound=" + $scope.formData.values.monthFound;
        getURL = getURL + "&yearFound=" + $scope.formData.values.yearFound;
        getURL = getURL + "&fixed=" + $scope.formData.values.fixed;
        getURL = getURL + "&status=" + $scope.formData.values.status;
        getURL = getURL + "&rescuerID=" + $scope.formData.values.rescuerID;
        getURL = getURL + "&monthRescued=" + $scope.formData.values.monthRescued;
        getURL = getURL + "&yearRescued=" + $scope.formData.values.yearRescued;
        getURL = getURL + "&age=" + $scope.formData.values.age;
        getURL = getURL + "&years=" + $scope.formData.values.years;
        getURL = getURL + "&photos=" + $scope.formData.values.photos;
        $http({
            method: 'GET',
            url: getURL,
            dataType: 'text json'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously when the response is available
            console.log("Animal added successfully!");
        }, function errorCallback(response) {
            // this callback will be called asynchronously when the get() command fails
            console.log(status + " " + getURL);
        });
    };

    /**
     * Take the actual list of breeds, and have them be the only options available.
     **/
    $scope.calculateNames = function () {
        console.log("Calculating names...");
        var i;
        
        // Clear the form
        $scope.clearForm();
        
        // Clear the name options
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
        // Set the id
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
            // >= 100000
            $scope.formData.values.newAnimalID = $scope.animals.length;
        }
    };
    
    /**
     *
     **/
    $scope.clearForm = function () {
        console.log("Clearing form...");
        // Clear the forms, minus name and id
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
        
        // Set the id
        $scope.formData.values.id = $scope.formData.values.newAnimalID;
    };

    /**
     * Update the database
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
        // Save the file path for the photo that was uploaded
        var fileButton = document.getElementById("fileToUpload");
        $scope.formData.values.photo = fileButton.value.replace(/^.*[\\\/]/, '');
							

        if ($scope.formData.values.name === null || $scope.formData.values.name === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.writeUp === null || $scope.formData.values.writeUp === '' || $scope.formData.values.writeUp === undefined) {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.species === null || $scope.formData.values.species === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.breed === null || $scope.formData.values.breed === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.sex === null || $scope.formData.values.sex === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.monthBorn === null || $scope.formData.values.monthBorn === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.yearBorn === null || $scope.formData.values.yearBorn === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.aSize === null || $scope.formData.values.aSize === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.monthFound === null || $scope.formData.values.monthFound === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.yearFound === null || $scope.formData.values.yearFound === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.fixed === null || $scope.formData.values.fixed === '') {
            console.log("Updating animal failed!");
        } else if ($scope.formData.values.status === null || $scope.formData.values.status === '') {
            console.log("Updating animal failed!");
        } else {
    		// Update the database with the new animal or update the data for existing animal
            if ($scope.formData.values.id === $scope.formData.values.newAnimalID) {
                $scope.addAnimal();
            } else {
                $scope.updateAnimal();
            }
    		
    		// Check if photo needs to be uploaded as well
    		if ($scope.formData.values.photo !== null && $scope.formData.values.photo !== "" && $scope.formData.values.photo !== undefined) {
    			$scope.addPicture();
    		}
            //window.alert('Update Animals: ' + JSON.stringify($scope.formData.values, null, 4));
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
            getURL = getURL + "?id=" + $scope.formData.values.id;
            getURL = getURL + "&name=" + $scope.formData.values.name;
            getURL = getURL + "&writeUp=" + $scope.formData.values.writeUp;
            getURL = getURL + "&species=" + $scope.formData.values.species;
            getURL = getURL + "&breed=" + $scope.formData.values.breed;
            getURL = getURL + "&sex=" + $scope.formData.values.sex;
            getURL = getURL + "&monthBorn=" + $scope.formData.values.monthBorn;
            getURL = getURL + "&yearBorn=" + $scope.formData.values.yearBorn;
            getURL = getURL + "&aSize=" + $scope.formData.values.aSize;
            getURL = getURL + "&monthFound=" + $scope.formData.values.monthFound;
            getURL = getURL + "&yearFound=" + $scope.formData.values.yearFound;
            getURL = getURL + "&fixed=" + $scope.formData.values.fixed;
            getURL = getURL + "&status=" + $scope.formData.values.status;
            getURL = getURL + "&rescuerID=" + $scope.formData.values.rescuerID;
            getURL = getURL + "&monthRescued=" + $scope.formData.values.monthRescued;
            getURL = getURL + "&yearRescued=" + $scope.formData.values.yearRescued;
            getURL = getURL + "&age=" + $scope.formData.values.age;
            getURL = getURL + "&years=" + $scope.formData.values.years;
            getURL = getURL + "&photos=" + $scope.formData.values.photos;
            $http({
                method: 'GET',
                url: getURL,
                dataType: 'text json'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously when the response is available
                console.log("Animal updated successfully!");
            }, function errorCallback(response) {
                // this callback will be called asynchronously when the get() command fails
                console.log(status + " " + getURL);
            });
        } else {
            alert("Bad...really bad...");
        }       
    };



    /********** DRIVER **********/



    // Get the animals from the database
    console.log("Getting animals from database...");
    $http.get("/php/getAnimals.php")
        .then(function (response) {
            $scope.animals = response.data.animals;
            $scope.calculateNames();
            $scope.calculateNewAnimalID();
            $scope.formData.values.id = $scope.formData.values.newAnimalID;
        });
});



/****************** EXTRA **********************/



/*if ( $scope.formData.values.id === "null" ) {
                $scope.formData.values.id = null;
            }
            if ( $scope.formData.values.name === "null" ) {
                $scope.formData.values.name = null;
            }
            if ( $scope.formData.values.writeUp === "null" ) {
                $scope.formData.values.writeUp = null;
            }
            if ( $scope.formData.values.species === "null" ) {
                $scope.formData.values.species = null;
            }
            if ( $scope.formData.values.breed === "null" ) {
                $scope.formData.values.breed = null;
            }
            if ( $scope.formData.values.sex === "null" ) {
                $scope.formData.values.sex = null;
            }
            if ( $scope.formData.values.monthBorn === "null" ) {
                $scope.formData.values.monthBorn = null;
            }
            if ( $scope.formData.values.yearBorn === "null" ) {
                $scope.formData.values.yearBorn = null;
            }
            if ( $scope.formData.values.aSize === "null" ) {
                $scope.formData.values.aSize = null;
            }
            if ( $scope.formData.values.monthFound === "null" ) {
                $scope.formData.values.monthFound = null;
            }
            if ( $scope.formData.values.yearFound === "null" ) {
                $scope.formData.values.yearFound = null;
            }
            if ( $scope.formData.values.fixed === "null" ) {
                $scope.formData.values.fixed = null;
            }
            if ( $scope.formData.values.status === "null" ) {
                $scope.formData.values.status = null;
            }
            if ( $scope.formData.values.rescuerID === "null" ) {
                $scope.formData.values.rescuerID = null;
            }
            if ( $scope.formData.values.monthRescued === "null" ) {
                $scope.formData.values.monthRescued = null;
            }
            if ( $scope.formData.values.yearRescued === "null" ) {
                $scope.formData.values.yearRescued = null;
            }
            if ( $scope.formData.values.age === "null" ) {
                $scope.formData.values.age = null;
            }
            if ( $scope.formData.values.years === "null" ) {
                $scope.formData.values.years = null;
            }
            if ( $scope.formData.values.photos === "null" ) {
                $scope.formData.values.photos = null;
            }*/

