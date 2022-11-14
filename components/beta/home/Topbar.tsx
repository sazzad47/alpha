import React from 'react'
import {Grid, Tooltip, Button} from '@mui/material'

const terms = [
    {id: 1,
     name: "All"},
    {id: 1,
     name: "Typescript"},
    {id: 1,
     name: "Javascript"},
    {id: 1,
     name: "Python"},
    {id: 1,
     name: "Node"},
    {id: 1,
     name: "React"},
    {id: 1,
     name: "Next"},
    {id: 1,
     name: "MongoDB"},
    {id: 1,
     name: "Tailwind CSS"},
    {id: 1,
     name: "GraphQL"},
    {id: 1,
     name: "Apollo Client"},
    {id: 1,
     name: "Frontend"},
    {id: 1,
     name: "Backend"},
    {id: 1,
     name: "Database"},
]
const Topbar = () => {
  return (
    <Grid container className='w-[2000px] overflow-x-scroll h-[4rem]'>
        {terms.map((item)=> (
            <Tooltip key={item.id} title={item.name} PopperProps={{
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, -10]
                        }
                    }
                ]
            }}>
              <Button className='focus:outline-none bg-bgLight dark:bg-bgDark hover:bg-bgLightHover dark:hover:bg-bgDarkHover text-textLight dark:text-textDark rounded-3xl m-3 capitalize' >
              {item.name}
              </Button>
            </Tooltip>
        ))}
    </Grid>
  )
}

export default Topbar