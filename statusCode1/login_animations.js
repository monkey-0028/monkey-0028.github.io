//all variables
var number_input = document.querySelectorAll(".user_detail")
var i = 0
var catch_element;

// function: handle reaction of input tag{username,password} //input_tag_reaction
function input_tag_reaction(){
    em = this.lastElementChild
    em.removeAttribute('value')
    em.style.color = "black"
    if(em.name == "password"){
        em.setAttribute('type','password')
    }
    em.focus()
    catch_element = this

    // function: animation of input tag{username,password}
    var hght = 28
    var wdth = 250
    function animate_input_tag(timestamp){
        hght += 1
        wdth += 1
        catch_element.style.height = hght + "px"
        catch_element.style.width = wdth + "px"

        if(hght < 40){
            requestAnimationFrame(animate_input_tag)
        }
    }
    requestAnimationFrame(animate_input_tag)
}


for(i;i<number_input.length;i++){
    number_input[i].addEventListener("click",input_tag_reaction)
    catch_element = number_input[i]
    number_input[i].lastElementChild.addEventListener("blur",function(){
        //function: animate the blur effect
        var hght = 40
        var wdth = 262
        function animate_blur(timestamp){
            hght -= 1
            wdth -= 1
            catch_element.style.height = hght + "px"
            catch_element.style.width = wdth + "px"

            if(hght != 28){
                requestAnimationFrame(animate_blur)
            }
        }
        requestAnimationFrame(animate_blur)

    })
}

// don't use var, use const keyword instead.. using this you can avoid shitty bugs and issues
// above shit take me almost 5 fucking hours

//animating pinless checkbox
const pinless_checkbox = document.querySelector(".pin > svg")
var toggle_pinless_checkbox = 0 //0 means uncheck
pinless_checkbox.addEventListener("click",function(){
    var angle = 0
    function animate_pinless_checkbox(){
        angle += 10
        if((angle > 200) && (toggle_pinless_checkbox == 0)){
            pinless_checkbox.innerHTML = `<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>`
        }
        if((angle > 200) && (toggle_pinless_checkbox == 1)){
            pinless_checkbox.innerHTML = `<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>`
        }

        
        pinless_checkbox.style.transform = `rotate(${angle}deg)`

        if(angle == 360){
            toggle_pinless_checkbox = (toggle_pinless_checkbox + 1)%2
        }

        if(angle!=360){
            requestAnimationFrame(animate_pinless_checkbox)
        }
    }
    requestAnimationFrame(animate_pinless_checkbox)
    // hiding the password phrase if checkbox is ticket. i.e 1
    const start_time = performance.now()
    const object1 = document.querySelector("#pass")
    const object2 = document.querySelector(".pin")
    object1.style.position = "relative"
    object2.style.position = "relative"
    var vl = 0
    var op = 100
    function animate_dropdown(timestamp){
        var ellapse = timestamp - start_time
        vl += 2
        op -= 5
        object1.style.top = `-${vl}px`
        object2.style.top = `-${vl}px`
        object1.style.opacity = `${op}%`

        if(op == 0){
            object1.style.display = "none"
        }

        if(op != 0){
            requestAnimationFrame(animate_dropdown)
        }

    }
    requestAnimationFrame(animate_dropdown)

})







