import "./dashboard.css"
export default function Dashboard() {
  return (
    // dashboard search list with Member details 
    <div class="col main dashboard">
      <nav class="navbar navbar-expand-lg border-bottom">
        <div class="container-fluid">
          <a class="navbar-brand findit" href="#">
            Find by Name or Phone Number
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mainlink" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link disabled">Gender</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Female
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Male
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Transgender
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Member Status</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Active Member
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#"></a>Not a Member
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Guest
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
{/* Details of Patients start Here */}
      <div class="details">
        <h3>
          Diana Cooper
          <small class="text-muted">diane.cooper@example.com</small>
        </h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Gender</div>
              Female
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Birthday</div>
              Feb 24th, 1997
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Phone Number</div>
              (239) 555 -0108
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">Member Status</div>
              Active Member
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold visited lined">14</div>
              <span class="visited lined">Past</span>
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">02</div>
              Upcoming
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold textcolour">VIEW ECG <br/> REPORT <br/> DOCUMENTS</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="details">
        <h3>
          Diana Cooper
          <small class="text-muted">diane.cooper@example.com</small>
        </h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Gender</div>
              Female
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Birthday</div>
              Feb 24th, 1997
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Phone Number</div>
              (239) 555 -0108
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">Member Status</div>
              Active Member
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold visited lined">14</div>
              <span class="visited lined">Past</span>
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">02</div>
              Upcoming
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold textcolour">VIEW ECG <br/> REPORT <br/> DOCUMENTS</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="details">
        <h3>
          Diana Cooper
          <small class="text-muted">diane.cooper@example.com</small>
        </h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Gender</div>
              Female
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Birthday</div>
              Feb 24th, 1997
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Phone Number</div>
              (239) 555 -0108
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">Member Status</div>
              Active Member
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold visited lined">14</div>
              <span class="visited lined">Past</span>
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">02</div>
              Upcoming
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold textcolour">VIEW ECG <br/> REPORT <br/> DOCUMENTS</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="details">
        <h3>
          Diana Cooper
          <small class="text-muted">diane.cooper@example.com</small>
        </h3>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Gender</div>
              Female
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Birthday</div>
              Feb 24th, 1997
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold lined">Phone Number</div>
              (239) 555 -0108
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold lined">Member Status</div>
              Active Member
            </div>
            <div class="ms-2 me-auto border-end">
              <div class="fw-bold visited lined">14</div>
              <span class="visited lined">Past</span>
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold">02</div>
              Upcoming
            </div>
            <div class="ms-2 me-auto list-group-item-success">
              <div class="fw-bold textcolour">VIEW ECG <br/> REPORT <br/> DOCUMENTS</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    // End Of Dashborad Here
  );
}
