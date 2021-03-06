var model = {
	
	bio: {
		"name": "VITOR BIGELLI",
		"role": "Front-End Web Developer"
	}, 

	schools: [
		{
	        "name": "Universidade Tecnológica Federal do Paraná",
	        "location": "Londrina, PR, BR",
	        "degree": "Bachelor",
	        "dates": "2013 - 2017",
	        "majors": ["Materials Engineering"]
	    },
	    {
	        "name": "ETEC de Itanhaém",
	        "location": "Itanhaém, SP, BR",
	        "degree": "Technical",
	        "dates": "2012 - 2013",
	        "majors": ["Internet Computing"]
    	}
    ],

	onlineCourses: [
		{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "September 2017",
            "certificateImg": "images/certificate3.png"
        },
        {
            "title": "6.00.2x Intro to Computational Thinking and Data Science",
            "school": "edx/MITx",
            "dates": "March 2017",
            "certificateImg": "images/certificate2.png",
            "url": "https://courses.edx.org/certificates/49f1c7f0f15c41cdaf998b8c29c70dbe"
        },
        {
            "title": "6.00.1x Intro to Computer Science and Programming Using Python",
            "school": "edX/MITx",
            "dates": "February 2017",
            "certificate_id": "52ecdf10307c4100832abd7ca7d9f640",
            "certificateImg": "images/certificate1.png",
		    }
	], 

	projects: [
	    {
            "title": "Health Tracker",
            "dates": "September, 2017",
            "description": "A single page app that tracks the user's calorie intake developted using Backbone.",
            "image": "http://placehold.it/200x150", 
            "url": "https://github.com/VitorBigelli/health_tracker"
        },
	    {
            "title": "Neighborhood map",
            "dates": "September, 2017",
            "description": "An interactive map of the neighbourhood of Silicon Valley, CA, United States using Google Maps API's.",
            "image": "http://placehold.it/200x150", 
            "url": "https://github.com/VitorBigelli/silicon_valley_neighborhood_map"
        },
        {
            "title": "Build a Portfolio site",
            "dates": "August, 2017",
            "description": "Given a pdf mockup of a website from a designer, translate it to a real website using your HTML and CSS skills.",
            "image": "http://placehold.it/200x150", 
            "url": "https://github.com/VitorBigelli/WFED_PortfolioSite"
        },
        {
            "title": "Animal trading card",
            "dates": "August, 2017",
            "description": "Use HTML and CSS to create a web-based trading card depicting my favorite animal",
            "image": "http://placehold.it/200x150", 
            "url": "https://github.com/VitorBigelli/WFED_AnimalTradingCards" 
        },
		{
            "title": "Mockup to Article",
            "dates": "August, 2017",
            "description": "Convert a mockup of a blog article into a real web page.",
            "image": "http://placehold.it/200x150", 
            "url": "https://github.com/VitorBigelli/WFED_MockupToArticle"
        },

	], 

	works: [
		{
	        "employer": "UTFPR-LD",
	        "title": "Differential and Integral Calculus Monitor",
	        "location": "Londrina, PR, BR",
	        "dates": "January 2016 to December 2016",
	        "description": "One year helping the Diferrential and Integral Calculus Professor during the classes."
		}
	],

	aboutme: {
		skills: ["HTML", "CSS", "JavaScript"],
		imgUrl: "images/profile-img.jpg"
	},

	contacts: {
		"email": "vitorbigelli@hotmail.com",
        "mobile": "+5543 99145-4536",
        "github": {
        	"user": "VitorBigelli",
        	"url": "https://github.com/VitoBigelli"
        },
        "twitter": {
        	"user": "@_vitorbigelli",
        	"url": "https://twitter.com/_vitorbigelli"
       	},
        "location": "Londrina, PR, Brasil"
	}
};

var ViewModel = function() {

	var self = this;

	this.bio = model.bio;
	this.aboutme = model.aboutme;
	this.schools = model.schools; 
	this.onlineCourses = model.onlineCourses;
	this.projects = model.projects;
	this.works = model.works;
	this.contacts = model.contacts;
	this.hideAside = ko.observable(true) ; 

	this.toggleAsideClass = function() {
		if (self.hideAside()) {
			self.hideAside(false);
		} else {
			self.hideAside(true);
		}
		return self.hideAside();
	}

    this.formName = document.getElementById("form-name");
    this.formEmail = document.getElementById("form-email");
    this.formSubject = document.getElementById("form-subject");
    this.formMessage = document.getElementById("form-message");

    $("form").submit(function(e) {
        e.preventDefault();
        if (self.formName.value == "" || self.formEmail.value == "" || self.formSubject.value == "" || self.formMessage.value == "") {
            window.alert("Please, fill all the fields");
        }
        else {
            var data = {
                "Name": self.formName.value,
                "Email": self.formEmail.value,
                "Subject": self.formSubject.value,
                "Message": self.formMessage.value
            }

            $.post('/messages', data)
            .done( function(data) {
                $("form").addClass("hide");
                $("#message").html("<p> Message received. </p>")
            })
            .fail( function() {
                alert("An error occour. Please, try again later.");
            });
        }
        return;
    });
}

ko.applyBindings(ViewModel);

