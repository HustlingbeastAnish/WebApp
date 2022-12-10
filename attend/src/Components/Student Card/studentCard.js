import React from "react";

function studentCard(){
    return(
        <div class = "pt-4 pb-4 pr-4 pl-4">
            <div class = "text-center">
                <div class = "pt-4 pb-4 pr-4 pl-4 ml-8 mr-8 mb-4 mt-4 shadow w-1/4 hover:shadow-2xl inline-block">
                    <h2 class = "text-cyan-400 text-center"><b>Subject</b></h2>
                    <span>Present :</span>
                    <br></br>
                    <span>Absent :</span>
                    <br></br>
                    <span>Total :</span>
                    <br></br>
                    <span>Percentage:</span>
                </div>
            </div>
        </div>
    );
}

export default studentCard;