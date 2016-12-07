app.controller("myCtrl", function ($scope, $http) {
    /********** GLOBAL VARIABLES **********/

    $scope.origAnimalsInNeed = [];
    $scope.animalsInNeed = [];
    $scope.adoptedAnimals = [];

    $scope.filterData = {
        values: {
            age:        null,
            breed:      null,
            fixed:      null,
            sex:        null,
            aSize:      null,
            species:    null,
            years:      null
        },
        options: {
            breed: [
                /* $scope.calculateBreedOptions() called below */
            ],
            fixed: [
                {value: 'No'},
                {value: 'Yes'}
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
            years: [
                {id: "0", value: '< 1 year old'},
                {id: "1", value: '1 year old'},
                {id: "2", value: '2 years old'},
                {id: "3", value: '3 years old'},
                {id: "4", value: '4 years old'},
                {id: "5", value: '5 years old'},
                {id: "6", value: '6 years old'},
                {id: "7", value: '7 years old'},
                {id: "8", value: '8 years old'},
                {id: "9", value: '9 years old'},
                {id: "10", value: '10 years old'},
                {id: "11", value: '> 10 years old'}
            ]
        }
    };

    $scope.formData = {
        values: {
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
            donation: [
                {value: 'One-Time Donation'},
                {value: 'Monthly Donation'}
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
            subject: [
                {value: 'Adopt'},
                {value: 'Donate'},
                {value: 'Foster'},
                {value: 'Sponsor'},
                {value: 'Volunteer'},
                {value: 'Other'}
            ],
            year: [
                {value: '2016'},
                {value: '2017'},
                {value: '2018'},
                {value: '2019'},
                {value: '2020'},
                {value: '2021'},
                {value: '2022'},
                {value: '2023'}
            ]
        }
    };



    /********** FUNCTIONS **********/



    /**
     * Attempt to submit the adoption inquiry
     **/
    $scope.attemptAdoption = function (animalID, status) {
        console.log("Attempting adoption...");
        
        if ($scope.formData.values.name === null || $scope.formData.values.name.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.phone === null || $scope.formData.values.phone.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.email1 === null || $scope.formData.values.email1.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.email2 === null || $scope.formData.values.email2.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.email2 !== $scope.formData.values.email1) {
            console.log("Emails do not match!");
            window.alert("Emails do not match!");
        } else if ($scope.formData.values.addr1 === null || $scope.formData.values.addr1.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.city === null || $scope.formData.values.city.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.state === null || $scope.formData.values.state.trim() === '') {
            console.log("Adoption failed!");
        } else if ($scope.formData.values.zip === null || $scope.formData.values.zip.trim() === '') {
            console.log("Adoption failed!");
        } else {
            console.log("Adding new user...");

            var numUsers = "", userID = "", getURL = "/php/getNumUsers.php";
            $http.get(getURL)
                .then(function (response) {
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
                    getURL = getURL + "&fullName=" + $scope.formData.values.name.trim();
                    getURL = getURL + "&phone=" + $scope.formData.values.phone.trim();
                    getURL = getURL + "&email=" + $scope.formData.values.email1.trim();
                    getURL = getURL + "&addr1=" + $scope.formData.values.addr1.trim();
                    getURL = getURL + "&addr2=" + $scope.formData.values.addr2;
                    getURL = getURL + "&city=" + $scope.formData.values.city.trim();
                    getURL = getURL + "&state=" + $scope.formData.values.state.trim();
                    getURL = getURL + "&zip=" + $scope.formData.values.zip.trim();

                    console.log("URL: " + getURL);
                    $http({
                        method: 'GET',
                        url: getURL,
                        dataType: 'text json'
                    }).then(function successCallback(response) {
                        console.log("User added successfully!");
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
                        getURL = "/php/adoptAnimal.php";
                        getURL = getURL + "?id=" + animalID;
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
                            method: 'GET',
                            url: getURL,
                            dataType: 'text json'
                        }).then(function successCallback(response) {
                            console.log("Animal updated successfully!");
                            window.alert("Animal updated successfully!");
                            window.location.reload();
                        }, function errorCallback(response) {
                            console.log(status + " " + getURL);
                        });
                    }, function errorCallback(response) {
                        console.log(status + " " + getURL);
                    });
                });
        }
    };

    /**
     * Schedule the donation
     **/
    $scope.attemptDonation = function () {
        var status = true;

        if ($scope.formData.values.donation === null || $scope.formData.values.donation.trim() === '') {
            status = false;
        } else if ($scope.formData.values.amount === null || $scope.formData.values.amount.trim() === '') {
            status = false;
        } else if ($scope.formData.values.name === null || $scope.formData.values.name.trim() === '') {
            status = false;
        } else if ($scope.formData.values.number === null || $scope.formData.values.number.trim() === '') {
            status = false;
        } else if ($scope.formData.values.month === null || $scope.formData.values.month.trim() === '') {
            status = false;
        } else if ($scope.formData.values.year === null || $scope.formData.values.year.trim() === '') {
            status = false;
        } else if ($scope.formData.values.cvv === null || $scope.formData.values.cvv.trim() === '') {
            status = false;
        }

        if (status) {
            $scope.donationData = {
                form:       'donate',
                donation:   $scope.formData.values.donation.trim(),
                amount:     $scope.formData.values.amount.trim(),
                name:       $scope.formData.values.name.trim(),
                number:     $scope.formData.values.number.trim(),
                month:      $scope.formData.values.month.trim(),
                year:       $scope.formData.values.year.trim(),
                cvv:        $scope.formData.values.cvv.trim()
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
        var status = true;

        if ($scope.formData.values.email1 === null || $scope.formData.values.email1.trim() === '') {
            status = false;
        } else if ($scope.formData.values.email2 === null || $scope.formData.values.email2.trim() === '') {
            status = false;
        } else if ($scope.formData.values.donation === null || $scope.formData.values.donation.trim() === '') {
            status = false;
        } else if ($scope.formData.values.amount === null || $scope.formData.values.amount.trim() === '') {
            status = false;
        } else if ($scope.formData.values.name === null || $scope.formData.values.name.trim() === '') {
            status = false;
        } else if ($scope.formData.values.number === null || $scope.formData.values.number.trim() === '') {
            status = false;
        } else if ($scope.formData.values.month === null || $scope.formData.values.month.trim() === '') {
            status = false;
        } else if ($scope.formData.values.year === null || $scope.formData.values.year.trim() === '') {
            status = false;
        } else if ($scope.formData.values.cvv === null || $scope.formData.values.cvv.trim() === '') {
            status = false;
        }

        if (status) {
            $scope.sponsorData = {
                form:       'sponsor',
                email1:     $scope.formData.values.email1.trim(),
                email2:     $scope.formData.values.email2.trim(),
                donation:   $scope.formData.values.donation.trim(),
                amount:     $scope.formData.values.amount.trim(),
                name:       $scope.formData.values.name.trim(),
                number:     $scope.formData.values.number.trim(),
                month:      $scope.formData.values.month.trim(),
                year:       $scope.formData.values.year.trim(),
                cvv:        $scope.formData.values.cvv.trim()
            };

            window.alert('Sponsor: ' + JSON.stringify($scope.sponsorData, null, 4));
        } else {
            window.alert('Sponsor validation failed...');
        }
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
        $scope.breedOptions = [
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
        ];
        for (i = 0; i < $scope.origAnimalsInNeed.length; i = i + 1) {
            $scope.availableBreeds.push($scope.origAnimalsInNeed[i].breed);
        }
        for (i = 0; i < $scope.breedOptions.length; i = i + 1) {
            found = false;
            for (j = 0; j < $scope.availableBreeds.length; j = j + 1) {
                if ($scope.breedOptions[i].value === $scope.availableBreeds[j]) {
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
                if ($scope.filterData.values.species === $scope.origAnimalsInNeed[i].species || $scope.filterData.values.species === null || $scope.filterData.values.species === "") {
                    if ($scope.filterData.values.breed === $scope.origAnimalsInNeed[i].breed || $scope.filterData.values.breed === null || $scope.filterData.values.breed === "") {
                        if ($scope.filterData.values.sex === $scope.origAnimalsInNeed[i].sex || $scope.filterData.values.sex === null || $scope.filterData.values.sex === "") {
                            if ($scope.filterData.values.years === $scope.origAnimalsInNeed[i].years || $scope.filterData.values.years === null || $scope.filterData.values.years === "") {
                                if ($scope.filterData.values.aSize === $scope.origAnimalsInNeed[i].aSize || $scope.filterData.values.aSize === null || $scope.filterData.values.aSize === "") {
                                    if ($scope.filterData.values.fixed === $scope.origAnimalsInNeed[i].fixed || $scope.filterData.values.fixed === null || $scope.filterData.values.fixed === "") {
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
        
        if ($scope.formData.values.subject === null || $scope.formData.values.subject.trim() === '') {
            status = false;
        } else if ($scope.formData.values.body === null || $scope.formData.values.body.trim() === '') {
            status = false;
        }
        
        if (status) {
            $scope.emailData = {
                form:       'email',
                email1:     $scope.formData.values.email1.trim(),
                email2:     $scope.formData.values.email2.trim(),
                to:         $scope.formData.values.to.trim(),
                subject:    $scope.formData.values.subject.trim(),
                body:       $scope.formData.values.body.trim()
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
