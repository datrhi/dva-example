import dva from "dva";
import "./index.css";
import createLoading from "dva-loading";
import StudentModel from "./models/StudentModel";
import AuthModel from "./models/AuthModel";

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(StudentModel);
app.model(AuthModel);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
