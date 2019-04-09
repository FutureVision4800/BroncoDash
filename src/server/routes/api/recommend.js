const express = require('express');
const router = express.Router();
const app = require('../../server');


let db; // global variable to hold the connection
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DATABASE_STRING;
const dbName = (process.env.DATABASE_NAME);
const ObjectID = require('mongodb').ObjectID;

const clubCategories = require('../data/categories');

// MongoDB Connection 
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {

    if(err) throw err;

    db = client.db(dbName); // once connected, assign the connection to the global variable
    console.log("Database Connection Successfull from routes recommend");
});




router.post('/clubRecommendations', async(req, res) => {

    var userCategories = [];
    var userClubs = req.body.userClubs;

    for(let i=0; i<userClubs.length; i++){
        userCategories.push(userClubs[i].category);
    }

    const categoryFrequency = await calculateCategoryFrequency(userCategories);
    const clubRecommendations = await calculateClubRecommends(categoryFrequency);


    res.json(clubRecommendations);

});

const calculateCategoryFrequency = async(data) => {

    //console.log("user data: ",data);

    let AGC = 0,
        APF = 0,
        CHR = 0,
        CEIS = 0, 
        EDC = 0, 
        CCHM = 0, 
        DAC = 0, 
        EC = 0, 
        GC = 0, 
        PA = 0, 
        REL = 0, 
        SC = 0, 
        SIC = 0, 
        UBSCC = 0;
    
    for(let i=0; i<data.length;i++){

        if(data[i] === "Agricultural Council (AGC)")
            AGC++;
        else if(data[i] === "Asian and Pacific Islander")
            APF++;
        else if(data[i] === "Christian")
            CHR++;
        else if(data[i] === "College of Education of Integrative Studies (CEIS)")
            CEIS++;
        else if(data[i] === "College of Environmental Design Council (EDC)")
            EDC++;
        else if(data[i] === "Collins College of Hospitality Managment")
            CCHM++;
        else if(data[i] === "Dance")
            DAC++;
        else if(data[i] === "Engineering Council (EC)")
            EC++;
        else if(data[i] === "Greek Council (GC)")
            GC++;
        else if(data[i] === "Pan African")
            PA++;
        else if(data[i] === "Religious")
            REL++;
        else if(data[i] === "Science Council (SC)")
            SC++;
        else if(data[i] === "Student Interest Council (SIC)")
            SIC++;
        else if(data[i] === "United Business Students Senate (UBSSC) ")
            UBSCC++;

    }

    let clubFrequency = [
        {category:"Agricultural Council (AGC)", count: AGC},
        {category:"Asian and Pacific Islander", count: APF},
        {category:"Christian", count: CHR},
        {category:"College of Education of Integrative Studies (CEIS)", count: CEIS},
        {category:"College of Enviormental Design Council (EDC)", count: EDC},
        {category:"Collins College of Hospitality Managment", count: CCHM},
        {category:"Dance", count: DAC},
        {category:"Engineering Council (EC)", count: EC},
        {category:"Greek Council (GC)", count: GC},
        {category:"Pan African", count: PA},
        {category:"Religious", count: REL},
        {category:"Science Council (SC)", count: SC},
        {category:"Student Interest Council (SIC)", count: SIC},
        {category:"United Business Students Senate (UBSSC)", count: UBSCC}
    ];
    
    //console.log("BEFORE: ",clubFrequency);
    clubFrequency.sort((a,b) => (b.count-a.count));
    //console.log("AFTER: ",clubFrequency);

    return clubFrequency;

}

const calculateClubRecommends = async(clubFrequency) => {
    const topCategory = { category: clubFrequency[0].category },
          midCategory = { category: clubFrequency[1].category },
          lowCategory = { category: clubFrequency[2].category };

    var topCategorySet = [],
        midCategorySet = [],
        lowCategorySet = [];

     
    const topList = await db.collection("BroncoRush_Clubs").find(topCategory).toArray();
    const midList = await db.collection("BroncoRush_Clubs").find(midCategory).toArray();
    const lowList = await db.collection("BroncoRush_Clubs").find(lowCategory).toArray();
    
   // console.log(lowList);

    const topRandNumLimit = topList.length;
    for(let i=0; i<12; i++){
        let randomIndex = Math.floor(Math.random()*topRandNumLimit);

        if(!topCategorySet.includes(topList[randomIndex]))
            topCategorySet.push(topList[randomIndex]);
    }

    const midRandNumLimit = midList.length;
    for(let i=0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*midRandNumLimit);

        if(!midCategorySet.includes(midList[randomIndex]))
            midCategorySet.push(midList[randomIndex]);
    }

    const lowRandNumLimit = lowList.length;
    for(let i=0; i<2; i++){
        let randomIndex = Math.floor(Math.random()*lowRandNumLimit);

        if(!lowCategorySet.includes(lowList[randomIndex]))
            lowCategorySet.push(lowList[randomIndex]);
    }

    //console.log(topCategorySet);

    const clubRecommendations = topCategorySet.concat(midCategorySet,lowCategorySet);
    clubRecommendations.shuffle();

    //console.log("CLUB RECOMENDATIONS: ", clubRecommendations);

    return clubRecommendations;
    
}


Array.prototype.shuffle = () => {
    const input = this;
     
    for (let i = input.length-1; i >=0; i--) {
     
        let randomIndex = Math.floor(Math.random()*(i+1)); 
        let itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

module.exports = router;