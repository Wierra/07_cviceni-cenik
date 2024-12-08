const selectPlan = planNumber => {    
    document.querySelector('#plan1').classList.remove('plan--selected')
    document.querySelector('#plan2').classList.remove('plan--selected')
    document.querySelector('#plan3').classList.remove('plan--selected')
            
    console.log(planNumber)
}
            
//                                          #plan3                   
const elTest1 = document.querySelector(`#plan${planNumber}`)    
elTest1.classList.add('plan--selected')

selectPlan(3)