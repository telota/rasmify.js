var assert = require('assert');
var fs = require('fs');
var path = require('path');
var rasmify = require('../rasmify');

describe('#rasmify()', function () {
    it('should rasmify the quran', function () {

        var lines = fs.readFileSync(path.resolve(__dirname, '../data/quran_text_rasm.csv'), "utf-8")
            .toString()
            .split("\n");

        lines.forEach((line) => {

            var wordData = line.split("\t");

            var arabString = wordData[4];
            var rasmTarget = wordData[5];

            assert.equal(rasmTarget, rasmify(arabString));

        });


    });
});
