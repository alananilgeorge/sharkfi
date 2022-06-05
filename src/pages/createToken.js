import "../App.css";
function Createtoken() {
  return (
    <div className="TokenForm">
      <form id="f1">
        <label>
          Address
          <input type={"text"} />
        </label>
      </form>
      <form id="f1">
        <label>
          Token Name
          <input type={"text"} />
        </label>
      </form>
      <form id="f1">
        <label>
          Symbol
          <input type={"text"} />
        </label>
      </form>
      <button id="b1">Create</button>
    </div>
  );
}

export default Createtoken;
