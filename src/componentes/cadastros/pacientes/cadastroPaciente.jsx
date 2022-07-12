import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default class cadastroPaciente extends Component {
  render() {
    return (
      <>
        <Grid container> 
          <Grid item  sx={{alignItems:"center"}} xs={12} md={12} lx={12}>
              <Box>                          
                  <Typography>
                      Cadastro de Paciente 
                  </Typography>
              </Box>
          </Grid>
        </Grid>  
      </>
    )
  }
}
