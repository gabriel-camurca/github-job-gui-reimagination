import { createContext, ReactNode, useState } from "react";

import jobs from "../../jobs.json"
import { JobCard } from "../components/JobCard";

interface Job{
    id:           string;
    type:         string;
    url:          string;
    created_at:   string;
    company:      string;
    company_url:  string;
    location:     string;
    title:        string;
    description:  string;
    how_to_apply: string;
    company_logo: string;
}

interface JobsContextData{
    type:           string;
    location:       string;
    title:          string;
    description:    string;
    company_logo:   string;
    uniqueJob:      Job;
    getJob:         () => void;
}

interface JobsProviderProps{
    children: ReactNode;
}

export const JobsContext = createContext({} as JobsContextData);

export function JobsProvider({children}: JobsProviderProps){

    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [company_logo, setCompany_logo] = useState("");

    const [uniqueJob, setUniqueJob] = useState(jobs[2]);

    function getJob(){
        const job = jobs[3];
        setUniqueJob(job);
    }

    function getJobs(){
        
    }

    return(
        <JobsContext.Provider value={{
            type,
            location,
            title,
            description,
            company_logo,
            uniqueJob,
            getJob,
        }}>
            {children}
        </JobsContext.Provider>
    );
}