#!/bin/bash

typeset pre='http://animalrescue.us-east-1.elasticbeanstalk.com/php';
typeset addAnimal=${pre}'/addAnimal.php?id=111111&name=Rafita&writeUp=My%20bad,%20Rafa&species=Feline&breed=Greyhound%20Mix&sex=Male&monthBorn=July&yearBorn=2004&aSize=Extra%20Small%20(less%20than%2010%20lbs)&monthFound=December&yearFound=2016&fixed=Yes&status=Sheltered&rescuerID=null&monthRescued=null&yearRescued=null&age=null&years=null&photos=null';
typeset addPicture=${pre}'/addPicture.php?id=111111&animalID=111111&photo=uploads/FrankPup.jpg';
typeset addUser=${pre}'/addUser.php?id=111111&fullName=billy%20bob&phone=5095211949&email=test@home.com&addr1=test_address&city=Richmond&state=Virginia&zip=23294';
typeset adoptAnimal=${pre}'/adoptAnimal.php?id=111111&status=Adopted&rescuerID=111111&monthRescued=July&yearRescued=2005'
typeset getAdoptedAnimals=${pre}'/getAdoptedAnimals.php'
typeset getAnimals=${pre}'/getAnimals.php'
typeset getAnimalsInNeed=${pre}'/getAnimalsInNeed.php'
typeset getNumPics=${pre}'/getNumPics.php'
typeset getNumUsers=${pre}'/getNumUsers.php'
typeset getPhotos=${pre}'/getPhotos.php'
typeset updateAnimal=${pre}'/updateAnimal.php?id=111111&name=Zuko&writeUp=Sleeps%20all%20night,%20naps%20all%20day.&species=Canine&breed=Cane%20Corso%20Mix&sex=Male&monthBorn=July&yearBorn=2012&aSize=Large%20(between%2060%20and%20100%20lbs)&monthFound=January&yearFound=2015&fixed=Yes&status=Adopted&rescuerID=111111&monthRescued=June&yearRescued=2015&age=null&years=null&photos=null'
typeset adminExists=${pre}'/adminExists.php?user=user&pass=pass'

# RunTests
# curl -X POST ${addAnimal}
# curl -X POST ${addPicture}
# curl -X POST ${addUser}
# curl -X POST ${adoptAnimal}
# curl -X GET ${getAdoptedAnimals}
# curl -X GET ${getAnimals}
# curl -X GET ${getAnimalsInNeed}
# curl -X GET ${getNumPics}
# curl -X GET ${getNumUsers}
# curl -X GET ${getPhotos}
# curl -X GET ${getPhotos}'?id=000000'
# curl -X POST ${updateAnimal}
curl -X POST ${adminExists}

echo "DONE! Go clear the testing."
exit 0

##### New functionality
# Timestamps!
# Check for admin user on super_secret.php!

##### Future functionality
#delete animal from database 	// if animal dies or gets sent to another shelter 
#delete picture from animal 	// if incorrect picture
#check for existing user 		// instead of creating a new user for each form
#email the admin				// notifications
#email the user 				// confirmation
#implement payment option 		// for donations