import { useState, useEffect } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');
  const [page, setPage] = useState('home');
  const [swags, setSwags] = useState([]);
  const [merits, setMerits] = useState([]);
  const [community, setCommunity] = useState({
    total_merit_point: 234,
    total_hero: 95,
    total_funding_pool: 953
});

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${name}`)
      .then(response => response.json()).then((json) => {
        setGreeting(json.greeting)
      });
  }

  function sample () {
    return (
      <div>
      <img src="/logo2.svg" alt="meritOnChain logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!!!!!</button>
      </form>
      <section id="greeting">{greeting}</section>
      </div>
    )
  }

  function swagSubmit (swagKey) {
    alert("You Claimed your swag : " + swagKey);
  }

  function meritPage () {
    useEffect(() => {
      fetch(`${import.meta.env.VITE_CANISTER_URL}/merits`)
        .then(response => response.json())
        .then((json) => {
          console.log('setMerits')
          console.log(json)
          setMerits(json.merits)
        });
    }, []);

    return (
      <div>
      <div style={{margin: "40px 0px", fontSize: "24px", textAlign: "center"}}>Big Merit Master's Story</div>
      <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
        {
          Object.keys(merits).map((key, i) => {
            const merit = merits[key];
            return (
              <div key={i} style={{ textAlign: "center", width: "500px", fontSize: "18px", borderRadius: "15px", border: "solid #dddddd", padding:"20px", margin: "20px"}}>
              <div><b>{merit.title}</b></div>
              <br/><div>Level {merit.level}</div>
              <br/><div>{merit.target}</div>
              <br/>
              <div><img style={{width: "500px", minHeight: "500px", borderRadius: "15px"}} src={merit.image} alt="" /></div>
              <br/>
              <div>{merit.content}</div>
              <br/><div>{merit.name} ( {merit.wallet} )</div>
              </div>
            )
          })
        }
      </div>
      </div>
    )
  }

  function swagPage () {
    useEffect(() => {
      fetch(`${import.meta.env.VITE_CANISTER_URL}/swags`)
        .then(response => response.json())
        .then((json) => {
          console.log('setSwags')
          console.log(json)
          setSwags(json.swags)
        });
    }, []);

    return (
      <div>
      <div style={{margin: "40px 0px", fontSize: "24px", textAlign: "center"}}>Claim Your Swag</div>
      <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
        {
          Object.keys(swags).map((key, i) => {
            const swag = swags[key];
            return (
              <div key={i} style={{ textAlign: "center", width: "500px", fontSize: "18px", borderRadius: "15px", border: "solid #dddddd", padding:"20px", margin: "20px"}}>
              <div><b>{swag.title}</b></div>
              <br/>
              <div>provided by</div>
              <div>{swag.provided_by}</div>
              <br/>
              <div><img style={{width: "500px", minHeight: "500px", borderRadius: "15px"}} src={swag.image} alt="" /></div>
              <br/>
          
                <button 
                  onClick={() => {swagSubmit(key)}}
                  style={{color: "#666666", borderRadius: "15px", border: "solid #666666", padding: "20px", background: "#F0FFFF", fontSize: "26px", textAlign: "center", margin:"0px 0px 20px 0px"}}>
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/confetti.png" alt="confetti"/>
                  Claim by 4 Merit Tokens
                  <img width="100" height="100" src="https://img.icons8.com/clouds/100/confetti.png" alt="confetti"/>
                </button>
          
              <br/>
              <div>{swag.description}</div>
              <br/>
              <div>claimed by</div>
              <div>{swag.to[0][1]} ({swag.to[0][0]})</div>
              <div>{swag.to[1][1]} ({swag.to[1][0]})</div>
              <div>{swag.to[2][1]} ({swag.to[2][0]})</div>
              <div>{swag.to[3][1]} ({swag.to[3][0]})</div>
              </div>
            )
          })
        }
      </div>
      </div>
    )
  }

  function dashboardPage() {
    return (
      <div>
      <div style={{margin: "40px 0px", fontSize: "24px", textAlign: "center"}}>What is Merit on Chain?</div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
        <div>
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          highlight:
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
        </div>
        <br/>
        <div>What you give to people, What you earn from merit.</div>
        <br/>
        <div>Your merit is <u>non-erasable</u>. People can always find you and remember you.</div>
      </div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
        <div>
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          action:
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
        </div>
        <br/>
        <div>Share your <u>hero story</u> of save lives, animals, and the environment to <u>earn merit points</u>.</div>
      </div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>

        <div>
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          Value of blockchain:
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
        </div>

        <br/>
        <div>Blockchain <u>stores people's actions from the real world</u>. People's <u>kindness & merciful minds form blockchain value</u>.</div>
        <br/>
        <div>Kindness is human nature. It can be counted, but <u>priceless</u>.</div>
      </div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
        <div>
        <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          Value of community:
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
        </div>
        <br/><div>Share your <u>Personal's life story</u> and real-world, <u>hands-on experiences</u>.</div>
        <br/><div>Aid for saving poeple life</div>
        <br/><div>Special talent to help people</div>
        <br/><div>Tool for saving the environment</div>
        <br/><div>Your kindness can make the world better</div>
      </div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
        <div>
        <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          Why blockchain:
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
        </div> 
        <br/><div>Shareable (Everything is public)</div>
        <br/><div>Real content (non-changeable)</div>
        <br/><div>Strong connection (DAO, community)</div>
        <br/><div>Lifelong forever and even (blockchain)</div>
      </div>

      </div>
    )
  }

  function setPageView(target) {
    setPage(target);
  }

  function nav() {
    return (
      <div>
        <div style={{textAlign: "center"}}>
            <div><img src="https://merit-on-chain.s3.amazonaws.com/logo.png" alt="Merit On Chain | Believe in kindness" /></div>
        </div>
        <div style={{display: "flex", fontSize: "20px", textAlign: "center"}}>
            <div onClick={() => {setPageView('home')}} style={{margin:"40px", width:"24%"}}><img width="64" height="64" src="https://img.icons8.com/external-victoruler-flat-victoruler/64/external-indian-occupation-and-people-victoruler-flat-victoruler-1.png" alt="external-indian-occupation-and-people-victoruler-flat-victoruler-1"/> What is Merit on Chain?</div>
            <div onClick={() => {setPageView('master')}} style={{margin:"40px", width:"24%"}}><img width="64" height="64" src="https://img.icons8.com/external-victoruler-flat-victoruler/64/external-geisha-occupation-and-people-victoruler-flat-victoruler.png" alt="external-geisha-occupation-and-people-victoruler-flat-victoruler"/> Big Merit Master's Story</div>
            <div onClick={() => {setPageView('community')}} style={{margin:"40px", width:"24%"}}><img width="64" height="64" src="https://img.icons8.com/external-victoruler-flat-victoruler/64/external-air-hostess-occupation-and-people-victoruler-flat-victoruler.png" alt="external-air-hostess-occupation-and-people-victoruler-flat-victoruler"/> Our Community</div>
            <div onClick={() => {setPageView('swag')}} style={{margin:"40px", width:"24%"}}><img width="64" height="64" src="https://img.icons8.com/external-victoruler-linear-colour-victoruler/64/external-swag-occupation-and-people-victoruler-linear-colour-victoruler.png" alt="external-swag-occupation-and-people-victoruler-linear-colour-victoruler"/> Claim Your Swag</div>
        </div>
      </div>
    )
  }

    function communityPage() {
    useEffect(() => {
      fetch(`${import.meta.env.VITE_CANISTER_URL}/community`)
        .then(response => response.json())
        .then((json) => {
          console.log('setcommunity')
          console.log(json)
          setCommunity(json.community)
        });
    }, []);

    return (
      <div>
      <div style={{margin: "40px 0px", fontSize: "24px", textAlign: "center"}}>Our Community</div>


      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          Total merit point: {community.total_merit_point} merit points
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
      </div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          Total hero: {community.total_hero}
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
      </div>

      <div style={{margin: "40px", border: "2px solid #666666", borderRadius: "10px", padding: "20px", fontSize: "18px"}}>
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
          Total funding pool: {community.total_funding_pool} merit points
          <img width="64" height="64" style={{display: "inline"}} src="https://img.icons8.com/dusk/64/party-baloons.png" alt="party-baloons"/>
      </div>

      </div>
    )
  }

  return (
    <main style={{"backgroundColor": "#ffffff", color: "#777777", fontFamily: "Roboto, sans-serif", margin:"50px"}}>
      {nav()}
      {dashboardPage()}
      {communityPage()}
      {meritPage()}
      {swagPage()}
      {/* {sample()} */}
    </main>
  );
}

export default App;
