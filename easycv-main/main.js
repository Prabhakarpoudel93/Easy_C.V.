let allDivs = document.querySelectorAll(".div-common");
let count = 0; //counter value
function removeOpenClass(allDivs) {
  allDivs.forEach((item) => item.classList.remove("open")); //function for removing open class from all div to add it in specific div
}
function divToOpen(count) {
  if (count == 0) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else if (count == 1) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else if (count == 2) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else if (count == 3) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else if (count == 4) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else if (count == 5) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else if (count == 6) {
    document.querySelector(`.div-${count}`).classList.add("open");
  } else {
    count = 0;
  }
}

document.querySelector(`.div-0`).classList.add("open"); // making first div open by adding open class in it
//If next button is clicked then
document.querySelector(".next-btn").addEventListener("click", function () {
  removeOpenClass(allDivs);
  count++;
  if (count > 6) {
    count = 0;
  }
  divToOpen(count); //changing the count value to 1
});
document.querySelector(".previous-btn").addEventListener("click", function () {
  removeOpenClass(allDivs);
  count--;
  if (count < 0) {
    count = 0;
  }
  divToOpen(count);
});

// Create Work Experience form

let workExperienceDivIndex = 1;

const addWorkExperience = () => {
  workExperienceDivIndex = workExperienceDivIndex + 1;
  console.log("hello World");
  console.log(workExperienceDivIndex);

  let addExpOb = `<form class="form ">
  <div class="sub-container">
      <div class="sub-div">
          <label for="position_title${workExperienceDivIndex}">Position Title:</label>
          <input type="text" id="position_title_${workExperienceDivIndex}" name="position_title" class="titleInput common" required>
      </div>

      <div class="sub-div">
          <label for="company_name${workExperienceDivIndex}">Company Name:</label>
          <input type="text" id="company_name_${workExperienceDivIndex}" name="company_name" class="common" required>
      </div>
  </div>

  <div class="sub-container ">
      <div class="sub-div">
          <label for="start_date${workExperienceDivIndex}">Start Date:</label>
          <input type="date" id="start_date_${workExperienceDivIndex}" name="start_date" class="form-common" required>
      </div>

      <div class="sub-div">
          <label for="end_date${workExperienceDivIndex}">End Date:</label>
          <input type="date" id="end_date_${workExperienceDivIndex}" name="end_date" class="form-common" required>
      </div>

  </div>

  <div class="sub-div address">
      <label class="summary">Work Summary</label>
      <textarea name="work" id="work_${workExperienceDivIndex}"class="textarea"></textarea>                        
  </div> 
</form>`;

  let addDiv = document.createElement("div");
  addDiv.classList.add("common-class");

  addDiv.innerHTML = addExpOb;

  console.log(addDiv);

  let addOb = document.getElementById("addWorkButton");
  let divOb = document.getElementById("professionalExperienceContainer");

  divOb.appendChild(addDiv);
  divOb.insertBefore(addDiv, addOb);
  console.log(divOb);
};

//  Add Education Page
let educationDivIndex = 1;
const addEduction = function () {
  educationDivIndex = educationDivIndex + 1;
  let addEducationOb = `<form class="form ">
  <div class="sub-container">
      <div class="sub-div">
          <label for="school_name${educationDivIndex}">Institution Name:</label>
          <input type="text" id="school_name${educationDivIndex}" name="school_name" class="common" required>
      </div>

      <div class="sub-div">
          <label for="school_location${educationDivIndex}">Institution Location:</label>
          <input type="text" id="school_location${educationDivIndex}" name="school_location" class="common" required>
      </div>

  </div>



  <div class="sub-container ">

      <div class="sub-div">
          <label for="start_date${educationDivIndex}">Start Date:</label>
          <input type="date" id="start_date${educationDivIndex}" name="start_date" class="form-common" required>
      </div>

      <div class="sub-div">
          <label for="end_date${educationDivIndex}">End Date:</label>
          <input type="date" id="end_date${educationDivIndex}" name="end_date" class="form-common" required>

      </div>

  </div>

  <div class="sub-container">
      <div class="sub-div">
          <label for="degree${educationDivIndex}">Degree:</label>
          <input type="text" id="degree${educationDivIndex}" name="degree" class="common" required>
      </div>

      <div class="sub-div">
          <label for="field_study${educationDivIndex}">Field of Study:</label>
          <input type="text" id="field_study${educationDivIndex}" name="field_study" class="common" required>
      </div>

  </div>

  <div class="sub-div address">
      <label class="summary">Description</label>
      <textarea name="work" id="work${educationDivIndex}" class="textarea"></textarea>
  </div>
</form>`;

  let addEducationDiv = document.createElement("div");
  addEducationDiv.classList.add("common-class");

  addEducationDiv.innerHTML = addEducationOb;
  console.log(addEducationDiv);

  let eButtonOb = document.getElementById("eduButton");

  let divEducationOb = document.getElementById("education");

  divEducationOb.appendChild(addEducationDiv);

  divEducationOb.insertBefore(addEducationDiv, eButtonOb);
};

