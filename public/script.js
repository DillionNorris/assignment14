
const getTeams = async () => {
    try {
        return (await fetch("api/teams")).json();

    }catch (error){

        console.log("Error loading json");
    }

}


const showTeams = async() => {

    let teams = await getTeams();
    let teamDiv = document.getElementById("teams-list");
    console.log(teams);

    teams.forEach((team)=>{
        const section = document.createElement("section");
        teamDiv.appendChild(section);

        h2 = document.createElement("h2");
        h2.innerHTML = team.name;
        section.appendChild(h2);

        qb = document.createElement("h3");
        qb.innerHTML = team.qb;
        section.appendChild(qb);

        rb = document.createElement("h3");
        rb.innerHTML = team.rb;
        section.appendChild(rb);

        wr1 = document.createElement("h3");
        wr1.innerHTML = team.wr1;
        section.appendChild(wr1);

        wr2 = document.createElement("h3");
        wr2.innerHTML = team.wr2;
        section.appendChild(wr2);

        wr3 = document.createElement("h3");
        wr3.innerHTML = team.wr3;
        section.appendChild(wr3);
    });

}


const addEditTeam = async (e)=>{
    e.preventDefault();
    const form = document.getElementById("team-form");
    const formData = new FormData(form);
    

        if (form._id.value == -1){
        formData.delete(" id");
        
        response = await fetch("/api/teams",{ 
            method: "POST",
            body: formData,
        });
        }
    if (response.status != 200){
        console.log("error contacking server");
        return;
    }
    document.querySelector(".dialog").classList.add("transparent");
    showTeams();
        

}


const showHideAdd = (e) => {
    e.preventDefault();
    document.querySelector('.dialog').classList.remove('hidden');
   

};



window.onload = () => {

showTeams();
document.getElementById("add-team").onsubmit=addEditTeam;

document.querySelector('.close').onclick =()=>{
    document.querySelector('.close').classList.add('hidden');
};

}
