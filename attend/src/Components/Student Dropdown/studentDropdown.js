import React from "react";

function studentDropdown(){
    return(

        <div class = "pt-4 pb-4 pr-4 pl-4">
            <div class = "text-end">
                <button class="bg-cyan-400 py-3 px-3 text-l rounded-lg">LogOut</button>
            </div>
            <h1 class = "ml-4 mt-2 mb-2 text-xl text-center"><b>WELCOME NAME @STUDENT</b></h1>
            <div class = "text-center">
                <div class="inline-block relative">
                    <button class="bg-cyan-400 py-3 px-3 text-l rounded-lg">Subjects</button>
                    <div class="content absolute bg-white min-w-max shadow hidden">
                        <a href="">Subject 1</a>
                        <a href="">Subject 2</a>
                        <a href="">Subject 3</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default studentDropdown;