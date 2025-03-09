let url = "http://api.weatherstack.com/current?";
let access_key = "fd7e23b73b53b3f4a66401f393ca769f";
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para3 = document.querySelector(".para3");
let lp1 = document.querySelector(".lp1");
let lp2 = document.querySelector(".lp2");
let img = document.querySelector(".img2");

let query = "";

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let cityName = document.querySelector("input").value;
  query = cityName;
  console.log(cityName);
  fetchData();
});

async function fetchData() {
  try {
    let res = await axios.get(`${url}access_key=${access_key}&query=${query}`);
    console.log(res.data);

    if (true) {
      para1.innerHTML = `${res.data.current.temperature}&#x2103`;

      para3.innerHTML = `${res.data.location.name},${res.data.location.region}`;
      console.log(res.data.location.name);
      console.log(res.data.location.region);
      console.log(res.data.current.weather_descriptions);
      console.log(res.data.current.weather_icons);

      clear();

      let dis = res.data.current.weather_descriptions;
      for (arr of dis) {
        para2.innerHTML = arr;
      }
      lp1.innerHTML = `${res.data.current.feelslike}&#x2103 feels like`;
      lp2.innerHTML = `${res.data.current.humidity}%Humidity`;

      console.log(res.data);
      console.log(res.data.current.weather_icons[0])

      img.setAttribute("src",res.data.current.weather_icons[0]);
    }
  } catch (e) {
    console.log("error--", e);
  }
}

function clear() {
  cityName = "";
}
