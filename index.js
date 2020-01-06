function scuberGreetingForFeet(feet) {
    if (feet <= 400) {
        return 'This one is one me!';
    } else if (feet > 1999 && feet < 2500) {
        return 'I will gladly take your thirty bucks.';
    } else {
        'No can do';
    }


    function ternaryCheckCity(city) {
        return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
    }



    function switchOnCharmFromTip(tip) {
        if (tip = 'generous') {
            return 'Thank you so much.';
        } else if (tip = 'not as generous') {
            return 'Thank you.';
        } else {
            'Bye.';
        }
    }