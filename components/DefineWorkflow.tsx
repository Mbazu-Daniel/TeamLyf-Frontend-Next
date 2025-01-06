import * as React from "react"

// import { cn } from "@/lib/utils"
import { MoveRight, ChevronLeft, GripVertical, EllipsisVertical, Palette, Info } from "lucide-react"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectItem, SelectContent, SelectValue } from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//     Drawer,
//     DrawerClose,
//     DrawerContent,
//     DrawerDescription,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
// } from "@/components/ui/drawer"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function DrawerDialogDemo() {
//     const [ open, setOpen ] = React.useState( false )
//     const isDesktop = useMediaQuery( "(min-width: 768px)" )

//     if ( isDesktop ) {
//         return (
//             <Dialog open={ open } onOpenChange={ setOpen }>
//                 <DialogTrigger asChild>
//                     <Button >Edit Profile</Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px]">
//                     <DialogHeader>
//                         <DialogTitle>Define Trustchain workflow</DialogTitle>
//                         <DialogDescription>
//                             Choose a suitable workflow that's best for your work ethics.
//                         </DialogDescription>
//                     </DialogHeader>
//                     <Workflow />
//                 </DialogContent>
//             </Dialog>
//         )
//     }

//     // return (
//     //     <Drawer open={ open } onOpenChange={ setOpen }>
//     //         <DrawerTrigger asChild>
//     //             <Button variant="outline">Edit Profile</Button>
//     //         </DrawerTrigger>
//     //         <DrawerContent>
//     //             <DrawerHeader className="text-left">
//     //                 <DrawerTitle>Edit profile</DrawerTitle>
//     //                 <DrawerDescription>
//     //                     Make changes to your profile here. Click save when you're done.
//     //                 </DrawerDescription>
//     //             </DrawerHeader>
//     //             <ProfileForm className="px-4" />
//     //             <DrawerFooter className="pt-2">
//     //                 <DrawerClose asChild>
//     //                     <Button variant="outline">Cancel</Button>
//     //                 </DrawerClose>
//     //             </DrawerFooter>
//     //         </DrawerContent>
//     //     </Drawer>
//     // )
// }
const formSchema = z.object({
    name: z.string().min(1, {
        message: "Cannot be empty",
    }),
    desc: z.string().min(1, {
        message: "Cannot be empty",
    }),
    toggle: z.boolean()
})


export function DefineWorkflow() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            desc: "",
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className="border-t border-gray-300 pt-4">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="flex">
                        <div className="py-4 px-8 w-1/2">
                            <label htmlFor="TemplateName" className="font-medium text-sm text-[#828282] mb-1">Template name</label>
                            <Select>
                                <SelectTrigger className="bg-transparent font-bold text-black focus:ring-transparent focus:ring-offset-transparent data-[placeholder]:text-black text-sm border-[#d2d2d2]/50 mb-4">
                                    <SelectValue placeholder="Agile development" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Agile development">Agile development</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="">
                                <FormField
                                    // control={ form.control }
                                    name="toggle"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between">
                                            <div className="space-y-0.5 w-3/4">
                                                <FormLabel className="text-[#282828] text-xs font-bold">Save as template</FormLabel>
                                                <FormDescription className="text-[#282828]/60 text-xs font-medium">
                                                    Saved workflow can be used across any porject in your workspace </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch className="data-[state=checked]:bg-custom-5 [&>span]:bg-white"
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="py-4 px-8 w-1/2 border-l border-[#d5d5d5]/50">
                            <div className="mb-4">
                                <p className="font-medium text-sm text-[#828282] mb-2 flex items-center gap-2">Active <span className="text-[#282828]"><Info size={14} /></span></p>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-purple-400 rounded-md"></div>
                                    <p className="text-[#282828] font-bold text-sm -ml-1">Backlog</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-[#f2c94c] rounded-md"></div>
                                    <p className="text-[#282828] font-bold text-sm -ml-1">In progress</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-[#828282]/30 rounded-md flex items-center justify-center">
                                        <Palette size={14} className="text-white" />
                                    </div>
                                    <p className="text-[#282828] text-sm -ml-1">Add status</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="font-medium text-sm text-[#828282] mb-2 flex items-center gap-2">Completed <span className="text-[#282828]"><Info size={14} /></span></p>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-[#4cf297] rounded-md"></div>
                                    <p className="text-[#282828] font-bold text-sm -ml-1">Completed</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-[#828282]/30 rounded-md flex items-center justify-center">
                                        <Palette size={14} className="text-white" />
                                    </div>
                                    <p className="text-[#282828] text-sm -ml-1">Add status</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                            </div>
                            <div>
                                <p className="font-medium text-sm text-[#828282] mb-2 flex items-center gap-2">Untracked <span className="text-[#282828]"><Info size={14} /></span></p>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-[#fa4b4b] rounded-md"></div>
                                    <p className="text-[#282828] font-bold text-sm -ml-1">Blocked</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                                <div className="p-2.5 rounded-2xl border border-[#d5d5d5]/50 flex items-center gap-2 text-gray-3 mb-2">
                                    <GripVertical size={16} />
                                    <div className="w-5 h-5 bg-[#828282]/30 rounded-md flex items-center justify-center">
                                        <Palette size={14} className="text-white" />
                                    </div>
                                    <p className="text-[#282828] text-sm -ml-1">Add status</p>
                                    <EllipsisVertical size={16} className="ml-auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-2 bg-[#f6f6ff] h-28 w-full px-8 rounded-b-2xl  border border-y-0 border-[#d5d5d5]/50">
                        <Button type="button" className="text-custom-5 text-sm rounded-2xl h-12 w-fit px-4 py-3 hover:text-[#fa4b4b]" label={"Back"} leftIcon={<ChevronLeft size={16} />} />

                        <Button type="button" className="bg-custom-5 text-white w-fit h-12 rounded-2xl text-sm px-8 py-3 hover:text-white hover:bg-custom-5/80" label={"Create Project"} />
                    </div>
                </form>
            </Form>
        </div>
    )
}
