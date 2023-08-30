// function changeBackgroundColor() {
//     const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     const newColor = colors[randomIndex];
    
//     const background = document.querySelector('.background');
//     background.style.backgroundColor = newColor;
//   }
  
//   setInterval(changeBackgroundColor, 3000); // Change color every 3 seconds
  



var u="https://blr1.blynk.cloud/external/api/update?token=UkRb4w_XDW9UI4xQOXd1TjizW1PbJWWo&v1=";
const v="https://blr1.blynk.cloud/external/api/get?token=UkRb4w_XDW9UI4xQOXd1TjizW1PbJWWo&v1"
const switchImage = document.querySelector('.e');
var switchValue = 1;
checkData()
function fetchData() {
    console.log('sswitchValue', switchValue)
    axios.get(u + switchValue)
    .then(response => {
        console.log('response113344', response)

        if (switchValue == 1) {
            switchValue = 0
            switchImage.src = "https://i.etsystatic.com/11131775/r/il/cc15e5/929271850/il_fullxfull.929271850_i367.jpg"
        } else {
            switchValue = 1
            switchImage.src = "http://img.freepik.com/free-icon/on-off-power-button_318-30220.jpg?size=338&ext=jpg"
        }
        
        })
    .catch(error => {
        console.error('Error sending value:', error);
    });
}
function checkData() {
    axios.get(v)
    .then(response => {
        if (response.data == 1) {
            switchValue = 0
            switchImage.src = "https://i.etsystatic.com/11131775/r/il/cc15e5/929271850/il_fullxfull.929271850_i367.jpg"
        } else {
            switchValue = 1
            switchImage.src = "http://img.freepik.com/free-icon/on-off-power-button_318-30220.jpg?size=338&ext=jpg"
        }
    })
    .catch(error => {
        console.error('Error sending value:', error);
    });
    
}
