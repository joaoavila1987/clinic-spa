import React, { Component } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default class cadastroPaciente extends Component {
  render() {
    return (
      <>
      <Container >
            <Grid container>
                <Grid>
                    <Box sx={{ bgcolor:"red"}}>
                        <Typography>
                            Cadastro de Paciente 
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
      </Container>  
      </>
    )
  }
}
