import { isOddNumber, countEvenNumber } from "../js/app.js"


// import { expect } from "chai"
const expect = chai.expect;

describe('hàm check là số lẽ', () => {

    it('đúng nếu giá trị là 3', () => {
        const result = isOddNumber(3);
        expect(result).to.be.true;

    });

    it('sai nếu giá trị là 2', () => {
        const result = isOddNumber(2);
        expect(result).to.be.false;
    });


});

describe('hàm đếm danh sách số chẵn', () => {
    it('nếu value không phải mảng trả về 0', () => {
        const result = countEvenNumber(null);
        expect(result).to.equal(0);
    });
    it('đếm số lượng số chẵn mảng này là 1 [1, 2, 3]', () => {
        const result = countEvenNumber([1, 2, 3]);
        expect(result).to.equal(1);
    });
    it('đếm số lượng số chẵn mảng này là 2 [1, 2, 3, 4]', () => {
        const result = countEvenNumber([1, 2, 3, 4]);
        expect(result).to.equal(2);
    });
});