import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user 'changes types or changes any input'
 * 
 * console.log(window.variables);
    {
        includeCover: true,   // if includeCover is true the algorithm should show the cover image
        background: "https:,  // images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        randomCover: null,    // preselected cover backgrounds
        avatarURL: "https:,   // randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        randomAvatar: null,   // preselected posibles images
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */

function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.

  let background = `${variables.background}`;
  if (variables.background === null) {
    background = `${variables.randomCover}`;
    if (variables.randomCover === null)
      background =
        "https://images.unsplash.com/photo-1511974035430-5de47d3b95da";
  }

  let cover = `<div class="cover"><img src="${background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // ---

  let role = `${variables.role}`;
  if (variables.role === null) role = "Web Developer";

  // ---

  let city = `${variables.city}`;
  if (variables.city === null) city = "Miami";

  let country = `${variables.country}`;
  if (variables.country === null) country = "USA";

  let place = (city + ", " + country).trimStart();

  // ---

  let name = `${variables.name}`;
  if (variables.name === null) name = "";

  let lastName = `${variables.lastName}`;
  if (variables.lastName === null) lastName = "";

  let nameCompleto = (name + " " + lastName).trimStart();
  if (variables.name == null && variables.lastName == null)
    nameCompleto = "Lucy Boilett";

  // ---

  let smPos = `${variables.socialMediaPosition}`;
  if (variables.socialMediaPosition === null) smPos = "right";

  // ---

  let twitter = `${variables.twitter}`;
  if (variables.twitter === null) twitter = "https://twitter.com/4geeksacademy";

  let github = `${variables.github}`;
  if (variables.github === null) github = "https://github.com/4geeksacademy";

  let linkedin = `${variables.linkedin}`;
  if (variables.linkedin === null)
    linkedin = "https://linkedin.com/school/4geeksacademy";

  let instagram = `${variables.instagram}`;
  if (variables.instagram === null)
    instagram = "https://instagram.com/4geeksacademy";

  // ---

  let avatar = `${variables.avatarURL}`;
  if (variables.avatarURL === null) {
    console.log("Selectect avatar");
    avatar = `${variables.randomAvatar}`;
    if (variables.randomAvatar === null) {
      console.log("Default avatar");
      avatar = "https://randomuser.me/api/portraits/women/42.jpg";
    }
  }

  // ---
  // ---

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover} 
          <img src="${avatar}" class="photo" />
          <h1> ${nameCompleto} </h1>
          <h2> ${role} </h2>
          <h3> ${place} </h3>
          <ul class=${smPos}>
          <li><a href=${twitter}><i class="fab fa-twitter"></i></a></li>
            <li><a href=${github}><i class="fab fa-github"></i></a></li>
            <li><a href=${linkedin}><i class="fab fa-linkedin"></i></a></li>
            <li><a href=${instagram}><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background: null,
    randomCover: null,
    // this is the url for the profile avatar
    avatarURL: null,
    randomAvatar: null,
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("input", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
