async function loginPage(){
    let root=document.querySelector("#root");
    root.innerHTML=`
    <p>Hello</p>
    <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group mb-0">
                    <div class="card p-4">
                        <div class="card-body">
                            <h1>Login</h1>
                            <p class="text-muted">Sign In to your account</p>
                            <div class="input-group mb-3">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input type="text" class="form-control email" placeholder="Email">
                            </div>
                            <div class="input-group mb-4">
                                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                <input type="password" class="form-control password" placeholder="Password">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <button type="button" class="btn btn-primary px-4">Login</button>
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
                                <button type="button" class="btn btn-primary active mt-3">Register Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `

    let btnSignIn=document.querySelector(".btn btn-primary px-4");
    btnSignIn.addEventListener("click",async(e)=>{
        let inp1=document.querySelector(".email");
        let inp2=document.querySelector(".password");

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
            attachStartPage(loggedIn.id);

        }catch(error){
            attachErrorPage();
        }
    });

    // let btnSignU
}
async function attachStartPage(){
    // let root=document.querySelector("#root");
    // root.innerHTML=`
    // <div class="hederCentered">
    //     <header>
    //         <div class="wrap header--flex">
    //             <h2 class="bestEvent"> The best Events</h2>
                
    //                 <div class="header--explore">
    //                     <h2 >Home</h2>
    //                     <h2>Explore</h2>
    //                     <h2>Description</h2>
    //                     <h2>Contact</h2>
    //                 </div>

                
    //         </div>
    //     </header>
    // </div>


    // `
}