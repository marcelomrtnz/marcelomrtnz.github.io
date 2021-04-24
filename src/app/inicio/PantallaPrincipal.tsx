import { useState, useEffect } from "react"

import appIcons from "../../consts/appIconAssets"
import AppIcon from "../../components/AppIcon"
import { ReturnIcon, HomeIcon, RecentIcon } from "../../components/Icons"

import { Container, IconButton } from "@material-ui/core"

export default function PantallaPrincipal() {

  const [ iconsGrid, setIconsGrid ] = useState([])

  useEffect(() => {
    //Hacemos un grid que diga en donde se van a posicionar los iconos


  }, [])

  return (
    <Container component="main" maxWidth="sm" >
        <section className="d-flex align-items-center justify-content-around">
        {
          appIcons.map( icon => 
            <IconButton> 
              <AppIcon {...icon} /> 
            </IconButton> 
          )
        }
        </section>
        <footer className="d-flex align-items-center justify-content-around" style={{ background: "black" }}>
          <IconButton>
            <ReturnIcon/>
          </IconButton>
          <IconButton>
            <HomeIcon/>
          </IconButton>
          <IconButton>
            <RecentIcon/>
          </IconButton>
        </footer>
    </Container>
  )
}