//Add References

let referencesDivIndex = 1;

const addReferences = function () {
  referencesDivIndex = referencesDivIndex + 1;

  let addReferencesOb = `
  <form>
  <div class="sub-container">
  <div class="sub-div">
      <label for="fname${referencesDivIndex}">First Name:</label>
      <input type="text" id="fname${referencesDivIndex}" name="fname" class="common">
  </div>

  <div class="sub-div">
      <label for="lname${referencesDivIndex}">Last Name:</label>
      <input type="text" id="lname${referencesDivIndex}" name="lname1" class="common">
  </div>
</div>

<div class="sub-container ">
  <div class="sub-div">
      <label for="phone${referencesDivIndex}">Phone:</label>
      <input type="text" id="phone${referencesDivIndex}" name="phone1" class="form-common">
  </div>

  <div class="sub-div">
      <label for="eaddress${referencesDivIndex}">Email Address:</label>
      <input type="text" id="eaddress${referencesDivIndex}" name="eaddress1" class="form-common">
  </div>

</div>

<div class="sub-container">
  <div class="sub-div">
      <label for="ptitle${referencesDivIndex}">Position Title:</label>
      <input type="text" id="ptitle${referencesDivIndex}" name="ptitle1" class="titleInput common" required>
  </div>

  <div class="sub-div">
      <label for="cname${referencesDivIndex}">Company Name:</label>
      <input type="text" id="cname${referencesDivIndex}" name="cname1" class="common" required>
  </div>
</div>



<div class="sub-div address">
  <label class="summary">Work Relation</label>
  <textarea name="work" id="work${referencesDivIndex}" class="textarea"></textarea>
</div>
</form>
`;
  let referencesDiv = document.createElement("div");
  referencesDiv.classList.add("common-class");

  referencesDiv.innerHTML = addReferencesOb;

  let referencesbtnOb = document.getElementById("references-btn");
  let referencesOb = document.getElementById("References");

  referencesOb.appendChild(referencesDiv);

  referencesOb.insertBefore(referencesDiv, referencesbtnOb);
};

// Add others Achievement

let othersDivIndex = 1;

const addOthers = function () {
  othersDivIndex = othersDivIndex + 1;

  let addOthersOb = `<form>
                          <div class="otherTitle">
                            <input type="text" id="othersTitle${othersDivIndex}" name="achievement" placeholder="Title">
                        </div>
                        <div class="address">
                            <label class="summary">Description</label>
                            <textarea name="work" id="othersDescription${othersDivIndex}" class="textarea"></textarea>
                        </div>
                        </form>`;

  console.log(othersDivIndex);
  let addOthersDiv = document.createElement("div");
  addOthersDiv.classList.add("others");

  addOthersDiv.innerHTML = addOthersOb;
  console.log(addOthersDiv);

  let othersbtn = document.getElementById("others-btn");
  let others = document.getElementById("others");

  others.appendChild(addOthersDiv);
  others.appendChild(othersbtn);

  others.insertBefore(addOthersDiv, othersbtn);
};

//Language
let languageDivIndex = 1;

const addLanguage = function () {
  languageDivIndex = languageDivIndex + 1;

  let addLanguageOb = `<form>
                          <div class="otherTitle">
                            <input type="text" id="languageTitle${languageDivIndex}" name="achievement" placeholder="Put the language you know here">
                        </div>                        
                        </form>`;

  console.log(languageDivIndex);
  let addLanguageDiv = document.createElement("div");
  addLanguageDiv.classList.add("others");

  addLanguageDiv.innerHTML = addLanguageOb;
  console.log(addLanguageDiv);

  let languagebtn = document.getElementById("language-btn");
  let language = document.getElementById("language");

  language.appendChild(addLanguageDiv);
  language.appendChild(languagebtn);

  others.insertBefore(addLanguageDiv, languagebtn);
};

//  Add Skill section

let skillDivIndex = 1;

