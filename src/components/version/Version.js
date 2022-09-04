
import React, { useEffect } from "react";
import VersionService from "./service/VersionService";
import { useState } from "react";
import styles from "./styles/VersionStyles";


const Version = ({ }) => {

    const classes = styles();
    const [version, setVersion] = useState("NA");

    useEffect(() => {
        fetchVersionDetails();
    }, []);
    
    const fetchVersionDetails = async () => {
        try {

            const response = await VersionService.getVersion();

            if (response.CurrentVersion) {
                setVersion(response.CurrentVersion);
            }
        }
        catch (e) { }
    }

    return (

        <div className={classes.versions}>

            <h4>
                version:{version}
            </h4>


        </div>




    )


}
export default Version;

