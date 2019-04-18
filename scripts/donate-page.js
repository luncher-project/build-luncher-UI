class ContentBoxContainer {
  constructor (arr) {
    this.cont = document.querySelector(".content-boxes");
    this.template = this.cont.querySelector(".template");
    this.allBoxes = arr.map(this.populate.bind(this));
    this.selector = document.querySelector("#sort-selector");
    this.selector.addEventListener("change", this.sortChange.bind(this));
  }

  populate(data, i) {
    let el = this.template.cloneNode(true);
    el.querySelector(".school-name").textContent = data.schoolName;
    el.querySelector(".address").textContent = `${data.state} ${data.zip}`;
    el.querySelector(".amount").textContent = `$${data.fundsNeeded}.00`;
    el.dataset.name = data.schoolName;
    el.dataset.fundsNeeded = data.fundsNeeded;
    el.style.order = i;
    el.classList.remove("template");
    this.cont.appendChild(el);
    return el;
    
  }

  sortChange() {
    let choice = this.selector.value;
    switch(choice) {
      case "1":
        return this.sortAlpha();
      case "2":
        return this.sortAlpha(true);
      case "3":
        return this.sortDonation();
      case "4":
        return this.sortDonation(true);
    }
  }

  sortAlpha(rev) {
    this.allBoxes = this.allBoxes.sort(compare);
    function compare(a, b) {
      let val;
      rev ? val = -1 : val = 1; 
      let nameA = a.dataset.name;
      let nameB = b.dataset.name;
      if (nameA < nameB) {
        return -(val);
      }
      if (nameA >= nameB) {
        return val;
      }
    }
    this.allBoxes.forEach(function(el, i) {el.style.order = i});
  };

  sortDonation(rev) {
    this.allBoxes = this.allBoxes.sort(compare);
    function compare(a, b) {
      let val;
      rev ? val = 1 : val = -1; 
      let nameA = a.dataset.fundsNeeded;
      let nameB = b.dataset.fundsNeeded;
      return nameA - nameB;
    }
    this.allBoxes.forEach(function(el, i) {el.style.order = i});
  };
}

const schoolData = [
  {
    "id": 1,
    "schoolName": "Marion-Sterling Elementary School",
    "state": "OH",
    "zip": 44115,
    "fundsNeeded": 2500,
    "contact": "jj@gmail.com"
  },
  {
    "id": 2,
    "schoolName": "Nathan Hale Junior High",
    "state": "OK",
    "zip": 74129,
    "fundsNeeded": 3200,
    "contact": "tb@gmail.com"
  },
  {
    "id": 3,
    "schoolName": "Crow Agency School",
    "state": "MT",
    "zip": 59022,
    "fundsNeeded": 1200,
    "contact": "hj@gmail.com"
  },
  {
    "id": 4,
    "schoolName": "East St. Louis Lincoln Middle School",
    "state": "IL",
    "zip": 62201,
    "fundsNeeded": 6200,
    "contact": "pb@gmail.com"
  },
  {
    "id": 5,
    "schoolName": "3D Academy",
    "state": "TX",
    "zip": 78537,
    "fundsNeeded": 3500,
    "contact": "hr@gmail.com"
  },
  {
    "id": 6,
    "schoolName": "Tomorrows Builders Charter School",
    "state": "IL",
    "zip": 62202,
    "fundsNeeded": 8200,
    "contact": "by@gmail.com"
  },
  {
    "id": 7,
    "schoolName": "Albany High School",
    "state": "GA",
    "zip": 31701,
    "fundsNeeded": 1500,
    "contact": "gt@gmail.com"
  },
  {
    "id": 8,
    "schoolName": "Porter High School",
    "state": "TX",
    "zip": 77365,
    "fundsNeeded": 3500,
    "contact": "gj@gmail.com"
  },
  {
    "id": 9,
    "schoolName": "Paul Robeson High School",
    "state": "IL",
    "zip": 60621,
    "fundsNeeded": 2300,
    "contact": "km@gmail.com"
  },
  {
    "id": 10,
    "schoolName": "Reading Senior High School",
    "state": "PA",
    "zip": 19604,
    "fundsNeeded": 800,
    "contact": "po@gmail.com"
  },
  {
    "id": 11,
    "schoolName": "Beecher High School",
    "state": "IL",
    "zip": 60401,
    "fundsNeeded": 2800,
    "contact": "tw@gmail.com"
  },
  {
    "id": 12,
    "schoolName": "Central High School",
    "state": "MI",
    "zip": 48206,
    "fundsNeeded": 5250,
    "contact": "fn@gmail.com"
  },
  {
    "id": 13,
    "schoolName": "Frederick Douglass High",
    "state": "MD",
    "zip": 21217,
    "fundsNeeded": 8050,
    "contact": "jm@gmail.com"
  },
  {
    "id": 14,
    "schoolName": "Silver Bluff High School",
    "state": "SC",
    "zip": 29803,
    "fundsNeeded": 1700,
    "contact": "as@gmail.com"
  },
  {
    "id": 15,
    "schoolName": "Montgomery High School",
    "state": "CA",
    "zip": 80023,
    "fundsNeeded": 2000,
    "contact": "tj@gmail.com"
  },
  {
    "id": 16,
    "schoolName": "Bear Lodge High School",
    "state": "WY",
    "zip": 82729,
    "fundsNeeded": 300,
    "contact": "sh@gmail.com"
  },
  {
    "id": 17,
    "schoolName": "Moanalua High School",
    "state": "HI",
    "zip": 96819,
    "fundsNeeded": 3200,
    "contact": "tm@gmail.com"
  },
  {
    "id": 18,
    "schoolName": "Perry High School",
    "state": "AZ",
    "zip": 85297,
    "fundsNeeded": 950,
    "contact": "va@gmail.com"
  }
]

const donateBoxes = new ContentBoxContainer(schoolData);