async function attachLoginPage(){
    let root=document.querySelector("#root");
    root.innerHTML=`
    <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group mb-0">
                    <div class="card p-4">
                        <div class="card-body">
                            <h1>Login</h1>
                            <p class="text-muted">Sign In to your account</p>
                            <div class="input-group mb-3">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input type="text" id="email"  class="form-control email" placeholder="Email">
                            </div>
                            <div class="input-group mb-4">
                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                <input type="password" id="password" class="form-control password" placeholder="Password">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" id="loginButton" class="btn btn-primary px-4">Login</button>
                                </div>
                                <div class="col-6 text-right">
                                    <button type="button" class="btn btn-link px-0">Forgot password?</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
                        <div class="card-body text-center">
                            <div>
                                <h2>Sign up</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.</p>
                                <button type="button"id="registerNow" class="btn btn-primary active mt-3">Register Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `

    let btnSignIn=document.querySelector("#loginButton");
    btnSignIn.addEventListener("click",async(e)=>{
        let inp1=document.querySelector("#email");
        let inp2=document.querySelector("#password");

        let user={
            email:inp1.value,
            password:inp2.value,
        };

        let erors=[];

        if(inp1.value=""){
            erors.push("You must complete email field");
            inp1.style.borderColor="red";
        }
        if(inp2.value==""){
            inp2.style.borderColor="red";
        }

        if(erors.length>0){
            let errorRoot=document.querySelector("#root");

        }
        try{
            let loggedIn=await validateLogin(
                user.email,
                user.password
            );
            attachHomePage(loggedIn.id);

        }catch(error){
            attachErrorPage();
        }
    });

     let btnSignUp=document.querySelector("#registerNow");
     btnSignUp.addEventListener("click",(e)=>{
        attachSignUp();
     })
     
}

async function attachErrorPage(){
    let root=document.querySelector("#root");
    root.innerHTML=`<div class="container ">
    <div class="error-header"> </div>
    <section class="error-container text-center">
        <h1>Error</h1>
        <div class="error-divider">
            <h2>User or password incorrect</h2>
            <p class="description">Pls try again</p>
        </div>
       <i id="home" class="fa fa-home">Home</i>
    </section>
</div>`

let btnHome=document.querySelector("#home");
btnHome.addEventListener("click",()=>{
    attachLoginPage();
})
}

async function attachErrorPageUp() {
    let root = document.querySelector("#root");
  
    root.innerHTML = `
    <div class="container ">
    <div class="error-header"> </div>
    <section class="error-container text-center">
        <h1>Error</h1>
        <div class="error-divider">
            <h2>Existing person</h2>
            <p class="description">Pls try again</p>
        </div>
        <a href="#index.html" class="return-btn"><i class="fa fa-home"></i>Home</a>
    </section>
</div>
      `;
  }
async function attachHomePage(userId){
    let root=document.querySelector("#root");
    root.innerHTML=`
    <header>
        <input id="userId" name="userId" class="userId" type="hidden" value="${userId}"/>
        <ul class="error">
        </ul>
        <div class="wrap header--flex">
            <h1 class="header--logo events">Home</h1>
            <nav>
            <h1 class="signOut">Sign Out</h1>
            </nav>
        </div>
    </header>

    <button class="button new-event">Add New Event</button>

    <main>
        
        <div class="wrap main--grid root-events">
        
        </div>
    </main>
    `;

    let btnSignOut=document.querySelector(".signOut");
    btnSignOut.addEventListener("click",(e)=>{
        attachLoginPage(data);
    })

    let btnEvents=document.querySelector(".events");
    btnEvents.addEventListener("click",(e)=>{
        attachCard(data);
    });

    let data = await allUserEvents(userId);
    attachCard(data);

    let btnAddNewEvent=document.querySelector(".new-event");

    btnAddNewEvent.addEventListener("click",(e)=>{
        attachNewEventPage(userId);
    });

    let rowsContainer=document.querySelector(".root-events")
    rowsContainer.addEventListener("click",async(e)=>{
        e.preventDefault();
        
        let data=e.target.parentNode;
        
        let eventProperties=data.children;

        const event={
            eventId: eventProperties[0].innerHTML,
            eventTitle:eventProperties[1].innerHTML,
            eventDescription:eventProperties[2].innerHTML,
            eventDate:eventProperties[3].innerHTML,
            eventLocation:eventProperties[4].innerHTML,
        };

        attachUpdatePage(event);

    })

}
async function attachNewEventPage(userId){
    let root=document.querySelector("#root");

    root.innerHTML=`
    <div class="container bootstrap snippets bootdey">
    <div class="header">
      <ul class="nav nav-pills pull-right">
        <li  class="home">Home</li>
        <li class="signOut">Sign Out</li>
       
      </ul>
      <h3 class="createEvent">Create Event</h3>
    </div>
  
    <div class="jumbotron text-center" style="min-height:400px;height:auto;">
      <div class="col-md-10 col-md-offset-2">
          <form class="form-horizontal" role="form">
              <div class="form-group text-center">
                  <div class="col-sm-10 reg-icon">
                      <span class="fa fa-user fa-3x">Create</span>
                  </div>
              </div>
              <div class="form-group">
                  <div class="col-sm-10">
                    <input type="text" class="form-control" id="eventTitle" placeholder="Event Title">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                  </div>
                </div>

              
                <div class="form-group">
                  <div class="col-sm-10">
                    <input type="description" class="form-control" id="description" placeholder="Description">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                  </div>
                </div>

                <div class="form-group">
                  <div class="col-sm-10">
                    <input type="location" class="form-control" id="location" placeholder="Location">
                  </div>
                <div class="form-group">
                  <div class="col-sm-10">
                    <button type="submit" class="btn btn-info">
                      <span class="glyphicon glyphicon-share-alt"></span>
                      Register
                    </button>
                  </div>
                </div>
          </form>
      </div>
    </div>
  </div>    
    `

    let btnHome=document.querySelector(".home");
    btnHome.addEventListener("click",()=>{
        attachHomePage(userId);
    });

    let btnSignOut=document.querySelector(".signOut");
    btnSignOut.addEventListener("click",(e)=>{
        attachLoginPage();
    })

}

