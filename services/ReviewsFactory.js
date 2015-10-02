nicksFlicks.factory('ReviewsFactory', function ReviewsFactory(){
    var factory = {};
    factory.reviews =  [ { title: "Hackers is the best movie ever!",
                            description: "Bacon ipsum dolor amet shoulder tri-tip ham biltong kielbasa, ribeye chuck capicola shank kevin short ribs salami hamburger. Landjaeger ball tip rump frankfurter chuck turkey tail ground round pork chop tongue tenderloin pork loin ham fatback boudin. Pork jowl short ribs strip steak bacon, salami rump andouille ham fatback. Cupim porchetta pork, kielbasa turducken capicola andouille ball tip prosciutto boudin ribeye. Kevin jowl ham bresaola, t-bone salami doner porchetta boudin.", id: 1 },
                         { title: "Don't ever see Garden State",
                            description: "Sheepshead minnow giant danio yellowfin cutthroat trout fusilier fish scup airsac catfish mud minnow Redfin perch. Combtooth blenny Bitterling shortnose sucker sand dab alewife spiny dogfish; shortnose sucker man-of-war fish cusk-eel, grunt sculpin: bluefish hamlet yellowtail snapper mudskipper. Aholehole dorado Reedfish ling cod spiny-back baikal oilfish four-eyed fish saury turkeyfish? Beardfish barracudina tilefish harelip sucker snake mudhead tonguefish trout lined sole Black pickerel.", id: 2 },
                         { title: "My thoughts on the new Star Wars",
                            description: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.", id: 3 },
                         { title: "Sharknado is a classic",
                            description: "I love cheese, especially halloumi airedale. Queso smelly cheese queso when the cheese comes out everybody's happy fromage cow feta pepper jack. Cauliflower cheese cow halloumi bocconcini smelly cheese stilton mascarpone say cheese. Hard cheese fromage the big cheese stinking bishop cow airedale cheesy feet parmesan. Emmental who moved my cheese monterey jack cheese and biscuits cheddar danish fontina ricotta danish fontina. Cheese triangles lancashire manchego st. agur blue cheese stinking bishop roquefort mascarpone cut the cheese. Queso stilton queso cut the cheese.", id: 4 },
                         { title: "Check out the new Thor movie",
                            description: "I'm sorry, what were you asking me? Oh, yes, that stupid plastic container I asked you to buy. You see, hydrofluoric acid won't eat through plastic. It will, however, dissolve metal, rock, glass, ceramic. So there's that. How about something with some protein, maybe? Something green, huh? How are you even alive?", id: 5 },
                         { title: "Seriously, don't every see Garden State",
                            description: "Hodor. Hodor hodor hodor - hodor?! Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor, hodor. Hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor hodor! Hodor hodor, hodor. Hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor... Hodor hodor hodor hodor hodor hodor! Hodor HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor.", id: 6 }
                       ];

    // student constructor
    factory.addReview = function() {
        factory.reviews.push({ title: factory.reviewTitle, description: factory.reviewText, id: factory.reviews.length + 1});
        factory.reviewTitle = null;
        factory.reviewText = null;
    };

    return factory;
});
