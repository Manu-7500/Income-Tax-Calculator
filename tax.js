
let salary = prompt( "Please enter your Annual Income In numbers Only", "" );

{
    if ( salary != null ) {
        if ( salary <= 250000 ) {
            document.getElementById( "amount" ).innerHTML = "You do not need to pay tax on Rs." + salary + " Please confirm that is it  your Annual Income. ";
        }


        else if ( salary < 500000 ) {
            if ( salary > 250000 ) {
                document.getElementById( "amount" ).innerHTML = "You need to pay tax 5% on Rs." + salary + " Welcome Taxpayer 5% is your tax on your Annual Income. ";
            }
        }



        else if ( salary < 1000000 ) {
            if ( salary > 500000 ) {
                document.getElementById( "amount" ).innerHTML = "You need to pay 20% tax on Rs." + salary + "Welcome Taxpayer 20% is your tax on your Annual Income. ";
            }
        }


        else if ( salary > 1000000 ) {
            document.getElementById( "amount" ).innerHTML = "You need to pay 30% tax on Rs." + salary + " Welcome Taxpayer 30% is your tax on your Annual Income Keep Growing. ";
        }
    }
} 
