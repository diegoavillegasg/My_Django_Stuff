var userAction = "remove";
var students = []
var actions =  {
    "add": function(){
        var name = prompt("what name would you like to ADD?").toLowerCase();
        students.push(name);
        console.log("New name added : "+name);        
    },
    "remove": function(){
        var name = prompt("what name would you like to REMOVE?").toLowerCase();
        students.pop(name);
    },
    "display": function(){
        console.log("The list with current values is: ");
        for (name in students){
            console.log("Name: "+name);
        }
    },
    "quit": function(){
        break
    }
}

function startApp(){
    response = prompt("Would you like to start the roster app? y/n");
    if (response.toLowerCase() === "y"){
        console.log("Starting Roster App ------");
        return true
    }else {
        console.log("Exiting ------");
        return false
    }
}

function getUserAction(){
    var userAction = prompt("What do you want to do? [add]/remove/display/quit", "add");
    return userAction
}
var runApp = startApp()

while (runApp){
    while (userAction !== "quit"){
        var userAction = getUserAction();
        userAction = userAction.toLowerCase();
        console.log("User action received "+userAction);
        
        // actions[userAction]();
        if (userAction == "quit"){
            runApp = false;
            console.log("exiting !!!! :)");
            break;
        };
        switch(userAction){
            case "add":
                var name = prompt("what name would you like to ADD?");
                students.push(name.toLowerCase());
                break;
            case "remove":
                var name = prompt("what name would you like to REMOVE?");
                name2remove = name.toLowerCase();
                console.log("**********************************" + students);
                for (i in students){
                    if (students[i] == name2remove){
                        students.splice(i, 1);
                        console.log("********************************** remaining: " + students);
                        break;
                    }
                }
                break;
            case "display":
                console.log("The list with current values is: ");
                for (ind in students){
                    console.log("Name: "+students[ind]);
                };
                break;
            default:
                break;
        }
    }
}


console.log("exiting from the while loop ---- :(");

