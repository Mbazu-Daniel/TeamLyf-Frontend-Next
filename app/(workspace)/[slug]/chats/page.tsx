'use client'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
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
  Key,
  ChevronDownIcon,
  CheckCheckIcon,
  SlidersHorizontalIcon,
  PipetteIcon
} from 'lucide-react'
import { MessyIcon } from '@/components/icons/MessyIcon'
import { SearchInput } from '@/components/shared/SearchInput'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Query {
  id: string
  name: string
  alias: string
  time: string
  minute: string
  notifs: number
  status: string
  comments: [{ postid: string; body: string }]
}

async function fetchGroups (e: string): Promise<Query[]> {
  const result: Response = await fetch(`http://localhost:4000/${e}`)
  return result.json()
}

export default function Chat () {
  const [querys, setQuerys] = useState<Query[]>([])
  const [tabTerm, setTabTerm] = useState<string>('Direct')
  const [pinned] = useState<boolean>(false)

  const handleTabChange = (value: string): void => {
    setTabTerm(value)
  }
  // const handlePinChange = (e: any): void => {
  //   setPinned(e.toggle(true))
  // }

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const result: Query[] = await fetchGroups(tabTerm)
        setQuerys(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [tabTerm])

  return (
    <div className='grid h-full py-6 '>
      <div className='flex flex-col border rounded-lg h-screen'>
        <main className='flex w-[1640px] gap-4 p-4 '>
          <div className='relative hidden flex-col items-start gap-8 md:flex w-4/12'>
            <div className='flex flex-col w-full items-start gap-7 h-full'>
              <div className='-ml-1 px-1 text-sm font-medium h-auto'>
                <h1 className='font-bold text-2xl mb-0.5'>Chats</h1>
                <span className='text-sm font-medium'>
                  Chats with your teammates here
                </span>
              </div>
              <div className='grid gap-3 h-full w-full'>
                <Tabs
                  defaultValue={tabTerm}
                  onValueChange={handleTabChange}
                  className='w-full'
                >
                  <TabsList className='w-full h-auto p-1.5 rounded-xl mb-4'>
                    <TabsTrigger
                      value='Direct'
                      className='px-5 py-2 w-6/12 text-base'
                    >
                      Direct
                    </TabsTrigger>
                    <TabsTrigger
                      value='Groups'
                      className='px-5 py-2 w-6/12 text-base'
                    >
                      Groups
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent className='w-full h-full' value={tabTerm}>
                    <div className='grid gap-3'>
                      <div className='flex justify-between align-center mb-8'>
                        <div className='flex w-6/12 gap-x-2  align-center align-middle text-sm'>
                          <Image
                            src='../assets/icons/chat.svg'
                            alt='icon'
                            width='24'
                            height='12'
                          />
                          <p>All</p>
                          <span className='bg-gray-300 border rounded-md px-1 text-purple-900 text-sm text-center'>
                            {querys.length}
                          </span>
                        </div>
                        <div className='flex w-6/12 gap-x-2 align-center justify-end text-center'>
                          <SlidersHorizontalIcon className='text-gray-600 h-6 w-6 bg-gray-300 p-1 rounded-md' />
                          <DropdownMenu>
                            <DropdownMenuTrigger className='flex align-center justify-center gap-x-2 align-middle text-sm'>
                              Latest
                              <span className='text-center inline'>
                                <ChevronDownIcon className='w-5 h-5 my-0.5' />
                              </span>
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
                      {/* if there are chats present, this code section will activate and run */}

                      <ScrollArea className='h-[715px] w-full px-3 py-1 rounded-md border '>
                        {/* Activates if there are no chats present */}
                        {querys.length == 0 ? (
                          <div className='h-[710px] grid place-content-center'>
                            <div className='p-6 h-full'>
                              <p className='text-base font-bold text-gray-300 text-center'>
                                You don't have {tabTerm} chats yet
                              </p>
                            </div>
                          </div>
                        ) : (
                          // if there are chats present, this code section will activate and run
                          querys.map(query => (
                            <>
                              <div
                                key={query.id}
                                className='w-full  h-full px-2 py-3 cursor-pointer hover:bg-gray-200 active:bg-gray-200 flex justify-between items-center'
                              >
                                <div className='w-8/12 h-20  flex gap-2 items-center'>
                                  {/* Avatar and online status */}
                                  <div className='relative'>
                                    {tabTerm === 'Groups' ? (
                                      <Avatar className='w-12 h-12 rounded-md shrink-0'>
                                        <AvatarImage
                                          src='https://github.com/shadcn.png'
                                          alt='@shadcn'
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                      </Avatar>
                                    ) : (
                                      <Avatar className='w-12 h-12 shrink-0'>
                                        <AvatarImage
                                          src='https://github.com/shadcn.png'
                                          alt='@shadcn'
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                      </Avatar>
                                    )}

                                    {/* online status */}
                                    {tabTerm === 'Direct' &&
                                    query?.status == 'online' ? (
                                      <div className=' absolute w-3 h-3 rounded-full bg-white right-0 bottom-1 grid place-items-center'>
                                        <div className='bg-green-500 w-2 h-2 rounded-full'></div>
                                      </div>
                                    ) : tabTerm === 'Groups' ? (
                                      <div className='hidden'></div>
                                    ) : (
                                      <div className=' absolute w-3 h-3 rounded-full bg-white right-0 bottom-1 grid place-items-center'>
                                        <div className='bg-gray-900 w-2 h-2 rounded-full'></div>
                                      </div>
                                    )}
                                  </div>
                                  {/* names and alias */}
                                  <div className=''>
                                    <h2 className='text-sm font-bold text-black-900'>
                                      {query.name}
                                    </h2>
                                    <p className='text-xs text-black-900 opacity-50'>
                                      {query?.alias}
                                    </p>
                                  </div>
                                </div>
                                {/* time and notifs */}
                                <div className='flex items-end flex-col'>
                                  <ul className='list-disc list-inside mr-1 text-sm'>
                                    <li className=' text-gray-700 font-medium mb-0.5'>
                                      {query?.minute}
                                    </li>
                                  </ul>
                                  <div className='w-6 text-center'>
                                    {/* when there is pendind notifs */}
                                    {query?.notifs > 0 ? (
                                      <div className='rounded-full p-1 bg-gray-200 w-full font-bold text-purple-900 text-xs'>
                                        {query?.notifs}
                                      </div>
                                    ) : (
                                      //  when the message is read
                                      <div className='rounded-full w-full text-purple-800 bg-transparent text-center'>
                                        <CheckCheckIcon className='w-5 h-5' />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <Separator />
                            </>
                          ))
                        )}
                      </ScrollArea>
                    </div>
                    <div className='relative bottom-0 w-full'>
                      <button className='text-purple-900 w-full p-3 text-center bg-gray-500 rounded-lg'>
                        Start new conversations
                      </button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          {/* Chat region */}
          <div className='relative flex h-full w-full flex-col rounded-xl bg-muted/50 py-4 md:col-span-2'>
            <div className='flex w-full h-20 px-4'>
              {/* Private chats activated */}
              <div className='w-4/12 flex gap-3 items-center'>
                {tabTerm === 'Groups' ? (
                  <>
                    <Avatar className='w-12 h-12 rounded-md shrink-0'>
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
                      {/* this region to change letter in the future, should be according to the number of those who is online at the moment  */}
                      <div className='text-xs text-black-900 opacity-50 -mt-0.5 flex gap-3'>
                        <p className='font-semibold'>
                          <span>8</span> members
                        </p>
                        <div className='flex gap-2 items-center'>
                          <p className='w-1.5 h-1.5 rounded-full bg-gray-900'></p>
                          <p className='font-semibold text-green-600'>
                            <span>3</span> online
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Avatar className='w-12 h-12 shrink-0'>
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
                      <p className='text-xs text-black-900 opacity-50 -mt-0.5'>
                        @aduraOgunlade
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className='w-8/12 flex items-center gap-3 justify-end'>
                <div className='flex gap-2 content-center text-center justify-center text-base text-purple-800 align-middle'>
                  {tabTerm === 'Groups' ? (
                    <></>
                  ) : (
                    <>
                      <PlusIcon className='p-1 bg-gray-600 rounded w-5 h-5' />
                      Add to a team
                    </>
                  )}
                </div>
                <div className='relative '>
                  <SearchInput
                    leftIcon={<SearchIcon className='w-6 h-6 opacity-50' />}
                    placeHolder='Search...'
                    className='w-60'
                  />
                </div>
                <div className='flex gap-1 content-center'>
                  <Video className='p-1 w-8 h-8' />
                  <Phone className='p-1 w-8 h-8' />
                  <InfoIcon className='p-1 w-8 h-8' />
                  <EllipsisVertical className='p-1 w-8 h-8' />
                </div>
              </div>
            </div>
            {/* chat area where conversations are displayed */}
            <section className=' pt-0.5 h-[817px] w-full'>
              <ScrollArea className='h-[789px] mb-4 mx-6'>
                <div className='w-full h-full relative'>
                  <div className='absolute rounded-lg w-fit px-3 py-1.5 top-6 left-1/2 transform translate-x-1/2 bg-white text-black text-opacity-70 text-sm'>
                    Today
                  </div>
                  {/* pinned chat area */}
                  {pinned && tabTerm === 'Groups' ? (
                    <div className='flex gap-2 items-center h-14 bg-[#fdf7fc] '>
                      <div>
                        <PipetteIcon className='w-6 h-6 text-gray-900' />
                      </div>
                      <div className='relative'>
                        <Avatar className='w-8 h-8'>
                          <AvatarImage
                            src='https://github.com/shadcn.png'
                            alt='@shadcn'
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className=' flex gap-8 items-center'>
                          <h2 className='text-sm font-normal text-blue-500'>
                            Marcus Felix
                          </h2>
                          <ul className='text-sm text-black text-opacity-80 font-medium'>
                            <li>
                              Hey everybody, do not forget the review meeting
                              coming up 8px this saturday!
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* chats body area */}
                  {/* First we have to check the length of the files in the object since we fetching dynamically
                  if it is not empty, it should then check to see if there are any comments in each indexed file */}
                  {querys.length > 0 ? (
                    querys.map((query, i) =>
                      query.comments.length > 0 ? (
                        query.comments.map(comment => (
                          <div
                            key={comment.postid}
                            className='w-full justify-start pt-4'
                          >
                            <div className='flex gap-2 items-center'>
                              <div className='relative'>
                                <Avatar className='w-8 h-8'>
                                  <AvatarImage
                                    src='https://github.com/shadcn.png'
                                    alt='@shadcn'
                                  />
                                  <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                              </div>
                              <div>
                                <div className=' flex gap-8 items-center'>
                                  <h2 className='text-sm font-normal text-red-500'>
                                    {query.name}
                                  </h2>
                                  <ul className='list-disc text-sm text-gray-700'>
                                    <li>{query.time}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className='ml-10'>
                              <ul className='text-sm mb-1.5'>
                                <li>{comment.body}</li>
                              </ul>
                            </div>
                          </div>
                        ))
                      ) : // Checking to see if the comments are empty and the query exceeds one
                      i > 0 ? (
                        // note: the code has some bug but this is just a mock, api call annd structure will change later so i will leave it like this for now
                        // this prevents the first time chatting box not to display multiple times
                        <></>
                      ) : (
                        // this shows if there are not comments when the first comment obj of the query obj is empty
                        <div className='h-[789px] grid place-content-center'>
                          <div
                            key={i}
                            className='flex flex-col items-center justify-center text-center w-full h-full'
                          >
                            <MessyIcon className='mb-6' />
                            <p className='text-gray-500 text-base'>
                              This is your first time chatting
                            </p>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    // this shows if no query exists in the first place or rather first time chatting
                    <div className='h-[789px] grid place-content-center'>
                      <div className='flex flex-col items-center justify-center text-center w-full h-full'>
                        <MessyIcon className='mb-6' />
                        <p className='text-gray-500 text-base'>
                          This is your first time chatting
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              {/* chat area located at the bottom of the chat display container where messages are typed and forwarded */}
              <div className='flex items-center justify-between bg-white rounded-xl px-4 py-2 mx-6'>
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
