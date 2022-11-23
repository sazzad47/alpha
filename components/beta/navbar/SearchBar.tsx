import { IconButton, Tooltip } from '@mui/material';
import React, {useState} from 'react'
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import PublicIcon from '@mui/icons-material/Public';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string | number>();
  const [isVisibleIcon, setIsVisibleIcon] = useState<boolean>(false);
  
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <div className="flex items-center justify-center gap-5 min-w-[32rem]">
        <form
        className='w-full text-textLight dark:text-textDark flex items-center justify-between'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
              <div className={`${isVisibleIcon? 'visible' : 'invisible'} bg-zinc-200 dark:bg-zinc-600 h-10 text-zinc-600 dark:text-slate-200 text-2xl px-2 rounded-l-3xl flex items-center justify-start`} >
                <PublicIcon />
              </div>
          <div className={`flex flex-1 bg-zinc-200 dark:bg-zinc-600 items-center justify-between ${isVisibleIcon? 'rounded-l-none': 'rounded-l-3xl'} rounded-r-3xl h-10 pl-2 mr-5`}>
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                placeholder="Search..."
                className="bg-zinc-200 dark:bg-zinc-600 w-full min-h-full focus:outline-none border-none"
                value={searchTerm}
                onChange={handleSearchTerm}
                onFocus={()=> setIsVisibleIcon(true)}
                onBlur={()=> setIsVisibleIcon(false)}
              />

            </div>
              {searchTerm &&
                <Tooltip title="Clear search">
               <IconButton className="focus:outline-none text-zinc-600 dark:text-slate-200" onClick={() => setSearchTerm('')} >

                 <AiOutlineClose
                  className= "mx-1 p-1"
                  
                 
                />
               </IconButton> 
                </Tooltip>
              }
              <Tooltip title="Search">
               <IconButton className="text-zinc-600 dark:text-slate-200 focus:outline-none h-full px-2 rounded-r-3xl flex items-center justify-end" >
               <AiOutlineSearch className="text-2xl" />
               </IconButton>
               </Tooltip>
           
          </div>
          <Tooltip title="Search with voice">
               <IconButton className="focus:outline-none text-xl p-2 h-full bg-zinc-200 dark:bg-zinc-600 text-textLight dark:text-textDark rounded-full" >
               <TiMicrophone />
               </IconButton>
               </Tooltip>
        
        </form>
      </div>
  )
}

export default SearchBar