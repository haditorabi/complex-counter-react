// import { useState, useEffect } from "react";

export default function TotalCounters (props) {
    const {total} = props;
    // console.log(props);

    return(
        <div className="alert alert-dark text-center" role="alert">
            {total}
        </div>
    )
};
