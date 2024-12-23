import * as React from "react"

// import { cn } from "@/lib/utils"
import { MoveRight, ChevronLeft } from "lucide-react"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
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

export function Workflow() {
    return (
        <div className="border-t border-gray-300 pt-4">
            <div className=" mx-8 mt-2 mb-4 border border-gray-500 rounded-lg p-4">
                <h2 className="font-bold text-sm text-[#282828] mb-3">Basic</h2>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1 ">
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"><span className="inline-flex w-3 h-3 rounded-sm bg-gray-3"></span> To-do</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"><span className="inline-flex w-3 h-3 rounded-sm bg-custom-4"></span> In-progress</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-green-500"></span> Completed</p>
                    </div>
                </div>
            </div>
            <div className=" mx-8 mt-2 mb-4 border border-gray-500 rounded-lg p-4">
                <h2 className="font-bold text-sm text-[#282828] mb-3">Product + engineering</h2>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"><span className="inline-flex w-3 h-3 rounded-sm bg-gray-3"></span> Backlog</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"><span className="inline-flex w-3 h-3 rounded-sm bg-custom-4"></span> Scoping</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-green-500"></span> In-design</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-[#f57070]"></span> In-development</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-[#ffbb0c]"></span> In-review</p>
                    </div>
                </div>
            </div>
            <div className=" mx-8 mt-2 mb-4 border border-gray-500 rounded-lg p-4">
                <h2 className="font-bold text-sm text-[#282828] mb-3">Marketing</h2>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"><span className="inline-flex w-3 h-3 rounded-sm bg-gray-3"></span> Backlog</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"><span className="inline-flex w-3 h-3 rounded-sm bg-custom-4"></span> Planning</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-green-500"></span> In-progress</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-[#ffbb0c]"></span> Ready for review</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <MoveRight className="text-[#828282] size-3" />
                        <p className="capitalize flex items-center gap-1 text-xs font-medium text-[#282828]"> <span className="inline-flex w-3 h-3 rounded-sm bg-green-500"></span> Approved</p>
                    </div>
                </div>
            </div>
            <div className=" mx-8 mt-2 mb-4 border border-gray-500 rounded-lg p-4">
                <h2 className="font-bold text-sm text-[#282828] mb-3">Blank</h2>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                        <p className="flex items-center gap-1 text-xs font-medium text-[#282828]">Create a custom workflow your way and in your own words.</p>
                    </div>

                </div>
            </div>
            <div className="flex justify-between items-center gap-2 bg-[#f6f6ff] h-28 w-full px-8 rounded-b-2xl  border border-y-0 border-[#d5d5d5]/50">
                <Button type="button" className="text-custom-5 text-sm rounded-2xl h-12 w-fit px-4 py-3 hover:text-[#fa4b4b]" label={ "Back" }  leftIcon={<ChevronLeft size={16}/>}/>

                <Button type="button" className="bg-custom-5 text-white w-fit h-12 rounded-2xl text-sm px-8 py-3 hover:text-white hover:bg-custom-5/80" label={ "Create Project" } />
            </div>
        </div>
    )
}
