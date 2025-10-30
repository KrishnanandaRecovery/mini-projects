import { Link, Route, Routes } from 'react-router-dom';
import HeartTrails from '../Projects/HeartTrails/HeartTrails';
import Home from './Home';
import NotFound from './NotFound';
import TextEffect from '../Projects/TextEffect/TextEffect';
import MiniCalendar from '../Projects/MiniCalendar/MiniCalendar';
import ButtonEffect from '../Projects/ButtonEffect/ButtonEffect';
import Gallery from '../Projects/Gallery/Gallery';
import Theme from '../Projects/Theme/Theme';

function Main() {
  return (
    <div className="flex">
      <div className="p-2 w-50 h-screen bg-amber-100">
        <h3 className="text-1xl mb-2">Mini Projects</h3>
        <ul>
          <li className="p-2 bg-amber-400 rounded text-amber-900 mb-2">
            <Link to="/heart-trails">Heart Trails</Link>
          </li>
          <li className="p-2 bg-amber-400 rounded text-amber-900 mb-2">
            <Link to="/text-effect">Text Effect</Link>
          </li>
          <li className="p-2 bg-amber-400 rounded text-amber-900 mb-2">
            <Link to="/mini-calendar">Mini Calendar</Link>
          </li>
          <li className="p-2 bg-amber-400 rounded text-amber-900 mb-2">
            <Link to="/button-effect">Button Effect</Link>
          </li>
          <li className="p-2 bg-amber-400 rounded text-amber-900 mb-2">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="p-2 bg-amber-400 rounded text-amber-900 mb-2">
            <Link to="/theme">Theme</Link>
          </li>
        </ul>
      </div>
      <div className="flex-1 h-screen bg-gray-100">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/heart-trails" element={<HeartTrails />} />
          <Route path="/text-effect" element={<TextEffect />} />
          <Route path="/mini-calendar" element={<MiniCalendar />} />
          <Route path="/button-effect" element={<ButtonEffect />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
