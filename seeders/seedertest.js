var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/mern-job-search', function() {

    // Load Mongoose models
    seeder.loadModels([
        '../models/job.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Job'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
            //seeder.disconnect();
        });

    });
});

var data = [{
    'model': 'Job',
    'documents': [{
            "title": "Front End Developer - Customer Experience Team",
            "company": "Remitly",
            "location": "Seattle, WA",
            "date": new Date(),
            "website": "https://www.glassdoor.com/job-listing/front-end-developer-customer-experience-team-remitly-JV_IC1150505_KO0,44_KE45,52.htm?jl=2537939072&ctt=1508264669991",
        },
        {
            "title": "Front End Developer",
            "company": "Wunderland Group",
            "location": "Seattle, WA",
            "date": new Date(),
            "website": "https://www.glassdoor.com/job-listing/front-end-developer-wunderland-group-JV_IC1150505_KO0,19_KE20,36.htm?jl=2546414957&ctt=1508265031901"
        }

    ]
}]
