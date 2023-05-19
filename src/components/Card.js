import React, { useState } from 'react'

const Card = (props) => {
    const { user } = props
    const { username, name, address, email, phone, website } = user

    const [isShown, setIsShown] = useState(false)
    const toggleShown = () => {
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            <div className="relative m-5  h-auto overflow-hidden rounded-2xl  bg-gray-300 py-6 sm:py-12">
                <div className='flex flex-row justify-around'>
                    <h1>{username}</h1>
                    <div>
                        <p className='font-bold'>Contact</p>
                        <p>{name}</p>
                    </div>
                    <div>
                        <p className='font-bold'>City</p>
                        <p>{address.city}</p>
                    </div>
                    <div>
                        <p className='font-bold'>Email</p>
                        <p>{email}</p>
                    </div>
                    <button onClick={toggleShown} className="rounded-full bg-red-500 text-center w-36 h-10 text-sm text-white">{isShown ? "Hide" : "Show"} Details</button>
                </div>
                {isShown && <div className=' flex flex-col rounded-lg bg-slate-50 p-4 mt-8 mx-8'>
                    <div className='flex flex-row'>

                        <p className='font-bold mr-6'>Contact Person</p>
                        <p>{name}</p>
                    </div>
                    <div className='flex flex-row'>

                        <p className='font-bold mr-6'>Address</p>
                        <p> {address.suite} , {address.street}</p>

                    </div>
                    <div className='flex flex-row'>

                        <p className='font-bold mr-6'>Phone</p>
                        <p>{phone}</p>
                    </div>
                    <div className='flex flex-col relative top-0'>
                        <p className='font-bold mr-6'>Webisite</p>
                        <p>{website}</p>
                    </div>
                </div>
                }
            </div>

            {/* {props.name && <p className='font-bold'>Contact 
                {props.name}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Details</button>
            {isShown && <p>{props.username}</p>} */}

        </div>
    )
}
export default Card