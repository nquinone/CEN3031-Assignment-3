/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');
    
mongoose.connect(config.db.uri);
var findLibraryWest = function() {
 Listing.find({name:'Library West'}, function(err,listing){
  if(err) throw err;
  console.log(listing);
 });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.findOneAndRemove({code:'CABL'},function(err){
    if(err) throw err;
    console.log('Listing has been removed!');
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  console.log('test');
  Listing.findOneAndUpdate({name:'Phelps Laboratory'},{address:'Phelps Lab, Gainesville, FL 32603, United States'}, function(err,listing){
    if(err) throw err;
    console.log('Update entry:\n' + listing);
  });
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({},function(err,listings){
    if(err) throw err;
    console.log('All Listings in Database:\n'+listings);
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
