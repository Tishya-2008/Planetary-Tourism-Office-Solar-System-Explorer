document.addEventListener("DOMContentLoaded", function () {
    const itinerarySection = document.getElementById("itinerary");
    const travelSection = document.getElementById("travel-customization");
    const doneButton = document.getElementById("done-button");
    const finalizeButton = document.getElementById("finalize-button");
    const itineraryList = document.getElementById("itinerary-list");

    // Define arrays to store user choices
    const selectedBodies = [];
    const selectedTransportation = [];

    // Function to generate the daily itinerary
    function generateItinerary() {
        const dailyItinerary = [];

        // Calculate travel time and total duration
        let totalDuration = 0;
        selectedBodies.forEach((body) => {
            const selectedDuration = parseInt(body.selectedDuration);
            const travelTime = calculateTravelTime(body.body);
            totalDuration += selectedDuration + travelTime;
            dailyItinerary.push({
                body: body.body,
                duration: selectedDuration,
                travelTime: travelTime,
            });
        });

        // Display the daily itinerary
        console.log("Daily Itinerary:");
        console.log("Total Duration (days):", totalDuration);
        dailyItinerary.forEach((item, index) => {
            console.log(`Day ${index + 1}:`);
            console.log(`- Visit ${item.body}`);
            console.log(`- Duration at ${item.body}: ${item.duration} days`);
            console.log(`- Travel Time to ${item.body}: ${item.travelTime} days`);
        });
    }

    // Function to calculate travel time (replace with your logic)
    function calculateTravelTime(destination) {
        // Replace this with your logic to calculate travel time
        // For demonstration purposes, we'll use a random value
        return Math.floor(Math.random() * 5) + 1; // Random travel time between 1 to 5 days
    }

    // Add event listener for the "Done" button
    doneButton.addEventListener("click", function () {
        // Hide the itinerary section
        itinerarySection.style.display = "none";
        // Show the travel customization section
        travelSection.style.display = "block";

        // Reset arrays when "Done" button is clicked
        selectedBodies.length = 0;

        const itineraryItems = itineraryList.querySelectorAll("li");

        // Iterate through the itinerary items to check for selections
        itineraryItems.forEach(function (item) {
            const body = item.getAttribute("data-body");
            const selectedDuration = item.querySelector(".duration").value;

            // Push selected celestial bodies to the array
            selectedBodies.push({ body, selectedDuration });
        });

        // Log the selected items (you can modify this part to use the data as needed)
        console.log("Selected Bodies:", selectedBodies);

        // Generate and display the daily itinerary
        generateItinerary();
    });

    // Add event listener for the "Finalize" button (you can customize the behavior here)
    finalizeButton.addEventListener("click", function () {
        const selectedSpacecraft = document.getElementById("spacecraft").value;
        const selectedTravelMode = document.getElementById("travel-mode").value;

        // Push selected transportation to the array
        selectedTransportation.length = 0; // Reset the array to avoid duplicates
        selectedTransportation.push({ spacecraft: selectedSpacecraft, travelMode: selectedTravelMode });

        // Log the selected transportation (you can modify this part to use the data as needed)
        console.log("Selected Transportation:", selectedTransportation);

        // For now, let's show an alert
        alert("Travel details finalized!");
    });

    // Add click event listeners to change the background color on selection
    itineraryList.addEventListener("click", function (e) {
        if (e.target.classList.contains("itinerary-item")) {
            e.target.classList.toggle("selected");
        }
    });
});
