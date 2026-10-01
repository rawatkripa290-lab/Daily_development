const form = document.querySelector('form');
//this usecase will give you empty 
//  const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit',function(e){
  e.preventDefault();
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const result =document.querySelector('#result');
  if(height === '' || height<0 || isNaN(height)){
    result.innerHTML = 'Please provide a valid height';
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML = 'Please provide a valid weight';
  }
  else{
    const bmi = (weight /((height*height)/10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    if(bmi<18.6){
    result.innerHTML += `<span>Under weight : <b>${bmi}</b></span>`;
  }
  else if(bmi>=18.6 && bmi<=24.9){
    result.innerHTML += `<span>Normal weight : <b>${bmi}</b></span>`;
  }
  else{
    result.innerHTML += `<span>Overweight : <b>${bmi}</b></span>`;
  }
  }
  
})