document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const form = document.querySelector('form') 
    textHtmlFeld1 = form.elements.text1.value
    console.log(textHtmlFeld1)       
})    
