import { Pic } from "./Img1.jpg";
import "./SideNavBar.css";
// side Navbar start Here
function SideNavBar() {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0 sidebar border-end"
    >
      <ul class="nav flex-column p-4">
        <li class="nav-item ">
          <img src={Pic} class="rounded mx-auto d-block" alt="..." />
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-plus-lg"></i>
          </a>
          NEW
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-person"></i>
          </a>
          PATIENT
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-folder"></i>
          </a>
          FOLDER
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-file-earmark-arrow-up"></i>
          </a>
          UPLOAD
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-file-earmark-medical"></i>
          </a>
          REPORT
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-gear"></i>
          </a>
          SETTING
        </li>
        <li class="nav-item mb-2">
          <a class="nav-link text-secondary anchortag" href="#">
            <i class="bi bi-box-arrow-right"></i>
          </a>
          LOGOUT
        </li>
      </ul>
    </div>
    // Side Navbar Ends Here
  );
}
export default SideNavBar;
