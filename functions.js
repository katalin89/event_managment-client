async function attachStartPage(){
    let root=document.querySelector("#root");
    root.innerHTML=`
    <header>
        <div class="wrap header--flex">
            <h2 class="bestEvent"> The best Events</h2>
            
                <nav>
                    <ul class="header--explore>
                        <h2 >Home</h2>
                        <h2>Explore</h2>
                        <h2>Description</h2>
                        <h2>Contact</h2>
                    </ul>
                </nav>
        </div>
    </header>
    `
}