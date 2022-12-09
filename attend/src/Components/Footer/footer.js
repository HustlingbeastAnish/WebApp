import React from "react";

function footer(){
    return(
        <footer>
            <div class = "bg-gray-800">
                <span className="text-2xl font-[Poppins] cursor-pointer text-white text-center">
                    <h2 class = "mb-4 pt-4">TracKnAlert</h2>
                </span>
                <div class = "text-center">
                    <input class = "text-center mr-1 ml-1 rounded-lg" type = "email" placeholder = "Enter your email"></input>
                    <button class = "bg-cyan-400 hover:bg-cyan-700 rounded-lg pl-1 pr-1">Subscribe Now!</button>
                </div>
            </div>
        </footer>
    );
}

export default footer;