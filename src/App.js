import "./styles.css";
import { ProductList } from "./ProductList";
import { Practice } from "./Practice";
const employees = [
  { id: "E1", name: "Arpit Jain", workExperience: 6 },
  { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
  { id: "E3", name: "Priya Shetty", workExperience: 9 },
  { id: "E4", name: "Aman Sen", workExperience: 1 }
];

export default function App() {
  return (
    <div className="App">
      <Practice />
      <ProductList
        productDetails={employees}
        headerEmployee={"Employee List"}
      />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
