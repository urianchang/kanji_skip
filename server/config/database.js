//: Require mongoose
var mongoose = require('mongoose');
//: Require kanji database JSON
var kanjiData = require('./database/db.json');

//: Ref to Kanji model
var Kanji = mongoose.model('Kanji');

//: Clear existing docs from collection
Kanji.find().remove();

//: Got lazy and reused db file made for Django model
// console.log(`Kanji data - length of array: ${kanjiData.length}`);
// console.log(kanjiData[0]['fields']);

//: Use a for-loop to create and save each Kanji character
for (var idx = 0; idx < kanjiData.length; idx++) {
    new Kanji({
        literal : kanjiData[idx]['fields']['kanji'],
        skipcode : kanjiData[idx]['fields']['skipcode'],
        p1 : kanjiData[idx]['fields']['p1'],
        p2 : kanjiData[idx]['fields']['p2'],
        p3 : kanjiData[idx]['fields']['p3']
    }).save();
}
