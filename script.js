


window.onload = () => {

    let correct = document.getElementById("correct");
    let mainContent = document.getElementById("mainContainer");


    document.getElementById("math").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, input);
    });
}


const checkAns = (correct, mainContent, input) => {
    if(md5(input) == "5bfab488f433de37ce0c779dcf2074cb" || md5(input) == "86f98fc116d6b1c804e8a4250adc8cbf" || md5(input) == "5bfab488f433de37ce0c779dcf2074cb" || md5(input) == "52280fb8cbfb1bb3f1c99ff4e1343750" || md5(input) == "f6b3ea559d913855cb164c2f2da0a660" || md5(input) == "7e85e923afc4338431a3b57d5956fbd6" || md5(input) == "916bdd484cf8793c52a2f3b9945cd0a6" || md5(input) == "4e5713a4598ed89883a06209a55f62db"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "That's correct";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "It lies at very inconsiquent place, head to the odd space, near where the parched throats are quenched.";
        }, 1000);
    }
}   
