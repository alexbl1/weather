




var weather = new Vue({
el: '#weather',

data() {
    return {
      city: " ",
      submitted: false,
      date: new Date().toDateString(),  
      weather: {}
       
    }
  },



methods: {
   getWeather() {
      this.weather = {};
      this.submitted = false;
       
   
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" + this.city + "&units=metric&lang=en&appid=a495404234abce9b5830b1e8d20e90a6"
      )
        .then(response => response.json())
        .then(response => {
          let data = response.list[0];
          this.submitted = true;
          this.weather.name = data.name;
          this.weather.description = data.weather[0].main;
          this.weather.temp = Math.round(data.main.temp);
          this.weather.high = Math.round(data.main.temp_max);
          this.weather.low = Math.round(data.main.temp_min);
         this.weather.icon = data.weather[0].icon;
        })
        .catch(error => console.log(error));
       
    }
    
    
    
    
}
});



/*getIcon();

function getIcon(){
var icon = (src= 'https://openweathermap.org/img/w/'+data.main[0].icon+'.png')
document.getElementsByClassName("icon").innerHTML=icon
    
};*/


