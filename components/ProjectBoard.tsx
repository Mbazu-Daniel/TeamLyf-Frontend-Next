import { EllipsisVertical, SettingsIcon, StarIcon, Link2Icon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const ProjectBoard = () => {
    return (
        <div className="w-[430px] flex items-center flex-col h-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-2xl rounded-b-3xl shadow-lg">
            <div className="w-24 h-24 flex items-center justify-center bg-[#deb3ff] rounded-md text-[#282828] text-5xl font-bold border border-white mt-4">
                T
            </div>
            <div className="rounded-2xl w-full bg-white px-4 py-2 -mt-2">
                <div className="flex items-center justify-between my-4">
                    <div>
                        <h2 className="text-xl font-bold text-[#282828]">Trustchain</h2>
                        <span className="block text-xs font-bold text-[#828282]">TCN</span>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="text-gray-3 text-sm font-bold p-0 bg-transparent hover:text-text-gray-3 shadow-none" leftIcon={ <EllipsisVertical size={ 16 } className="text-gray-3" /> } />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48 bg-white border-none relative">
                            <DropdownMenuGroup>
                                <div className="p-2 hover:bg-[#f6f6ff] cursor-pointer" role="button" aria-describedby="button" tabIndex={ 0 }>
                                    <div className="flex gap-2.5 bg-inherit hover:bg-inherit">
                                        <div >
                                            <span className="text-sm font-bold text-[#828282]">View Project</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="p-2 hover:bg-[#f6f6ff] cursor-pointer" role="button" aria-describedby="button" tabIndex={ 0 }>
                                    <div className="flex gap-2.5 bg-inherit hover:bg-inherit">
                                        <div >
                                            <span className="text-sm font-bold text-[#828282]">Edit Project</span>
                                        </div>
                                    </div>

                                </div>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator className="bg-[#828282]/20" />
                            <DropdownMenuGroup>
                                <div className="p-2 hover:bg-[#f6f6ff] cursor-pointer" role="button" aria-describedby="button" tabIndex={ 0 }>
                                    <div className="flex gap-2.5 bg-inherit hover:bg-inherit">
                                        <div >
                                            <span className="text-sm font-bold text-[#fa4b4b]">Delete Project</span>
                                        </div>
                                    </div>

                                </div>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="w-full text-sm text-[#555555] my-4 font-medium">
                    <p>Trustchain os a decentralized, blockchain based platform designed to establish and verify trust</p>
                </div>
                <div className="flex items-center justify-between my-4">
                    <div className='w-full flex gap-2 items-center justify-start'>
                        {/* Avatar and online status */ }
                        <div className='relative'>
                            <Avatar className='w-8 h-8 rounded-full shrink-0'>
                                <AvatarImage
                                    src='https://github.com/shadcn.png'
                                    alt='@shadcn'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </div>
                        {/* names and alias */ }
                        <div className=''>
                            <p className='text-xs text-gray-3 opacity-50'>Project Creator</p>
                            <h2 className='text-sm font-bold text-[#4f4f4f]'>
                                Stanley M.
                            </h2>
                        </div>
                    </div>

                    <div className='w-full flex gap-2 items-center justify-end'>
                        {/* names and alias */ }
                        <div className=''>
                            <p className='text-xs text-gray-3 opacity-50'>Project Lead</p>
                            <h2 className='text-sm font-bold text-[#4f4f4f]'>
                                Theresa O.</h2>
                        </div>
                        {/* Avatar and online status */ }
                        <div className='relative'>
                            <Avatar className='w-8 h-8 rounded-full shrink-0'>
                                <AvatarImage
                                    src='https://github.com/shadcn.png'
                                    alt='@shadcn'
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                        </div>

                    </div>

                </div>
                <div className="flex items-center justify-between my-4">
                    <div className="flex items-center justify-start">
                        <Avatar className='w-6 h-6 rounded-full shrink-0'>
                            <AvatarImage
                                src='https://github.com/shadcn.png'
                                alt='@shadcn'
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='w-6 h-6 rounded-full shrink-0'>
                            <AvatarImage
                                src='https://github.com/shadcn.png'
                                alt='@shadcn'
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar className='w-6 h-6 rounded-full shrink-0'>
                            <AvatarImage
                                src='https://github.com/shadcn.png'
                                alt='@shadcn'
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="text-[#828282] text-xs inline-block ml-1 font-bold">+2</span>
                    </div>
                    {/* <Button label={ "No member" } className="text-xs text-[#282828] px-2 py-0 rounded-md shadow-sm hover:text-[#282828]" /> */ }
                    <div className="flex items-center gap-2 justify-end">
                        <StarIcon size={ 20 } className="text-[#828282] fill:bg-yellow-500" />
                        <Link2Icon size={ 20 } className="text-[#828282] -rotate-45" />
                        <SettingsIcon size={ 20 } className="text-[#828282]" />
                    </div>
                </div>
            </div>
        </div>
    )
}