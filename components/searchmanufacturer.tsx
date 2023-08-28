"use client"

import { useState } from 'react';
import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image'

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps) => {
    const [query, setquery] = useState('')
  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
                <Combobox.Button className="absolute top-[14px]">
                    <Image
                    src="/car-logo.svg"
                    width={20}
                    height={20}
                    className="ml-4"
                    alt="Car Logo"
                    />
                </Combobox.Button>

                <Combobox.Input
                className="search-manufacturer__input"
                placeholder="Volkswagen"
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setquery(e.target.value)}
                />

                <Transition>
                    {/* video timestamp: 1:03:02, if lost. */}
                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer