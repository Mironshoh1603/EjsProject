let addContainer = document.querySelector("#courses_container");
console.log("salom");

fetch("http://localhost:4000/api/v1/courses", {
  headers: {
    "Content-Type": "application/json",
  },
  method: "GET",
})
  .then((data) => data.json())
  .then((course) => {
    let data = course.data;
    let str = "";
    for (let item of data) {
      console.log(item);
      str += ` <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="classes-item">
                <div class="bg-light rounded-circle w-75 mx-auto p-3">
                  <img
                    class="img-fluid rounded-circle"
                    src="/img/${item.image}"
                    alt=""
                  />
                </div>
                <div class="bg-light rounded p-4 pt-5 mt-n5">
                  <a class="d-block text-center h3 mt-3 mb-4" href=""
                    >${item.name}</a
                  >
                  <div
                    class="d-flex align-items-center justify-content-between mb-4"
                  >
                    <div class="d-flex align-items-center">
                      <img
                        class="rounded-circle flex-shrink-0"
                        src="/img/${
                          item.teacherImg ? item.teacherImg : "user.jpg"
                        }"
                        alt=""
                        style="width: 45px; height: 45px"
                      />
                      <div class="ms-3">
                        <h6 class="text-primary mb-1">${item.teacher}</h6>
                        <small>Ustoz</small>
                      </div>
                    </div>
                    <span
                      class="bg-primary text-white rounded-pill py-2 px-3"
                      href=""
                      >$${item.price ? item.price : 0}</span
                    >
                  </div>
                  <div class="row g-1">
                    <div class="col-4">
                      <div class="border-top border-3 border-primary pt-2">
                        <h6 class="text-primary mb-1">yosh:</h6>
                        <small>3-5 yil</small>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="border-top border-3 border-success pt-2">
                        <h6 class="text-success mb-1">vaqt:</h6>
                        <small>${item.time ?? "9-10 AM"}</small>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="border-top border-3 border-warning pt-2">
                        <h6 class="text-warning mb-1">Capacity:</h6>
                        <small>30 yosh</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    }
    addContainer.innerHTML = str;
  })
  .catch(console.log);
