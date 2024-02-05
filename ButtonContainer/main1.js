const rotateButton = document.getElementById('btn5');
const labels = ['1', '2', '3', '4', "5", '6', '7', '8', '9'];

let currentIndex = 0;



// function to handle middle mouse button click

function handleMiddleButtonClick(event) {
    if(event.button === 0){ // 1 represent the middle mouse button
        // Rotate the labels in the clockwise direction
        currentIndex = (currentIndex + 1) % labels.length;
       
        updateButtonLabels();
    }
}


// Function to update the labels
function updateButtonLabels() {
    const rotatedLabels = [...labels.slice(currentIndex), ...labels.slice(0,currentIndex)]; 
   
    const buttons = document.querySelectorAll('.button_grid button');

    buttons.forEach((button, index)=>{
        button.textContent = rotatedLabels[index];
    });
}



// Add the event listener to the middle button
rotateButton.addEventListener('mousedown', handleMiddleButtonClick)



