app.controller("myCtrl", function ($scope, $http) {
    /********** GLOBAL VARIABLES **********/

    $scope.origAnimalsInNeed = [];
    $scope.animalsInNeed = [];
    $scope.adoptedAnimals = [];

    $scope.filterData = {
        value: {
            age:        null,
            breed:      null,
            fixed:      null,
            sex:        null,
            size:      null,
            species:    null,
            years:      null
        },
        options: {
            breed: [
                /* $scope.calculateBreedOptions() called below */
            ],
            fixed: [
                {name: 'No'},
                {name: 'Yes'}
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
            years: [
                {id: "0", name: '< 1 year old'},
                {id: "1", name: '1 year old'},
                {id: "2", name: '2 years old'},
                {id: "3", name: '3 years old'},
                {id: "4", name: '4 years old'},
                {id: "5", name: '5 years old'},
                {id: "6", name: '6 years old'},
                {id: "7", name: '7 years old'},
                {id: "8", name: '8 years old'},
                {id: "9", name: '9 years old'},
                {id: "10", name: '10 years old'},
                {id: "11", name: '> 10 years old'}
            ]
        }
    };

    $scope.data = {
        value: {
            addr1:      null,
            addr2:      null,
            amount:     10.00,
            body:       null,
            city:       null,
            cvv:        null,
            donation:   null,
            email1:     null,
            email2:     null,
            fixed:      null,
            month:      null,
            monthFound: null,
            name:       null,
            number:     null,
            password:   null,
            phone:      null,
            state:      'VA',
            subject:    null,
            to:         'cuevas500@gmail.com',
            username:   null,
            year:       null,
            yearFound:  null,
            zip:        null
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
            donation: [
                {name: 'One-Time Donation'},
                {name: 'Monthly Donation'}
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
            subject: [
                {name: 'Adopt'},
                {name: 'Donate'},
                {name: 'Foster'},
                {name: 'Sponsor'},
                {name: 'Volunteer'},
                {name: 'Other'}
            ],
            year: [
                {name: '2016'},
                {name: '2017'},
                {name: '2018'},
                {name: '2019'},
                {name: '2020'},
                {name: '2021'},
                {name: '2022'},
                {name: '2023'}
            ]
        }
    };



    /********** FUNCTIONS **********/



    /**
     * Attempt to submit the adoption inquiry
     **/
    $scope.attemptAdoption = function ( animalID, status ) {
        console.log("Attempting adoption...");
        
        if ($scope.data.value.name === null || $scope.data.value.name.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.phone === null || $scope.data.value.phone.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.email1 === null || $scope.data.value.email1.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.email2 === null || $scope.data.value.email2.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.email2 !== $scope.data.value.email1) {
            console.log("Emails do not match!");
            window.alert("Emails do not match!");
        } else if ($scope.data.value.addr1 === null || $scope.data.value.addr1.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.city === null || $scope.data.value.city.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.state === null || $scope.data.value.state.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.data.value.zip === null || $scope.data.value.zip.trim() === '') {
            console.log("Adoption failed!");
        } else {
            console.log("Checking if user already exists...");

            var getURL = "/php/userExists.php?email=" + $scope.data.value.email1.trim().toLowerCase();
            $http({
                method: 'GET',
                url: getURL,
                dataType: 'text json'
            }).then(function successCallback(response) {
                if ( response.data.user === "" ) {
                    console.log("Adding new user...");

                    var numUsers = "", userID = "", getURL = "/php/getNumUsers.php";
                    $http.get(getURL).then(function (response) {
                        console.log("Number of users received!");

                        numUsers = response.data.numUsers;

                        if (numUsers < 10) {
                            userID = '00000' + numUsers;
                        } else if (numUsers < 100) {
                            userID = '0000' + numUsers;
                        } else if (numUsers < 1000) {
                            userID = '000' + numUsers;
                        } else if (numUsers < 10000) {
                            userID = '00' + numUsers;
                        } else if (numUsers < 100000) {
                            userID = '0' + numUsers;
                        } else {
                            userID = numUsers;
                        }

                        getURL = "/php/addUser.php";
                        getURL = getURL + "?id=" + userID.trim();
                        getURL = getURL + "&fullName=" + $scope.data.value.name.trim();
                        getURL = getURL + "&phone=" + $scope.data.value.phone.trim();
                        getURL = getURL + "&email=" + $scope.data.value.email1.trim().toLowerCase();
                        getURL = getURL + "&addr1=" + $scope.data.value.addr1.trim();
                        getURL = getURL + "&addr2=" + $scope.data.value.addr2;
                        getURL = getURL + "&city=" + $scope.data.value.city.trim();
                        getURL = getURL + "&state=" + $scope.data.value.state.trim();
                        getURL = getURL + "&zip=" + $scope.data.value.zip.trim();

                        console.log("URL: " + getURL);
                        $http({
                            method: 'GET',
                            url: getURL,
                            dataType: 'text json'
                        }).then(function successCallback(response) {
                            console.log("User added successfully!");
                            $scope.adoptAnimalInDB( animalID, userID, status );
                        }, function errorCallback(response) {
                            console.log( "Error on call: " + getURL );
                        });
                    });
                } else {
                    console.log("User exists with ID: " + response.data.user );
                    $scope.adoptAnimalInDB( animalID, response.data.user, status );
                }
            }, function errorCallback(response) {
                console.log( "Error on call: " + getURL );
            });
        }
    };

    /**
     * Schedule the donation
     **/
    $scope.attemptDonation = function () {
        var valid = true;

        if ($scope.data.value.donation === null || $scope.data.value.donation.trim() === '') {
            valid = false;
        } else if ($scope.data.value.amount === null || $scope.data.value.amount.trim() === '') {
            valid = false;
        } else if ($scope.data.value.name === null || $scope.data.value.name.trim() === '') {
            valid = false;
        } else if ($scope.data.value.number === null || $scope.data.value.number.trim() === '') {
            valid = false;
        } else if ($scope.data.value.month === null || $scope.data.value.month.trim() === '') {
            valid = false;
        } else if ($scope.data.value.year === null || $scope.data.value.year.trim() === '') {
            valid = false;
        } else if ($scope.data.value.cvv === null || $scope.data.value.cvv.trim() === '') {
            valid = false;
        }

        if ( valid ) {
            $scope.donationData = {
                form:       'donate',
                donation:   $scope.data.value.donation.trim(),
                amount:     $scope.data.value.amount.trim(),
                name:       $scope.data.value.name.trim(),
                number:     $scope.data.value.number.trim(),
                month:      $scope.data.value.month.trim(),
                year:       $scope.data.value.year.trim(),
                cvv:        $scope.data.value.cvv.trim()
            };

            window.alert('Donation: ' + JSON.stringify($scope.donationData, null, 4));
        } else {
            window.alert('Donation validation failed...');
        }
    };

    /**
     * Schedule the sponsor
     **/
    $scope.attemptSponsor = function () {
        var valid = true;

        if ($scope.data.value.email1 === null || $scope.data.value.email1.trim() === '') {
            valid = false;
        } else if ($scope.data.value.email2 === null || $scope.data.value.email2.trim() === '') {
            valid = false;
        } else if ($scope.data.value.donation === null || $scope.data.value.donation.trim() === '') {
            valid = false;
        } else if ($scope.data.value.amount === null || $scope.data.value.amount.trim() === '') {
            valid = false;
        } else if ($scope.data.value.name === null || $scope.data.value.name.trim() === '') {
            valid = false;
        } else if ($scope.data.value.number === null || $scope.data.value.number.trim() === '') {
            valid = false;
        } else if ($scope.data.value.month === null || $scope.data.value.month.trim() === '') {
            valid = false;
        } else if ($scope.data.value.year === null || $scope.data.value.year.trim() === '') {
            valid = false;
        } else if ($scope.data.value.cvv === null || $scope.data.value.cvv.trim() === '') {
            valid = false;
        }

        if ( valid ) {
            $scope.sponsorData = {
                form:       'sponsor',
                email1:     $scope.data.value.email1.trim(),
                email2:     $scope.data.value.email2.trim(),
                donation:   $scope.data.value.donation.trim(),
                amount:     $scope.data.value.amount.trim(),
                name:       $scope.data.value.name.trim(),
                number:     $scope.data.value.number.trim(),
                month:      $scope.data.value.month.trim(),
                year:       $scope.data.value.year.trim(),
                cvv:        $scope.data.value.cvv.trim()
            };

            window.alert('Sponsor: ' + JSON.stringify($scope.sponsorData, null, 4));
        } else {
            window.alert('Sponsor validation failed...');
        }
    };

    $scope.adoptAnimalInDB = function( animalID, userID, status ) {
        console.log( "adoptAnimalInDB( " + animalID + ", " + userID + ", " + status + " )" );

        console.log("Getting date info...");
        var today = new Date();
        var todayMonth = today.getMonth() + 1, month = "";
        var todayYear = today.getFullYear();
        if (todayMonth === 1) {
            month = "January";
        } else if (todayMonth === 2) {
            month = "February";
        } else if (todayMonth === 3) {
            month = "March";
        } else if (todayMonth === 4) {
            month = "April";
        } else if (todayMonth === 5) {
            month = "May";
        } else if (todayMonth === 6) {
            month = "June";
        } else if (todayMonth === 7) {
            month = "July";
        } else if (todayMonth === 8) {
            month = "August";
        } else if (todayMonth === 9) {
            month = "September";
        } else if (todayMonth === 10) {
            month = "October";
        } else if (todayMonth === 11) {
            month = "November";
        } else if (todayMonth === 12) {
            month = "December";
        }

        console.log("Updating animal...");
        var getURL = "/php/adoptAnimal.php?id=" + animalID.trim();
        angular.forEach($scope.animalsInNeed, function (iter) {
            if (iter.id === animalID) {
                getURL = getURL + "&status=" + status.trim();
                getURL = getURL + "&rescuerID=" + userID.trim();
                getURL = getURL + "&monthRescued=" + month.trim();
                getURL = getURL + "&yearRescued=" + todayYear;
            }
        });
        console.log("URL: " + getURL);
        $http({
            method: 'POST',
            url: getURL,
            dataType: 'text json'
        }).then(function successCallback(response) {
            console.log("Animal updated successfully!");
            var index = $scope.getAnimal( animalID );
            var animal = $scope.origAnimalsInNeed[index];

            getURL = "/php/email.php?id=" + animalID.trim();
            getURL = getURL + "&status=" + status.trim();
            getURL = getURL + "&writeUp=" + animal.writeUp.trim();
            getURL = getURL + "&species=" + animal.species.trim();
            getURL = getURL + "&breed=" + animal.breed.trim();
            getURL = getURL + "&sex=" + animal.sex.trim();
            getURL = getURL + "&monthBorn=" + animal.monthBorn.trim();
            getURL = getURL + "&yearBorn=" + animal.yearBorn.trim();
            getURL = getURL + "&size=" + animal.size.trim();
            getURL = getURL + "&monthFound=" + animal.monthFound.trim();
            getURL = getURL + "&yearFound=" + animal.yearFound.trim();
            getURL = getURL + "&fixed=" + animal.fixed.trim();
            getURL = getURL + "&rescuerID=" + userID.trim();
            getURL = getURL + "&monthRescued=" + month.trim();
            getURL = getURL + "&yearRescued=" + todayYear;
            $http({
                method: 'POST',
                url: getURL,
                dataType: 'text json'
            }).then(function successCallback(response) {
                console.log("Email sent successfully!");
                window.location.reload();
            }, function errorCallback(response) {
                console.log( "Error on call: " + getURL );
            });
        }, function errorCallback(response) {
            console.log( "Error on call: " + getURL );
        });
    };

    /**
     * Calculate the ages
     **/
    $scope.calculateAges = function () {
        var i;
        var today = new Date();
        var todayMonth = today.getMonth() + 1;
        var todayYear = today.getFullYear();
        for (i = 0; i < $scope.origAnimalsInNeed.length; i = i + 1) {
            var mVal, month = $scope.origAnimalsInNeed[i].monthBorn;
            if (month === "January") {
                mVal = 1;
            } else if (month === "February") {
                mVal = 2;
            } else if (month === "March") {
                mVal = 3;
            } else if (month === "April") {
                mVal = 4;
            } else if (month === "May") {
                mVal = 5;
            } else if (month === "June") {
                mVal = 6;
            } else if (month === "July") {
                mVal = 7;
            } else if (month === "August") {
                mVal = 8;
            } else if (month === "September") {
                mVal = 9;
            } else if (month === "October") {
                mVal = 10;
            } else if (month === "November") {
                mVal = 11;
            } else if (month === "December") {
                mVal = 12;
            }
            var year = $scope.origAnimalsInNeed[i].yearBorn;
            var animalAge = todayYear - year;
            var animalMonths = (todayMonth - mVal);
            if (todayMonth < mVal) {
                animalAge = animalAge - 1;
            }
            if (animalMonths < 0) {
                animalMonths += 12;
            }
            var finalAge = animalAge + " year(s), " + animalMonths + " month(s) old";
            $scope.origAnimalsInNeed[i].age = finalAge;
            if (animalAge > 10) {
                animalAge = 11;
            }
            $scope.origAnimalsInNeed[i].years = animalAge.toString();
        }
    };

    /**
     * Take the actual list of breeds, and have them be the only options available.
     **/
    $scope.calculateBreedOptions = function () {
        var i, j, found = false;
        $scope.availableBreeds = [];
        $scope.breedOptions = $scope.data.options.breed;
        for (i = 0; i < $scope.origAnimalsInNeed.length; i = i + 1) {
            $scope.availableBreeds.push($scope.origAnimalsInNeed[i].breed);
        }
        for (i = 0; i < $scope.breedOptions.length; i = i + 1) {
            found = false;
            for (j = 0; j < $scope.availableBreeds.length; j = j + 1) {
                if ($scope.breedOptions[i].name === $scope.availableBreeds[j]) {
                    found = true;
                }
            }
            if (found) {
                $scope.filterData.options.breed.push($scope.breedOptions[i]);
            }
        }
    };

    /**
     * Filter the animals
     **/
    $scope.filter = function () {
        $scope.animalsInNeed = [];
        var i;

        if ($scope.origAnimalsInNeed.length > 0) {
            for (i = 0; i < $scope.origAnimalsInNeed.length; i = i + 1) {
                if ($scope.filterData.value.species === $scope.origAnimalsInNeed[i].species || $scope.filterData.value.species === null || $scope.filterData.value.species === "") {
                    if ($scope.filterData.value.breed === $scope.origAnimalsInNeed[i].breed || $scope.filterData.value.breed === null || $scope.filterData.value.breed === "") {
                        if ($scope.filterData.value.sex === $scope.origAnimalsInNeed[i].sex || $scope.filterData.value.sex === null || $scope.filterData.value.sex === "") {
                            if ($scope.filterData.value.years === $scope.origAnimalsInNeed[i].years || $scope.filterData.value.years === null || $scope.filterData.value.years === "") {
                                if ($scope.filterData.value.size === $scope.origAnimalsInNeed[i].size || $scope.filterData.value.size === null || $scope.filterData.value.size === "") {
                                    if ($scope.filterData.value.fixed === $scope.origAnimalsInNeed[i].fixed || $scope.filterData.value.fixed === null || $scope.filterData.value.fixed === "") {
                                        $scope.animalsInNeed.push($scope.origAnimalsInNeed[i]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if ($scope.animalsInNeed.length === 0) {
            window.alert("No results were found. Please broaden your search.");
        }        
    };

    /**
     *
     **/
    $scope.getAnimal = function( id ) {
        var i, toReturn = -1;
        for (i = 0; i < $scope.origAnimalsInNeed.length; i++) {
            if ( $scope.origAnimalsInNeed[i].id === id ) {
                console.log("found");
                toReturn = i;
                break;
            } else {
                console.log("lost");
            }
        }
        return toReturn;
    };

    /**
     * Get the photos from the database and assign to their owner
     **/
    $scope.getPhotos = function (option) {
        if (option === "animalsInNeed") {
            angular.forEach($scope.origAnimalsInNeed, function (iter) {
                var url = "/php/getPhotos.php?id=" + iter.id.trim();
                $http.get(url)
                    .then(function (response) {
                        iter.photos = response.data.photos;
                    });
            });
            $scope.filter();
        } else if (option === "adoptedAnimals") {
            angular.forEach($scope.adoptedAnimals, function (iter) {
                var url = "/php/getPhotos.php?id=" + iter.id.trim();
                $http.get(url)
                    .then(function (response) {
                        iter.photos = response.data.photos;
                    });
            });
        }
    };

    /**
     * Email the company
     **/
    $scope.sendEmail = function () {
        var status = true;
        
        if ($scope.data.value.subject === null || $scope.data.value.subject.trim() === '') {
            status = false;
        } else if ($scope.data.value.body === null || $scope.data.value.body.trim() === '') {
            status = false;
        }
        
        if (status) {
            $scope.emailData = {
                form:       'email',
                email1:     $scope.data.value.email1.trim(),
                email2:     $scope.data.value.email2.trim(),
                to:         $scope.data.value.to.trim(),
                subject:    $scope.data.value.subject.trim(),
                body:       $scope.data.value.body.trim()
            };

            window.alert('Email: ' + JSON.stringify($scope.emailData, null, 4));
        } else {
            window.alert('Email validation failed...');
        }
    };

    /**
     * Activate/Deactivate the "more info" triggers in the rescue modals
     **/
    $scope.showAdoptInfo = false;
    $scope.viewAdoptInfo = function () {
        $scope.showAdoptInfo = !$scope.showAdoptInfo;
    };
    $scope.showFosterInfo = false;
    $scope.viewFosterInfo = function () {
        $scope.showFosterInfo = !$scope.showFosterInfo;
    };
    $scope.showSponsorInfo = false;
    $scope.viewSponsorInfo = function () {
        $scope.showSponsorInfo = !$scope.showSponsorInfo;
    };



    /*********** DRIVER *************/



    $http.get("/php/getAnimalsInNeed.php")
        .then(function (response) {
            $scope.origAnimalsInNeed = response.data.animals;
            $scope.getPhotos("animalsInNeed");
            $scope.calculateAges();
            $scope.calculateBreedOptions();
        });

    $http.get("/php/getAdoptedAnimals.php")
    .then(function (response) {
        $scope.adoptedAnimals = response.data.animals;
        $scope.getPhotos("adoptedAnimals");
    });
});
