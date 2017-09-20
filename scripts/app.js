var model = {
	
	bio: {
		"name": "VITOR BIGELLI",
		"role": "Fron-End Web Developer"
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
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "dates": "September 2017",
            "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/?gclid=EAIaIQobChMI0_nQ-4Li1QIVTgWRCh1Nrwd7EAAYASAAEgLm6vD_BwE"
        },
        {
            "title": "Intro to Computational Thinking and Data Science",
            "school": "edx/MITx",
            "dates": "March 2017",
            "url": "https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-5"
        },
        {
            "title": "Intro to Computer Science and Programming Using Python",
            "school": "edX/MITx",
            "dates": "February 2017",
            "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11"
		    }], 

	projects: [
	    {
            "title": "Health Tracker",
            "dates": "September, 2017",
            "description": "A single page app that tracks the user's calorie intake developted using Backbone.",
            "images": ["http://placehold.it/280x150"], 
            "url": "https://github.com/VitorBigelli/health_tracker"
        },
	    {
            "title": "Neighborhood map",
            "dates": "September, 2017",
            "description": "An interactive map of the neighbourhood of Silicon Valley, CA, United States using Google Maps API's.",
            "images": ["http://placehold.it/280x150"], 
            "url": "https://github.com/VitorBigelli/silicon_valley_neighborhood_map"
        },
        {
            "title": "Build a Portfolio site",
            "dates": "August, 2017",
            "description": "Given a pdf mockup of a website from a designer, translate it to a real website using your HTML and CSS skills.",
            "images": ["http://placehold.it/280x150"], 
            "url": "https://github.com/VitorBigelli/WFED_PortfolioSite"
        },
        {
            "title": "Animal trading card",
            "dates": "August, 2017",
            "description": "Use HTML and CSS to create a web-based trading card depicting my favorite animal",
            "images": ["http://placehold.it/280x150"],
            "url": "https://github.com/VitorBigelli/WFED_AnimalTradingCards" 
        },
		{
            "title": "Mockup to Article",
            "dates": "August, 2017",
            "description": "Convert a mockup of a blog article into a real web page.",
            "images": ["http://placehold.it/280x150"],
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
		skills: ["HTML", "CSS", "JavaScript"]
	}
};


var ViewModel = function() {
	this.bio = model.bio;
	this.aboutme = model.aboutme;
}


ko.applyBindings(ViewModel);

