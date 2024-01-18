fetch("./cardData.json")
  .then((response) => response.json())
  .then((cardData) => {
    // console.log(cardData);
    cardData.forEach((course) => {
      createCard(course);
    });
  })
  .catch((error) => console.error("Error fetching cardData:", error));

function createCard(course) {
  console.log(course);
  const cardContainer = document.getElementById("card-container");
  console.log(cardContainer + "this is card container");
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const courseExpired = document.createElement("div");
  courseExpired.classList.add("expired-label");
  courseExpired.innerHTML = `EXPIRED`;
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-flex-container");
  cardContent.innerHTML = `
  
                            <img class="card-img img${course.courseId - 1}"
                                src="${course.image}"

                                alt="course image" />
                                ${course.courseId === 4
      ? `  <div class="card-content1">`
      : `  <div class="card-content">`
    }
                                <div class="card-heading${course.courseId}">${course.name
    }</div>
                                <div class="course-details">
                                    <span class="type">
                                        ${course.type}
                                    </span>
                                    <div class="pipe1"></div>
                                    <div class="grade">
                                        ${course.grade}
                                    </div>
                                    <span class="extra-count">
                                        ${course.extraCount}
                                    </span>
                                </div>
                                <div class="course-lengthdetails">
                                    <div class="unit-detail">
                                        <span class="count">
                                            ${course.unitCount}
                                        </span>
                                        <span class="unit">
                                            Units
                                        </span>
                                    </div>
                                    <div class="lessons-detail">
                                        <span class="count">
                                             ${course.lessonsCount}
                                        </span>
                                        <span class="lessons">
                                            Lessons
                                        </span>
                                    </div>
                                    <div class="topics-detail">
                                        <span class="count">
                                             ${course.topicsCount}
                                        </span>
                                        <span class="topics">
                                            Topics
                                        </span>
                                    </div>
                                </div>

                                <div class="inputContainer1">
                                    <select required="true" class="customInput customInput1" id="ci1" name="state">
                                    <option class="option" value="Course Name" selected> ${course.classes[0]
    }
                                    </option>
                                        <option class="option" value="" disabled>${course.classes[1]
    }</option>
                                        <option value="Date" class="option">${course.classes[2]
    }</option>
                                        <option value="Date" class="option">${course.classes[3]
    }</option>

                                        <!-- Add more options as needed -->
                                    </select>
                                    <div class="inputUnderline"></div>
                                </div>
                                <div class="time-details">
                                    <span class="student">
                                        ${course.students}
                                    </span>
                                       ${course.date
      ? `<div class="pipe1"></div><div class="date">${course.date}</div>`
      : ""
    }
                                </div>
                            </div>
                            ${course.courseId === 4
      ? `  <div class="star1">
                                <img class="brightstar1"
                                    src="./quantum screen assets/quantum screen assets/icons/favourite.svg"
                                    alt="star icon" />
                            </div>`
      : `<div class="star">
                                <img class="brightstar"
                                    src="./quantum screen assets/quantum screen assets/icons/favourite.svg"
                                    alt="star icon" />
                            </div>`
    }
                            
                            
  `;
  const underline = document.createElement("div");
  underline.classList.add("inputUnderlinecard");
  console.log("screen.width:", screen.width);
  const btncontainer = document.createElement("div");
  btncontainer.classList.add("fourbtn-container");
  // Function to update UI based on screen width
  function updateUI() {
    btncontainer.innerHTML = `  
    <img class="showicon" alt="show icon" src="./quantum screen assets/quantum screen assets/icons/preview.svg"></img>
        ${(course.courseId === 3 || course.courseId === 2) &&
        window.innerWidth >= 1023
        ? `
                <img class="calendericon disabled" alt="calendar icon" src="./quantum screen assets/quantum screen assets/icons/manage course.svg"></img>
                <img class="gradeicon disabled" alt="grade icon" src="./quantum screen assets/quantum screen assets/icons/grade submissions.svg"></img>
            `
        : `
                <img class="calendericon" alt="calendar icon" src="./quantum screen assets/quantum screen assets/icons/manage course.svg"></img>
                <img class="gradeicon" alt="grade icon" src="./quantum screen assets/quantum screen assets/icons/grade submissions.svg"></img>
            `
      }
        <img class="reporticon" alt="report icon" src="./quantum screen assets/quantum screen assets/icons/reports.svg"></img>
    `;
  }

  // Initial update
  updateUI();

  // Event listener for window resize
  window.addEventListener("resize", updateUI);

  if (course.courseId === 4) {
    cardDiv.appendChild(courseExpired);
  }
  cardDiv.appendChild(cardContent);
  cardDiv.appendChild(underline);
  cardDiv.appendChild(btncontainer);

  cardContainer.appendChild(cardDiv);
}
