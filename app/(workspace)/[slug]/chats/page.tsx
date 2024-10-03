import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  SearchIcon,
  EllipsisVertical,
  PlusIcon,
  InfoIcon,
  Video,
  Phone,
  Camera,
  Smile,
  Link2,
  Key
} from 'lucide-react'
import { MessyIcon } from '@/components/icons/MessyIcon'

export const description =
  'An AI playground with a sidebar navigation and a main content area. The playground has a header with a settings drawer and a share button. The sidebar has navigation links and a user menu. The main content area shows a form to configure the model and messages.'

export default function Chat () {
  return (
    <div className='grid min-h-[1028px] pl-[53px]'>
      <div className='flex flex-col border h-full w-full'>
        <main className='grid w-[1280px] flex-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='relative hidden flex-col items-start gap-8 md:flex w-min'>
            <div className='flex flex-col w-full items-start gap-7 h-full'>
              <div className='-ml-1 px-1 text-sm font-medium h-auto'>
                <h1 className='font-bold text-2xl mb-0.5'>Chats</h1>
                <span className='text-sm font-medium'>
                  Chats with your teammates here
                </span>
              </div>
              <div className='grid gap-3 h-full'>
                <Tabs defaultValue='direct' className='w-72'>
                  <TabsList className='w-72 h-auto p-1.5 rounded-xl mb-4'>
                    <TabsTrigger
                      value='direct'
                      className='px-5 py-2 w-6/12 text-base'
                    >
                      Direct
                    </TabsTrigger>
                    <TabsTrigger
                      value='groups'
                      className='px-5 py-2 w-6/12 text-base'
                    >
                      Groups
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent className='w-72 h-full' value='direct'>
                    <div className='grid gap-3'>
                      <div className='flex justify-between align-center border-red-500 border mb-8'>
                        <div className='flex w-6/12 gap-x-2 border border-green-100 align-center align-middle'>
                          <img
                            src='../assets/icons/chat.svg'
                            alt='icon'
                            width='24'
                            height='12'
                          />
                          <p>All</p>
                          <span className='bg-gray-800 border border-0 rounded-md px-1 py-0.5 text-purple-900'>
                            32
                          </span>
                        </div>
                        <div className='flex w-6/12 gap-x-2 border border-blue-100 align-center align-middle justify-end'>
                          <img
                            src='../assets/icons/chat.svg'
                            alt='icon'
                            width='24'
                            height='12'
                          />
                          <DropdownMenu>
                            <DropdownMenuTrigger className='flex align-center gap-x-4'>
                              Label <span className='text-center'>&#8964;</span>
                            </DropdownMenuTrigger>
                            {/* <DropdownMenuContent>
                                <DropdownMenuLabel>
                                  My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>
                                  Subscription
                                </DropdownMenuItem>
                              </DropdownMenuContent> */}
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                    <div className='mb-4'>
                      <ScrollArea className='h-[715px] w-72 p-3 rounded-md border grid place-content-center'>
                        <div className='p-6 h-full'>
                          <p className='text-base font-bold text-gray-300 text-center'>
                            You don't have direct chats yet
                          </p>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className='relative bottom-0 w-72'>
                      <button className='text-purple-900 w-full p-3 text-center bg-gray-500 rounded-lg'>
                        Start conversation here
                      </button>
                    </div>
                  </TabsContent>
                  <TabsContent className='w-72 h-full' value='groups'>
                    <div className='grid gap-3'>
                      <div className='flex justify-between align-center border-red-500 border mb-8'>
                        <div className='flex w-6/12 gap-x-2 border border-green-100 align-center align-middle'>
                          <img
                            src='../assets/icons/chat.svg'
                            alt='icon'
                            width='24'
                            height='12'
                          />
                          <p>All</p>
                          <span className='bg-gray-800 border border-0 rounded-md px-1 py-0.5 text-purple-900'>
                            32
                          </span>
                        </div>
                        <div className='flex w-6/12 gap-x-2 border border-blue-100 align-center align-middle justify-end'>
                          <img
                            src='../assets/icons/chat.svg'
                            alt='icon'
                            width='24'
                            height='12'
                          />
                          <DropdownMenu>
                            <DropdownMenuTrigger className='flex align-center gap-x-4'>
                              Label <span className='text-center'>&#8964;</span>
                            </DropdownMenuTrigger>
                            {/* <DropdownMenuContent>
                                <DropdownMenuLabel>
                                  My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>
                                  Subscription
                                </DropdownMenuItem>
                              </DropdownMenuContent> */}
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                    <div className='mb-4'>
                      <ScrollArea className='h-[715px] w-72 p-3 rounded-md border grid place-content-center'>
                        <div className='p-6 h-full'>
                          <p className='text-base font-bold text-gray-300 text-center'>
                            You don't have group chats yet
                          </p>
                        </div>
                      </ScrollArea>
                    </div>
                    <div className='relative bottom-0 w-72'>
                      <button className='text-purple-900 w-full p-3 text-center bg-gray-500 rounded-lg'>
                        Start conversation here
                      </button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          <div className='relative flex h-full w-full flex-col rounded-xl bg-muted/50 py-4 md:col-span-2'>
            <div className='flex w-full h-20 border-b-2 border-white px-4'>
              <div className='w-4/12 border border-green-500 flex gap-4 items-center'>
                <Avatar>
                  <AvatarImage
                    src='https://github.com/shadcn.png'
                    alt='@shadcn'
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className=''>
                  <h2 className='text-base font-bold text-black-900'>
                    Adura O.
                  </h2>
                  <p className='text-xs text-black-900 opacity-50'>
                    @aduraOgunlade
                  </p>
                </div>
              </div>
              <div className='w-8/12 border border-red-500 flex items-center gap-3 justify-center'>
                <div className='flex gap-2 content-center text-center justify-center text-base text-purple-800 align-middle'>
                  <PlusIcon className='p-1 bg-gray-600 rounded w-5 h-5' />
                  Add to a team
                </div>
                <div className='relative '>
                  <Input
                    className='pl-8'
                    type='search'
                    placeholder='Search...'
                  />
                  <SearchIcon className='text-gray-900 absolute top-2.5 left-2.5' />
                </div>
                <div className='flex gap-1 content-center'>
                  <Video className='p-1 w-8 h-8' />
                  <Phone className='p-1 w-8 h-8' />
                  <InfoIcon className='p-1 w-8 h-8' />
                  <EllipsisVertical className='p-1 w-8 h-8' />
                </div>
              </div>
            </div>
            <section className=' pt-0.5 p-6 h-[817px]'>
              <article className='h-[789px] border-red-400 border mb-4 flex flex-col items-center justify-center text-center'>
                <MessyIcon className='mb-6' />
                <p className='text-gray-500 text-base'>
                  This is your first time chatting
                </p>
              </article>
              <div className='flex items-center justify-between bg-white rounded-xl px-4 py-2'>
                <Input
                  type='text'
                  placeHolder='Leave a message for Adura'
                  className='h-10 w-8/12 border-0'
                />
                <div className='flex gap-1 w-4/12 justify-end content-center'>
                  <div>
                    <Key className='text-white w-6 h-6 bg-purple-700 rounded-full p-1' />
                  </div>
                  <div className='flex gap-3 items-center justify-between px-2'>
                    <Camera className=' w-6 h-6 text-gray-900' />
                    <Smile className=' w-6 h-6 text-gray-900' />
                    <Link2 className=' w-6 h-6 text-gray-900' />
                  </div>
                  <div className='border-l-2  px-1.5 '>
                    <EllipsisVertical className=' w-6 h-6 bg-gray-500 rounded py-1' />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
