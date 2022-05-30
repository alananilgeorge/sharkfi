import { Grid } from "@mui/material";
import { Card } from "@mui/material";

const Loan = () => {
  return (
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
          ISSUE LOAN
          <div>
            <form>
              <label>
                Address
                <input type="text"></input>
              </label>
            </form>
            <form>
              <label>
                Duration
                <input type="text"></input>
              </label>
            </form>
            <form>
              <label>
                Amount to Borrow
                <input type="digit"></input>
              </label>
            </form>
          </div>
          <div>
            <button>CALCULATE INTEREST AND SECURITY</button>
          </div>
          <div>
            <button>PAY SECURITY + INTEREST</button>
            <button>ISSUE LOAN</button>
          </div>
        </Card>
      </Grid>
      <Grid item xs={6} className="Form2">
        <Card>
          Payback Loan
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
  );
};

export default Loan;
