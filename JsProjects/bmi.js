const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height===''||height<0||isNaN(height)){
        return `Please enter valid height ${height}`
    }else if(height===''||height<0||isNaN(height)){
        return `Please enter valid weight ${weight}`
    } else{
        const bmi = (weight/((height * height) / 10000)).toFixed(3)
        result.textContent = `${bmi}`
    }
})