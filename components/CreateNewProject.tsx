"use client";
import { PlusIcon, LockKeyholeOpen, Users } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { DataTableDemo } from "@/components/DataTableDemo"


const formSchema = z.object( {
    name: z.string().min( 1, {
        message: "Cannot be empty",
    } ),
    desc: z.string().min( 1, {
        message: "Cannot be empty",
    } ),
    toggle: z.boolean()
} )

export const CreateNewProject = () => {

    const form = useForm<z.infer<typeof formSchema>>( {
        resolver: zodResolver( formSchema ),
        defaultValues: {
            name: "",
            desc: "",
        },
    } )


    function onSubmit( values: z.infer<typeof formSchema> ) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log( values )
    }


    return (
        <section className="w-[668px] h-fit bg-white">
            <div className="w-full h-full bg-inherit rounded-2xl border border-[#d5d5d5]/50">
                <div className="px-8 pt-8 bg-inherit border border-inherit rounded-t-2xl border-y-0">
                    <h1 className="text-black text-2xl font-bold mb-3.5 ">Create a project</h1>
                    <p className="text-sm text-[#282828]/60 font-medium">A project contains a list of tasks, members, chats room, with its own workflow and settings</p>
                </div>
                <Separator className="bg-gray-100/90 my-4" />
                <div className="rounded-sm w-full relative">


                    <Form { ...form }>
                        <form onSubmit={ form.handleSubmit( onSubmit ) } className="space-y-4 mt-9">
                            <div className="border rounded-lg border-[#d5d5d5]/50 mx-8">
                                <div className="w-full grid place-items-center h-24">
                                    <Button className=" p-1.5 rounded-xl text-custom-4 bg-gray-3/10" label={ "Add cover photo" } leftIcon={ <PlusIcon size={ 16 } /> } />
                                </div>
                                <Separator className="bg-gray-100/90" />
                                <span className="w-10 h-10 bg-green-400 text-black text-2xl font-bold rounded-lg inline-flex items-center justify-center absolute top-[78px] ml-4 mb-4">
                                    D
                                </span>
                                <div className="flex gap-3 mt-10 mx-4">
                                    <FormField
                                        control={ form.control }
                                        name="name"
                                        render={ ( { field } ) => (
                                            <FormItem className="w-3/4">
                                                <FormLabel className="text-black text-sm font-bold">Project Name</FormLabel>
                                                <FormControl className=" border-[#d5d5d5]/50 text-gray-3">
                                                    <Input placeholder="TrustChain" { ...field } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                    <FormField
                                        control={ form.control }
                                        name="name"
                                        render={ ( { field } ) => (
                                            <FormItem className="w-1/4">
                                                <FormLabel className="text-black text-sm font-bold">Project ID</FormLabel>
                                                <FormControl className=" border-[#d5d5d5]/50 text-gray-3">
                                                    <Input placeholder="TCN" { ...field } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </div>
                                <div className="m-4">
                                    <FormField
                                        control={ form.control }
                                        name="desc"
                                        render={ ( { field } ) => (
                                            <FormItem >
                                                <FormLabel className="text-black text-sm font-bold">Description</FormLabel>
                                                <FormControl className="pb-16 border-[#d5d5d5]/50 text-gray-3">
                                                    <Input placeholder="This project is..." { ...field } />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        ) }
                                    />
                                </div>
                                {/* <Button type="submit">Submit</Button> */ }
                                <div className="flex gap-3 mb-4 mx-4 ">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button className="text-gray-3 text-sm font-bold border-2 border-gray-3/20 p-2" leftIcon={ <LockKeyholeOpen size={ 16 } /> } label={ 'Public' } />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-64 bg-white border-none -left-48 -top-10 relative">
                                            <DropdownMenuGroup>
                                                <div className="p-2">
                                                    <div className="flex gap-2.5 bg-white hover:bg-[#f6f6ff] hover:border hover:border-custom-5 hover:rounded-md">
                                                        <LockKeyholeOpen size={ 16 } className="text-[#828282] mt-1" />
                                                        <div >
                                                            <span className="text-sm font-bold text-[#282828]">Public</span>
                                                            <DropdownMenuLabel className="text-[10px] text-[#828282] font-medium p-0">Only invited guess has access</DropdownMenuLabel>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="p-2">
                                                    <div className="flex gap-2.5 bg-white hover:bg-[#f6f6ff] hover:border hover:border-custom-5 hover:rounded-md">
                                                        <LockKeyholeOpen size={ 16 } className="text-[#828282] mt-1" />
                                                        <div >
                                                            <span className="text-sm font-bold text-[#282828]">Private</span>
                                                            <DropdownMenuLabel className="text-[10px] text-[#828282] font-medium p-0 mb-1">Only invited guess has access</DropdownMenuLabel>
                                                            <Button className="text-custom-4 text-xs font-bold  p-1" leftIcon={ <PlusIcon size={ 16 } /> } label={ 'Add' } />
                                                        </div>
                                                    </div>

                                                </div>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <Button className="text-gray-3 text-sm font-bold border-2 border-gray-3/20 p-2" leftIcon={ <Users size={ 16 } /> } label={ 'Lead' } />
                                    {/* This is the popup to be displayed when you click on the private add button */ }
                                    {/* <DataTableDemo/> */ }
                                </div>
                            </div>

                            <div className="mb-8 mx-8">
                                <FormField
                                    control={ form.control }
                                    name="toggle"
                                    render={ ( { field } ) => (
                                        <FormItem className="flex flex-row items-center justify-between">
                                            <div className="space-y-0.5">
                                                <FormLabel className="text-black text-sm font-bold">Create Group Chat</FormLabel>
                                                <FormDescription>
                                                    Have conversations about projects with your team members.
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch className="data-[state=checked]:bg-custom-5 [&>span]:bg-white"
                                                    checked={ field.value }
                                                    onCheckedChange={ field.onChange }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    ) }
                                />

                            </div>

                            <div className="flex justify-end items-center gap-2 bg-[#f6f6ff] h-28 w-full px-8 rounded-b-2xl  border border-y-0 border-[#d5d5d5]/50">
                                <Button type="button" className="text-[#fa4b4b] text-sm rounded-2xl h-12 w-fit px-4 py-3" label={ "Discard" } />
                                <Button type="submit" className="bg-custom-5 text-white w-fit h-12 rounded-2xl text-sm px-8 py-3" label={ "Proceed" } />
                            </div>
                        </form>
                    </Form>

                </div>
            </div>
        </section>
    )
}
