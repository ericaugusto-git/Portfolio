time = document.getElementById("time");
time.innerHTML = new Date().toLocaleString();
setInterval(function(){time.innerHTML = new Date().toLocaleString()}, 1000);
var modal_body = document.getElementById("modal-body");
var modal_title = document.getElementById("title")
var modal = document.getElementById("modal-div")
var start_menu = document.getElementsByClassName('start_menu')[0]
var click = 0
console.log(modal)

var btn_about = document.getElementById("about-me");
var btn_about2 = document.getElementById("about-me2");
btn_about2.addEventListener("click", () =>{
    btn_about.click()
});
btn_about.addEventListener("click", () => {
    modal_body.innerHTML = ""
    modal_title.innerHTML = "About Me"
    modal.className = "modal-dialog modal-dialog-centered modal-dialog-scrollable"
    var p = document.createElement("p")
    var img = document.createElement("img")
    img.src = "imgs/foto-circle.png";
    img.className = "center"
    img.id = "foto"
    modal_body.appendChild(img)
    p.innerHTML = "Hi, my name is Eric and I'm a Computer Science student."
    p.className = "text-center mt-3"
    modal_body.appendChild(p)
    if(start_menu.style.display == "block"){
        start_menu.style.display = "none";
        click += 1
    }
});

var btn_contact = document.getElementById("contact");
var btn_contact2 = document.getElementById("contact2");
btn_contact2.addEventListener("click", () =>{
    btn_contact.click()
});
btn_contact.addEventListener("click", () =>{
    modal_body.innerHTML = ""
    modal_title.innerHTML = "Contact"
    modal.className = "modal-dialog modal-dialog-centered modal-dialog-scrollable"
    modal_body.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope mr-auto" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg><a href="mailto:eric72001@hotmail.com" class="mx-2">eric72001@hotmail.com</a><br>');
    modal_body.insertAdjacentHTML('beforeend', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg><a href="https://github.com/ericaugusto-git" target="_blank" class="mx-2">github.com/ericaugusto-git</a><br>')
    modal_body.insertAdjacentHTML('beforeend','<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg><a href="tel:3363-0204" class="mx-2">3363-0204</a><br>')
    modal_body.insertAdjacentHTML('beforeend','<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg><a href="https://wa.me/5571986968701" class="mx-2">(71) 98696-8701</a>')
    if(start_menu.style.display == "block"){
        start_menu.style.display = "none";
        click += 1
    }
});

var card = document.getElementById('card')
var btn_projects = document.getElementById("projects");
var btn_projects2 = document.getElementById("projects2");
btn_projects2.addEventListener("click", () =>{
    btn_projects.click()
});
btn_projects.addEventListener("click", () =>{
    modal_body.innerHTML = ""
    modal_title.innerHTML = "Projects"
    modal.className = "modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
    var email_h3 = card.getElementsByClassName('card-header')[0]
    email_h3.textContent = "Email Client"
    var email_h5 = card.getElementsByClassName('card-body')[0].getElementsByClassName('card-title')[0];
    email_h5.textContent = "Built with JavaFx and the JavaMail API"
    var email_p = card.getElementsByClassName('card-body')[1].getElementsByClassName('card-text')[0];
    email_p.innerHTML = 'This is one of my biggest projects for now with Java, I used the course <a href="https://www.udemy.com/course/advanced-programming-with-javafx-build-an-email-client/" target="_blank">Advanced Java programming with JavaFx: Write an email client</a> as a reference.'
    email_p.insertAdjacentHTML('beforeend', ' After I finished the course I made some changes to improve the UX using the Thunderbird email client as inspiration.')
    var email_img = card.getElementsByClassName('my-img')[0]
    email_img.src = "imgs/projects/email_client.png"
    email_img.style = "width: 100%;";
    
    var finance = card.cloneNode('deep');
    var finance_h3 = finance.getElementsByClassName('card-header')[0];
    finance_h3.textContent = "Finance"
    var finance_h5 = finance.getElementsByClassName('card-body')[0].getElementsByClassName('card-title')[0];
    finance_h5.textContent = "Built with Javascript/HTML/CSS, Python and Flask"
    var finance_img = finance.getElementsByClassName('my-img')[0]
    finance_img.src = "imgs/projects/finance.png"
    finance_img.style = "width: 100%;";
    var finance_p = finance.getElementsByClassName('card-body')[1].getElementsByClassName('card-text')[0];
    finance_p.innerHTML = 'This project is part of the <a href="https://cs50.harvard.edu/x/2022/" target="_blank">CS50: Introduction to Computer Science</a> curriculum. It\'s a simulator of buying and selling currency and it uses real data provided by the <a href="https://iexcloud.io">IEX cloud</a>.'
    finance_p.insertAdjacentHTML('beforeend', ' To get the best out of it, I ended up implementing all the optional pieces of functionality that the CS50 staff sugested which gived me some introductory experience to full-stack development')

    
    var billing = card.cloneNode('deep');
    var billing_h3 = billing.getElementsByClassName('card-header')[0];
    billing_h3.textContent = "Billing System"
    var billing_h5 = billing.getElementsByClassName('card-body')[0].getElementsByClassName('card-title')[0];
    billing_h5.textContent = "Built with JavaFx and JDBC"
    var billing_img = billing.getElementsByClassName('my-img')[0]
    billing_img.src = "imgs/projects/sistema_de_mercadinho.png"
    billing_img.style = "width: 100%;";
    var billing_p = billing.getElementsByClassName('card-body')[1].getElementsByClassName('card-text')[0];
    billing_p.innerHTML = 'Project made solely to practice CRUD operations using JDBC. It is still in development because I thinked that the CS50 course would be a better investment of my time'

    
    modal_body.appendChild(card)
    modal_body.appendChild(finance)
    modal_body.appendChild(billing)
    if(start_menu.style.display == "block"){
        start_menu.style.display = "none";
        click += 1
    }
    
    card.style.display = "block"
    finance.style.display ="block"
    billing.style.display = "block"
});

var btn_resume = document.getElementById('resume');
var btn_resume2 = document.getElementById("resume2");
btn_resume2.addEventListener("click", () =>{
    btn_resume.click()
});
btn_resume.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1jTRsBY1uKhdH0W1TuosiY4B32JZYLPIU/preview")
});

var btn_start = document.getElementById('start');
window.addEventListener('click', function(e){   
    if (start_menu.contains(e.target) || e.target == btn_start){
      if(e.target == btn_start){
        if(click % 2 == 0){
            start_menu.style.display = "block";
        }else{
            start_menu.style.display = "none"
        }
        click += 1
        console.log(click)
      }
    } else if(start_menu.style.display == "block"){
        start_menu.style.display = "none";
        click += 1
    }
  });

  var btn_shutdown = document.getElementById('shutdown');
  btn_shutdown.addEventListener('click', () => {
    window.opener=null;
    window.open('','_self');
    window.close();
    window.history.go(-1);
    $(document.body).hide()
  });