import React from "react";


//include images into your bundle

//create your first component
export function Navbar() {
	return (
        <>
		<nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <a classname="navbar-brand" href="#">Navbar</a>
  <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span classname="navbar-toggler-icon"></span>
  </button>

  <div classname="collapse navbar-collapse" id="navbarSupportedContent">
    <ul classname="navbar-nav mr-auto">
      <li classname="nav-item active">
        <a classname="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li classname="nav-item">
        <a classname="nav-link" href="#">Link</a>
      </li>
      <li classname="nav-item dropdown">
        <a classname="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div classname="dropdown-menu" aria-labelledby="navbarDropdown">
          <a classname="dropdown-item" href="#">Action</a>
          <a classname="dropdown-item" href="#">Another action</a>
          <div classname="dropdown-divider"></div>
          <a classname="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li classname="nav-item">
        <a classname="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form classname="form-inline my-2 my-lg-0">
      <input classname="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button classname="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</>
	);
}