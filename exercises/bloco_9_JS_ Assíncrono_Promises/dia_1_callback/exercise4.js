const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

function sendMarsTemperature (maxTemperature) {
   setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature(maxTemperature)} degree Celsius`), messageDelay()); // Importante acresctar o delay aqui
}


sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo