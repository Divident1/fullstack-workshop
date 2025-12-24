function runGame() {
    console.log("Mad Libs Game");
    console.log("-------------");

    var name = prompt("Enter a name:");
    var adjective = prompt("Enter an adjective (like: happy, sad, big):");
    var noun = prompt("Enter a noun (like: dog, car, house):");
    var verb = prompt("Enter a verb (like: run, jump, sleep):");
    var place = prompt("Enter a place (like: park, school):");

    var story = "One day, " + name + " found a " + adjective + " " + noun + " that could " + verb + " in the " + place + ".";

    console.log(story);
    alert(story);
}

runGame();