async function attachUpdatePage(event,userId){
    //console.log(event);
    let root=document.querySelector("#root");

    root.innerHTML=`
    <div class="row">
                <div class="col-12">
                    <!-- Page title -->
                    <div class="my-5">
                        <h3>My Event</h3>
                        <h3 class="home">Home</h3>
                        <hr>
                    </div>
                    <!-- Form START -->
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <!-- Contact detail -->
                            <div class="col-xxl-8 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Contact detail</h4>
                                        <!-- First Name -->
                                        <div class="col-md-6">
                                            <label class="form-label">Event Title *</label>
                                            <input type="text" class="form-control" placeholder="${event.eventTitle}" aria-label="First name">
                                        </div>
                                        <!-- Last name -->
                                        <div class="col-md-6">
                                            <label class="form-label">Description*</label>
                                            <input type="text" class="form-control" placeholder="${event.description}" aria-label="description" >
                                        </div>
                                        <!-- Phone number -->
                                        <div class="col-md-6">
                                            <label class="form-label">Data *</label>
                                            <input type="text" class="form-control" placeholder="${event.date}" aria-label="date" >
                                        </div>
                                        <!-- Mobile number -->
                                        <div class="col-md-6">
                                            <label class="form-label">Location *</label>
                                            <input type="text" class="form-control" placeholder="${event.location}" aria-label="location" >
                                        </div>
                                        <button class="remove">Remove</button>
                                       
                                        
                                      
                                </div>
                            </div>
                            <!-- Upload profile -->
                            <div class="col-xxl-4">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Upload event pic</h4>
                                        <div class="text-center">
                                            <!-- Image upload -->
                                            <div class="square position-relative display-2 mb-3">
                                                <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>
                                            <!-- Button -->
                                            <input type="file" id="customFile" name="file" hidden="">
                                            <label class="btn btn-success-soft btn-block" for="customFile">Upload</label>
                                            <button type="button" class="btn btn-danger-soft">Remove</button>
                                            <!-- Content -->
                                            <p class="text-muted mt-3 mb-0"><span class="me-1">Note:</span>Minimum size 300px x 300px</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <!-- Row END -->
        
                        <!-- Social media detail -->
                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-6 mb-5 mb-xxl-0">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <h4 class="mb-4 mt-0">Social media detail</h4>
                                        <!-- Facebook -->
                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-facebook me-2 text-facebook"></i>Facebook *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Facebook" value="http://www.facebook.com">
                                        </div>
                                        <!-- Twitter -->
                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-twitter text-twitter me-2"></i>Twitter *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Twitter" value="http://www.twitter.com">
                                        </div>
                                        <!-- Linkedin -->
                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-linkedin-in text-linkedin me-2"></i>Linkedin *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Linkedin" value="http://www.linkedin.com">
                                        </div>
                                        <!-- Instragram -->
                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-instagram text-instagram me-2"></i>Instagram *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Instragram" value="http://www.instragram.com">
                                        </div>
                                        <!-- Dribble -->
                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fas fa-fw fa-basketball-ball text-dribbble me-2"></i>Dribble *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Dribble" value="http://www.dribble.com">
                                        </div>
                                        <!-- Pinterest -->
                                        <div class="col-md-6">
                                            <label class="form-label"><i class="fab fa-fw fa-pinterest text-pinterest"></i>Pinterest *</label>
                                            <input type="text" class="form-control" placeholder="" aria-label="Pinterest" value="http://www.pinterest.com">
                                        </div>
                                    </div> <!-- Row END -->
                                </div>
                            </div>
        
                           
                        </div> <!-- Row END -->
                        <!-- button -->
                        <div class="gap-3 d-md-flex justify-content-md-end text-center">
                            <button type="button" class="btn btn-danger btn-lg">Delete profile</button>
                            <button type="button" class="update">Update profile</button>
                            
                        </div>
                    </form> <!-- Form END -->
                </div>
            </div>
       
    `;

    let btnHome=document.querySelector(".home");
    btnHome.addEventListener("click",()=>{
        attachHomePage(userId);
    });

    let btnUpdate=document.querySelector(".remove");
    btnUpdate.addEventListener("click",async()=>{
        let inp1=document.querySelector(".eventTitle");
        let inp2=document.querySelector(".description");
        let inp3 = document.querySelector(".date");
        let inp4=document.querySelector(".location").value;

        let usersEvent={
            id:event.id,
            eventTitle:inp1.value,
            description:inp2.value,
            date:inp3.value,
            location:inp3.value,
        };

        let erors= [];

        if(inp1.value==""){
            erors.push("You must complete de eventTitle field");
            inp1.style.borderColor="red";
        }

        if(inp2.value==""){
            erors.push("You must comlete description field");
            inp2.style.borderColor="red";
        }
        if(inp3.value==""){
            erors.push("You must complete date field");
            inp3.style.borderColor="red";
        }

        if(inp4.value==""){
            erors.push("You must complete location field");
            inp4.value.borderColor="red";
        }

        if(erors.length>0){
            let erorContainer=document.querySelector(".error");
            let h1=document.createElement("h1");
            h1.textContent="Ooops";

            for(let i=0;i<erors.length;i++){
                let li=document.createElement("li");
                li.textContent=erors[i];
                erorContainer.innerHTML="";
            }
        }

        if(erors.length==0){
            let data=await updateEventApi(usersEvent);
            attachHomePage(usersEvent);
        }
    });

}

