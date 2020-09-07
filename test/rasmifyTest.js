const assert = require('assert');
const fs = require('fs');
const path = require('path');
const rasmify = require('../rasmify');

describe('#rasmify()', () => {
    it('should rasmify the quran', () => {
        const lines = fs.readFileSync(path.resolve(__dirname, '../data/quran_text_rasm.csv'), "utf-8")
            .toString()
            .split("\n");

        lines.forEach((line) => {
            const wordData = line.split("\t");
            const arabString = wordData[4].trim();
            const rasmTarget = wordData[5].trim();

            assert.equal(rasmify(arabString), rasmTarget, `Failed at ${wordData[0]} ${wordData[1]} ${wordData[2]} ${wordData[4]}`);
        });
    });
});

describe('regression', () => {
    it('should convert reported errors correctly', () => {
        const dataProvider = [{
            input: 'وَهَيِّئۡ',
            expectation: 'وهىى'
        }];

        dataProvider.forEach(testData => {
            assert.equal(rasmify(testData.input), testData.expectation);
        })
    });
})
