import Sidebar from "./components/Sidebar"
import './App.css';
import Paper from "@material-ui/core/Paper"
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles"
import Chat from "./components/Chat"


function App() {

  const theme = createMuiTheme(
    {
      palette:
      {
        type:"light"
      }
    }
  )


  return (
    <ThemeProvider theme={theme}>
      <Paper>

      <div className="app">

      <div className="app_body">
        <Sidebar />
        <Chat/>
        {/* sidebar  */}
        {/* chat side */}

      </div>
    </div>
    </Paper>
    </ThemeProvider>
    
  );
}

export default App;
