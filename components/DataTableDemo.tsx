"use client"
import * as React from "react"
import {
    ColumnDef,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { SearchInput } from "@/components/shared/SearchInput"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SearchIcon } from 'lucide-react'
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import { Separator } from "./ui/separator"

const data: PlaceHolderDataTest[] = [
    {
        id: "m5gr84i9",

        name: "Stanley M.",
        image: "",
        alias: "StanleyMuis",
    },
    {
        id: "3u1reuv4",

        name: "Stanley M.",
        image: "",
        alias: "StanleyMuis",
    },
    {
        id: "derv1ws0",
        name: "Stanley M.",
        image: "",
        alias: "StanleyMuis",
    },
    {
        id: "5kma53ae",

        name: "Stanley M.",
        image: "",
        alias: "StanleyMuis",
    },
    {
        id: "bhqecj4p",

        name: "Stanley M.",
        image: "",
        alias: "StanleyMuis",
    },
]

export type PlaceHolderDataTest = {
    id: string

    name: string
    image: string
    alias: string
}

export const columns: ColumnDef<PlaceHolderDataTest>[] = [
    {
        id: "select",
        cell: ( { row } ) => (
            <div className="w-full flex items-center gap-1 px-4">
                <Checkbox className="border-[#4f4f4f] w-5 h-5  data-[state=checked]:text-inherit data-[state=checked]:bg-custom-5"
                    checked={ row.getIsSelected() }
                    onCheckedChange={ ( value ) => row.toggleSelected( !!value ) }
                    aria-label="Select row"

                />
                <div className="w-full">
                    <div
                        className='w-full px-2 py-2 cursor-pointer hover:bg-inherit active:bg-gray-200 flex justify-between items-center'
                    >
                        <div className='w-full  flex gap-2 items-center'>
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
                                <h2 className='text-sm font-bold text-[#4f4f4f]'>
                                    Stanley M.
                                </h2>
                                <p className='text-xs text-gray-3 opacity-50'>@StanleyMuis</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        ),

        enableSorting: false,
        enableHiding: false,
    },

]

export function DataTableDemo() {
    const [ columnVisibility, setColumnVisibility ] =
        React.useState<VisibilityState>( {} )
    const [ rowSelection, setRowSelection ] = React.useState( {} )

    const table = useReactTable( {
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            columnVisibility,
            rowSelection,
        },
    } )

    return (
        <div className="w-full bg-white rounded-3xl shadow-lg pt-4">
            <div className="w-full flex items-center py-4">
                <SearchInput
                    leftIcon={ <SearchIcon className='w-7 h-7 opacity-50' /> }
                    placeHolder='Search for members...'
                    className='w-full mx-4 border-[#aaaaaa]'
                />
            </div>
            <div>
                <Table>
                    <TableBody>
                        { table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map( ( row ) => (
                                <TableRow
                                    key={ row.id }
                                    data-state={ row.getIsSelected() && "selected" }
                                    className="border-none data-[state=selected]:bg-[#f2f2f2]"
                                >
                                    { row.getVisibleCells().map( ( cell ) => (
                                        <TableCell key={ cell.id } className="p-0 hover:bg-[#f2f2f2]">
                                            { flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            ) }
                                        </TableCell>
                                    ) ) }
                                </TableRow>
                            ) )
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={ columns.length }
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        ) }
                    </TableBody>
                </Table>
                <Separator className="bg-gray-100/90 mt-4" />
                <div className="flex justify-end items-center gap-2 p-4 w-full px-8  border-t-1 border-[#d5d5d5]/50">
                    <Button type="button" className="text-[#fa4b4b] bg-[#f2f2f2] text-sm rounded-2xl h-10 w-fit shadow-sm" label={ "Cancel" } />
                    <Button type="submit" className="bg-[#f2f2f2] text-custom-4 w-fit h-10 rounded-2xl text-sm" label={ "Done" } />
                </div>
            </div>
        </div>
    )
}
