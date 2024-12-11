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
        <section className="w-[668px] h-28  bg-white">
            <div className="w-full h-full bg-inherit rounded-md">
                <div className="px-8 pt-8 bg-inherit">
                    <h1 className="text-black text-2xl font-bold mb-3.5 ">Create a project</h1>
                    <p className="text-sm text-[#282828]/60 font-medium">A project contains a list of tasks, members, chats room, with its own workflow and settings</p>
                </div>
                <Separator className="bg-gray-100/90 my-4" />
                <div className="rounded-sm w-full relative">
                    <div className="w-full grid place-items-center h-24">
                        <Button className=" p-1.5 rounded-xl text-custom-4 bg-gray-3/10" label={ "Add cover photo" } leftIcon={ <PlusIcon size={ 16 } /> } />
                    </div>
                    <Separator className="bg-gray-100/90" />
                    <p className="w-10 h-10 bg-green-400 text-black text-2xl font-bold rounded-lg inline-flex items-center justify-center absolute top-[75px] ml-4">
                        D
                    </p>

                    <Form { ...form }>
                        <form onSubmit={ form.handleSubmit( onSubmit ) } className="space-y-4 mx-4 mt-9">
                            <div className="flex gap-3 ">
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
                            {/* <Button type="submit">Submit</Button> */ }
                            <div className="flex gap-3 mb-4">
                                <Button className="text-gray-3 text-sm font-bold border-2 border-gray-3/20 p-2" leftIcon={ <LockKeyholeOpen size={ 16 } /> } label={ 'Public' } />
                                <Button className="text-gray-3 text-sm font-bold border-2 border-gray-3/20 p-2" leftIcon={ <Users size={ 16 } /> } label={ 'Lead' } />
                            </div>

                            <div>
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
                                                <Switch
                                                    checked={ field.value }
                                                    onCheckedChange={ field.onChange }
                                                />
                                            </FormControl>
                                        </FormItem>
                                    ) }
                                />

                            </div>
                        </form>
                    </Form>

                </div>
            </div>
        </section>
    )
}
