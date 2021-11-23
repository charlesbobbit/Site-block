const generateHTML = (pageName) => {
    return (`<div class="main">
    <h1>Not this site! <div class="roller">
      <span id="rolltext">PRODUCTIVITY<br/>
      GREATER THAN <br/> ${pageName} 
      <br/>
      <span id="spare-time">too much spare time?</span><br/>
      </div>
    </h1>
      
    </div>`);
};


const generateSTYLE = () => {
    return `<style>
      * {
          margin:0;
          padding:0;
          font-family: 'Arvo';
        }
        
        body{
          background-color: #E63946;
        }
        
        .main{
          height:100vh;
          width:100%;  
          display:flex;
          align-items:center;
          justify-content:center;
          text-align:center;
        }
        h1{
          text-align:center;
          text-transform: uppercase;
          color: #F1FAEE; 
          font-size: 4rem;
        }
        
        .roller{
          height: 4.125rem;
          line-height: 4rem;
          position: relative;
          overflow: hidden; 
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          
          color: #1D3557;
        }
        
        
        #spare-time{
          font-size: 1rem;
          font-style: italic;
          letter-spacing: 1rem;
          margin-top: 0;
          color: #A8DADC;
          
          
          
        }
        
        .roller #rolltext {
          position: absolute;
          top: 0;
          animation: slide 5s infinite;  
        }
        
        @keyframes slide {
          0%{
            top:0;
          }
          25%{
            top: -4rem;    
          }
          50%{
            top: -8rem;
          }
          72.5%{
            top: -12.25rem;
          }
        }
      </style>`
}; 

switch (window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML = generateSTYLE();
        console.log(document.head.innerHTML)
        document.body.innerHTML = generateHTML("YOUTUBE");
        break;
    case "www.facebook.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("FACEBOOK");
        break;
    case "www.netflix.com.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("NETFLIX");
        break;
    case "www.twitter.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("TWITTER");
        break;
    case "www.instagram.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("INSTAGRAM");
        break;
    case "www.reddit.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("REDDIT");
        break;
    case "www.pornhub.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("PORN");
        break;
    case "www.xvideos.com":
        document.head.innerHTML = generateSTYLE();
        document.body.innerHTML = generateHTML("PORN");
        break;

}