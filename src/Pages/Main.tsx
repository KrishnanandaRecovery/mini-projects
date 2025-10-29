import { Link, Route, Routes } from "react-router-dom";
import HeartTrails from "../Projects/HeartTrails/HeartTrails";
import Home from "./Home";
import NotFound from "./NotFound";

function Main() {
    return <div className="flex">
      <div className="p-2 w-50 h-screen bg-amber-100">
        <h3 className="text-2xl">Projects</h3>
        <ul>
            <li className="p-2 bg-amber-400 rounded text-amber-900">
              <Link to='/heart-trails'>Heart Trails</Link>
            </li>
        </ul>
      </div>
      <div className="flex-1 h-screen bg-gray-100">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/heart-trails' element={<HeartTrails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
}

export default Main;