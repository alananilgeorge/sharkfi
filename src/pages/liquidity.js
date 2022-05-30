import "../App.css";
import Grid from "@mui/material/Grid";
import { Button, Card } from "@mui/material";
import Sidebar from "../sidebar.js";

function Liquidity() {
  return (
    <div className="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <table className="table">
              <th width="370px">Address</th>
              <th width="370px">Wrapped Token Address</th>
              <th width="370px">Name</th>
              <th width="370px">Symbol</th>
            </table>
          </div>
        </Grid>
        <Grid item xs={6} className="Form1">
          <Card className="card1">
            Add Liquidity
            <div>
              <form>
                <label>
                  Address
                  <input type="text"></input>
                </label>
              </form>
              <form>
                <label>
                  Amount to Deposit
                  <input type="text"></input>
                </label>
              </form>
            </div>
            <Grid container>
              <Grid item md="6">
                <Button variant="contained">Approve</Button>
              </Grid>
              <Grid item md="6">
                <Button variant="contained" >Deposit</Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6} className="Form2">
          <Card>
            Remove Liquidity
            <div>
              <form>
                <label>
                  Address
                  <input type="text"></input>
                </label>
              </form>
              <form>
                <label>
                  Amount to Payback
                  <input type="digit"></input>
                </label>
              </form>
            </div>
            <div>
              <button>PAYBACK</button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Liquidity;
