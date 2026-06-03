  const MODULE_ID = "mustardman42's-masterful-module"; //Change this to the lowercase id at the top of your module.json

  var cssId = 'myCss'; //I adapted this code from Reddit user u/lady_of_luck, without their post none of my exploration into this topic would have been possible
     if (!document.getElementById(cssId))
     {
       var head  = document.getElementsByTagName('head')[0];
       var link  = document.createElement('link');
       link.id   = cssId;
       link.rel  = 'stylesheet';
       link.type = 'text/css';
       link.href = 'modules/mustardman42's-masterful-module/styles/mustardman42-tutorial.css'; //Put file path here!
       link.media = 'all';
       head.appendChild(link);
     }
 Hooks.on("renderJournalEntrySheet", (app) => {
  if (app.document.getFlag("mustardman42's-masterful-module", "isXXX")) { 
    app.element?.classList?.add("xxx"); //Change the xxx and XXX to the abbreviation for the title of the adventure you are adapting, ex. Fists of the Ruby Phoenix becomes FOTRP and fotrp
  }
});