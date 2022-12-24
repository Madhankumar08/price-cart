import "./styles.css";
import Tier from "./component/Tier"
import data from "./content";

export default function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((tier, i) => {
              return <Tier key={i} tier={tier} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}