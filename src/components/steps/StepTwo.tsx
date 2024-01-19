import { TextField } from "@mui/material"


const StepTwo = () => {
  return (
    <div>
    <h1 className="text-gray-400 text-md">Step Two</h1>
    <h1 className="text-xl font-bold my-2">Configure Your Graph API Client</h1>
    <div className="flex items-center mt-5">
      <h4 className="inline-block mr-4">Outlined: </h4>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="outline"
        size="small"
      />
    </div>
    <div className="flex items-center mt-5">
      <h4 className="inline-block mr-4">Error: </h4>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder="outline"
        size="small"
        error
      />
    </div>
  </div>
  )
}

export default StepTwo