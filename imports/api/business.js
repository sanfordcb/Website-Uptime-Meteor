import { Mongo } from 'meteor/mongo';

import dotenv from 'dotenv';

dotenv.config();

var updownKey = process.env.UPDOWN_KEY;

export const Business = new Mongo.Collection('business');
