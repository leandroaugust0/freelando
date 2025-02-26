import { Card } from "./components/card/Card";
import { Styles } from "./components/global/Styles";
import { ThemeProv } from "./components/themeProv/ThemeProv";

function App() {
  return (
    <ThemeProv>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ThemeProv>
  );
}

export default App;
