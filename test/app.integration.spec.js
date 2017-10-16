describe('Integarted test', function () {   

    it('should show even in the screen', function() {
        var inputText = document.getElementById('input-control')
        inputText.value = '1'        
        document.getElementById('button-control').click() 

        var result = document.getElementById('result-display').innerText
        expect(result).to.equal('odd')
    })
})