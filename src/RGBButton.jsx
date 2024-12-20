import React from 'react'

const RGBButton = () => {
  return (
    <div>
        <div className="flex min-h-screen flex-col items-center justify-center bg-black">

 
<button className="relative overflow-hidden rounded-lg px-20 py-6">

{/* If I change the inset-[] it will make the border thiner or thicker */}
 
  <span className="absolute inset-[1.5px] z-10 flex items-center justify-center rounded-lg bg-black bg-gradient-to-t from-neutral-800 text-neutral-300">Button</span>
 
  <span aria-hidden className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-purple-700 before:via-red-500 before:to-amber-400" />
  
</button>
</div>
    </div>
  )
}

export default RGBButton