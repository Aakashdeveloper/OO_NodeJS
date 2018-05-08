
function getAstrosHttp(callback){
  var options={
    host:'api.open-notify.org',
    port: 80
    path: '/astros.json',
    method:'GET'
  };

  var req = http.request(options, res =>{
    res.setEncoding('utf8');
    var returnData = "";
    res.on('data', chunk =>{
      returnData = returnData + chunk;
    });

    res.on('end', () => {
      var result = JSON.parse(returnData);
       
      callback(result);
    });
  });

  req.end();
}


function(){
  getAstrosHttp((data) =>{
    var outputSpeech = `There are currently ${data.people.length}`
    this.emit(':tell', outputSpeech)
    })
}


'tipsforbody': function () {
  speechOutput = '';
      var speechRepromt= ''
  //any intent slot variables are listed here for convenience

  let typeSlot = resolveCanonical(this.event.request.intent.slots.type);
  console.log(typeSlot);
  
  let bodypartSlot = resolveCanonical(this.event.request.intent.slots.bodypart);
  console.log(bodypartSlot);
      
      var types={
          'makeup':{
                      'eyes':function(){
                                  getAstrosHttp((data) =>{
                              var outputSpeech = `There are currently ${data.people.length}`
                              this.emit(':tell', outputSpeech)
                              })
                          },
                      'lips':'we have offers on addidas shirts'
                   },
          'beauty':{
                      'eyes':'we have offers on channel product',
                      'lips':'we have offers on UCB shirts'
                   },
      }
      
      var bodypart=[
              'eyes',
              'lips'
          ]
      var typed =typeSlot.toLowerCase();
      if(typeSlot && types[typed]){
          //var bodypart ='lips'
          if(bodypartSlot && bodypart.indexOf(bodypartSlot) > -1){
              bodypart = bodypartSlot
          }
          var textbody = types[typed][bodypart];
          
          speechOutput = 'here is your latest offers'+textbody
          speechRepromt= "would you like to hear this again?"
      }else{
          speechOutput="sorry no offer available"
          speechRepromt= "would you like to hear this again?"
      }
  //Your custom intent handling goes here
  //speechOutput = "Ok I can tell you about "+typeSlot+" tips for "+bodypartSlot;
  this.emit(":ask", speechOutput, speechRepromt);
  },	



  'tipsforbody': function(){
    getAstrosHttp((data) =>{
    var outputSpeech = `There are currently ${data.people.length}`
    this.emit(':tell', outputSpeech)
                    })
},