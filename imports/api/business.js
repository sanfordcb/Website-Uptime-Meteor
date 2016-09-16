import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';

import initData from '../utils/init-data.js';
import testData from '../utils/test-data.js';

const updownKey = Meteor.settings.updownKey;

export const Business = new Mongo.Collection('business');

if(Meteor.isServer) {
  if(Business.find().count() === 0) {
    initData.business.forEach((doc) => {
      Business.insert(doc);
    });
  }

  Meteor.publish('business', function businessPublication() {
    return Business.find();
  });
}

Meteor.methods({
  'retrieveDowntimes'() {
    Business.find().forEach((biz) => {
      let tokenId = biz.updown_token;
      let url = "http://updown.io/api/checks/" + tokenId;
      url += "/downtimes?api-key=" + updownKey;
      HTTP.call('GET',url, (error, result) => {
        if(!error) {
          let data = result.data;
          Business.update(biz, { $set: { downtimes: data } });
        }
      });
    });
  },

  // this method is just to retrieve test data I created in utils folder
  // because results from API are limited
  'getTestData'() {
    Business.find().forEach((biz) => {
      let data = testData[biz.updown_token];
      Business.update(biz, { $set: { downtimes: data } });
    });
  }
});
