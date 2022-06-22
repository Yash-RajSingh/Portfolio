import './loader.css'
import { useEffect, useState } from "react";

const Loader = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2000)
    })
    return (<>
        {loader &&
            <div className="loaderWrapper">
                <div class="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        }
    </>);
}

export default Loader;