async function attachSignUp(){
    let root=document.querySelector("#root");

    root.innerHTML=`
    <div class="container">
        <div class="row h-100">
            <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">

                    <div class="text-center mt-4">
                        <h1 class="h2">Get started</h1>
                        <p class="lead">
                            Start creating the best possible user experience for you customers.
                        </p>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="m-sm-4">
                                <form>
                                    <div class="form-group">
                                        <label >FirstName</label>
                                        <input id="firstName class="form-control form-control-lg" type="text" name="name" placeholder="Enter your first name">
                                    </div>

                                    <div class="form-group">
                                        <label >LastName</label>
                                        <input id="lastName class="form-control form-control-lg" type="text" name="name" placeholder="Enter your  last name">
                                    </div>
                                   
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input id ="email" class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input id="password" class="form-control form-control-lg" type="password" name="password" placeholder="Enter password">
                                    </div>

                                    <div class="form-group">
                                    <label>Age</label>
                                    <input id="age class="form-control form-control-lg" type="age" name="age" placeholder="Enter age">
                                </div>
                                    <div class="text-center mt-3">
                                        <a href="index.html" class="btn btn-lg btn-primary">Sign up</a>
                                        <!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> -->
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    `

    let btnSignUp=document.querySelector(".signUp");
    btnSignUp.addEventListener("click",async(e)=>{
        let inp1=document.querySelector("#emailAddress");
        let inp2=document.querySelector("#password");
        let inp3=document.querySelector("#firstName");
        let inp4=document.querySelector("#lastName");
        let inp5=document.querySelector("#age");

        let userDTO={
            firstName:inp3.value,
            lastName:inp4.value,
            email:inp1.value,
            password:inp2.value,
            age:inp5.value,


        };

        try{
            let signetUp=await signUp(userDTO);
            attachHomePage(signetUp.id);
        }catch(error){
            attachErrorPageUp();
        }
        
    });

}
async function deleteEvent(e){
    let parent=e.parentNode;
    let bookId=parent.children[0].value;
    await deleteEventById(eventId);
    let userId=document.querySelector(".userId").value;
    attachHomePage(userId);
}

async function updateEvent(e){
    let parent=e.parentNode;
    let event={
        id:parent.children[0].value,
        eventTitle:parent.children[1].textContent,
        description:parent.children[2].textContent,
        data:parent.children[3].textContent,
        location:parent.children[4].textContent,

    }

    let userId=document.querySelector("userId").value;
    attachUpdatePage(event,userId);
}

function verifyUser(){
    let email=document.querySelector(".emailAdress");
    let password=document.querySelector(".password");
}

function attachCard(arr){
    let root=document.querySelector(".root-events");

    root.innerHTML="";

    for(let i=0;i<arr.length;++i){
        root.appendChild(createCard(arr[i]));
    }
}

function createCard(event){
    let a=document.createElement("a");
    a.classList.add("event--module");
    a.classList.add("event--module");
    a.innerHTML=`
    <input name="eventId class="eventId" type="hidden" value="${event.id}"/>
    <h2 class="event--lable">${event.eventTitle}</h2
    <h3 class="event--title">${event.description}</h3>
    <h3 class="event--title">${event.date}</h3>
    <button class="delete" onclick="deleteEvent(this)">Delete</button>
    <button class="update" onclick="updateEvent(this)">Update</update>

    `;
    return a;
}