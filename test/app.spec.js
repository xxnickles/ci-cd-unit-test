describe('Calculate whether a number is odd and even', function () {

    describe('Logic', function () {

        it('should mark your number as odd', function () {
            var result = window.checkOddAndEven(1)
            expect(result).to.equal('odd')
        })

        it('should mark your number as even', function () {
            var result = window.checkOddAndEven(2)
            expect(result).to.equal('even')
        })

        it('should mark your number as invalid when input is not a valid number', function () {
            var result = window.checkOddAndEven('xyz')
            expect(result).to.equal('invalid')
        })
    })
})