import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
//import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SendIcon from '@material-ui/icons/Send';
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: 'violet',
//     '&:hover': {
//       backgroundColor: 'blue'
//     },
//   },
//   title: {
//     textDecoration: "underline",
//     marginBottom: 20
//   }
// })

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {

  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault() //to prevent from refreshing the page

    setTitleError(false)
    setDetailsError(false)

    if(title == '') {
      setTitleError(true)
    }

    if(details == '') {
      setDetailsError(true)
    }

    //This is so the form will not submit without both textfields being written in
    if (title && details) {
      console.log(title, details, category)
    }
  }

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required //Doesnt add validation just for looks
          error={titleError} //shows if true

        />

        <TextField 
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required //Doesnt add validation just for looks
          error={detailsError}
          
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money"/>
            <FormControlLabel value="todos" control={<Radio />} label="Todos"/>
            <FormControlLabel value="reminders" control={<Radio />} label="remainders"/>
            <FormControlLabel value="work" control={<Radio />} label="work"/>
          </RadioGroup>
        </FormControl>

        <Button
        className={classes.btn}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
        >
        Submit
      </Button>
      </form>

      {/* icons */}
      {/* <br/>
      <AcUnitOutlinedIcon color="secondary" fontSize="large"/> */}
    </Container>
  )
}
