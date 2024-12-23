"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

// import { EmptyProjectBoard } from "@/components/EmptyProjectBoard";
import { CreateNewProject } from "@/components/CreateNewProject";
// import { ProjectBoard } from "@/components/ProjectBoard";
import { List, GalleryVertical, SlidersHorizontal } from "lucide-react";

const Projects = () => {
    return (
        <section className='grid min-w-full w-screen pr-[calc(var(--sidebar-width)+2rem)] relative'>
            <div className='rounded-lg h-[calc(100vh-6rem)] w-full bg-white'>
                <section className="w-full h-full">
                    <header className="w-full px-8 pt-8 mb-4">
                        <h1 className="mb-2.5 text-black text-2xl font-bold ">Projects</h1>
                        <p className="font-medium text-xs text-gray-500">Manage all projects here</p>
                    </header>
                    <section className="px-8 py-4 flex items-center justify-between w-full mb-4">
                        <div className="w-44 h-8">
                            <div className="w-full flex items-center justify-between gap-3">
                                <Button className=" text-sm font-medium text-[#828282] px-2 hover:text-[#828282]" label={ "Board" } leftIcon={ <GalleryVertical size={ 24 } /> } />

                                <Button className=" text-sm font-medium text-[#828282] px-2 hover:text-[#828282]" label={ "List" } leftIcon={ <List size={ 24 } /> } />
                            </div>
                        </div>
                        <div className="w-72 h-8">
                            <div className=" w-full flex items-center justify-between gap-4">
                                <Select>
                                    <SelectTrigger className="w-32 text-sm font-medium text-gray-300 gap-1 bg-gray-50 border-none focus:ring-offset-0 focus:ring-transparent focus:ring-0">
                                        <SlidersHorizontal size={ 16 } />
                                        <SelectValue placeholder="Filter" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Todo</SelectItem>
                                        <SelectItem value="dark">Doing</SelectItem>
                                        <SelectItem value="system">Completed</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button className=" bg-custom-5  p-1.5 rounded-xl w-44 hover:text-custom-5" leftIcon={ <p className="px-2 py-0 rounded-md text-custom-5 bg-white font-lg hover:text-custom-5"> + </p> } label={ "Add new task" } />
                            </div>
                        </div>
                    </section>
                    <Separator className="bg-gray-100/90" />
                    {/* Empty project board state */ }
                    {/* <section className="w-full h-full grid place-items-center">
                        <EmptyProjectBoard />
                    </section> */}
                    {/* Create a new project dialog box */ }
                    <section className="absolute w-full h-screen top-0 grid place-content-center bg-[#faf6fd]/50">
                        <CreateNewProject />
                    </section>
                    {/* project grid display placeholder */ }
                    {/* <section className="p-4 grid grid-cols-4 gap-4">
                        <ProjectBoard />
                        <ProjectBoard />
                        <ProjectBoard />
                        <ProjectBoard />
                        <ProjectBoard />
                        <ProjectBoard />
                        <ProjectBoard />
                        <ProjectBoard />
                    </section> */}

                </section>
            </div>
        </section>
    )
}

export default Projects