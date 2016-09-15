import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';

const updownKey = Meteor.settings.updownKey;

export const Business = new Mongo.Collection('business');

if(Meteor.isServer) {
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
  }
});
