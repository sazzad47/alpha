import React from 'react'
import setLanguage from 'next-translate/setLanguage'
import DropdownItem from './DropdownItem';
import DoneIcon from '@mui/icons-material/Done';
import { Grid } from '@mui/material';

const languageList = [
    {id: 1,
     name: "English",
     shortName: "en"
    },
    {id: 2,
     name: "Español",
     shortName: "es"
    },
    {id: 3,
     name: "Français",
     shortName: "fr"
    },
    {id: 4,
     name: "Deutsch",
     shortName: "de"
    },
    {id: 5,
     name: "日本語",
     shortName: "ja"
    },
    {id: 6,
     name: "한국어",
     shortName: "ko"
    },
    {id: 7,
     name: "Italiano",
     shortName: "it"
    },
    {id: 8,
     name: "Nederlands",
     shortName: "nl"
    },
    {id: 9,
     name: "Polski",
     shortName: "pl"
    },
    {id: 10,
     name: "Português",
     shortName: "pt"
    },
    {id: 11,
     name: "Русский",
     shortName: "ru"
    },
    {id: 12,
     name: "Svenska",
     shortName: "sv"
    },
    {id: 13,
     name: "Türkçe",
     shortName: "tr"
    },
    {id: 14,
     name: "العربية",
     shortName: "ar"
    },
    {id: 15,
     name: "中文(Zhōngwén)",
     shortName: "zh"
    },
]

const LanguageChanger = () => {
   
     
      
  return (
    <React.Fragment>
        {languageList.map((item) => (
            <Grid key={item.id} onClick={async () => await setLanguage(item.shortName)}>
                <DropdownItem> {item.name} </DropdownItem>
            </Grid>
        ))}
    </React.Fragment>
  )
}

export default LanguageChanger