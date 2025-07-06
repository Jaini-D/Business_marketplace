import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

interface CompanyProfile {
    accessEmails: string[],
    address: string,
    brc: string,
    companyEmail: string,
    companyName: string,
    items: any[],
    primaryEmail: string
}


const Profile = () => {
  
    const { uid, companyId } = useAuth();

    const [profile, setProfile] = useState<CompanyProfile | null>(null);

    console.log(`Profile Page: ${uid} ${companyId}`);

    useEffect(() => {
        
        const getProfileInfo = async () => {
            if (companyId){
                const companyInfo = await getDoc(doc(db, 'users', companyId));
                setProfile(companyInfo.data() as CompanyProfile);
            } else {
                setProfile(null);
            }
        }

        getProfileInfo();

    }, [companyId]);

    return (
    <div className="flex flex-col justify-center items-center">
        <h1>Profile</h1>
        {
            profile ? 
            <div className="flex flex-col justify-center items-center" >
                <p>{profile.accessEmails}</p>
                <p>Company: {profile.companyName}</p>
                <p>Address: {profile.address}</p>
                {profile.accessEmails.length < 0 ? <p>Access Emails: {profile.accessEmails}</p> : <p>No access emails added</p>}
            </div> : <p>No Profile</p>
        }
    </div>
  )
}

export default Profile