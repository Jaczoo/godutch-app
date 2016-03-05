'use strict'

import React from 'react-native'
var API_URL = "http://54.194.109.248:9000/"

export function isEmpty(val){
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}

export function autosuggest(text) {
  return fetch(API_URL + "autocomplete?term="+text ,{method: 'GET'}).then((response) => response.json())
}

export function accomodation(location, checkInDate, checkOutDate, noOfPeople) {
  var url = "accomodation?location="+ location + "&checkInDate=" + checkInDate + "&checkOutDate=" + checkOutDate
  if(isEmpty(noOfPeople)){
    url = url + "&noOfPeople=" + noOfPeople
  }
  return fetch(API_URL + url).then((response) => response.json())
}

export function listing(listingId) {
  return fetch(API_URL + "listing/" + listingId).then((response) => response.json())
}

export function quote(listingId,unitId,departureDate,arrivalDate, noOfPeople) {
  var url = "quote?listingId="+ listingId + "&unitId=" + unitId + "&departureDate=" + departureDate + "&arrivalDate=" + arrivalDate + "&noOfPeople=" + noOfPeople
  return fetch(API_URL + url).then((response) => response.json())
}
