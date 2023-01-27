

<script>
  import "@picocss/pico"
    import { claim_component } from "svelte/internal";
  let clicks = 0;
  let multiplier = 1;
  let workers = [];
  let worker_multiplier = 1;
  let banana_img = null;
  let upgrades = [
    { cost: 15, name: "DUBBLARE", multiplier: 2, worker: 0 },
    { cost: 5, name: "BANAN SKALARE", multiplier: 0, worker: 1 },
  ];

  // sleep time expects milliseconds
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function increment() {
    clicks = clicks + multiplier;
    console.log("click" + clicks);
    banana_img = `url("https://i.pinimg.com/originals/1f/89/2a/1f892af76f0511ac0cc2028156a12676.gif")`;
    sleep(1000).then(()=>{
        banana_img=null
    });
  }

  import AudioPlayer, { stopAll } from './AudioPlayer.svelte'

let audioTracks = [
  'https://sveltejs.github.io/assets/music/strauss.mp3'
]

</script>

<h1 class= "top" >BANANA CLICKER</h1>

<h1 class= "info" >Ditt uppdrag är att mata gorillan med bananer, köp banan skalare som extra hjälp och använd dubblering för att snabba på processen.</h1>

<button on:click={stopAll}>
  stopppa all musik!
</button>

{#each audioTracks as src}
  <AudioPlayer {src} />
{/each}

<article>

  <progress value={clicks} max="1000"></progress>

  <header>
    <div class="grid">
      {#each upgrades as upgrade}
        <button
          class="upgrade"
          on:click={() => {
            if (clicks >= upgrade.cost) {
              if (upgrade.multiplier) {
                multiplier = multiplier * upgrade.multiplier;
                clicks -= upgrade.cost;
              }
              if (upgrade.worker && clicks) {
                worker_multiplier = worker_multiplier * 2;
                workers = [upgrade.name, ...workers];
                /* start "clicking" every 1000 ms */
                setInterval(increment, 1000);
                clicks -= upgrade.cost;
              }
            } else {
              alert("Click some more first!");
            }
          }}
        >
          <span>{upgrade.name}</span>
          <span>{upgrade.cost * worker_multiplier}</span>
        </button>
      {/each}
    </div>
  </header>
  <div class="game">
    <button on:click={increment} class="clicker">
      <div class = "banana"></div>
      <div style="display:flex; flex-direction:column;">
      <span class="clicks">{clicks}</span>
      <span class="pointtext">BANANAS PER CLICK: {multiplier}</span>
    </div>
      <div class = "banana" style="background-image:{banana_img}"></div>
    </button>
  </div>
  <footer>
    <div class="panelright">
      <div>
        <span>KÖPTA BANAN SKALARE</span>
        <hr />
        <div class="shop">
          {#each workers as worker}
            <div class="worker">{worker}</div>
          {/each}
        </div>
      </div>
      <hr />
    </div>
  </footer>
</article>

<style>
progress{
  background-color:#fdfd7b;
  scrollbar-color: black;
}

progress[value]::-webkit-progress-value {
  background-image:
     -webkit-linear-gradient(-45deg, 
                             transparent 33%, rgba(0, 0, 0, .1) 33%, 
                             rgba(0,0, 0, .1) 66%, transparent 66%),
     -webkit-linear-gradient(top, 
                             rgba(255, 255, 255, .25), 
                             rgba(0, 0, 0, .25)),
     -webkit-linear-gradient(left, rgb(186, 243, 133), rgb(165, 255, 129));

    border-radius: 2px; 
    background-size: 35px 20px, 100% 100%, 100% 100%;
}

  .top{
    color: rgba(254, 238, 93, 0.993);
  }

  .info{
    color:rgba(251, 238, 122, 0.993);
    font-size: 25px;
  }
  
  .shop {
    display: grid;
    grid-auto-flow: row; /* default */
    gap: 8px;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }

  .upgrade {
    width: 100%;
    height: 100%;
    border: 4px solid rgb(255, 255, 252);
    background-color: rgb(255, 255, 255);
    background-size: cover;
    background-image: url("https://t4.ftcdn.net/jpg/03/49/96/09/360_F_349960919_OjaTpohjBaBNAVli9YFxbQlNFI6SLbAa.jpg");
    place-items: center;
    place-content: center;
    display: flex;
    flex-direction: column;
  }

  .worker {
    width: 100%;
    height: 100%;
    border: 5px solid rgb(248, 200, 243);
    background-color: rgb(254, 174, 222);
    place-items: center;
    place-content: center;
    display: flex;
  }

  .banana{
    width: 200px;
    height: 200px;
    margin-top: 190px;
    margin-left: 150px;
    background-size: contain;
  }

  .game {
    height: 50vh;
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;
  }
  .clicker {
    clip-path: rect();
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    place-items: center;
    place-content: center;
    background-image: url("https://www.nickgowman.com/wp-content/uploads/cartoon-gorilla.jpg");
    background-size: cover;
    background-position: 0px -100px;
  }

  .panelright {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .clicks {
    font-size: 100px;
  }


  .pointtext {
    color: rgb(253, 253, 82);
    font-size: 25px;
    font-weight: bold;
  }
</style>
