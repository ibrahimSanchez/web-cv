"use client";

import { useProjectsStore } from "@/src/hooks/store/useProjectsStore";
import { useEffect } from "react";
import { Button } from "../../ui/button";

export function MainAdmin(){


    const { projects, isLoading, fetchProjects } = useProjectsStore();
    console.log(projects);
    useEffect(() => {
        fetchProjects();
    }, []);
    return <div className="pt-32">
     
     <Button onClick={fetchProjects}>Fetch Projects</Button>

    </div>;
}