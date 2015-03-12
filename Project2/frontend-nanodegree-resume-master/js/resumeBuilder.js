var bio = {
    "name": "John Doe",
    "role": "Web Developer",
    "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
    "contacts": {
        "email": "you@gmail.com",
        "location": "mountain view",
        "mobile": "000-000-0000",
        "github": "username",
        "twitter": "twit"
    },
    "welcomeMessage": "I do developing and I love it",
    "bioPic": "images/fry.jpg"
};
//var name = "John Doe";
function displayBio() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        //var role = "Web Developer";
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBiopic);
        $("#header").append(formattedWelcomeMessage);
        //var formattedContacts = HTMLcontactGeneric.replace("%data%", bio.contacts);
        //$("#topContacts").append(formattedContacts);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        //var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);
        //var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGithub);
        //var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        //var formattedTwitter= HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);
        //var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedLocation);
    }
    //if (bio.skills.length > 0) {
    //  $("#header").append(HTMLskillsStart);
    //var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    //$("#skills").append(formattedSkill);
    //var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    //$("#skills").append(formattedSkill);
    //var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    //$("#skills").append(formattedSkill);
    //var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    //$("#skills").append(formattedSkill);
    //}
displayBio();
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

//$("#main").append(bio.image);
//$("#main").append(bio.role);
//$("#main").append(bio.message);
//$("#main").append(bio.skills);
//$("#main").append(bio.name);
//$("#main").append(bio.contact.city);
//$("#main").append(bio.contact.place);
//$("#main").append(bio.contact.mobile);
//$("#main").append(bio.contact.city);
var education = {
    "schools": [{
        "name": "Cambridge University",
        "dates": 2013,
        "degree": "Masters",
        "location": "MountainView,FL",
        "majors": ["CS"],
        "url": "http://example.com"
    }, {
        "name": "Warvard college",
        "dates": 2003,
        "majors": ["CS"],
        "location": "Saint Peterburg,FL",
        "degree": "BA",
        "url": "http://example.com"
    }],

    "onlineCourses": [{
        "title": "JavaScript Crash Course",
        "dates": 2014,
        "school": "Udacity",
        "url": "http://www.udacity.com/course/ud804"
    }]
};

education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedschoolName);
        $(".education-entry:last").append(formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolMajors);
    }
    for (var onlinecourse in education.onlineCourses) {


        //var formattedClasses =  HTMLonlineClasses.replace("%data%", education.onlineCourses[onlinecourse].classes); 
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);
        var formattedDated = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
        $(".education-entry:last").append(formattedTitle);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(formattedDated);
        //$(".education-entry:last").append(formattedschoolLocation );
        $(".education-entry:last").append(formattedURL);
    }
}
education.display();
var work = {
    "jobs": [{
        "employer": "Planet Express",
        "title": "Delivery Boy",
        "location": "MountainView",
        "dates": "January 3000 - Future",
        "description": "I love delivering anything but in time."

    }, {
        "employer": "Panucci's Pizza",
        "title": "Delivery Boy",
        "location": "MountainView",
        "dates": "1998 - December 31, 1999",
        "description": "I love delivering pizza."

    }]
}



//var cameron = {};
//cameron.job = "course dev";

//var makeCourse = function() {
//make a course
//  console.log("Made a course");
//}
//var courses = 0;
//while (cameron.job === "course dev") {
//  makeCourse();
//courses = courses + 1;
//if (courses === 10) {
//  cameron.job = "learning specalist";
// }
//}
//console.log(cameron.job);
//for (var i = 0; i < 9; i++) {
//  console.log(i);
//}

work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDate);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").prepend(formattedLocation);

    };
}
work.display();
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

function locationizer(work_obj) {
    var locationArray = [];
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));

function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2013",
        "description": "I love doing my projects complete.",

        "images": [
            "http://www.freedigitalphotos.net/images/gallery-thumbnails.php?id=18120587492756571504759705",
            "http://www.freedigitalphotos.net/images/gallery-thumbnails.php?id=7735507898655264477911119"
        ]
    }, {
        "title": "Sample Project 2",
        "dates": "2014",
        "description": "I learnt how to use google for all the problems you face during writing any programme.",

        "images": [
            "http://www.freedigitalphotos.net/images/gallery-thumbnails.php?id=4303111247635349403637304",
            "http://www.freedigitalphotos.net/images/gallery-thumbnails.php?id=98392076621972403976125861"
        ]
    }]
};

projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedProjectImage);

            }
        }
    }
};
projects.display();
$("#mapDiv").append(googleMap);
