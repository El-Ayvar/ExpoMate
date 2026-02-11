const PHONES = [
  {name:"Samsung A14", price:5000, performance:4, camera:50, screen:6.6},
  {name:"Samsung A34", price:8500, performance:7, camera:48, screen:6.6},
  {name:"Samsung S23", price:18000, performance:9, camera:50, screen:6.1},
  {name:"Samsung Galaxy Z Fold 7", price:35000, performance:10, camera:50, screen:7.6},

  {name:"Xiaomi Redmi 12", price:4500, performance:4, camera:50, screen:6.8},
  {name:"Redmi Note 12", price:7000, performance:6, camera:48, screen:6.6},
  {name:"Xiaomi 13", price:17000, performance:9, camera:50, screen:6.4},
  {name:"Xiaomi 15 Ultra", price:27000, performance:10, camera:200, screen:6.73},

  {name:"Motorola G14", price:4500, performance:4, camera:50, screen:6.5},
  {name:"Motorola G54", price:7500, performance:6, camera:50, screen:6.5},
  {name:"Motorola Edge 40", price:13000, performance:8, camera:50, screen:6.6},

  {name:"Realme C55", price:4500, performance:4, camera:64, screen:6.7},
  {name:"Realme 11", price:7000, performance:6, camera:108, screen:6.4},
  {name:"Realme GT", price:14000, performance:9, camera:64, screen:6.4},

  {name:"Oppo A38", price:5000, performance:4, camera:50, screen:6.6},
  {name:"Oppo Reno 8", price:12000, performance:8, camera:50, screen:6.4},
  {name:"Oppo Find X8 Pro", price:28000, performance:10, camera:50, screen:6.8},

  {name:"Vivo Y20", price:4500, performance:3, camera:13, screen:6.5},
  {name:"Vivo Y36", price:7500, performance:6, camera:50, screen:6.6},

  {name:"iPhone SE 2020", price:8000, performance:7, camera:12, screen:4.7},
  {name:"iPhone 11", price:12000, performance:8, camera:12, screen:6.1},
  {name:"Apple iPhone 17 Pro Max", price:30000, performance:10, camera:48, screen:6.7},

  {name:"Poco M5", price:5000, performance:5, camera:50, screen:6.6},
  {name:"Poco X5", price:8000, performance:7, camera:48, screen:6.7},
  {name:"Poco F5", price:15000, performance:9, camera:64, screen:6.7},
  {name:"Poco F7 Pro", price:20000, performance:9, camera:64, screen:6.7},

  {name:"Huawei Y9a", price:7000, performance:5, camera:64, screen:6.6},
  {name:"Huawei Nova 9", price:12000, performance:8, camera:50, screen:6.6},
  {name:"Huawei Mate 70 Pro", price:24000, performance:9, camera:50, screen:6.82},

  {name:"Infinix Hot 30", price:4000, performance:4, camera:50, screen:6.8},
  {name:"Tecno Spark 10", price:4200, performance:4, camera:50, screen:6.6},

  {name:"Samsung Galaxy S25 Ultra", price:28000, performance:10, camera:200, screen:6.9},

  {name:"Google Pixel 9 Pro", price:25000, performance:9, camera:50, screen:6.7},

  {name:"OnePlus 13 Pro", price:26000, performance:10, camera:64, screen:6.8},

  {name:"Honor Magic 7 Pro", price:23000, performance:9, camera:50, screen:6.78}


];

const form = document.getElementById("phoneForm");
const results = document.getElementById("results");

form.addEventListener("submit", e => {
  e.preventDefault();

  const budget = parseInt(document.getElementById("budget").value);
  const games = document.getElementById("games").value;
  const camera = document.getElementById("camera").value;
  const social = document.getElementById("social").value;
  const screen = document.getElementById("screen").value;

  let phones = PHONES.filter(p => p.price <= budget);
  if (phones.length === 0) phones = [...PHONES];

  phones.forEach(p => {
    let score = 0;

    score += games === "high" ? p.performance :
             games === "medium" ? p.performance * 0.6 : p.performance * 0.3;

    score += camera === "high" ? p.camera / 20 :
             camera === "medium" ? p.camera / 40 : p.camera / 80;

    score += social === "high" ? p.performance * 0.8 :
             social === "medium" ? p.performance * 0.4 : p.performance * 0.2;

    score += screen === "high" ? p.screen :
             screen === "medium" ? p.screen * 0.5 : p.screen * 0.2;

    p.score = Math.round(score);
  });

  phones.sort((a,b)=>b.score-a.score);
  showResults(phones.slice(0,13));
});

function showResults(list) {
  results.innerHTML = "";
  list.forEach(p => {
    results.innerHTML += `
      <div class="phone">
        <strong>${p.name}</strong>
        <p class="pPhone">💰 Precio: $${p.price}</p>
        <p class="pPhone">🎮 Rendimiento: ${p.performance}/10</p>
        <p class="pPhone">📸 Cámara: ${p.camera} MP</p>
        <p class="pPhone">📺 Pantalla: ${p.screen}"</p>
        <p class="pPhone">🏆 Puntaje: ${p.score}</p>
      </div>
    `;
  });
}
