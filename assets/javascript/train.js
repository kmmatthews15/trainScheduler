var firebaseConfig = {
    apiKey: "AIzaSyAZlepA7Lh-A-YaEIl0N7QFXdJpbi-Upy8",
    authDomain: "trainscheduler-35a46.firebaseapp.com",
    databaseURL: "https://trainscheduler-35a46.firebaseio.com",
    projectId: "trainscheduler-35a46",
    storageBucket: "",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainName = "";
var destination = "";
var startTime = "";
var frequency = 0;

function currentTime() {
    var current = moment().format('LT');
    $("#currentTime").html(current);
    setTimeout(currentTime, 1000);
};

$(".form-field").on("keyup", function() {
    var traintemp = $("#train-name").val().trim();
    var citytemp = $("#destination").val().trim();
    var timetemp = $("#first-train").val().trim();
})