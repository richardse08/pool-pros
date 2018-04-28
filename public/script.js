$(document).ready(function(){

    

    // Ping this list for dealer information to display
    var dealerList =
        {
    "zipcode": "28205",
    "location": {
        "lat": 35.2263714,
        "lon": -80.7990185
    },
    "dealers": [
        {
            "data": {
                "companyID": 401929,
                "name": "Aqua Experts",
                "phone1": "1-888-234-5678",
                "email": "info@aquaexperts.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": ""
                },
                "certifications": [
                    "Installation Pro",
                    "Residential Pro",
                    "Service Pro"
                ]
            }
        }, {
            "data": {
                "companyID": 401928,
                "name": "Premium Pools & Spas",
                "phone1": "1-888-888-8888",
                "email": "info@premiumpoolscharlotte.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "",
                    "sun": "On Call"
                },
                "certifications": [
                    "Installation Pro",
                    "Commercial Pro",
                    "Residential Pro",
                    "Service Pro"
                ]
            }
        }, {
            "data": {
                "companyID": 401927,
                "name": "Carolina Pool Specialists",
                "phone1": "1-877-987-6543",
                "email": "info@cps.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "8:00am - 5:00pm",
                    "tue": "8:00am - 5:00pm",
                    "wed": "8:00am - 5:00pm",
                    "thu": "8:00am - 5:00pm",
                    "fri": "8:00am - 5:00pm",
                    "sat": "8:00am - 5:00pm",
                    "sun": ""
                },
                "certifications": [
                    "Installation Pro",
                    "Commercial Pro",
                    "Residential Pro",
                    "Service Pro"
                ]
            }
        }, {
            "data": {
                "companyID": 401926,
                "name": "Pools'r'Us",
                "phone1": "1-888-346-4574",
                "email": "info@poolsrus.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": "1:00pm - 5:00pm"
                },
                "certifications": [
                    "Installation Pro",
                    "Commercial Pro",
                    "Residential Pro"
                ]
            }
        }, {
            "data": {
                "companyID": 401925,
                "name": "Clean Pool Systems",
                "phone1": "1-888-246-7485",
                "email": "info@cleanpools.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": ""
                },
                "certifications": [
                    "Installation Pro",
                    "Residential Pro"
                ]
            }
        }, {
            "data": {
                "companyID": 401924,
                "name": "Pool Service Pros",
                "phone1": "1-888-PRO-POOL",
                "email": "info@propool.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 3:00pm",
                    "sun": ""
                },
                "certifications": [
                    "Installation Pro",
                    "Commercial Pro",
                    "Residential Pro",
                    "Service Pro"
                ]
            }
        }, {
            "data": {
                "companyID": 401923,
                "name": "Talent Pool",
                "phone1": "1-888-797-3463",
                "email": "info@talentpool.com",
                "addressLine1": "1234 Some Street",
                "addressLine2": "",
                "city": "Charlotte",
                "state": "North Carolina",
                "country": "US",
                "zipcode": "28205",
                "weekHours": {
                    "mon": "7:00am - 7:00pm",
                    "tue": "7:00am - 7:00pm",
                    "wed": "7:00am - 7:00pm",
                    "thu": "7:00am - 7:00pm",
                    "fri": "7:00am - 7:00pm",
                    "sat": "7:00am - 7:00pm",
                    "sun": "7:00am - 7:00pm"
                },
                "certifications": [
                    "Installation Pro",
                    "Commercial Pro",
                    "Service Pro"
                ]
            }
        }
    ]
}


    
    // Object to keep track of user's preferences
    var button_state = new Object();
    button_state.commercial = true;
    button_state.installation = true;
    button_state.residential = true;
    button_state.service = true;

	
    
    // Declare var to keep track of # of dealers based on user's preferences
    var qualified_dealers = 0;

    
    
	// Function to shoot results data to html
    function shoot(match) {
        var cloneNode = '<div class="dealers">';
            cloneNode += '<div class="title">' + dealerList.dealers[match].data.name + '</div>';
            cloneNode += '<div class="divider"></div>';
            cloneNode += '<div class="mobile-dial">';
            cloneNode += '<img class="phone-icon" src="assets/phone-icon-desktop.png">';
            cloneNode += '<div class="dealer-number">' + dealerList.dealers[match].data.phone1 + '</div>';
            cloneNode += '</div>';
            cloneNode += '<p class="email-prompt">Cant talk now? Click below to send an email.</p>';
            cloneNode += '<div class="email-shell">';
            cloneNode += '<img class="email-icon" src="assets/email-icon.png">';
            cloneNode += '<div class="email-text">Contact this Pro</div>';
            cloneNode += '</div>';
            cloneNode += '<div class="business-hours">';
            cloneNode += '<p>Business Hours</p>';
            cloneNode += '<p>Weekdays ' + dealerList.dealers[match].data.weekHours.mon + '</p>';
            cloneNode += '<p>Saturdays ' + dealerList.dealers[match].data.weekHours.sat + '</p>';
            cloneNode += '<p>Sundays ' + dealerList.dealers[match].data.weekHours.sun + '</p>';
            cloneNode += '</div>';
            cloneNode += '</div>';
        $('.dealers').removeClass('display-none');
        $('.search').removeClass('display-none');
		qualified_dealers++;
        $('.result-quantity').html(qualified_dealers + " dealers");
        $('.dealer-shell').append(cloneNode);
    };

    
    
    // Search dealer json object based on what filters are checked
    function executeSearch() { 
		
        // Clear dealer shell anc counter
        $('.dealer-shell').html('');
		$('.result-quantity').html("");
        
        // List to hold buttons that are checked
        checked_buttons = [];

        // Loop through the selected buttons object and if button is selected then
        // add the name to the checked_buttons list
        for(key in selected_buttons) {
            if(selected_buttons[key].selected) {
                checked_buttons.push(selected_buttons[key].name);
            }
        }

        // Get list of only the dealers
        var dealerships = dealerList.dealers;

        // Loop through dealership list
        for (var i = 0; i < dealerships.length; i++) {

            // Grab the certifcations for this specific dealer
            var certifications = dealerships[i].data.certifications;

            // Set a matched_all variable that will tell us if all certifications were present
            // Default it to true
            var matched_all = true;

            // Loop through all of the checked buttons
            for (var j in checked_buttons) {

                // If a particular button is NOT included in the certifications list
                // then set matched_all to false and break out of loop
                if(!certifications.includes(checked_buttons[j])) {
                    matched_all = false;
                    break;
                }
            }

            // If matched_all is true at this point then this dealer should be shown
            // If matched_all is false then this dealer did not have all certs needed
            if(matched_all) {
                // Append to html
                shoot(i);
            }
        }

    }



    // Keep track of what buttons user clicks 
    var selected_buttons = {
        service: { selected: true, name: "Service Pro" },
        installation: { selected: true, name: "Installation Pro" },
        residential: { selected: true, name: "Residential Pro" },
        commercial: { selected: true, name: "Commercial Pro" }
    }



    // Keep track of what buttons user is clicking
    $('.search').on("click", ".checkbox-on", function () {
        $(this).removeClass('checkbox-on');
        $(this).addClass('checkbox-off');

        // Button id
        var button_id = $(this).attr('id');

        // Toggle selected_buttons
        if(selected_buttons[button_id].selected) {
            selected_buttons[button_id].selected = false;
        }
        else {
            selected_buttons[button_id].selected = true;
        }
		
		qualified_dealers = 0;
		executeSearch();
    });
    
    $('.search').on("click", ".checkbox-off", function () {
        $(this).removeClass("checkbox-off");
        $(this).addClass("checkbox-on");

        // Button id
        var button_id = $(this).attr('id');

        // Toggle selected_buttons
        if(selected_buttons[button_id].selected) {
            selected_buttons[button_id].selected = false;
        }
        else {
            selected_buttons[button_id].selected = true;
        }
		
		qualified_dealers = 0;
		executeSearch();
    });



    // Show zipcode interface when finder icon is clicked
    $('.finder').click(function() {
        $('.zipcode-query').removeClass('display-none');
    });
    
    // Close zipcode interface when X is clicked
    $('.finder-close').on("click", function () {
        $('.zipcode-query').addClass('display-none');
    });
    
    
    
    // Ping list of dealer info if search OR enter key is clicked
    $('.search-btn').click(function() {
        qualified_dealers = 0;
        executeSearch();
		$('.zipcode-query').addClass('display-none');
    });
    
    $("#zipcode").keyup(function (enterEvent) {
        var key = enterEvent.which;
        if(key == 13) {
            qualified_dealers = 0;
			executeSearch();
			$('.zipcode-query').addClass('display-none');
        }
    });
    
    
    
    // Display email widget if user clicks email shell
    $('.dealer-shell').on("click", ".email-shell", function () {
        $('.email-form').removeClass('display-none');
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    
    
    
    // Close email when X or send is clicked
    $('.close, .send').click(function() {
		$('.email-form').addClass('display-none');
    });
    
   
    
    // Add or remove filter options drop down in mobile
    $('#mobile-drop').click(function() {
        if($('.checkbox-shell').hasClass('display-none')) {
            $('.checkbox-shell').removeClass('display-none');    
            $('.search').addClass('show-nav');
        }
        else {
            $('.checkbox-shell').addClass('display-none');
            $('.search').removeClass('show-nav');
        }
    });


    
    // Hide/show Full Page yes/no buttons in email widget
    $('.buttons').on("click", ".button-yes", function () {
        $(".button-yes").addClass("btn-selected");
        $(".button-no").removeClass("btn-selected");
    });
    
    $('.buttons').on("click", ".button-no", function () {
        $(".button-no").addClass("btn-selected");
        $(".button-yes").removeClass("btn-selected");
    });



    // Show/hide Mobile yes/no buttons in email widget
    $('#yes').on("click", function () {
        $('#yes').removeClass("button-no-mobile");
        $('#yes').addClass("button-yes-mobile");
        $('#no').removeClass("button-yes-mobile");
        $('#no').addClass("button-no-mobile");
    });
    
    $('#no').on("click", function () {
        $('#no').removeClass("button-no-mobile");
        $('#no').addClass("button-yes-mobile");
        $('#yes').removeClass("button-yes-mobile");
        $('#yes').addClass("button-no-mobile");
    });



    // Show/hide nav menu in mobile
    $('.menu-icon').click(function() {
        $('.mobile-nav').removeClass('display-none');
    });

    $('.nav-close').on("click", function () {
        $('.mobile-nav').addClass('display-none');
    });
    
    

    
}); // End document ready