const addSkill = function () {
  skillDivIndex = skillDivIndex + 1;

  let addSkillOb = `
  <form>
<label for="skillName1" class="helper-1">Skill:</label>
<input type="text" id="skillName${skillDivIndex}" name="skillName" class="common" required>
<input type="range" min="1" max="5" value="2.5" class="slider" id="myRange${skillDivIndex}">(1-5)
</form>
`;
  console.log(skillDivIndex);

  let addSkillDiv = document.createElement("div");
  addSkillDiv.classList.add("skill-div");

  addSkillDiv.innerHTML = addSkillOb;
  console.log(addSkillDiv);

  let skillbtn = document.getElementById("skill-btn");

  let skill = document.getElementById("skill");

  skill.appendChild(addSkillDiv);
  skill.appendChild(skillbtn);

  skill.insertBefore(addSkillDiv, skillbtn);
};

// Generate CV

const generateCV = function () {
  // Initializing the divs where our output will be generated
  let workExperienceTemplate = document.getElementById(
    "workExperienceTemplate"
  );
  let educationTemplateOb = document.getElementById("educationTemplate");
  let skillTemplate = document.getElementById("skillTemplate");
  let otherTemplate = document.getElementById("otherTemplate");
  let languageTemplate = document.getElementById("languageTemplate");
  let referencesTemplate = document.getElementById("referencesTemplate");

  // clearing the all initialized div where our output will be generated before any new loop executes
  workExperienceTemplate.innerHTML = " ";
  educationTemplateOb.innerHTML = " ";
  skillTemplate.innerHTML = "";
  languageTemplate.innerHTML = " ";
  referencesTemplate.innerHTML = " ";
  otherTemplate.innerHTML = " ";
  // rangeDiv = " ";

  // let templateCV = document.getElementById("containerId")
  // templateCV.innerHTML= " ";
  let firstNameOb = document.getElementById("first_name").value;
  let lastNameOb = document.getElementById("last_name").value;
  let phoneOb = document.getElementById("phone").value;
  let emailAddressOb = document.getElementById("email_address").value;
  let addressOb = document.getElementById("address").value;
  let cityOb = document.getElementById("city").value;
  let postCodeOb = document.getElementById("post_code").value;
  let stateOb = document.getElementById("state").value;
  let countryOb = document.getElementById("country").value;
  let professionOb = document.getElementById("professionInput").value;
  let aboutOb = document.getElementById("aboutInput").value;

  document.getElementById("fnameO").innerHTML = firstNameOb;
  document.getElementById("lnameO").innerHTML = lastNameOb;
  document.getElementById("cnumberO").innerHTML = phoneOb;
  document.getElementById("emailO").innerHTML = emailAddressOb;
  document.getElementById("addressO").innerHTML = addressOb;
  document.getElementById("cityO").innerHTML = cityOb;
  document.getElementById("postalcodeO").innerHTML = postCodeOb;
  document.getElementById("stateO").innerHTML = stateOb;
  document.getElementById("countryO").innerHTML = countryOb;
  document.getElementById("professionOutput").innerHTML = professionOb;
  document.getElementById("aboutOutput").innerHTML = aboutOb;

  // Work Experience Div

  for (let i = 1; i <= workExperienceDivIndex; i++) {
    console.log(i);
    let position_title = document.getElementById(`position_title_${i}`).value;
    let company_name = document.getElementById(`company_name_${i}`).value;
    let start_date = document.getElementById(`start_date_${i}`).value;
    let end_date = document.getElementById(`end_date_${i}`).value;
    let work = document.getElementById(`work_${i}`).value;
    console.log("position_title" + position_title);
    if (!(position_title.trim() === "" || company_name.trim() === "")) {
      let workExperienceDivOb = `
        <div class="div-experience-item">
        <div>
          <span>&#9679;</span>
        </div>   
        <div class="scommon">
          <p class="text-high-highlight" id="">Job Title: ${position_title}</p>
          <p class="text-less-highlight">Start Date: ${start_date}</p>
          <p class="text-less-highlight">End Date: ${end_date}</p>
          <p class="text-less-highlight">Company: ${company_name}</p>
          <p class="text-less-highlight">Work Description: ${work}</p>
        </div>
        </div>
    `;

      console.log(workExperienceDivOb);

      workExperienceTemplate.innerHTML =
        workExperienceTemplate.innerHTML + workExperienceDivOb;
    }
  }

  //Education Details Output

  for (i = 1; i <= educationDivIndex; i++) {
    console.log(i);
    let schoolName = document.getElementById(`school_name${i}`).value;
    let schoolLocation = document.getElementById(`school_location${i}`).value;
    let startDate = document.getElementById(`start_date${i}`).value;
    let endDate = document.getElementById(`end_date${i}`).value;
    let degree = document.getElementById(`degree${i}`).value;
    let fieldOfStudy = document.getElementById(`field_study${i}`).value;
    let work = document.getElementById(`work${i}`).value;
    if (!(schoolName.trim() === "")) {
      let educationDivOb = `
    
    <div class="div-education-item">
            <div>
              <span>&#9679;</span>
            </div>
            <div>
              <p class="text-high-highlight">Institution Name: ${schoolName}</p>
              <p class="text-less-highlight">Location: ${schoolLocation}</p>
              <p class="text-less-highlight">Start Date: ${startDate}</p>
              <p class="text-less-highlight">End Date: ${endDate}</p>
              <p class="text-less-highlight">Degree: ${degree}</p>
              <p class="text-less-highlight">Field of Study: ${fieldOfStudy}</p>
              <p class="text-less-highlight">Description: ${work}</p>
            </div>
    </div>
    `;

      educationTemplateOb.innerHTML =
        educationTemplateOb.innerHTML + educationDivOb;
    }
  }

  //  Skill Report Output

  for (n = 1; n <= skillDivIndex; n++) {
    let range = document.getElementById(`myRange${n}`).value;
    let rangeDiv = " ";

    for (i = 1; i <= range; i++) {
      rangeDiv += `<i class="fa-regular fa-star"></i>`;
      console.log(i);
    }

    let skillName = document.getElementById(`skillName${n}`).value;
    if (!(skillName.trim() === "")) {
      let skillDivOb = ` 
<div class="scommon scommonForMargin">
  <p>${skillName} </p>
     
</div>
`;

      skillTemplate.innerHTML = skillTemplate.innerHTML + skillDivOb;

      skillTemplate.innerHTML = skillTemplate.innerHTML + rangeDiv;
      console.log(document.getElementById("myRange1").value);

      console.log(n);
    }
  }

  //Others Output

  for (i = 1; i <= othersDivIndex; i++) {
    console.log(i);
    let othersTitle = document.getElementById(`othersTitle${i}`).value;
    let othersDescription = document.getElementById(
      `othersDescription${i}`
    ).value;
    if (!(othersTitle.trim() === "" || othersDescription.trim() === "")) {
      let othersDivOb = ` 
      <div class="scommonForMargin">
    <p>${othersTitle}</p>
    <p>${othersDescription}</p>
    </div>
    `;

      otherTemplate.innerHTML = otherTemplate.innerHTML + othersDivOb;
    }
  }

  //Language Output

  for (i = 1; i <= languageDivIndex; i++) {
    console.log(i);
    let languageTitle = document.getElementById(`languageTitle${i}`).value;
    if (!(languageTitle.trim() === "")) {
      let languageDivOb = ` 
      <div class="scommonForMargin">
    <p>${languageTitle}</p>
       </div>
    `;

      languageTemplate.innerHTML = languageTemplate.innerHTML + languageDivOb;
    }
  }

  // References Output

  for (i = 1; i <= referencesDivIndex; i++) {
    console.log(i);
    let fname = document.getElementById(`fname${i}`).value;
    let lname = document.getElementById(`lname${i}`).value;
    let phone = document.getElementById(`phone${i}`).value;
    let eaddress = document.getElementById(`eaddress${i}`).value;
    let ptitle = document.getElementById(`ptitle${i}`).value;
    let cname = document.getElementById(`cname${i}`).value;
    let work = document.getElementById(`work${i}`).value;
    if (!(fname.trim() === "" || lname.trim() === "")) {
      let referencesDivOb = ` 
          <div class="div-references-item">
            <p class="text-high-highlight">Name: ${fname}  ${lname}</p>
            <p class="text-less-highlight">Position Title: ${ptitle}</p>
            <p class="text-less-highlight">Phone: ${phone}</p>
            <p class="text-less-highlight">E-mail Address: ${eaddress}</p>
            <p class="text-less-highlight">Company Name: ${cname}</p>
            <p class="text-less-highlight">Work Relation: ${work}</p>
          </div>`;
      referencesTemplate.innerHTML =
        referencesTemplate.innerHTML + referencesDivOb;
    }
  }
  document.getElementById("mainId").style.display = "none";
  document.getElementById("containerId").style.display = "grid";
  document.getElementById("printBackButtonId").style.display = "block";
};

// Upload Image

document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const fileInput = event.target;
    const imagePreview = document.getElementById("imagePreview");

    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Display the selected image
        const img = document.getElementById("imageOutput");
        img.src = e.target.result;

        img.innerHTML = "";
      };

      reader.readAsDataURL(fileInput.files[0]);
    } else {
      imagePreview.innerHTML = "No image selected";
    }
  });
