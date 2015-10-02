nicksFlicks.factory('ReviewsFactory', function ReviewsFactory(){
    var factory = {};
    factory.reviews =  [ { title: "Hackers is the best movie ever!",
                            text: "Bacon ipsum dolor amet shoulder tri-tip ham biltong kielbasa, ribeye chuck capicola shank kevin short ribs salami hamburger. Landjaeger ball tip rump frankfurter chuck turkey tail ground round pork chop tongue tenderloin pork loin ham fatback boudin. Pork jowl short ribs strip steak bacon, salami rump andouille ham fatback. Cupim porchetta pork, kielbasa turducken capicola andouille ball tip prosciutto boudin ribeye. Kevin jowl ham bresaola, t-bone salami doner porchetta boudin." },
                         { title: "Don't ever see Garden State",
                            text: "Sheepshead minnow giant danio yellowfin cutthroat trout fusilier fish scup airsac catfish mud minnow Redfin perch. Combtooth blenny Bitterling shortnose sucker sand dab alewife spiny dogfish; shortnose sucker man-of-war fish cusk-eel, grunt sculpin: bluefish hamlet yellowtail snapper mudskipper. Aholehole dorado Reedfish ling cod spiny-back baikal oilfish four-eyed fish saury turkeyfish? Beardfish barracudina tilefish harelip sucker snake mudhead tonguefish trout lined sole Black pickerel." },
                         { title: "My thoughts on the new Star Wars",
                            text: "Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini." },
                         { title: "Sharknado is a classic",
                            text: "I love cheese, especially halloumi airedale. Queso smelly cheese queso when the cheese comes out everybody's happy fromage cow feta pepper jack. Cauliflower cheese cow halloumi bocconcini smelly cheese stilton mascarpone say cheese. Hard cheese fromage the big cheese stinking bishop cow airedale cheesy feet parmesan. Emmental who moved my cheese monterey jack cheese and biscuits cheddar danish fontina ricotta danish fontina. Cheese triangles lancashire manchego st. agur blue cheese stinking bishop roquefort mascarpone cut the cheese. Queso stilton queso cut the cheese." },
                         { title: "Check out the new Thor movie",
                            text: "I'm sorry, what were you asking me? Oh, yes, that stupid plastic container I asked you to buy. You see, hydrofluoric acid won't eat through plastic. It will, however, dissolve metal, rock, glass, ceramic. So there's that. How about something with some protein, maybe? Something green, huh? How are you even alive? " },
                         { title: "Seriously, don't every see Garden State",
                            text: "Hodor. Hodor hodor hodor - hodor?! Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor, hodor. Hodor hodor. Hodor. Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor hodor! Hodor hodor, hodor. Hodor hodor. Hodor. Hodor hodor - hodor... Hodor hodor hodor... Hodor hodor hodor hodor hodor hodor! Hodor HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor." }
                       ];

    // student constructor
    factory.addReview = function() {
        factory.reviews.push({ title: factory.reviewTitle, text: factory.reviewText });
        factory.reviewTitle = null;
        factory.reviewText = null;
    };
    return factory;
});
